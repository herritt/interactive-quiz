import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const StartQuiz = () => {
	const location = useLocation(); // Access the location object
	const searchParams = new URLSearchParams(location.search); // Parse the search string

	const query = searchParams.get("query"); // Get specific query parameter

	useEffect(() => {
		const handler = setTimeout(() => {
			const fetchData = async () => {
				const res = await axios.get(`http://localhost:8080/api/questions?keyword=${query}`);
				console.log(res.data);
			};
			if (query) {
				fetchData();
			}
		}, 500); // Delay API call by 500ms

		return () => clearTimeout(handler); // Cleanup on effect re-run or component unmount
	}, [query]);

	return (
		<div>
			<h1>Start Quiz</h1>
			<p>Search Query: {query}</p>
			{/* You can now use `query` to fetch data or perform other logic */}
		</div>
	);
};

export default StartQuiz;
