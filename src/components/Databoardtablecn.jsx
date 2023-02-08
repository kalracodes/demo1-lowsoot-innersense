// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Authprov, useAuth } from '../contexts/Authcontext';
// import { redirect } from 'react-router-dom';
// export function Databoardtablecn() {
//   console.log('hi');
//   const [showInput, setShowInput] = useState(false);
//   const [emType, setEmType] = useState();
//   const [data, setData] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [lo, setLo] = useState();
//   const [c, setC] = useState();
//   const handleChange = (event) => {
//     setDate(event.target.value);
//   };
//   const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();

//   const postData = async () => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     setLoading(true);
//     console.log(data);
//     const c = data.find((item, index) => {
//       return item.factor === vehicleType;
//       // if (item.factor === vehicleType) {
//       //   return index;
//       // }
//     });

//     console.log(c);
//     if (c) {
//       setLoading(false);
//       try {
//         await axios.post(
//           'https://emissions-calculator-mc2k.onrender.com/cargoEmission',
//           {
//             weight: wt,
//             distance: distance,
//             travelBy: 'Road',
//             factorType: c.id,
//             date: dates,
//           },
//           config
//         );

//         setLo([
//           ...lo,
//           {
//             weight: wt,
//             distance: distance,
//             travelBy: 'Road',
//             factorType: c.id,
//             date: dates,
//           },
//         ]);
//         setDate('');
//         setDistance('');
//         setWt('');
//         setVehicle('');
//       } catch (err) {
//         console.log(err);
//         setIsuserloggedin(false);
//       }
//     }
//   };
//   useEffect(() => {
//     const func = async () => {
//       try {
//         const {
//           data: { taskNames: response },
//         } = await axios.get(
//           'https://emissions-calculator-mc2k.onrender.com/taskNames'
//         );
//         console.log(response);
//         setData(response);
//         console.log(response);
//       } catch (err) {
//         console.log(err);
//         return redirect('/login');
//       }
//     };

//     async function func2() {
//       console.log('hi');
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // const bodyParameters = {
//         //   key: 'value',
//         // };

//         const { data: resp } = await axios.get(
//           'https://emissions-calculator-mc2k.onrender.com/task',

//           config
//         );
//         console.log(token);
//         console.log(resp);
//         if (resp) {
//           console.log(resp);
//           setLo(resp);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.log(err);
//         setIsuserloggedin(false);
//       }
//     }
//     func();
//     func2();
//   }, []);

//   return (
//     <>
//       {loading || (
//         <>
//           <table className='databoardtable__table'>
//             <thead className='databoardtable__tablehead'>
//               <tr className='databoardtable__theadtr'>
//                 {/* <th className="databoardtable__theadth" scope="col">
//                 <span className="blank__letters">check</span>
//               </th> */}
//                 <th className='databoardtable__theadth' scope='col'>
//                   Emission Type
//                 </th>
//                 <th className='databoardtable__theadth' scope='col'>
//                   Emission Till Date
//                 </th>
//                 <th className='databoardtable__theadth' scope='col'>
//                   Start Date
//                 </th>
//                 <th className='databoardtable__theadth' scope='col'>
//                   End Date
//                 </th>
//                 <th className='databoardtable__theadth' scope='col'>
//                   Emission Saved
//                 </th>
//                 <th className='databoardtable__theadth' scope='col'>
//                   Spent On Emission
//                 </th>
//               </tr>
//             </thead>
//             <tbody className='databoardtable__tablebody'>
//               {lo.map((item, idx) => {
//                 return (
//                   <tr key={idx} className='databoardtable__tabletr'>
//                     <td className='databoardtable__tabletd'>
//                       {item.emissionType}
//                     </td>
//                     <td className='databoardtable__tabletd'>
//                       {item.emissionTillDate}
//                     </td>
//                     <td className='databoardtable__tabletd'>
//                       {item.startDate}
//                     </td>
//                     <td className='databoardtable__tabletd'>{item.endDate}</td>
//                     <td className='databoardtable__tabletd'>
//                       {item.carbonSaveGoal}
//                     </td>
//                     <td className='databoardtable__tabletd'>{item.amount}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//           <div>
//             {showInput ? (
//               <div style={{ fontSize: '14px' }} className='data-cargo'>
//                 <select
//                   type={'text'}
//                   value={emType}
//                   style={{
//                     appearance: 'none',
//                     border: 'solid 0.5px',
//                     margin: '0px 3rem 0 0rem',
//                     borderRadius: '4px',
//                     padding: '1.2rem',
//                   }}
//                   required={true}
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     setEmType(value);
//                   }}
//                 >
//                   <option selected='' disabled='' value=''>
//                     Choose...
//                   </option>
//                   {data.map((item) => {
//                     return <option>{item}</option>;
//                   })}
//                 </select>

