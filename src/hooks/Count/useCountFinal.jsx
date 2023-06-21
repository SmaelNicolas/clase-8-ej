import { useState } from "react";

export const useCount = (initial = 1, stock) => {
	const [count, setCount] = useState(initial);

	const increment = (inc = 1) => {
		if (count >= stock) return;
		setCount(count + inc);
	};

	const decrement = (inc = 1) => {
		if (count <= initial) return;
		setCount(count - inc);
	};

	return { count, increment, decrement };
};
