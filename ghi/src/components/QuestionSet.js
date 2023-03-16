import React, { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";

const QuestionSet = (props) => {
	const [answers, setAnswers] = useState([]);
	const [correctAnswer, setCorrectAnswer] = useState("");

	useEffect(() => {
		const allAnswers = [];

		props.data.map((questionObj) => {
			questionObj.incorrectAnswers.map((answer) => allAnswers.push(answer));
			allAnswers.push(questionObj.correctAnswer);
			setCorrectAnswer(questionObj.correctAnswer);
		});

		setAnswers(allAnswers);
	}, [props]);

	const handleCorrectAnswer = (event) => {
		const value = event.target.value;
		if (value === correctAnswer) {
			props.isCorrectSetter(true);
		} else {
			props.isCorrectSetter(false);
		}
	};

	// create an array with the available numbers
	var numbers = [0, 1, 2, 3];

	// shuffle the array randomly
	function shuffle(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	// shuffle the array and pick the first element
	var shuffledNumbers = shuffle(numbers);

	return (
		<Row>
			<Col>
				<Stack gap={5} className="col-md-7 mx-auto">
					<Button
						id="buttons"
						value={answers[shuffledNumbers[0]]}
						onClick={handleCorrectAnswer}
						size="lg"
						variant="info">
						{answers[shuffledNumbers[0]]}
					</Button>
					<Button
						id="buttons"
						value={answers[shuffledNumbers[1]]}
						onClick={handleCorrectAnswer}
						size="lg"
						variant="info">
						{answers[shuffledNumbers[1]]}
					</Button>
				</Stack>
			</Col>
			<Col>
				<Stack gap={5} className="col-md-7 mx-auto">
					<Button
						id="buttons"
						value={answers[shuffledNumbers[2]]}
						onClick={handleCorrectAnswer}
						size="lg"
						variant="info">
						{answers[shuffledNumbers[2]]}
					</Button>
					<Button
						id="buttons"
						value={answers[shuffledNumbers[3]]}
						onClick={handleCorrectAnswer}
						size="lg"
						variant="info">
						{answers[shuffledNumbers[3]]}
					</Button>
				</Stack>
			</Col>
		</Row>
	);
};

export default QuestionSet;
