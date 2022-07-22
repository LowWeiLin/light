import React from "react";

const Lights = () => (
  <group>
    <hemisphereLight args={["white", "darkslategrey", 0.4]} />
    <directionalLight castShadow position={[50, 30, 50]} intensity={1} />
    <directionalLight position={[0, 1, 0]} intensity={0.3} />
  </group>
);

export default Lights;
