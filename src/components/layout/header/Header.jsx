import { useState } from "react";
// import scss from "./Header.module.scss";
import Users from "../../users/Users";
import Admin from "../../admin/Admin";
import styled from "styled-components";
// import RickAndMorty from "../../rickAndMorty/RickAndMorty";

const Header = () => {
	const [tasks, setTasks] = useState("home");
	const handleClick = (page) => {
		setTasks(page);
	};

	return (
		<header>
			<ContentTop></ContentTop>
			<div className="container">
				<Content>
					<nav>
						<ul>
							<ButtonClass onClick={() => handleClick("home")}>
								Users
							</ButtonClass>
							<ButtonClass onClick={() => handleClick("admin")}>
								Admin
							</ButtonClass>
							<ButtonClass onClick={() => handleClick("Rick and Morty")}>
								Rick and Morty
							</ButtonClass>
							<StyledButton>Logout</StyledButton>
						</ul>
					</nav>
				</Content>
			</div>
			{tasks === "home" && <Users />}
			{tasks === "admin" && <Admin />}
			{/* {tasks === "Rick and Morty" && <RickAndMorty />} */}
		</header>
	);
};

export default Header;

const ContentTop = styled.div`
	width: 100%;
	height: 15px;
	background-color: blue;
`;

const Content = styled.div`
	background-color: darkorchid;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 120px;
	nav {
		ul {
			display: flex;
			gap: 40px;
		}
	}
`;

const ButtonClass = styled.button`
	height: 50px;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
`;
const StyledButton = styled.button`
	width: 180px;
	width: 180px;
	height: 50px;
	border-radius: 30px;
	background-color: deeppink;
	border: none;
	cursor: pointer;
	font-size: 20px;
`;
