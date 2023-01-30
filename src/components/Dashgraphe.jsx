import { Linegraph } from './Linegraph';
import { chartarray } from '../sampledata/data';
import { color1 } from '../color';
import { Scatterchartgraph } from './Scatterchart';
export function Dashgrape() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Number of Units</h2>
        <div className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>Emission by electricity</h2>
        <div className='dashgraphbar__cont'>
          <Scatterchartgraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
