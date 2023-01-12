export function Bsrtable4() {
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
            <th className="bsr_th">FY 2022 (Current Financial Year)</th>
            <th className="bsr_th">FY 2021 (Previous Financial Year)</th>
          </tr>
        </thead>
        <tbody className="bsr_body">
          <tr className="bsr_tr">
            <td className="full_colspan" colSpan="3">
              Total Waste generated (in metric tonnes)
            </td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Plastic waste (A)</td>
            <td className="bsr_td">685</td>
            <td className="bsr_td">782</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">E-waste (B)</td>
            <td className="bsr_td">455</td>
            <td className="bsr_td">455</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Bio-medical waste (C)</td>
            <td className="bsr_td">834</td>
            <td className="bsr_td">513</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Construction and demolition waste (D)</td>
            <td className="bsr_td">651</td>
            <td className="bsr_td">509</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Battery waste (E)</td>
            <td className="bsr_td">835</td>
            <td className="bsr_td">642</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Radioactive waste (F)</td>
            <td className="bsr_td">898</td>
            <td className="bsr_td">734</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Other Hazardous waste. Please specify, if any. (G)
            </td>
            <td className="bsr_td">500</td>
            <td className="bsr_td">500</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Other Non-hazardous waste generated (H).Please specify, if
              any.(Break-up by composition i.e. by materials relevant to the
              sector)
            </td>
            <td className="bsr_td">872</td>
            <td className="bsr_td">765</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total (A+B + C + D + E + F + G + H)</td>
            <td className="bsr_td">952</td>
            <td className="bsr_td">738</td>
          </tr>
          <tr className="bsr_tr">
            <td className="full_colspan" colSpan="3">
              For each category of waste generated, total waste recovered
              through recycling, re-using or other recovery operations (in
              metric tonnes)
            </td>
          </tr>
          <tr className="bsr_tr">
            <td className="full_colspan" colSpan="3">
              Category of waste
            </td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(i) Recycled</td>
            <td className="bsr_td">500</td>
            <td className="bsr_td">500</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(ii) Re-used</td>
            <td className="bsr_td">881</td>
            <td className="bsr_td">832</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(iii) Other recovery operations</td>
            <td className="bsr_td">924</td>
            <td className="bsr_td">521</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total</td>
            <td className="bsr_td">690</td>
            <td className="bsr_td">555</td>
          </tr>
          <tr className="bsr_tr">
            <td className="full_colspan" colSpan="3">
              Category of waste
            </td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(i) Incineration</td>
            <td className="bsr_td">776</td>
            <td className="bsr_td">508</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(ii) Landfilling</td>
            <td className="bsr_td">924</td>
            <td className="bsr_td">884</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(ii) Landfilling</td>
            <td className="bsr_td">813</td>
            <td className="bsr_td">771</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">(iii) Other disposal operations</td>
            <td className="bsr_td">817</td>
            <td className="bsr_td">530</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
