import { useParams } from 'react-router-dom';
import { Dashgraphco } from '../components/Dashgraco';
import { Dashgrapes3 } from '../components/Dashgrapes3';
import { Dashgrapf } from '../components/Dashgrapf';
import { Dashgrapfs3 } from '../components/Dashgrapfs3';
import { Dashgraph } from '../components/Dashgraph';
import { Dashgrapharea } from '../components/Dashgrapharea';
import { Dashgraphc } from '../components/Dashgraphc';
import { Dashgraphdel } from '../components/Dashgraphdel';
import { Dashgrape } from '../components/Dashgraphe';
import { Dashgraphp } from '../components/Dashgraphp';
import { Dashgraphb } from '../components/Dashgraphb';
import { Dashparameters } from '../components/Dashparameters';
import { Dashwebplatforms } from '../components/Dashwebplatforms';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';

export function Dashboard() {
  const { name } = useParams();
  return (
    <div className='dcontainer'>
      <Sidenavv3 />
      <div className='dashmain'>
        <Topbarv3 />
        <div className='dashmaincontent'>
          <h1 className='dashheader'>
            <span className='introjs__3'>Visualization</span>
          </h1>
          {name === 'Building' ? (
            <div className='summaryparams' style={{flexWrap:'wrap',marginTop:'0rem'}}>
              <div className='summaryparam'>
                <p className='product_tab_title'>Total Building Space</p>
                <p className='product_tab_value'>19000 KWh </p>
              </div>
              <div className='summaryparam'>
                <p className='product_tab_title'>Total Building Space</p>
                <p className='product_tab_value'>19000 KWh </p>
              </div>
            </div>
          ) : (
            name === 'product' ? (
              <div className='summaryparams' style={{flexWrap:'wrap',marginTop:'0 rem'}}>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Maternity bra</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Regular bra</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Panty</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Loungee Long<br/> tee kind</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Loungee dress kind</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Maternity bra</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Nighty</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
                <div className='summaryparam'>
                  <p className='product_tab_title'>Lounge Bottom</p>
                  <p className='product_tab_value'>20000 units</p>
                  <p className='product_tab_value'>50000 KgCo<sub>2</sub>e</p>
                </div>
              </div>
            ) :
            <Dashparameters />
          )}
          <div className='dashgraphs__cont'>
            {name === 'travel' && <Dashgraph />}
            {name === 'cargo' && <Dashgraphc />}
            {name === 'building' && <Dashgraphc />}
            {name === 'electricity' && <Dashgrape />}
            {name === 'fuel' && <Dashgrapf />}
            {name === 'commute' && <Dashgraphco />}
            {name === 's3fuel' && <Dashgrapfs3 />}
            {name === 's3electricity' && <Dashgrapes3 />}
            {name === 'product' && <Dashgraphp />}
            {/* refrigeration */}

            {name === 'Building' && <Dashgraphb />}
            {name === 'delivery' && <Dashgraphdel />}
          </div>
          {/* <div className="dashgraphblock">
            <Dashgrapharea />
            <Dashwebplatforms />
          </div> */}
        </div>
        <Lowsootfooter />
      </div>
    </div>
  );
}
