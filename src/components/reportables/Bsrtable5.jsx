export function Bsrtable5() {
  return (
    <div>
      <div className="bsr_table_details">
        Provide break-up of the total energy consumed (in Joules or multiples)
        from renewable and non-renewable sources, in the following format:
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
            <td colSpan={3} className="full_colspan">
              From renewable sources
            </td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total electricity consumption (A)</td>
            <td className="bsr_td">586</td>
            <td className="bsr_td">505</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total fuel consumption (B)</td>
            <td className="bsr_td">878</td>
            <td className="bsr_td">597</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total energy consumed from renewable so0urces (A+B+C)
            </td>
            <td className="bsr_td">547</td>
            <td className="bsr_td">510</td>
          </tr>
          <tr className="bsr_tr">
            <td colSpan={3} className="full_colspan">
              From non-renewable sources
            </td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total electricity consumption (D)</td>
            <td className="bsr_td">910</td>
            <td className="bsr_td">668</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total fuel consumption (E)</td>
            <td className="bsr_td">710</td>
            <td className="bsr_td">680</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Energy consumption through other sources (F)
            </td>
            <td className="bsr_td">954</td>
            <td className="bsr_td">904</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total energy consumed from non-renewable sources (D+E+F)
            </td>
            <td className="bsr_td">815</td>
            <td className="bsr_td">749</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
