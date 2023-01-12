export function Bsrtable1() {
  // const { reportdata } = params;
  return (
    <div>
      <div className="bsr_table_details">
        Details of total energy consumption (in Joules or multiples) and energy
        intensity, in the following format:
      </div>
      <table className="bsr_table">
        <thead className="bsr_thead">
          <tr className="bsr_tr">
            <th className="bsr_th">Parameter</th>
            <th className="bsr_th">FY 2022 (Current Financial Year)</th>
            <th className="bsr_th">FY 2021 (Previous Financial Year)</th>
          </tr>
        </thead>
        <tbody className="bsr_body">
          <tr className="bsr_tr">
            <td className="bsr_td">Total electricity consumption (A)</td>
            <td className="bsr_td">20000 kWh</td>
            <td className="bsr_td">18000 kWh</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total fuel consumption (B)</td>
            <td className="bsr_td">22000 L</td>
            <td className="bsr_td">15000 L</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total energy consumption (A+B+C)</td>
            <td className="bsr_td">42000</td>
            <td className="bsr_td">33000</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Energy intensity per rupee of turnover (Total energy consumption/
              turnover in rupees)
            </td>
            <td className="bsr_td">2</td>
            <td className="bsr_td">6</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Energy intensity (optional) - the relevant metric may be selected
              by the entity
            </td>
            <td className="bsr_td">4</td>
            <td className="bsr_td">8</td>
          </tr>
          {/**
           * Energy intensity (optional) – the
relevant metric may be selected
by the entity
          */}
        </tbody>
      </table>
    </div>
  );
}
