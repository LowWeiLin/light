import _ from "lodash";

export const terrains = [
  {
    name: "Water",
    weight: 2,
    normWeight: 0,
    color: "#00a9ff",
  },
  {
    name: "Shore",
    weight: 0.25,
    normWeight: 0,
    color: "#ffd68f",
  },
  {
    name: "Beach",
    weight: 0.25,
    normWeight: 0,
    color: "#efb28f",
  },
  {
    name: "Shrub",
    weight: 1,
    normWeight: 0,
    color: "#9ea667",
  },
  {
    name: "Forest",
    weight: 1,
    normWeight: 0,
    color: "#586647",
  },
  {
    name: "Stone",
    weight: 0.5,
    normWeight: 0,
    color: "#656565",
  },
  {
    name: "Snow",
    weight: 0.5,
    normWeight: 0,
    color: "#9aa7ad",
  },
];
export const terrainTotalWeight = _.sumBy(terrains, (x) => x.weight);
_.forEach(terrains);
terrains.forEach((x) => {
  // eslint-disable-next-line no-param-reassign
  x.normWeight = x.weight / terrainTotalWeight;
});
