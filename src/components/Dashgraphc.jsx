import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
// import { chart1data } from "../mockdata";
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from '../sampledata/data';
import { color1 } from '../color';
import { color2 } from '../color';
export function Dashgraphc() {
  // const { visualstate } = useVisuals();
  // console.log({ cargowale: visualstate.cargo });
  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>Amount of fuel</h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>Distance Travelled</h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color2} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Cargo Emissions</h2>
        <div className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
