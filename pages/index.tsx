import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import Page from "../components/Page";
import Hexagon from "../components/r3f/hexagon/Hexagon";
import HexagonGrid from "../components/r3f/hexagon/HexagonGrid";

const Index: NextPage = () => {
  return (
    <Page title="light" description="">
      <Canvas
        camera={{ position: [128, 64, 0] }}
        style={{ height: "100vh", backgroundColor: "black" }}
      >
        <ambientLight intensity={1} />
        <pointLight intensity={1} position={[0, 6, 0]} />

        <OrbitControls />
        <axesHelper />
        <Stats />

        <HexagonGrid />
      </Canvas>
    </Page>
  );
};

export default Index;
