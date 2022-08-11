import React, { useEffect, useMemo, useRef } from "react";

import { ExtrudeGeometryProps } from "@react-three/fiber";
import * as THREE from "three";

type BeveledHexagonGeometryProps = {
  size: number;
  height: number;
} & ExtrudeGeometryProps;

const BeveledHexagonGeometry = ({
  size = 1,
  height = 0.2,
  ...rest
}: BeveledHexagonGeometryProps) => {
  const ref = useRef<THREE.ExtrudeGeometry>(null);
  const hexShape = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const Xcenter = 0;
    const Ycenter = 0;
    shape.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    for (let i = 1; i < sides; i += 1) {
      shape.lineTo(
        Xcenter + size * Math.cos((i * 2 * Math.PI) / sides),
        Ycenter + size * Math.sin((i * 2 * Math.PI) / sides)
      );
    }
    shape.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    return shape;
  }, [size]);

  const settings = useMemo(
    () => ({
      steps: 2,
      depth: height - 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelOffset: -0.05,
      bevelSegments: 8,
    }),
    [height]
  );

  useEffect(() => {
    ref.current?.rotateX(THREE.MathUtils.degToRad(-90));
    ref.current?.rotateY(THREE.MathUtils.degToRad(30));
    ref.current?.translate(0, -height / 2 + 0.05, 0);
  }, [height]);

  return <extrudeGeometry ref={ref} args={[hexShape, settings]} {...rest} />;
};

export default BeveledHexagonGeometry;
