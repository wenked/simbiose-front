import styled, { css } from "styled-components";

interface ButtonContainerProps {
	direction: "back" | "next";
}

interface FooterContainerProps {
	seeMore: boolean;
}

interface MainContainerProps {
	isLoading: boolean;
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
		}
	}
`;

export const MainContainer = styled.div<MainContainerProps>`
	${({ isLoading }) => {
		if (isLoading) {
			return css`
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				margin-top: 100px;
				span {
					font-size: 30px;
					font-weight: 400;
					color: grey;
				}
			`;
		}
		return ``;
	}}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	width: 1350px;
`;

export const FooterContainer = styled.div<FooterContainerProps>`
	${({ seeMore }) =>
		seeMore &&
		css`
			justify-content: flex-end;
		`}

	display: flex;
	flex-direction: row;
`;

export const SeeMoreButton = styled.button`
	display: flex;
	border: none;
	background: transparent;
	cursor: pointer;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	color: #008b8b;
	margin-left: 130px;
	margin-top: 20px;
	font-weight: 400;
`;
