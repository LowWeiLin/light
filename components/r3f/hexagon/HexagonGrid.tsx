import { useMemo } from "react";
import { defineGrid, extendHex } from "honeycomb-grid";
import SimplexNoise from "simplex-noise";
import Hexagon from "./Hexagon";
import { useFrame } from "@react-three/fiber";

const Hex = extendHex({
  orientation: "pointy",
});
const Grid = defineGrid(Hex);
const simplex = new SimplexNoise();

const HexagonGrid = () => {
  const grid = useMemo(() => Grid.hexagon({ radius: 16 }), []);

  return (
    <>
      {grid.map((hex) => {
        const point = hex.toPoint();
        const height = simplex.noise2D(point.x * 0.1, point.y * 0.1);
        return (
          <Hexagon
            key={`${hex.x},${hex.y}`}
            position={[point.x, height, point.y]}
          />
        );
      })}
    </>
  );
};

export default HexagonGrid;
