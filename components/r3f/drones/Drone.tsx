import { MeshProps } from "@react-three/fiber/dist/declarations/src/three-types";

import BeveledHexagonGeometry from "../geometries/BeveledHexagonGeometry";

const size = 0.5;
const height = 0.1;

const Drone = (props: MeshProps) => (
  <mesh {...props}>
    <BeveledHexagonGeometry size={size} height={height} />
    <meshNormalMaterial />
  </mesh>
);

export default Drone;
