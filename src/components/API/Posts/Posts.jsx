import { useEffect, useState } from "react";
import "./post.css";

export const Posts = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setData(data))

			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="posts--container">
			{data.map((post) => (
				<div className="post--container" key={post.id}>
					<h3 className="post--title">{post.title}</h3>
					<p className="post--body">{post.body}</p>
				</div>
			))}
		</div>
	);
};
