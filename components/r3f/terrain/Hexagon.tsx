import { MeshProps } from "@react-three/fiber/dist/declarations/src/three-types";

import BeveledHexagonGeometry from "./BeveledHexagonGeometry";

const size = 1;
const height = 1;

const Hexagon = (props: MeshProps) => (
  <mesh {...props}>
    <BeveledHexagonGeometry size={size} height={height} />
    <meshNormalMaterial />
  </mesh>
);

export default Hexagon;
