import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import PreviousQuizes from "./components/PreviousQuizes/PreviousQuizes";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./components/QuizPage/QuizPage";

function App() {
	const [quizSettings, setQuizSettings] = useState({});

	const startQuiz = (settings) => {
		setQuizSettings(settings);
		// Landing page will redirect to Quiz Component at this stage
	};

	return (
		<div className="container">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<LandingPage onStartQuiz={startQuiz} />
							<PreviousQuizes />
						</>
					}
				/>
				<Route
					path="/quiz"
					element={
						<>
							<Header />
							<QuizPage settings={quizSettings} />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
