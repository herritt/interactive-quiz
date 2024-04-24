import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import PreviousQuizes from "./components/PreviousQuizes/PreviousQuizes";
import { Route, Routes } from "react-router-dom";
import StartQuiz from "./components/StartQuiz/StartQuiz";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Search />
							<PreviousQuizes />
						</>
					}
				/>
				<Route
					path="/startQuiz"
					element={
						<>
							<Header />
							<StartQuiz />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
