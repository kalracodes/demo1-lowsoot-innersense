// import { Linegraph } from "./Linegraph";
import { Bargraph } from './Bargraph';
import { chartarray } from '../sampledata/data';
import { Areagraph } from './Areagraph';
import { color1 } from '../color';
import { Linegraph } from './Linegraph';
export function Dashgraphco() {
  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Amount of fuel</h2>
        <div className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>Total distance travelled</h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Emission by Business commute</h2>
        <div className='dashgraphline__cont'>
          <Areagraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Emission by Employee Commute</h2>
        <div className='dashgraphline__cont'>
          <Areagraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
