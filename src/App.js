import React, { useState } from "react";
import "./styles.css";

import PrimarySearchAppBar from "./components/TopNavigationBar/PrimarySearchAppBar";
import SingIn from "./components/TopNavigationBar/SignIn";
import SingUp from "./components/TopNavigationBar/SignUp";
import Box from "@material-ui/core/Box";
import AllBooks from "./components/AllBooks/AllBooks";
import BooksTrendingGalary from "./components/BookTrendingGalary/BooksTrendingGalary";
export default function App() {
	let [showSingInFrom, setShowSingInFrom] = useState(false);
	let [showSingUpFrom, setShowSingUpFrom] = useState(false);
	const showLogInPage = () => {
		setShowSingInFrom(true);
		setShowSingUpFrom(false);
	};

	const handleSingUp = () => {
		setShowSingInFrom(false);
		setShowSingUpFrom(!showSingUpFrom);
		console.log("handling singUp....");
	};
	return (
		<div className="App">
			<PrimarySearchAppBar showLogInPage={showLogInPage} />
			{showSingInFrom ? (
				<SingIn handleSingUp={handleSingUp} handleSingIn={showLogInPage} />
			) : (
				<Box>
					<BooksTrendingGalary />
					<AllBooks />
				</Box>
			)}
			{showSingUpFrom ? (
				<SingUp handleSingUp={handleSingUp} handleSingIn={showLogInPage} />
			) : null}
		</div>
	);
}
