import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setToken }) => {
	const [username, setUsername] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [password, setPassword] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsFormValid(username.length > 0 || password.length > 0);
	}, [username, password]);

	const handleUsernameChange = (e) => {
		const newUsername = e.target.value;
		setUsername(newUsername);

		// Validate username length
		if (newUsername.length < 5) {
			setUsernameError("Username must be at least 5 characters");
		} else {
			setUsernameError(""); // Clear error if the username is valid
		}
	};

	const handleSignUp = (e) => {
		e.preventDefault();

		axios
			.post(`${process.env.REACT_APP_API_URL}/user/`, { username, password })
			.then((response) => {
				if (response.status === 200) {
					console.log("Successfully signed up!");
				}
			})
			.catch((error) => {
				console.error("Error signup:", error);
				// Handle the error if needed
			});
	};

	return (
		<>
			<>
				<div className="sign_up_container">
					<h2 className="sign_up_h2">Sign Up</h2>
					<label>Username:</label>
					<input
						type="text"
						className="sign_up_component"
						placeholder="Enter a username"
						value={username}
						onChange={handleUsernameChange}
					/>
					{usernameError && <p className="error_message">{usernameError}</p>}
					<label>Password:</label>
					<input
						type="password"
						className="sign_up_component"
						placeholder="Enter a password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button disabled={!isFormValid} onClick={handleSignUp}>
						Sign Up
					</button>
				</div>
				<div>
					<button className="transition_button" onClick={() => navigate("/")}>
						Already have an account? Click here to Login!
					</button>
				</div>
			</>
		</>
	);
};

export default SignUp;
