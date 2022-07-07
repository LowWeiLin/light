import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import Page from "../components/Page";
import Hexagon from "../components/r3f/hexagon/Hexagon";
import HexagonGrid from "../components/r3f/hexagon/HexagonGrid";

const Index: NextPage = () => {
  return (
    <Page title="light" description="">
      <Canvas camera={{ position: [128, 64, 0] }} style={{ height: "100vh" }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />

        <OrbitControls />
        <axesHelper />
        <Stats />

        <HexagonGrid />
      </Canvas>
    </Page>
  );
};

export default Index;