//                 <input
//                   type='date'
//                   value={dates}
//                   onChange={handleChange}
//                   style={{
//                     appearance: 'none',
//                     border: 'solid 0.5px',
//                     borderRadius: '4px',
//                     padding: '1.2rem',
//                     boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
//                     marginLeft: '1rem',
//                     marginRight: '6rem',
//                   }}
//                 />

//                 <select
//                   type={'text'}
//                   value={vehicleType}
//                   style={{
//                     appearance: 'none',
//                     border: 'solid 0.5px',
//                     margin: '0px 3rem 0 0rem',
//                     borderRadius: '4px',
//                     padding: '1.2rem',
//                   }}
//                   required={true}
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     setVehicle(value);
//                   }}
//                 >
//                   <option selected='' disabled='' value=''>
//                     Choose...
//                   </option>
//                   {data.map((item) => {
//                     return <option>{item.factor}</option>;
//                   })}
//                 </select>

//                 <input
//                   type={'number'}
//                   value={wt}
//                   style={{
//                     appearance: 'none',
//                     border: 'solid 0.5px',
//                     margin: '0px 0rem 0rem 10rem ',
//                     borderRadius: '4px',
//                   }}
//                   required={true}
//                   onChange={(e) => {
//                     const value = parseInt(e.target.value);
//                     if (value > -1) {
//                       setWt(value);
//                     } else if (e.target.value === '') {
//                       setWt('');
//                     }
//                   }}
//                 />

//                 <input
//                   type={'number'}
//                   value={distance}
//                   style={{
//                     appearance: 'none',
//                     border: 'solid 0.5px',
//                     margin: '0px 0rem 0rem 10rem ',
//                     borderRadius: '4px',
//                   }}
//                   required={true}
//                   onChange={(e) => {
//                     const value = parseInt(e.target.value);
//                     if (value > -1) {
//                       setDistance(value);
//                     } else if (e.target.value === '') {
//                       setDistance('');
//                     }
//                   }}
//                 />
//                 <button
//                   id='addButton'
//                   style={{
//                     padding: '8px',
//                     borderRadius: '4px',
//                     color: 'white',
//                     backgroundColor: '#4d7cfe',
//                   }}
//                   onClick={() => {
//                     /*const change = document.querySelector(".databoardtable__tablebody")
//                 change.innerHTML = change.innerHTML + `
//                 <tr class="databoardtable__tabletr">
//                 <td class="databoardtable__tabletd">25 Jun 2022</td>
//                 <td class="databoardtable__tabletd">
//                 ${energy} kWh
//                 </td>
//                 <td class="databoardtable__tabletd">Coal</td>
//                 <td class="databoardtable__tabletd">-</td>
//                 <td class="databoardtable__tabletd">coming soon</td>
//               </tr>
//                 `*/
//                     if (
//                       distance > -1 &&
//                       distance !== '' &&
//                       dates !== '' &&
//                       vehicleType !== '' &&
//                       wt !== ''
//                     ) {
//                       const dateString = dates;
//                       const date = new Date(dateString);
//                       const options = {
//                         day: 'numeric',
//                         month: 'short',
//                         year: 'numeric',
//                       };

//                       const formattedDate = date.toLocaleDateString(
//                         'en-US',
//                         options
//                       );
//                       setShowInput(false);
//                       postData();
//                     }
//                   }}
//                 >
//                   Add Row
//                 </button>
//               </div>
//             ) : (
//               <button
//                 id='addButton'
//                 style={{
//                   padding: '8px',
//                   borderRadius: '4px',
//                   color: 'white',
//                   backgroundColor: '#4d7cfe',
//                   display: 'hidden',
//                 }}
//                 onClick={() => setShowInput(true)}
//               >
//                 +
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// }
