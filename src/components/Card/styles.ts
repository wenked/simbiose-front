import styled from "styled-components";

export const Container = styled.div`
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 22rem;
	height: 25rem;
`;

export const Content = styled.div`
	padding: 12px;
`;

export const Label = styled.div`
	padding: 1rem;
	font-weight: bold;
	background-color: #ffffcc;
	color: #cc9900;
	border-radius: 5px;
	width: 5rem;
	height: 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-size: 0.8rem;
		text-align: center;
		justify-content: center;
		margin: 1rem;
	}
`;

export const Title = styled.h1`
	padding: 0.8rem;
	font-size: 1rem;
	font-weight: 500;
	height: 45px;
`;

export const Description = styled.div`
	padding: 0 1rem;
	font-size: 0.8rem;
	color: #787878;
	text-align: justify;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	span {
		margin-bottom: 1rem;
	}

	p {
		height: 90px;
	}
`;

export const ValuesContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Values = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0.3rem;

	.price {
		font-weight: bold;
	}
`;

export const ButtonContainer = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Button = styled.button`
	padding: 1rem;
	font-weight: 400;
	font-size: 1rem;
	background-color: #e5e4e2;
	color: #808080;
	border: none;
	width: 15rem;
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		background-color: #787878;
		color: white;
	}

	&:active {
		background-color: #787878;
		color: white;

		transform: translateY(4px);
	}
`;
