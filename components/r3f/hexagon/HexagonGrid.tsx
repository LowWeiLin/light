import { useMemo, useRef } from "react";
import { defineGrid, extendHex } from "honeycomb-grid";
import SimplexNoise from "simplex-noise";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import interpolate from "color-interpolate";
import colorstring from "color-string";

const Hex = extendHex({
  orientation: "pointy",
});
const Grid = defineGrid(Hex);
const simplex = new SimplexNoise();

const hexSize = 0.9;
const hexHeight = 0.2;

const noiseRoughness = 0.05;
const noiseMagnitude = 5;
const noiseSpeed = 0.3;

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
  const grid = useMemo(() => Grid.hexagon({ radius: 64 }), []);
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
      const height = noiseMagnitude * noise;

      // Transform
      tempObject3D.position.set(point.x, height, point.y);
      tempObject3D.updateMatrixWorld();
      hexGridMeshRef.current.setMatrixAt(index, tempObject3D.matrixWorld);

      // Color
      const colorStep = stepFn((noise + 1) / 2, colorSteps);
      const [r, g, b] = colorstring.get.rgb(interpolatedColorMap(colorStep));
      tempColor
        .setRGB(r / 255.0, g / 255.0, b / 255.0)
        .toArray(colorArray, index * 3);
    });

    hexGridMeshRef.current.count = grid.length;
    hexGridMeshRef.current.instanceMatrix.needsUpdate = true;
    hexGridMeshRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={hexGridMeshRef}
      args={[undefined, undefined, grid.length]}
    >
      <cylinderBufferGeometry args={[hexSize, hexSize, hexHeight, 6]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </cylinderBufferGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
};

export default HexagonGrid;
