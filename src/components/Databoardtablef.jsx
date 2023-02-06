import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';
export function Databoardtablef() {
  const [showInput, setShowInput] = useState(false);
  const [fuelType, setFuel] = useState('');
  const [volume, setVolume] = useState('');
  const [dates, setDate] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const postData = async () => {
    const a = data.find((item, index) => {
      console.log(item);
      return item.factor === fuelType;
    });
    console.log(a);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (a) {
      setLoading(false);

      console.log(a);

      await axios.post(
        'https://emissions-calculator-mc2k.onrender.com/electricityEmission',
        {
          date: dates,
          factorType: a.id,
          volume: volume,
        },
        config
      );

      setLo([
        ...lo,
        {
          date: dates,
          factorType: a.id,
          volume: volume,
        },
      ]);
      setDate('');
      setVolume('');
      setFuel('');
    }
  };

  useEffect(() => {
    const func = async () => {
      try {
        const {
          data: { All: response },
        } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/allFuelFactors'
        );
        console.log(response);

        setData(response);
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    };
    async function func2() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        const { data: resp } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/fuelEmissions',

          config
        );
        console.log(resp);
        if (resp) {
          setLoading(false);
          setLo(resp);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func();
    func2();
  }, []);

  const [lo, setLo] = useState([]);

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
              Type of Fuel
            </th>
            <th className='databoardtable__theadth' scope='col'>
              Volume
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
                <td className='databoardtable__tabletd'>{item.volume}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          width: '50vw',
          padding: '8px',
          margin: '0 4rem',
        }}
      >
        {showInput ? (
          <div className='data-fuel' style={{ fontSize: '14px' }}>
            <input
              type='date'
              value={dates}
              onChange={handleChange}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                borderRadius: '4px',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                margin: '0 4rem 0 0',
                padding: '8px',
                marginRight: '1rem',
                marginLeft: '0rem',
              }}
            />
            <select
              type={'text'}
              value={fuelType}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                padding: '8px',
                margin: '0 1rem 0 20rem',
                borderRadius: '4px',
              }}
              required={true}
              onChange={(e) => {
                const value = e.target.value;
                setFuel(value);
              }}
            >
              <option selected='' disabled='' value=''>
                Choose..
              </option>
              {data.map((item) => {
                return <option>{item.factor}</option>;
              })}
            </select>
            <input
              type={'number'}
              value={volume}
              style={{
                appearance: 'none',
                border: 'solid 0.5px',
                margin: '0 2rem 0 10rem',
                padding: '8px',
                borderRadius: '4px',
              }}
              required={true}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > -1) {
                  setVolume(value);
                } else if (e.target.value === '') {
                  setVolume('');
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
                  volume > -1 &&
                  volume !== '' &&
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
                  postData();
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
