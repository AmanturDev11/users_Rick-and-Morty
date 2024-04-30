import { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch(" https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setTasks(data);
			});
	}, []);

	return (
		<div>
			<UserPages>
				{tasks.map((item) => (
					<UserCard key={item.id}>
						<h3>{item.name}</h3>
						<p>
							{" "}
							<SpnEmail>Email:</SpnEmail>
							{item.email}
						</p>
						<p>
							<SpnEmail>Website:</SpnEmail>
							{item.website}
						</p>
					</UserCard>
				))}
			</UserPages>
		</div>
	);
};

export default Users;

const UserPages = styled.div`
	display: flex;
	gap: 50px;
	flex-wrap: wrap;
`;
const UserCard = styled.div`
	width: 300px;
	height: 80px;
	margin: 10px;
	box-shadow: 1px 5px 5px #0000005c;
`;
const SpnEmail = styled.span`
	font-size: 15px;
	font-weight: 600;
`;
