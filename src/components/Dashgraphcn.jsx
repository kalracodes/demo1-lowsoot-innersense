import { Linegraph } from './Linegraph';
import { chartarray } from '../sampledata/data';
import { Scattergraphblock } from './summary/Scattergraphblock';
import { width } from '@mui/system';
export function Dashgraphcn() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  return (
    <>
      <div className='dashgraphs arrange'>
        <div
          className='dashgraphline__cont'
          style={{ borderRadius: '20px', width: '560px' }}
        >
          <Scattergraphblock
            vizarray={chartarray}
            graphname={'Road Cargo'}
            colorvalue={'#d64543'}
          />
        </div>
        <div
          className='dashgraphline__cont'
          style={{ borderRadius: '20px', width: '550px' }}
        >
          <Scattergraphblock
            vizarray={chartarray}
            graphname={'Road Cargo'}
            colorvalue={'#d64543'}
          />
        </div>
      </div>
    </>
  );
}
