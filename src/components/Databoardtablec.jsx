import { useState } from 'react';

export function Databoardtablec() {
  const [showInput, setShowInput] = useState(false);
  const [fuelType, setFuel] = useState('');
  const [vehicleType, setVehicle] = useState('');
  const [distance, setDistance] = useState('');
  const [dates, setDate] = useState('');
  const [wt, setWt] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState([
    {
      date: 'Jun 25, 2022',
      vehicleType: '2-wheller',
      weight: 100,
      distance: 200,
    },
    {
      date: 'Jun 25, 2022',
      vehicleType: '2-wheller',
      weight: 100,
      distance: 200,
    },
    {
      date: 'Jun 26, 2022',
      vehicleType: '2-wheller',
      weight: 100,
      distance: 200,
    },
    {
      date: 'Jun 27, 2022',
      vehicleType: '2-wheller',
      weight: 100,
      distance: 200,
    },
    {
      date: 'Jun 28, 2022',
      vehicleType: '2-wheller',
      weight: 100,
      distance: 200,
    },
  ]);

  return (
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
              Type of Vehicle
            </th>
            <th className='databoardtable__theadth' scope='col'>
              Weight(in kg)
            </th>
            <th className='databoardtable__theadth' scope='col'>
              Amount of Distance
            </th>
          </tr>
        </thead>
        <tbody className='databoardtable__tablebody'>
          {[...lo].map((item, idx) => {
            return (
              <tr key={idx} className='databoardtable__tabletr'>
                <td className='databoardtable__tabletd'>{item.date}</td>
                <td className='databoardtable__tabletd'>{item.vehicleType}</td>
                <td className='databoardtable__tabletd'>{item.weight}</td>
                <td className='databoardtable__tabletd'>
                  {item.distance}&nbsp;kms
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {showInput ? (
          <div style={{ fontSize: '14px' }} className='data-cargo'>
            <input
              type='date'
              value={dates}
              onChange={handleChange}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                borderRadius: '4px',
                padding: '1.2rem',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                marginLeft: '1rem',
                marginRight: '6rem',
              }}
            />

            <select
              type={'text'}
              value={vehicleType}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                margin: '0px 3rem 0 0rem',
                borderRadius: '4px',
                padding: '1.2rem',
              }}
              required={true}
              onChange={(e) => {
                const value = e.target.value;
                setVehicle(value);
              }}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option>2-Wheeler</option>
              <option>3-Wheeler</option>
              <option>4-Wheeler</option>
            </select>

            <input
              type={'number'}
              value={wt}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                margin: '0px 0rem 0rem 10rem ',
                borderRadius: '4px',
              }}
              required={true}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > -1) {
                  setWt(value);
                } else if (e.target.value === '') {
                  setWt('');
                }
              }}
            />

            <input
              type={'number'}
              value={distance}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                margin: '0px 0rem 0rem 10rem ',
                borderRadius: '4px',
              }}
              required={true}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > -1) {
                  setDistance(value);
                } else if (e.target.value === '') {
                  setDistance('');
                }
              }}
            />
            <button
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
                if (
                  distance > -1 &&
                  distance !== '' &&
                  dates !== '' &&
                  vehicleType !== '' &&
                  wt !== ''
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
                  setLo([
                    ...lo,
                    {
                      date: formattedDate,
                      vehicleType: vehicleType,
                      weight: wt,
                      distance: distance,
                    },
                  ]);
                  setShowInput(false);
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
  );
}
