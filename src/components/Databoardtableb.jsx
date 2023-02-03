import { useEffect, useState } from 'react';
import axios from 'axios';
export function Databoardtableb() {
  const [showInput, setShowInput] = useState(false);
  const [buildingSpace, setBuilding] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [dates, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [lo, setLo] = useState();

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const postData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmRmYTgzNWM3NjVjYWM4Njk5ZDE1ZjIiLCJ1c2VyRW1haWwiOiJhYXNocml0Z2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2NzUzMzgwOTQsImV4cCI6MTY3NTQyNDQ5NH0.hfTl1UjxLxhXcm8KMsmgJEVzWbzx9H0BWCUv6ArwpCM`,
      },
    };

    await axios.post(
      'https://emissions-calculator-mc2k.onrender.com/buildingEmission',
      {
        buildingSpace: buildingSpace,
        date: dates,
        warehouseSpace: warehouse,
      },
      config
    );

    setLo([
      ...lo,
      {
        date: dates,
        buildingSpace: buildingSpace,
        warehouseSpace: warehouse,
      },
    ]);
    setDate('');
    setBuilding('');
    setWarehouse('');
  };

  useEffect(() => {
    async function func2() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmRmYTgzNWM3NjVjYWM4Njk5ZDE1ZjIiLCJ1c2VyRW1haWwiOiJhYXNocml0Z2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2NzUzMzgwOTQsImV4cCI6MTY3NTQyNDQ5NH0.hfTl1UjxLxhXcm8KMsmgJEVzWbzx9H0BWCUv6ArwpCM`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        const { data: resp } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/buildingEmissions',

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
                  Total Building Space
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Total Warehouse Space
                </th>
              </tr>
            </thead>
            <tbody className='databoardtable__tablebody'>
              {[...lo].map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>{item.date}</td>
                    <td className='databoardtable__tabletd'>
                      {item.buildingSpace}
                    </td>
                    <td className='databoardtable__tabletd'>
                      {item.warehouseSpace}&nbsp;kms
                    </td>
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
              <div className='data-build' style={{ fontSize: '14px' }}>
                <input
                  type='date'
                  value={dates}
                  onChange={handleChange}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    borderRadius: '4px',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                    padding: '8px',
                  }}
                />
                <input
                  type={'number'}
                  value={buildingSpace}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    margin: '0 1rem 0 20rem',
                    padding: '8px',
                    borderRadius: '4px',
                  }}
                  required={true}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > -1) {
                      setBuilding(value);
                    } else if (e.target.value === '') {
                      setBuilding('');
                    }
                  }}
                />
                <input
                  type={'number'}
                  value={warehouse}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    padding: '8px',
                    margin: '0 1rem 0 25rem',
                    borderRadius: '4px',
                  }}
                  required={true}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > -1) {
                      setWarehouse(value);
                    } else if (e.target.value === '') {
                      setWarehouse('');
                    }
                  }}
                />
                <button
                  id='addButton'
                  style={{
                    padding: '4px',
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
                    if (
                      warehouse > -1 &&
                      warehouse !== '' &&
                      dates !== '' &&
                      buildingSpace > -1 &&
                      buildingSpace !== ''
                    ) {
                      const dateString = dates;
                      const date = new Date(dateString);
                      const options = {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      };

                      const formattedDate = date.toLocaleDateString(
                        'en-US',
                        options
                      );

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
