import React from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = ({ setToken, setIsAuthenticated }) => {
	localStorage.removeItem("token");
	localStorage.removeItem("username");
	setToken(null);
	setIsAuthenticated(false);

	return (
		<>
			<div className="logOut">
				<h2>You have been logged out</h2>
				<p>Please log in again to continue</p>
				<Link to="/">Login</Link>
			</div>
		</>
	);
};

export default Logout;
