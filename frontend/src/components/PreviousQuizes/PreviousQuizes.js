import React from "react";
import "./PreviousQuizes.css";

const PreviousQuizes = () => {
	// Sample data for previous quiz results
	const previousResults = [
		{ searchTerm: "JavaScript", score: 90 },
		{ searchTerm: "React", score: 95 },
		{ searchTerm: "CSS", score: 85 },
	];

	return (
		<div className="previous-quizes">
			<h2 className="quiz-results-heading">Previous Quiz Results</h2>
			<table className="quiz-results-table">
				<thead>
					<tr>
						<th className="table-header">Search Term</th>
						<th className="table-header">Score</th>
					</tr>
				</thead>
				<tbody>
					{previousResults.map((result, index) => (
						<tr key={index}>
							<td className="table-cell">{result.searchTerm}</td>
							<td className="table-cell">{result.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PreviousQuizes;
