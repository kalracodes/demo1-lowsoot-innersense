import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from "../sampledata/data";
import { Areagraph } from "./Areagraph";
import { color2 } from "../color";
import { Piegraph } from "./Piegraph";
import { Scatterchartgraph } from "./Scatterchart";
export function Dashgrapf() {
  // const { visualstate } = useVisuals();
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont hide">
        <h2 className="dashgraph__header">&nbsp;</h2>
        <div
          style={{ visibility: "hidden", display: "none" }}
          className="dashgraphline__cont"
        >
          <Linegraph vizarray={chartarray} colorvalue={color2} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">
          Fuel in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} colorvalue={color2} />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Fuel in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
        <Scatterchartgraph vizarray={chartarray} colorvalue={color2} />
        </div>
      </div>
    </div>
  );
}
