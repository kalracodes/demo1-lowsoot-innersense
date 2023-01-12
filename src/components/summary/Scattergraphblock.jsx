import { Scatterchartgraph } from "../Scatterchart";

export function Scattergraphblock(params) {
  const { vizarray, graphname, colorvalue } = params;
  return (
    <>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">
          {graphname} in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphbar__cont">
          <Scatterchartgraph vizarray={vizarray} colorvalue={colorvalue} />
        </div>
      </div>
    </>
  );
}
