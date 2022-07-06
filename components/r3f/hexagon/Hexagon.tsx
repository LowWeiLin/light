import { MeshProps } from "@react-three/fiber/dist/declarations/src/three-types";

const size = 0.9;
const height = 0.2;

const Hexagon = (props: MeshProps) => (
  <mesh {...props}>
    <cylinderBufferGeometry args={[size, size, height, 6]} />
    <meshNormalMaterial />
  </mesh>
);

export default Hexagon;
