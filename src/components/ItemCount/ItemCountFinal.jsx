import { useCount } from "../../hooks/useCount";
import "./itemCount.css";

export const ItemCount = () => {
	const { count, increment, decrement } = useCount(2, 15);
	return (
		<div className="itemCount--container">
			<button className="itemCount--button" onClick={() => decrement()}>
				-
			</button>
			<span className="itemCount--span">{count}</span>
			<button className="itemCount--button" onClick={() => increment()}>
				+
			</button>
		</div>
	);
};
