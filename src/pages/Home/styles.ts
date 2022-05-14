import styled, { css } from "styled-components";

interface ButtonContainerProps {
	direction: "back" | "next";
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
	${({ direction }) =>
		direction === "back"
			? css`
					left: 110px;
			  `
			: css`
					right: 15px;
			  `}
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const BackButton = styled.button`
	border-radius: 50%;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	cursor: pointer;
	background: white;
	border: none;
	&& {
		&:disabled {
			cursor: not-allowed;
			opacity: 0.6;
			background-color: red;
		}
	}
`;

export const NextButton = styled.button`
	border-radius: 50%;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	cursor: pointer;
	background: white;
	border: none;

	&& {
		&:disabled {
			cursor: not-allowed;
			opacity: 0.6;
			background-color: red;
		}
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
