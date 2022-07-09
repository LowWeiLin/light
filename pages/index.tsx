import { OrbitControls, Stats, Effects } from "@react-three/drei";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { NextPage } from "next";
import { SSAOPass, UnrealBloomPass } from "three-stdlib";

import Page from "../components/Page";
import HexagonGrid from "../components/r3f/hexagon/HexagonGrid";

extend({ SSAOPass, UnrealBloomPass });

declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      sSAOPass: any;
      unrealBloomPass: any;
    }
  }
}

const PostProcessing = () => {
  const { scene, camera } = useThree();
  return (
    <Effects disableGamma>
      <sSAOPass args={[scene, camera]} kernelRadius={0.5} maxDistance={0.1} />
      <unrealBloomPass threshold={0.9} strength={1.5} radius={0.5} />
    </Effects>
  );
};

const Index: NextPage = () => (
  <Page title="light" description="">
    <Canvas camera={{ position: [128, 64, 0] }} style={{ height: "100vh" }}>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[150, 150, 150]} intensity={0.55} />

      <HexagonGrid />

      <OrbitControls />
      <Stats />

      <PostProcessing />
    </Canvas>
  </Page>
);

export default Index;
