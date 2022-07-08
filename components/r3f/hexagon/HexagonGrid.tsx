import { useMemo, useRef } from "react";

import { ThreeEvent, useFrame } from "@react-three/fiber";
import interpolate from "color-interpolate";
import colorstring from "color-string";
import { defineGrid, extendHex } from "honeycomb-grid";
import SimplexNoise from "simplex-noise";
import * as THREE from "three";

const Grid = defineGrid(
  extendHex({
    orientation: "pointy",
  })
);
const simplex = new SimplexNoise();

const hexSize = 0.95;
const hexHeight = 0.2;

const noiseRoughness = 0.025;
const noiseMagnitude = 20;
const noiseSpeed = 0.05;

const colorMap = ["#0000FF", "#00FF00", "#FF0000"];
const colorSteps = 10;
const interpolatedColorMap = interpolate(colorMap);

const stepFn = (num: number, steps: number) =>
  Math.floor(num * steps) / (steps - 1);

// re-use for instance computations
const tempObject3D = new THREE.Object3D();
const tempColor = new THREE.Color();

const HexagonGrid = () => {
  const hexGridMeshRef = useRef<THREE.InstancedMesh>(null);
  const selectedHex = useRef<number>();
  const ringHexes = useRef<Set<string>>(new Set());
  const grid = useMemo(() => Grid.spiral({ radius: 64 }), []);
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(grid.length)
          .fill(0)
          .flatMap(() =>
            tempColor
              .set(colorMap[Math.floor(Math.random() * colorMap.length)])
              .toArray()
          )
      ),
    [grid.length]
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    grid.forEach((hex, index) => {
      const point = hex.toPoint();
      const noise = simplex.noise3D(
        point.x * noiseRoughness,
        point.y * noiseRoughness,
        elapsedTime * noiseSpeed
      );
      const normNoise = (noise + 1) / 2;
      let height = noiseMagnitude * normNoise;
      if (index === 0 || index === selectedHex.current) {
        height = noiseMagnitude * 2;
      }

      // Transform
      tempObject3D.position.set(point.x, height / 2, point.y);
      tempObject3D.scale.y = (1 / hexHeight) * height;
      tempObject3D.updateMatrixWorld();
      hexGridMeshRef.current.setMatrixAt(index, tempObject3D.matrixWorld);

      // Color
      const colorStep = stepFn(normNoise, colorSteps);
      let [r, g, b] = colorstring.get.rgb(interpolatedColorMap(colorStep));
      if (
        index === 0 ||
        index === selectedHex.current ||
        ringHexes.current.has(hex.toString())
      ) {
        [r, g, b] = [2550, 2550, 2550];
      }

      tempColor
        .setRGB(r / 255.0, g / 255.0, b / 255.0)
        .toArray(colorArray, index * 3);
    });

    hexGridMeshRef.current.count = grid.length;
    hexGridMeshRef.current.instanceMatrix.needsUpdate = true;
    hexGridMeshRef.current.geometry.attributes.color.needsUpdate = true;
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (selectedHex.current === event.instanceId) {
      selectedHex.current = undefined;
      ringHexes.current = new Set();
    } else {
      const hex = grid[event.instanceId];
      selectedHex.current = event.instanceId;
      ringHexes.current = new Set(
        Grid.ring({ radius: 7, center: hex.coordinates() }).map((x) =>
          x.toString()
        )
      );
    }
  };

  return (
    <instancedMesh
      ref={hexGridMeshRef}
      args={[undefined, undefined, grid.length]}
      onClick={handleClick}
    >
      <cylinderBufferGeometry args={[hexSize, hexSize, hexHeight, 6]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </cylinderBufferGeometry>
      <meshPhongMaterial toneMapped={false} vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
};

export default HexagonGrid;
