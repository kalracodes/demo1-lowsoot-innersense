import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import { useVisuals } from "../contexts/Visualcontext";
// import { getmonthno } from "../functions/setmonthnum";

export function Scatterchartgraph(params) {
  const { colorvalue } = params;
  const scatterfill = colorvalue ? colorvalue : "#8884d8";
  //   const { vizarray } = params;
  //   const { dateval, enddateval } = useVisuals();
  //   const monthno = Number(dateval.slice(5, 7));
  //   const vizx = [...vizarray].map((elem) => getmonthno(elem));
  //   const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  //   const juend = Number(enddateval.slice(5, 7));
  //   const jju = [...vizx].slice(ju, juend);
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="co2e" />
        <YAxis
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            lineHeight: "1.5rem",
            fontFamily: "Inter",
          }}
          axisLine={false}
          type="number"
          dataKey="y"
          name="weight"
          unit="co2e"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="emmision" data={data} fill={scatterfill} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
