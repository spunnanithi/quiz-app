import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import StartPage from "./StartPage";

const ResultPage = () => {
	const [isStartNewQuiz, setStartNewQuiz] = useState(false);

	const handleStartNewQuiz = () => {
		setStartNewQuiz(true);
	};

	if (isStartNewQuiz) {
		return <StartPage />;
	}
	return (
		<Card id="main-card" className="text-center w-75 h-75">
			<Card.Body className="d-flex align-items-center justify-content-center">
				<Container>
					<Button onClick={handleStartNewQuiz}>Start Another Quiz</Button>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default ResultPage;
