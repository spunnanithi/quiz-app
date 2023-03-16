import React, { useCallback, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";
import useFetch from "../hooks/useFetch";
import QuestionSet from "./QuestionSet";
import CorrectAnswerPage from "./CorrectAnswerPage";
import IncorrectAnswerPage from "./IncorrectAnswerPage";

const QuestionPage = () => {
	const [isCorrect, setIsCorrect] = useState(null);
	const [category, setCategory] = useState("");
	const [question, setQuestion] = useState("");
	const [difficulty, setDifficulty] = useState("");

	const data = useFetch(
		"https://the-trivia-api.com/api/questions?limit=1&categories=science,history"
	);
	console.log(data[0]);

	useEffect(() => {
		data.map((questionObj) => {
			setCategory(questionObj.category);
			setQuestion(questionObj.question);
			setDifficulty(questionObj.difficulty.toUpperCase());
		});
	}, [data]);

	// Function going to be passed as a prop so QuestionSet can update state
	const wrapperSetIsCorrectState = useCallback(
		(bool) => {
			setIsCorrect(bool);
		},
		[setIsCorrect]
	);

	if (isCorrect === true) {
		return <CorrectAnswerPage />;
	} else if (isCorrect === false) {
		return <IncorrectAnswerPage />;
	}
	return (
		<>
			<Card id="main-card" className="text-center w-75 h-75">
				<Card.Header id="card-header">Category: {category}</Card.Header>
				<Card.Body className="d-flex align-items-center justify-content-center">
					<Container>
						<Row className="mb-3">
							<Card.Title>Question: {question}</Card.Title>
						</Row>
						<Row className="mb-3">
							<Card.Text>Difficulty: {difficulty}</Card.Text>
						</Row>
						<QuestionSet
							data={data}
							isCorrectSetter={wrapperSetIsCorrectState}
							isCorrect={isCorrect}
						/>
					</Container>
				</Card.Body>
				<Card.Footer id="card-footer" className="text-muted">
					Question 1 of out {data.length}
				</Card.Footer>
			</Card>
		</>
	);
};

export default QuestionPage;
