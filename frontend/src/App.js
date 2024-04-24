import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import PreviousQuizes from "./components/PreviousQuizes/PreviousQuizes";

function App() {
	return (
		<div className="container">
			<Header />
			<Search />
			<PreviousQuizes />
		</div>
	);
}

export default App;
