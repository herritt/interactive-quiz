import React from "react";
import "./PreviousQuizes.css";

const PreviousQuizes = () => {
	// Sample data for previous quiz results
	const previousResults = [
		{ category: "General Knowledge", difficulty: "Hard", numQuestions: 5, score: 90 },
		{ category: "Musicals & Theatres", difficulty: "Medium", numQuestions: 8, score: 95 },
		{ category: "Computers", difficulty: "Easy", numQuestions: 10, score: 85 },
	];

	return (
		<div className="previous-quizes">
			<h2 className="quiz-results-heading">Previous Quiz Results</h2>
			<table className="quiz-results-table">
				<thead>
					<tr>
						<th className="table-header">Category</th>
						<th className="table-header">Difficulty</th>
						<th className="table-header"># Questions</th>
						<th className="table-header">Score</th>
					</tr>
				</thead>
				<tbody>
					{previousResults.map((result, index) => (
						<tr key={index}>
							<td className="table-cell">{result.category}</td>
							<td className="table-cell">{result.difficulty}</td>
							<td className="table-cell">{result.numQuestions}</td>
							<td className="table-cell">{result.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PreviousQuizes;
