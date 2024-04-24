import React, { useState } from "react";
import "./Search.css";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		setSearchTerm(event.target.value);
	};

	return (
		<div className="search-container">
			<input
				className="search-bar"
				type="text"
				placeholder="Search for questions with a keyword..."
				onChange={(e) => setSearchTerm(e.target.value)}
				onSubmit={handleSearch}
			/>
			<button className="search-button" onClick={handleSearch} disabled={!searchTerm.length}>
				Search
			</button>
		</div>
	);
};

export default Search;
