import React, { useState, useEffect } from "react";

function App() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const numberOfObstacles = 100;
	const moveBall = (e) => {
		switch (e.key) {
			case "ArrowUp":
				setPosition((prev) => {
					return { x: prev.x, y: prev.y - 1 };
				});
				break;
			case "ArrowDown":
				setPosition((prev) => {
					return { x: prev.x, y: prev.y + 1 };
				});
				break;
			case "ArrowLeft":
				setPosition((prev) => {
					return { x: prev.x - 1, y: prev.y };
				});
				break;
			case "ArrowRight":
				setPosition((prev) => {
					return { x: prev.x + 1, y: prev.y };
				});
				break;
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", moveBall);
		return () => {
			document.removeEventListener("keydown", moveBall);
		};
	}, []);
	return (
		<Map numberOfObstacles={numberOfObstacles}>
			<Ball position={position} />
		</Map>
	);
}
function Map({ children, numberOfObstacles }) {
	const [obstacles, setObstacles] = useState([]);
	useEffect(() => {
		const map = generateMap(numberOfObstacles);
		setObstacles(map);
	}, []);
	const obstaclePositions = Array(numberOfObstacles)
		.fill()
		.map(() => {
			const x = Math.floor(Math.random() * 100) + "vw";
			const y = Math.floor(Math.random() * 100) + "vh";
			return { left: x, top: y };
		});
	const generateMap = (numberOfObstacles) => {
		const obstacles = [];
		for (let i = 0; i < numberOfObstacles; i++) {
			obstacles[i] = (
				<Obstacle obstaclePosition={obstaclePositions[i]} key={i} />
			);
		}
		return obstacles;
	};
	return (
		<>
			{obstacles}
			{children}
		</>
	);
}
function Ball({ position }) {
	return (
		<div
			id="ball"
			style={{
				left: position.x + "vh",
				top: position.y + "vh",
			}}
		></div>
	);
}
function Obstacle({ obstaclePosition }) {
	return <div className="obstacle" style={obstaclePosition}></div>;
}
export default App;
