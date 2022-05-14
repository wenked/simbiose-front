import React from "react";
import { Container, PageButton } from "./styles";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { usePagination } from "../../hooks/usePagination";

interface PaginationComponentProps {
	setPage: React.Dispatch<React.SetStateAction<number>>;
	totalPages: number;
	currentPage: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
	setPage,
	totalPages,
	currentPage,
}) => {
	const paginationRange = usePagination({ totalPages, currentPage, siblingCount: 1 });

	return (
		<Container>
			{paginationRange?.map((page: number | string, index: number) => {
				if (page === "...") {
					return <BsThreeDots color="grey" />;
				}

				return (
					<PageButton
						key={index}
						onClick={() => {
							setPage(page as number);
						}}
					>
						{page === currentPage ? <BsCircleFill color="grey" /> : <BsCircle color="grey" />}
					</PageButton>
				);
			})}
		</Container>
	);
};

export default PaginationComponent;
