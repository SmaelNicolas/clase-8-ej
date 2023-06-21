import { useEffect, useState } from "react";
import "./users.css";

export const Users = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="users--container">
			{data.map((user) => (
				<div className="user--container" key={user.id}>
					<h3 className="user--name">{user.name}</h3>
					<p className="user--email">{user.email}</p>
				</div>
			))}
		</div>
	);
};
