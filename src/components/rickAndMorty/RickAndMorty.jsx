import { useEffect, useState } from "react";
import styled from "styled-components";

const RickAndMorty = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => {
				setCards(data.results);
			});
	}, []);

	const getStatusColor = (status) => {
		switch (status) {
			case "Alive":
				// case "Animal":
				return "#18f000";
			case "Dead":
				return "#ff1900";
			default:
				return "#676767";
		}
	};

	return (
		<div>
			<div className="container">
				<RickPages>
					{cards.map((item) => (
						<div key={item.id} style={colorCondition}>
							<img src={item.image} alt={item.name} style={imageStyle} />
							<h2>{item.name}</h2>
							<div
								style={{
									width: "20px",
									height: "20px",
									borderRadius: "20px",
									backgroundColor: getStatusColor(item.status),
								}}></div>
							<p>
								Status:{"  "}
								<span style={{ color: getStatusColor(item.status) }}>
									{item.status}
								</span>
							</p>
							<p>Species: {item.species}</p>
							<p>Gender: {item.gender}</p>
						</div>
					))}
				</RickPages>
			</div>
		</div>
	);
};

export default RickAndMorty;

const imageStyle = {
	width: "100%",
	marginBottom: "10px",
	borderRadius: "5px",
};

const RickPages = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: "black";
`;

const colorCondition = {
	backgroundColor: "rgba(67, 62, 62, 0.702)",
	borderRadius: "10px",
	padding: "20px",
	margin: "10px",
	boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
	width: "270px",
	cursor: "pointer",
};
