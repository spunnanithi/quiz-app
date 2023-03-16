import React, { useState } from "react";
import QuestionPage from "./QuestionPage";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";

const StartPage = () => {
	const [startedQuiz, setStartedQuiz] = useState(false);

	const [categoryDropdown, setCategoryDropdown] = useState("");
	const [numberOfQuestions, setNumberOfQuestions] = useState("");

	const categories = [
		{ name: "Arts and Literature", value: "arts_and_literature" },
		{ name: "Film and TV", value: "film_and_tv" },
		{ name: "Food and Drink", value: "food_and_drink" },
		{ name: "General Knowledge", value: "general_knowledge" },
		{ name: "Geography", value: "geography" },
		{ name: "History", value: "history" },
		{ name: "Music", value: "music" },
		{ name: "Science", value: "science" },
		{ name: "Society and Culture", value: "society_and_culture" },
		{ name: "Sport and Leisure", value: "sport_and_leisure" },
	];

	const handleFormChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		if (name === "categorySelect") {
			setCategoryDropdown(value);
		} else if (name === "questionNumber") {
			setNumberOfQuestions(value);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setStartedQuiz(true);
	};

	if (startedQuiz) {
		return (
			<QuestionPage
				categoryDropdown={categoryDropdown}
				numberOfQuestions={numberOfQuestions}
			/>
		);
	} else {
		return (
			<Card id="main-card" className="text-center w-75 h-75">
				<Card.Body className="d-flex align-items-center justify-content-center">
					<Container>
						<Row>
							<Col className="text-center">
								<img
									className="text-center"
									style={{
										width: "200px",
										height: "200px",
									}}
									src="https://cdn2.iconfinder.com/data/icons/fantasy-characters/512/knight3-512.png"></img>
							</Col>
						</Row>
						<Row className="mb-4">
							<h1>Welcome to Trivia Paladin</h1>
						</Row>
						<Form onSubmit={handleSubmit}>
							<Row className="mb-4">
								<Form.Label htmlFor="categorySelect">
									Please select a category:{" "}
								</Form.Label>
								<Form.Select
									onChange={handleFormChange}
									name="categorySelect"
									id="categorySelect"
									value={categoryDropdown}>
									<option>Select a category</option>
									{categories.map((category, index) => {
										return (
											<option key={index} value={category.value}>
												{category.name}
											</option>
										);
									})}
								</Form.Select>
							</Row>
							<Row className="mb-4">
								<Form.Label htmlFor="questionNumber">
									Please enter number of questions:{" "}
								</Form.Label>
								<Form.Control
									onChange={handleFormChange}
									name="questionNumber"
									id="questionNumber"
									type="number"
									value={numberOfQuestions}></Form.Control>
							</Row>
							<Row>
								<Button type="submit">Start Quiz</Button>
							</Row>
						</Form>
					</Container>
				</Card.Body>
			</Card>
		);
	}
};

export default StartPage;
