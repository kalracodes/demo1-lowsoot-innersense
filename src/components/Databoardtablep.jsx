import { useState } from 'react';

export function Databoardtablep() {
  const [showInput, setShowInput] = useState(false);
  const [fuelType, setFuel] = useState('');
  const [distance, setDistance] = useState('');
  const [dates, setDate] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState([
    { date: 'Jun 25, 2022', fuelType: 'Maternity Bra', distance: 200 },
    { date: 'Jun 25, 2022', fuelType: 'Maternity Bra', distance: 200 },
    { date: 'Jun 26, 2022', fuelType: 'Maternity Bra', distance: 200 },
    { date: 'Jun 27, 2022', fuelType: 'Maternity Bra', distance: 200 },
    { date: 'Jun 28, 2022', fuelType: 'Maternity Bra', distance: 200 },
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
              Type of Product
            </th>
            <th className='databoardtable__theadth' scope='col'>
              Quantity
            </th>
          </tr>
        </thead>
        <tbody className='databoardtable__tablebody'>
          {[...lo].map((item, idx) => {
            return (
              <tr key={idx} className='databoardtable__tabletr'>
                <td className='databoardtable__tabletd'>{item.date}</td>
                <td className='databoardtable__tabletd'>{item.fuelType}</td>
                <td className='databoardtable__tabletd'>{item.distance}</td>
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
          <div className='data-pro' style={{ fontSize: '14px' }}>
            <input
              type='date'
              value={dates}
              onChange={handleChange}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                margin: '0 0 0 8rem',
                borderRadius: '4px',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                padding: '8px',
              }}
            />
            <select
              type={'text'}
              value={fuelType}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                padding: '8px',
                margin: '0 0 0 25rem',
                borderRadius: '4px',
              }}
              required={true}
              onChange={(e) => {
                const value = e.target.value;
                setFuel(value);
              }}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option>Maternity bra</option>
              <option>Regular bra</option>
              <option>Panty</option>
              <option>Loungee Long tee kind</option>
              <option>Loungee dress kind</option>
              <option>Nighty</option>
              <option>Lounge Bottom</option>
            </select>
            <input
              type={'number'}
              value={distance}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                margin: '0 1.5rem 0 10rem',
                padding: '8px',
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
                  fuelType !== ''
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
                      fuelType: fuelType,
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
