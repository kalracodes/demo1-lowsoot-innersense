export function Bsrtable3(params) {
  // const { reportdata } = params;
  return (
    <div>
      <div className="bsr_table_details">
        Please provide details of air emissions (other than GHG emissions) by
        the entity, in the following format:
      </div>
      <table className="bsr_table">
        <thead className="bsr_thead">
          <tr className="bsr_tr">
            <th className="bsr_th">Parameter</th>
            <th className="bsr_th">Unit</th>
            <th className="bsr_th">FY 2022 (Current Financial Year)</th>
            <th className="bsr_th">FY 2021 (Previous Financial Year)</th>
          </tr>
        </thead>
        <tbody className="bsr_body">
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 1 emissions (Break-up of the GHG into CO2, CH4, N2O,
              HFCs, PFCs, SF6, NF3, if available)
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">780</td>
            <td className="bsr_td">650</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 2 emissions (Break-up of the GHG into CO2, CH4, N2O,
              HFCs, PFCs, SF6, NF3, if available)
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">500</td>
            <td className="bsr_td">300</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 1 and Scope 2 emissions per rupee of turnover
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">800</td>
            <td className="bsr_td">455</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 1 and Scope 2 emission intensity (optional) - the
              relevant metric may be selected by the entity
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">900</td>
            <td className="bsr_td">400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
