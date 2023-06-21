import { useState } from "react";
import "./itemCount.css";

export const ItemCount = ({ stock = 10 }) => {
	console.log(stock);
	const [initial, setInitial] = useState(1);

	const increment = () => {
		if (initial >= stock) return;
		setInitial((prev) => prev + 1);
	};

	const decrement = () => {
		if (initial <= 1) return;
		setInitial(initial - 1);
	};

	return (
		<div className="itemCount--container">
			<button className="itemCount--button" onClick={decrement}>
				-
			</button>
			<span className="itemCount--span">{initial}</span>
			<button className="itemCount--button" onClick={increment}>
				+
			</button>
		</div>
	);
};
