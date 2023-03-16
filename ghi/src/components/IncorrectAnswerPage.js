import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import QuestionPage from "./QuestionPage";

const IncorrectAnswerPage = () => {
	const [nextQuestionClicked, setNextQuestionClicked] = useState(false);

	const handleNextQuestionButton = () => {
		return setNextQuestionClicked(true);
	};

	if (nextQuestionClicked) {
		return <QuestionPage />;
	}
	return (
		<Card id="main-card" className="text-center w-75 h-75">
			<Card.Body className="d-flex align-items-center justify-content-center">
				<Container>
					<Row>
						<Col>
							<Card.Title>Incorrect! Better luck next time!</Card.Title>
						</Col>
					</Row>
					<Row className="mt-3 mb-3">
						<Col>
							<img
								src="https://i.kym-cdn.com/photos/images/facebook/000/995/349/9c9.jpg"
								alt="happy pug"
								style={{ height: "300px", width: "300px" }}></img>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button
								id="buttons"
								onClick={handleNextQuestionButton}
								size="lg"
								variant="info">
								Next Question
							</Button>
						</Col>
					</Row>
				</Container>
			</Card.Body>
			<Card.Footer id="card-footer" className="text-muted">
				Question 1 out of 1
			</Card.Footer>
		</Card>
	);
};

export default IncorrectAnswerPage;
