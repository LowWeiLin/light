import React from "react";

import { OrbitControls, Effects } from "@react-three/drei";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { NextPage } from "next";
import { Perf } from "r3f-perf";
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

const Index: NextPage = () => {
  const { background, ambientIntensity, lightIntensity, stats } = useControls(
    "Scene",
    {
      background: "#1b1e3e",
      ambientIntensity: { value: 0.5, min: 0, max: 2 },
      lightIntensity: { value: 0.45, min: 0, max: 2 },
      stats: true,
    }
  );
  return (
    <Page title="light" description="">
      <Canvas camera={{ position: [128, 64, 0] }} style={{ height: "100vh" }}>
        <color attach="background" args={[background]} />
        <ambientLight intensity={ambientIntensity} />
        <pointLight position={[150, 150, 150]} intensity={lightIntensity} />

        <HexagonGrid />

        <OrbitControls />
        {stats && <Perf position="top-left" />}

        <PostProcessing />
      </Canvas>
    </Page>
  );
};

export default Index;
