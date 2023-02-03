import axios from 'axios';
import { useState, useEffect } from 'react';
export function Databoardtablee() {
  const [showInput, setShowInput] = useState(false);
  const [energy, setEnergy] = useState('');
  const [dates, setDate] = useState('');
  const [source, setSource] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState();

  const postData = async () => {
    const a = data.find((item, index) => {
      console.log(item);
      return item.factor === source;
      // if (item.factor === vehicleType) {
      //   return index;
      // }
    });
    console.log(a);
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmRmYTgzNWM3NjVjYWM4Njk5ZDE1ZjIiLCJ1c2VyRW1haWwiOiJhYXNocml0Z2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2NzUyNzIxNTcsImV4cCI6MTY3NTM1ODU1N30.WbnV1w8AAXU8Ewq0r1zMMXEulR49ykELTH02FqA8YB8`,
      },
    };

    if (a) {
      setLoading(false);

      console.log(a);

      await axios.post(
        'https://emissions-calculator-mc2k.onrender.com/electricityEmission',
        {
          energy: energy,
          factorType: a.id,
          date: dates,
        },
        config
      );

      setLo([
        ...lo,
        {
          energy: energy,
          factorType: a.id,
          date: dates,
        },
      ]);
      setDate('');
      setSource('');
      setEnergy('');
    }
  };

  useEffect(() => {
    const func = async () => {
      try {
        const {
          data: { All: response },
        } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/allElectricityFactors'
        );

        setData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    async function func2() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmRmYTgzNWM3NjVjYWM4Njk5ZDE1ZjIiLCJ1c2VyRW1haWwiOiJhYXNocml0Z2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2NzUyNzIxNTcsImV4cCI6MTY3NTM1ODU1N30.WbnV1w8AAXU8Ewq0r1zMMXEulR49ykELTH02FqA8YB8`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        const { data: resp } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/electricityEmissions',

          config
        );
        console.log(resp);
        if (resp) {
          setLoading(false);
          setLo(resp);
        }
      } catch (err) {
        console.log(err);
      }
    }
    func();
    func2();
  }, []);

  return (
    <>
      {loading || (
        <>
          <table className='databoardtable__table'>
            <thead className='databoardtable__tablehead'>
              <tr className='databoardtable__theadtr'>
                {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
                <th className='databoardtable__theadth' scope='col'>
                  Date
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Source
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Number of Units
                </th>
              </tr>
            </thead>
            <tbody className='databoardtable__tablebody'>
              {[...lo].map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>{item.date}</td>
                    <td className='databoardtable__tabletd'>
                      {data[item.factorType - 1].factor}
                    </td>
                    <td className='databoardtable__tabletd'>{item.energy}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{
              maxWidth: '70vw',
              padding: '8px',
              margin: '0 auto',
            }}
          >
            {showInput ? (
              <div className='data-e' style={{ fontSize: '14px' }}>
                <input
                  type='date'
                  value={dates}
                  onChange={handleChange}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    borderRadius: '4px',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                    margin: '0 0.0rem 0 1rem ',

                    padding: '8px',
                  }}
                />

                <select
                  type={'text'}
                  value={source}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    padding: '8px',
                    margin: '0 0.25rem 0 15rem',
                    borderRadius: '4px',
                  }}
                  required={true}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSource(value);
                  }}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  {data.map((resp) => {
                    return <option>{resp.factor}</option>;
                  })}
                </select>

                <input
                  type={'number'}
                  value={energy}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    padding: '8px',
                    margin: '0 0.25rem 0 25rem',
                    borderRadius: '4px',
                  }}
                  required={true}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > -1) {
                      setEnergy(value);
                    } else if (e.target.value === '') {
                      setEnergy('');
                    }
                  }}
                />
                <button
                  type='submit'
                  id='addButton'
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    color: 'white',
                    backgroundColor: '#4d7cfe',
                  }}
                  onClick={() => {
                    /*const change = document.querySelector(".databoardtable__tablebody")
                change.innerHTML = change.innerHTML + `
                <tr class="databoardtable__tabletr">
                <td class="databoardtable__tabletd">25 Jun 2022</td>
                <td class="databoardtable__tabletd">
                ${energy} kWh
                </td>
                <td class="databoardtable__tabletd">Coal</td>
                <td class="databoardtable__tabletd">-</td>
                <td class="databoardtable__tabletd">coming soon</td>
              </tr>
                `*/
                    console.log(energy);
                    console.log(source);
                    console.log(dates);
                    if (
                      energy > -1 &&
                      energy !== '' &&
                      dates !== '' &&
                      source !== ''
                    ) {
                      console.log('Hi');
                      setShowInput(false);
                      postData();
                    }
                  }}
                >
                  Add Row
                </button>
              </div>
            ) : (
              <button
                id='addButton'
                style={{
                  padding: '8px',
                  borderRadius: '4px',
                  color: 'white',
                  backgroundColor: '#4d7cfe',
                  display: 'hidden',
                }}
                onClick={() => setShowInput(true)}
              >
                +
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
