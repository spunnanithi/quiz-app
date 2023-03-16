import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuestionPage from "./components/QuestionPage";
import { useState } from "react";

function App() {
	return (
		<>
			<Container
				fluid
				className="vh-100 vw-100 d-flex align-items-center justify-content-center"
				id="main-page">
				<QuestionPage />
			</Container>
		</>
	);
}

export default App;
