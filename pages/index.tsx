import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import Page from "../components/Page";
import Hexagon from "../components/r3f/hexagon/Hexagon";

const Index: NextPage = () => {
  return (
    <Page title="light" description="">
      <Canvas
        camera={{ position: [10, 10, 10] }}
        style={{ height: "100vh", backgroundColor: "black" }}
      >
        <ambientLight intensity={1} />
        <pointLight intensity={1} position={[0, 6, 0]} />

        <OrbitControls />
        <axesHelper />
        <Stats />

        <Hexagon />
      </Canvas>
    </Page>
  );
};

export default Index;
