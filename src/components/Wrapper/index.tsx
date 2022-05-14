import React from "react";
import { RounetPaginatedData } from "../../types";
import Card from "../Card";
import { Container } from "./styles";

interface wrapperProps {
	data: RounetPaginatedData | undefined;
}

const Wrapper: React.FC<wrapperProps> = ({ data }) => {
	return (
		<Container>
			{data?.data?.map((item, index: number) => (
				<Card key={index} data={item} />
			))}
		</Container>
	);
};

export default Wrapper;
