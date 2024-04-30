import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const url = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
	const [todo, setTodo] = useState([]);
	console.log(todo);

	const getTodos = async () => {
		const response = await axios.get(url);
		setTodo(response.data);
	};
	console.log(getTodos);

	useEffect(() => {
		getTodos();
	}, []);
	return (
		<div>
			<div className="container">
				<Content>
					{todo.map((item) => (
						<Cards key={item.id}>
							<h2>{item.name}</h2>
							<p>{item.username}</p>
							<p>
								<span>Email:</span>
								{item.email}
							</p>
							<p>
								<span>Website:</span>
								{item.website}
							</p>
						</Cards>
					))}
				</Content>
			</div>
		</div>
	);
};

export default Users;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 20px;
`;

const Cards = styled.div`
	border: 1px solid;
	border-radius: 5px;
`;
