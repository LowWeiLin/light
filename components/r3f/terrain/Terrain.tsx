import React, { useCallback, useMemo, useRef } from "react";

import { ThreeEvent, useFrame } from "@react-three/fiber";
import { defineGrid, extendHex } from "honeycomb-grid";
import { useControls } from "leva";
import _ from "lodash";
import SimplexNoise from "simplex-noise";
import * as THREE from "three";

import { useClickNoDrag } from "../utils/utils";
import BeveledHexagonGeometry from "./BeveledHexagonGeometry";

const Grid = defineGrid(
  extendHex({
    orientation: "pointy",
  })
);
const simplex = new SimplexNoise();

const terrains = [
  {
    name: "Water",
    weight: 2,
    normWeight: 0,
    color: "#00a9ff",
  },
  {
    name: "Shore",
    weight: 0.25,
    normWeight: 0,
    color: "#ffd68f",
  },
  {
    name: "Beach",
    weight: 0.25,
    normWeight: 0,
    color: "#efb28f",
  },
  {
    name: "Shrub",
    weight: 1,
    normWeight: 0,
    color: "#9ea667",
  },
  {
    name: "Forest",
    weight: 1,
    normWeight: 0,
    color: "#586647",
  },
  {
    name: "Stone",
    weight: 0.5,
    normWeight: 0,
    color: "#656565",
  },
  {
    name: "Snow",
    weight: 0.5,
    normWeight: 0,
    color: "#9aa7ad",
  },
];
const terrainTotalWeight = _.sumBy(terrains, (x) => x.weight);
_.forEach(terrains);
terrains.forEach((x) => {
  // eslint-disable-next-line no-param-reassign
  x.normWeight = x.weight / terrainTotalWeight;
});

// re-use for instance computations
const tempObject3D = new THREE.Object3D();
const tempColor = new THREE.Color();

const hexGeometrySize = 1;
const hexGeometryHeight = 10;

const Terrain = () => {
  const { terrainSize, terrainRoughness, terrainHeight, terrainChangeSpeed } =
    useControls("Terrain", {
      terrainSize: { value: 64, min: 6, max: 128, step: 1, label: "Size" },
      terrainRoughness: { value: 0.025, min: 0, max: 0.1, label: "Roughness" },
      terrainHeight: { value: 30, min: 0.1, max: 100, label: "Height" },
      terrainChangeSpeed: {
        value: 0.01,
        min: 0,
        max: 0.1,
        label: "Change Speed",
      },
    });

  const hexGridMeshRef = useRef<THREE.InstancedMesh>(null);
  const selectedHex = useRef<number>();
  const ringHexes = useRef<Set<string>>(new Set());
  const grid = useMemo(
    () => Grid.spiral({ radius: terrainSize }),
    [terrainSize]
  );
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(grid.length)
          .fill(0)
          .flatMap(() => tempColor.set("#ffffff").toArray())
      ),
    [grid.length]
  );

  const getTileHeight = useCallback(
    (tileValue: number, index: number) => {
      if (index === 0 || index === selectedHex.current) {
        return terrainHeight * 2;
      }
      const isWater = tileValue <= terrains[0].normWeight;
      if (isWater) {
        return terrainHeight * terrains[0].normWeight;
      }
      return terrainHeight * tileValue;
    },
    [terrainHeight]
  );

  const getTerrainColor = (tileValue: number) => {
    let val = 0;
    for (let i = 0; i < terrains.length; i += 1) {
      val += terrains[i].normWeight;
      if (tileValue <= val) {
        return terrains[i].color;
      }
    }
    return terrains[terrains.length - 1].color;
  };

  const getTileColor = useCallback((tileValue: number, index: number) => {
    if (index === 0 || index === selectedHex.current) {
      tempColor.setRGB(10, 10, 10);
    } else {
      const terrainColor = getTerrainColor(tileValue);
      const isWater = tileValue <= terrains[0].normWeight;
      const waterLuminanceMultiplier = THREE.MathUtils.mapLinear(
        (1 - (terrains[0].normWeight - tileValue) * 1.3) ** 6,
        0,
        1,
        0.2,
        1.4
      );
      tempColor.set(terrainColor);
      const hsl = tempColor.getHSL({ h: 0, s: 1, l: 1 });
      tempColor.setHSL(
        hsl.h,
        hsl.s * 1.7,
        hsl.l * (isWater ? waterLuminanceMultiplier : 1)
      );
    }
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (hexGridMeshRef.current === null) {
      return;
    }
    grid.forEach((hex, index) => {
      const point = hex.toPoint();
      const noise = simplex.noise3D(
        point.x * terrainRoughness,
        point.y * terrainRoughness,
        elapsedTime * terrainChangeSpeed
      );
      const tileValue = (noise + 1) / 2;
      const height = getTileHeight(tileValue, index);

      // Transform
      tempObject3D.position.set(point.x, height / 2, point.y);
      tempObject3D.scale.y = (1 / hexGeometryHeight) * height;
      tempObject3D.updateMatrixWorld();
      hexGridMeshRef.current?.setMatrixAt(index, tempObject3D.matrixWorld);

      // Color
      getTileColor(tileValue, index);
      tempColor.toArray(colorArray, index * 3);
    });

    hexGridMeshRef.current.count = grid.length;
    hexGridMeshRef.current.instanceMatrix.needsUpdate = true;
    hexGridMeshRef.current.geometry.attributes.color.needsUpdate = true;
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    if (event.instanceId === undefined) {
      return;
    }
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

  const { handlePointerDownWrapped, handleClickNoDrag } =
    useClickNoDrag(handleClick);

  return (
    <instancedMesh
      ref={hexGridMeshRef}
      args={[undefined, undefined, grid.length]}
      onClick={handleClickNoDrag}
      onPointerDown={handlePointerDownWrapped}
      receiveShadow
    >
      <BeveledHexagonGeometry size={hexGeometrySize} height={hexGeometryHeight}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </BeveledHexagonGeometry>
      <meshPhongMaterial toneMapped={false} vertexColors />
    </instancedMesh>
  );
};

export default Terrain;
