import { useState, useEffect } from 'react';
import axios from 'axios';
import { Authprov, useAuth } from '../contexts/Authcontext';
import { redirect } from 'react-router-dom';
export function Databoardtablecn() {
  const [showInput, setShowInput] = useState(false);
  const [emType, setEmType] = useState();
  const [tillDate, setTillDate] = useState(0);
  const [stDate, setStDate] = useState();
  const [endDate, setEndDate] = useState();
  const [emSaved, setEmSaved] = useState();
  const [emSpent, setEmSpent] = useState();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [secLoading, setSecLoading] = useState(true);
  const [lo, setLo] = useState();
  const [c, setC] = useState();
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();

  const postData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(data);

    console.log('h');
    try {
      await axios.post(
        'https://emissions-calculator-mc2k.onrender.com/task',
        {
          emissionType: emType,
          emissionTillDate: tillDate,
          carbonSaveGoal: emSaved,
          amount: emSpent,
          startDate: stDate,
          endDate: endDate,
        },
        config
      );

      setLo([
        ...lo,
        {
          emissionType: emType,
          emissionTillDate: tillDate,
          carbonSaveGoal: emSaved,
          amount: emSpent,
          startDate: stDate,
          endDate: endDate,
        },
      ]);
      setEmType('');
      setEmSaved('');
      setTillDate('');
      setEmSpent('');
      setEndDate('');
      setStDate('');
    } catch (err) {
      console.log(err);
      setIsuserloggedin(false);
    }
  };

  useEffect(() => {
    const func = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const {
          data: { taskNames: response },
        } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/taskNames',
          config
        );
        console.log(response);
        setData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
        return redirect('/login');
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
          'https://emissions-calculator-mc2k.onrender.com/task',

          config
        );
        console.log(token);
        console.log(resp);
        if (resp) {
          console.log(resp);
          setLo(resp);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func();
    func2();
  }, []);
  useEffect(() => {
    const func = async () => {
      if (emType === '') {
        setTillDate(0);
      }
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };
        console.log(emType);
        console.log('Hi');
        const {
          data: { total: resp },
        } = await axios.post(
          'https://emissions-calculator-mc2k.onrender.com/getTotal',
          { emissionType: emType || '' },
          config
        );
        console.log(resp);
        if (resp) {
          console.log(resp);
          setTillDate(resp);
        } else {
          setTillDate(0);
        }
      } catch (err) {
        console.log(err);
        // setIsuserloggedin(false);
      }
    };
    func();
  }, [emType]);
  return (
    <>
      {loading || (
        <>
          <table className='databoardtable__table wd-def'>
            <thead className='databoardtable__tablehead'>
              <tr className='databoardtable__theadtr'>
                {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
                <th className='databoardtable__theadth' scope='col'>
                  Emission Type
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Emission Till Date
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Start Date
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  End Date
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Emission Saved
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Spent On Emission
                </th>
              </tr>
            </thead>
            <tbody className='databoardtable__tablebody'>
              {lo.map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>
                      {item.emissionType}
                    </td>
                    <td className='databoardtable__tabletd'>
                      {item.emissionTillDate}
                    </td>
                    <td className='databoardtable__tabletd'>
                      {item.startDate}
                    </td>
                    <td className='databoardtable__tabletd'>{item.endDate}</td>
                    <td className='databoardtable__tabletd'>
                      {item.carbonSaveGoal}
                    </td>
                    <td className='databoardtable__tabletd'>{item.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            {showInput ? (
              <div style={{ fontSize: '14px' }} className='data-cargo'>
                <select
                  type={'text'}
                  value={emType}
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
                    setEmType(value);
                  }}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  {data.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
                {/* {emType ? seeTillDate() : null} */}
                <input
                  type='text'
                  value={tillDate}
                  disabled
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

                <input
                  type='date'
                  value={stDate}
                  onChange={(e) => setStDate(e.target.value)}
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

                <input
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
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

                <input
                  type='number'
                  value={emSaved}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    console.log(emSaved);
                    setEmSaved(value);
                  }}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    borderRadius: '4px',
                    padding: '1.2rem',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                  }}
                />

                <input
                  type={'number'}
                  value={emSpent}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    margin: '0px 1rem 0rem 1rem ',
                    borderRadius: '4px',
                  }}
                  required={true}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setEmSpent(value);
                  }}
                />
                {console.log(
                  emSpent,
                  emSaved,
                  stDate,
                  endDate,
                  emType,
                  tillDate
                )}
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
                      emSpent > -1 &&
                      emSpent !== '' &&
                      emSaved > -1 &&
                      emSaved !== '' &&
                      stDate !== '' &&
                      endDate !== '' &&
                      emType !== '' &&
                      tillDate !== ''
                    ) {
                      console.log('hi');
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
