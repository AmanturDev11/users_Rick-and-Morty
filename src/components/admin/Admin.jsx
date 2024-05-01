import styled from "styled-components";

const Admin = () => {
	return (
		<div>
			<div className="container">
				<Content>
					<h1>Admin Пока нету</h1>
				</Content>
			</div>
		</div>
	);
};

export default Admin;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 1s;
	margin-top: 2rem;
	color: #6cf80f;
	cursor: pointer;
	&:hover {
		color: red;
	}
`;
