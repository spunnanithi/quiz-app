import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const fetchData = async () => {
		const fetchConfig = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, fetchConfig);
		if (response.ok) {
			const content = await response.json();
			setData(content);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return data;
};

export default useFetch;
