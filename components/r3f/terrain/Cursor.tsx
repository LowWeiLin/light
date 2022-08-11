import React, { useMemo } from "react";

import { useHookstate } from "@hookstate/core";
import { Color, Vector3 } from "three";

import { globalLightState } from "../state/lightState";

const height = 100;
const color = new Color(100, 100, 100);

const Cursor = () => {
  const { selectedHexId, hexGrid } = useHookstate(globalLightState);

  const position = useMemo(() => {
    if (selectedHexId.value === undefined || hexGrid === undefined) {
      return null;
    }
    const point = hexGrid
      .get({ noproxy: true })
      ?.at(selectedHexId.value)
      ?.toPoint();
    if (!point) {
      return null;
    }
    return new Vector3(point.x, height / 2, point.y);
  }, [hexGrid, selectedHexId.value]);

  if (!position) {
    return null;
  }

  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.1, 0.1, height, 8, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Cursor;
