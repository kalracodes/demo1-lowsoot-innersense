import { Linegraph } from "./Linegraph";
import { chartarray } from "../sampledata/data";
export function Dashgraphb() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Emission by Building</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
    </div>
  );
}
