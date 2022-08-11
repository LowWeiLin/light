import React, { useMemo, useRef } from "react";

import { useHookstate } from "@hookstate/core";
import { useFrame } from "@react-three/fiber";
import _ from "lodash";
import * as THREE from "three";

import { Boid } from "../../../boids/boids";
import BeveledHexagonGeometry from "../geometries/BeveledHexagonGeometry";
import { globalLightState } from "../state/lightState";

const height = 30;

const drones: Boid[] = _.times(
  10,
  () =>
    new Boid(
      new THREE.Vector2()
        .random()
        .subScalar(0.5)
        .multiplyScalar(2 * 50)
    )
);

// re-use for instance computations
const tempObject3D = new THREE.Object3D();
const tempColor = new THREE.Color();

const Drones = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(drones.length)
          .fill(0)
          .flatMap(() => tempColor.set("#b19cd9").toArray())
      ),
    []
  );
  const { selectedHexId, hexGrid } = useHookstate(globalLightState);
  const target = useMemo(() => {
    if (selectedHexId.value === undefined || hexGrid === undefined) {
      return undefined;
    }
    const point = hexGrid
      .get({ noproxy: true })
      ?.at(selectedHexId.value)
      ?.toPoint();
    if (!point) {
      return undefined;
    }
    return new THREE.Vector2(point.x, point.y);
  }, [hexGrid, selectedHexId.value]);

  useFrame(({ clock }) => {
    if (!meshRef.current) {
      return;
    }
    const delta = clock.getDelta();

    for (let i = 0; i < drones.length; i += 1) {
      drones[i].run(delta, drones, target);
      // Transform
      tempObject3D.position.set(
        drones[i].position.x,
        height,
        drones[i].position.y
      );
      tempObject3D.updateMatrixWorld();
      meshRef.current?.setMatrixAt(i, tempObject3D.matrixWorld);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, drones.length]}
      castShadow
    >
      <BeveledHexagonGeometry size={0.5} height={0.1}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </BeveledHexagonGeometry>
      <meshPhongMaterial toneMapped={false} vertexColors />
    </instancedMesh>
  );
};

export default Drones;
