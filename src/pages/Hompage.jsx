import { useRef } from 'react';
import { Reportend } from '../components/Reportend';
import { Dashparameters } from '../components/Dashparameters';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { useVisuals } from '../contexts/Visualcontext';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';
import { Bargraphblock } from '../components/summary/Bargraphblock';
import { Linegraphblock } from '../components/summary/Linegraphblock';
import { chartarray } from '../sampledata/data';
import { Areagraphblock } from '../components/summary/Areagraphblock';
import { Scattergraphblock } from '../components/summary/Scattergraphblock';
import { color1, color2, color3 } from '../color';
import { Piegraphsumblock } from '../components/Piegraphsum';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import JsPDF from 'jspdf';

export function Hompage() {
  const { dateval, setDateval, enddateval, setEnddateval } = useVisuals();
  const componentRef = useRef();
  const theme = createTheme({
    typography: {
      htmlFontSize: 10,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            fontSize: '62.5%',
          },
        },
      },
    },
  });

  const generatePDF = () => {
    const widthval = document.querySelector(
      '#report__datacontainer'
    ).clientWidth;
    const heightval = Math.pow(2, 0.5) * widthval + 20;
    const report = new JsPDF({
      orientation: 'portarit',
      unit: 'px',
      format: [widthval + 20, heightval],
    });
    report.html(document.querySelector('#report__datacontainer')).then(() => {
      report.save('report.pdf');
    });
  };

  return (
    <div className='dcontainer'>
      <Sidenavv3 />
      <div className='homemainv2'>
        <Topbarv3 />
        <div className='homemaincontentv2'>
          <Reportend generatePDF={generatePDF} componentRef={componentRef} />
          <div
            ref={componentRef}
            id='report__datacontainer'
            style={{ padding: '1.5rem',marginTop:'-4rem'}}
          >
            <div className='head-content'>
              <h1 id='introjs__1' className='homemainheaderv2'>
                <span className='introjs__1'>Summary</span>
              </h1>
            </div>
            <>
              <Dashparameters />
              <div className='summaryparams'>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Total number of <br />
                    kilometers travelled
                  </p>
                  <p className='summaryparam__value'>23392 kms</p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Total number of
                    <br /> electricity consumed
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Total Business
                    <br />
                    Commuting
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Total Employees
                    <br /> Commuting
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
              </div>
              {/* Part 2 below */}
              <div className='summaryparams'>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Amount of emissions
                    <br />
                    for each product
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Carbon Saved on
                    <br />
                    Maternity Bra
                    <br />
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Carbon Saved on
                    <br />
                    Regular Bra
                    <br />
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>
                    Carbon Saved on
                    <br />
                    Pantry
                    <br />
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
              </div>
              {/* Part 3 below */}
              <div className='summaryparams'>
                <div className='summaryparam'>
                  <p className='summaryparam__title smallest'>
                    Carbon Saved on
                    <br />
                    Loungee Long tee kind
                    <br />
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title '>
                    Carbon Saved on
                    <br />
                    Loungee Dress kind
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title '>
                    Carbon Saved on
                    <br />
                    Nighty
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title '>
                    Carbon Saved on
                    <br />
                    Long Bottom
                  </p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>
                {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
              </div>
              {/* Part 4 below */}
              <div className='summaryparams'>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>Carbon Intensity</p>
                  <p className='summaryparam__value'>23392 kms</p>
                </div>
                <div className='summaryparam'>
                  <p className='summaryparam__title'>Scrap %</p>
                  <p className='summaryparam__value'>19000 KWh </p>
                </div>

                {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
              </div>
              <br />
              <br />
              <br />
              <div className='datefilters'>
                <h3 className='datefilters__head'>Date Filters</h3>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      minDate='2022-1-1'
                      maxDate='2022-12-31'
                      label='Start date'
                      inputFormat='MM/DD/YYYY'
                      value={dayjs(dateval)}
                      onChange={(newValue) => {
                        const monthkey = JSON.stringify(newValue['$M'] + 1);
                        const monthkeystring =
                          monthkey.length === 1 ? `0${monthkey}` : monthkey;
                        setDateval(
                          `${newValue['$y']}-${monthkeystring}-${newValue['$D']}`
                        );
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <DesktopDatePicker
                      minDate='2022-1-1'
                      maxDate='2022-12-31'
                      label='End date'
                      inputFormat='MM/DD/YYYY'
                      value={dayjs(enddateval)}
                      onChange={(newValue) => {
                        const monthkey = JSON.stringify(newValue['$M'] + 1);
                        const monthkeystring =
                          monthkey.length === 1 ? `0${monthkey}` : monthkey;
                        setEnddateval(
                          `${newValue['$y']}-${monthkeystring}-${newValue['$D']}`
                        );
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </ThemeProvider>
              </div>

              <div className='homevizgraph__cont'>
                <div className='summarygrid'>
                  <Piegraphsumblock />

                  <Linegraphblock
                    vizarray={chartarray}
                    graphname={'Business Commute'}
                    colorvalue={color1}
                  />

                  <Bargraphblock
                    vizarray={chartarray}
                    graphname={'Employee Commute'}
                    colorvalue={color1}
                  />

                  <Areagraphblock
                    vizarray={chartarray}
                    graphname={'Electricty'}
                    colorvalue={color1}
                  />
                  <Scattergraphblock
                    vizarray={chartarray}
                    graphname={'Air Cargo'}
                    colorvalue={color1}
                  />
                  <Scattergraphblock
                    vizarray={chartarray}
                    graphname={'Road Cargo'}
                    colorvalue={color1}
                  />
                  <Bargraphblock
                    vizarray={chartarray}
                    graphname={'Building Space Consumed'}
                    colorvalue={color2}
                  />
                  <Bargraphblock
                    vizarray={chartarray}
                    graphname={'Warehouse Space'}
                    colorvalue={color3}
                  />
                  <Bargraphblock
                    vizarray={chartarray}
                    graphname={'Delivery'}
                    colorvalue={color3}
                  />
                  <Bargraphblock
                    vizarray={chartarray}
                    graphname={'Fuel Consumed'}
                    colorvalue={color3}
                  />
                </div>
              </div>
            </>
          </div>
          <Lowsootfooter />
        </div>
      </div>
    </div>
  );
}