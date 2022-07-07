import { useMemo, useRef } from "react";
import { defineGrid, extendHex } from "honeycomb-grid";
import SimplexNoise from "simplex-noise";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Hex = extendHex({
  orientation: "pointy",
});
const Grid = defineGrid(Hex);
const simplex = new SimplexNoise();

const hexSize = 0.9;
const hexHeight = 0.2;

const noiseRoughness = 0.05;
const noiseMagnitude = 3;

// re-use for instance computations
const tempObject3D = new THREE.Object3D();

const HexagonGrid = () => {
  const hexGridMeshRef = useRef<THREE.InstancedMesh>(null);
  const grid = useMemo(() => Grid.hexagon({ radius: 64 }), []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    grid.forEach((hex, index) => {
      const point = hex.toPoint();
      const noise = simplex.noise3D(
        point.x * noiseRoughness,
        point.y * noiseRoughness,
        elapsedTime
      );
      const height = noiseMagnitude * noise;
      // Transform
      tempObject3D.position.set(point.x, height, point.y);
      tempObject3D.updateMatrixWorld();
      hexGridMeshRef.current.setMatrixAt(index, tempObject3D.matrixWorld);
    });

    hexGridMeshRef.current.count = grid.length;
    hexGridMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={hexGridMeshRef}
      args={[undefined, undefined, grid.length]}
      frustumCulled={false}
    >
      <cylinderBufferGeometry args={[hexSize, hexSize, hexHeight, 6]} />
      <meshNormalMaterial />
    </instancedMesh>
  );
};

export default HexagonGrid;
