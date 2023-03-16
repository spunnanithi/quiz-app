import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";
import QuestionPage from "./QuestionPage";

const CorrectAnswerPage = () => {
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
							<Card.Title>Correct! Great Work!</Card.Title>
						</Col>
					</Row>
					<Row className="mt-3 mb-3">
						<Col>
							<img
								src="https://wallpapers.com/images/hd/happy-pug-dog-or1qpzzxyprup9wn.jpg"
								alt="happy pug"
								style={{ height: "250px", width: "400px" }}></img>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button
								onClick={handleNextQuestionButton}
								size="lg"
								variant="primary">
								Next Question
							</Button>
						</Col>
					</Row>
				</Container>
			</Card.Body>
			<Card.Footer id="card-footer" className="text-muted">
				Question 1 of out 1
			</Card.Footer>
		</Card>
	);
};

export default CorrectAnswerPage;
