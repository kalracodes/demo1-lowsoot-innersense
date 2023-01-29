import { useState } from 'react';

export function Databoardtablee() {
  const [showInput, setShowInput] = useState(false);
  const [energy, setEnergy] = useState('');
  const [dates, setDate] = useState('');
  const [source, setSource] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState([
    { date: 'Jun 25, 2022', energy: 1000, source: 'Station' },
    { date: 'Jun 25, 2022', energy: 1000, source: 'Station' },
    { date: 'Jun 26, 2022', energy: 2000, source: 'Station' },
    { date: 'Jun 27, 2022', energy: 3000, source: 'Station' },
    { date: 'Jun 28, 2022', energy: 4000, source: 'Station' },
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
                <td className='databoardtable__tabletd'>{item.source}</td>
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

            <input
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
                setSource(e.target.value);
              }}
            />

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
                  energy > -1 &&
                  energy !== '' &&
                  dates !== '' &&
                  source == ''
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
                    { date: formattedDate, energy: energy, source: source },
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
