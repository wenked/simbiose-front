import React from "react";
import { RouanetData, RounetPaginatedData } from "../../types";
import Card from "../Card";
import { Container } from "./styles";

interface wrapperProps {
	data: RouanetData | RounetPaginatedData | undefined;
}

const Wrapper: React.FC<wrapperProps> = ({ data }) => {
	return (
		<Container>
			{data?.data?.map((item, index) => (
				<Card key={index} data={item} />
			))}
		</Container>
	);
};

export default Wrapper;
