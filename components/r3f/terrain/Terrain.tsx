import React, { useCallback, useEffect, useMemo, useRef } from "react";

import { useHookstate } from "@hookstate/core";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { defineGrid, extendHex } from "honeycomb-grid";
import { useControls } from "leva";
import * as THREE from "three";

import BeveledHexagonGeometry from "../geometries/BeveledHexagonGeometry";
import { globalLightState } from "../state/lightState";
import { terrains } from "../utils/const";
import { useClickNoDrag } from "../utils/utils";

const Grid = defineGrid(
  extendHex({
    orientation: "pointy",
  })
);

// re-use for instance computations
const tempObject3D = new THREE.Object3D();
const tempColor = new THREE.Color();

const hexGeometrySize = 1;
const hexGeometryHeight = 10;

const Terrain = () => {
  const { selectedHexId, simplex, hexGrid } = useHookstate(globalLightState);
  const { terrainSize, terrainRoughness, terrainHeight, terrainChangeSpeed } =
    useControls("Terrain", {
      terrainSize: { value: 64, min: 6, max: 128, step: 1, label: "Size" },
      terrainRoughness: { value: 0.025, min: 0, max: 0.1, label: "Roughness" },
      terrainHeight: { value: 30, min: 0.1, max: 100, label: "Height" },
      terrainChangeSpeed: {
        value: 0,
        min: 0,
        max: 0.1,
        label: "Change Speed",
      },
    });

  const hexGridMeshRef = useRef<THREE.InstancedMesh>(null);
  useEffect(() => {
    hexGrid.set(Grid.spiral({ radius: terrainSize }));
  }, [hexGrid, terrainSize]);
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(hexGrid.value?.length || 0)
          .fill(0)
          .flatMap(() => tempColor.set("#ffffff").toArray())
      ),
    [hexGrid]
  );

  const getTileHeight = useCallback(
    (tileValue: number, _: number) => {
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

  const getTileColor = useCallback(
    (tileValue: number, index: number) => {
      if (index === selectedHexId.value) {
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
    },
    [selectedHexId]
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (hexGridMeshRef.current === null || !hexGrid.value) {
      return;
    }
    hexGrid.get({ noproxy: true })?.forEach((hex, index) => {
      const point = hex.toPoint();
      const noise = simplex.value.noise3D(
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

    hexGridMeshRef.current.count = hexGrid.value?.length || 0;
    hexGridMeshRef.current.instanceMatrix.needsUpdate = true;
    hexGridMeshRef.current.geometry.attributes.color.needsUpdate = true;
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    if (event.instanceId === undefined) {
      return;
    }
    event.stopPropagation();
    if (selectedHexId.value === event.instanceId) {
      selectedHexId.set(undefined);
    } else {
      selectedHexId.set(event.instanceId);
    }
  };

  const { handlePointerDownWrapped, handleClickNoDrag } =
    useClickNoDrag(handleClick);

  return (
    <instancedMesh
      ref={hexGridMeshRef}
      args={[undefined, undefined, hexGrid.value?.length || 0]}
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
