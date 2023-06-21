import { useEffect, useState } from "react";
import "./comment.css";

export const Comments = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((response) => response.json())
			.then((data) => setData(data))

			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="comments--container">
			{data.map((comment) => (
				<div className="comment--container" key={comment.id}>
					<h3 className="comment--name">{comment.name}</h3>
					<p className="comment--email">{comment.email}</p>
				</div>
			))}
		</div>
	);
};
