import React, { useCallback, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import useFetch from "../hooks/useFetch";
import QuestionSet from "./QuestionSet";
import CorrectAnswerPage from "./CorrectAnswerPage";
import IncorrectAnswerPage from "./IncorrectAnswerPage";
import StopButton from "./StopButton";
import ResultPage from "./ResultPage";

const QuestionPage = (props) => {
	const [isCorrect, setIsCorrect] = useState(null);
	const [isStopped, setIsStopped] = useState(null);
	const [category, setCategory] = useState("");
	const [question, setQuestion] = useState("");
	const [difficulty, setDifficulty] = useState("");

	const categoryDropdown = props.categoryDropdown;
	const numberOfQuestions = props.numberOfQuestions;

	const data = useFetch(
		"https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,history,geography,music,science,society_and_culture,sport_and_leisure&limit=1"
	);
	console.log(data);

	useEffect(() => {
		data.map((questionObj) => {
			setCategory(questionObj.category);
			setQuestion(questionObj.question);
			if (questionObj.difficulty) {
				setDifficulty(questionObj.difficulty.toUpperCase());
			}
		});
	}, [data]);

	// Function going to be passed as a prop so QuestionSet can update state
	const wrapperSetIsCorrectState = useCallback(
		(bool) => {
			setIsCorrect(bool);
		},
		[setIsCorrect]
	);

	const wrapperSetIsStoppedState = useCallback(
		(bool) => {
			setIsStopped(bool);
		},
		[setIsStopped]
	);

	if (isCorrect === true) {
		return <CorrectAnswerPage />;
	} else if (isCorrect === false) {
		return <IncorrectAnswerPage />;
	} else if (isStopped) {
		return <ResultPage />;
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
						<Row>
							<StopButton
								isStoppedSetter={wrapperSetIsStoppedState}
								isStopped={isStopped}
							/>
						</Row>
					</Container>
				</Card.Body>
				<Card.Footer id="card-footer" className="text-muted">
					Question 1 out of 1
				</Card.Footer>
			</Card>
		</>
	);
};

export default QuestionPage;
