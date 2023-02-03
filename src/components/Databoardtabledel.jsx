import { useState, useEffect } from 'react';
import axios from 'axios';
export function Databoardtabledel() {
  const [showInput, setShowInput] = useState(false);
  const [fuelType, setFuel] = useState('');
  const [vehicleType, setVehicle] = useState('');
  const [distance, setDistance] = useState('');
  const [dates, setDate] = useState('');
  const [destintion, setDestination] = useState('');
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState([
    {
      date: 'Jun 25, 2022',
      vehicleType: '2-wheller',
      dest: 'Mumbai',
      distance: 200,
    },
    {
      date: 'Jun 25, 2022',
      vehicleType: '2-wheller',
      dest: 'Mumbai',
      distance: 200,
    },
    {
      date: 'Jun 26, 2022',
      vehicleType: '2-wheller',
      dest: 'Mumbai',
      distance: 200,
    },
    {
      date: 'Jun 27, 2022',
      vehicleType: '2-wheller',
      dest: 'Mumbai',
      distance: 200,
    },
    {
      date: 'Jun 28, 2022',
      vehicleType: '2-wheller',
      dest: 'Mumbai',
      distance: 200,
    },
  ]);

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
              Destination City
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
                <td className='databoardtable__tabletd'>{item.dest}</td>
                <td className='databoardtable__tabletd'>
                  {item.distance}&nbsp;kms
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          maxWidth: '70vw',
          margin: '0 auto',
          padding: '8px',
        }}
      >
        {showInput ? (
          <div className='data-del' style={{ fontSize: '14px' }}>
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

            <select
              type={'text'}
              value={vehicleType}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                padding: '8px',
                margin: '0px 8px 16px 8px',
                borderRadius: '4px',
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
              type={'text'}
              value={destintion}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                padding: '8px',
                borderRadius: '4px',
              }}
              required={true}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />

            <input
              type={'number'}
              value={distance}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
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
                  vehicleType !== '' &&
                  destintion !== ''
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
                      dest: destintion,
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
