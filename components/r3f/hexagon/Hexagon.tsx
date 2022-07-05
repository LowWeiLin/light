const Hexagon = () => (
  <mesh>
    <cylinderBufferGeometry args={[1, 1, 0.2, 6]} />
    <meshNormalMaterial />
  </mesh>
);

export default Hexagon;
