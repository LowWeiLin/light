import { hookstate } from "@hookstate/core";
import { Grid, Hex } from "honeycomb-grid";
import SimplexNoise from "simplex-noise";

export interface LightState {
  simplex: SimplexNoise;
  selectedHexId?: number;
  hexGrid?: Grid<
    Hex<{
      orientation: "pointy";
    }>
  >;
}

export const globalLightState = hookstate<LightState>({
  simplex: new SimplexNoise(),
  selectedHexId: undefined,
});
