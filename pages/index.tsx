import React from "react";

import { OrbitControls, Effects } from "@react-three/drei";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { NextPage } from "next";
import { Perf } from "r3f-perf";
import { PCFSoftShadowMap, sRGBEncoding } from "three";
import { SSAOPass, UnrealBloomPass } from "three-stdlib";

import Page from "../components/Page";
import Drones from "../components/r3f/drones/Drones";
import Lights from "../components/r3f/Lights";
import Cursor from "../components/r3f/terrain/Cursor";
import Terrain from "../components/r3f/terrain/Terrain";

extend({ SSAOPass, UnrealBloomPass });

declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      sSAOPass: any;
      unrealBloomPass: any;
      axisHelper: any;
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
  const { backgroundColor, showStats, autoRotate } = useControls("Scene", {
    backgroundColor: { value: "#1b1e3e", label: "Background Colour" },
    showStats: { value: true, label: "Show Stats" },
    autoRotate: { value: false, label: "Auto-Rotate" },
  });
  return (
    <Page title="light" description="">
      <Canvas
        camera={{ position: [128, 64, 0] }}
        style={{ height: "100vh" }}
        shadows={{ type: PCFSoftShadowMap }}
        gl={{
          antialias: true,
          toneMappingExposure: 0.5,
          outputEncoding: sRGBEncoding,
        }}
      >
        <color attach="background" args={[backgroundColor]} />
        <Lights />
        <Cursor />
        <Terrain />
        <Drones />
        <PostProcessing />
        {/* <axisHelper /> */}
        <Perf position="bottom-right" headless={!showStats} />
        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={0.6}
          enablePan={false}
        />
      </Canvas>
    </Page>
  );
};

export default Index;
