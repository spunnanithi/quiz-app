import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import ResultPage from "./ResultPage";

const StopButton = (props) => {
	const handleStopButton = () => {
		return props.isStoppedSetter(true);
	};
	return (
		<Col>
			<Button
				onClick={() => handleStopButton()}
				id="buttons"
				variant="danger"
				size="lg">
				Stop
			</Button>
		</Col>
	);
};

export default StopButton;
