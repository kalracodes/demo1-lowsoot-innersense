import { Linegraph } from './Linegraph';
import { useState, useEffect } from 'react';
import { chartarray } from '../sampledata/data';
import { color1 } from '../color';
import { Scatterchartgraph } from './Scatterchart';
import axios from 'axios';
export function Dashgrape() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    async function func2() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmRmYTgzNWM3NjVjYWM4Njk5ZDE1ZjIiLCJ1c2VyRW1haWwiOiJhYXNocml0Z2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2NzU1MTAwODIsImV4cCI6MTY3NTU5NjQ4Mn0.4I4tFb7rM4IH2X6Ipif7UyzlwcqsYCA1t4E5rULZZ_o`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        const { data } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/visualisation',
          config
        );
        console.log(data);
        if (data) {
          setData(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
    func2();
  }, []);
  return (
    <>
      {loading || (
        <div className='dashgraphs arrange'>
          <div className='dashgraphlinecont'>
            <h2 className='dashgraph__header'>Number of Units</h2>
            <div className='dashgraphline__cont'>
              <Linegraph vizarray={data['ElectricityUsage'].Electricity} />
            </div>
          </div>
          <div className='dashgraphbarcont'>
            <h2 className='dashgraph__header'>Emission by electricity</h2>
            <div className='dashgraphline__cont'>
              <Linegraph vizarray={data['Electricity'].Electricity} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
