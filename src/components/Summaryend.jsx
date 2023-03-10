import ReactToPrint from "react-to-print";
export function Summaryend(params) {
	const { componentRef } = params;
	return (
		<div className="reportmaincont__end">
			<div className="reportmaincont__downlaoddata">
				{/* <button onClick={generatePDF} className="reportmaincont__downlaodbtn">
          Download
        </button> */}
				<ReactToPrint
					trigger={() => (
						<button className="reportmaincont__downlaodbtn">
							Download Summary Page
						</button>
					)}
					content={() => componentRef.current}
				/>
			</div>
		</div>
	);
}
