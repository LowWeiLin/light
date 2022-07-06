import { useMemo } from "react";
import { defineGrid, extendHex } from "honeycomb-grid";
import Hexagon from "./Hexagon";

const Hex = extendHex({
  orientation: "pointy",
});
const Grid = defineGrid(Hex);

const HexagonGrid = () => {
  const grid = useMemo(() => Grid.hexagon({ radius: 16 }), []);

  return (
    <>
      {grid.map((hex) => (
        <Hexagon
          key={`${hex.x},${hex.y}`}
          position={[hex.toPoint().x, 0, hex.toPoint().y]}
        />
      ))}
    </>
  );
};

export default HexagonGrid;
