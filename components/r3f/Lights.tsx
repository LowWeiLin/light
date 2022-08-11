import React from "react";

const Lights = () => (
  <group>
    <hemisphereLight args={["white", "darkslategrey", 0.4]} />
    <directionalLight position={[0, 1, 0]} intensity={0.6} />
  </group>
);

export default Lights;
