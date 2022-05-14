import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllRounetData, getPaginatedRounetData } from "../../services/rouanet.service";
import Wrapper from "../../components/Wrapper";
import { NextButton, Container, ButtonContainer, BackButton, ContentContainer } from "./styles";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import PaginationComponent from "../../components/PaginationComponent";

type Props = {
	children?: React.ReactNode;
};

const Home: React.FC<Props> = () => {
	const [page, setPage] = useState(0);
	const { isLoading, isError, data, error, isPreviousData } = useQuery(
		["todos", page],
		() => getPaginatedRounetData({ page, limit: 3 }),
		{ keepPreviousData: true }
	);

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Container>
					<ContentContainer>
						<ButtonContainer direction="back">
							<BackButton
								type="button"
								onClick={() => setPage((old) => Math.max(old - 1, 0))}
								disabled={false}
							>
								<MdNavigateBefore color="grey" size={40} />
							</BackButton>
						</ButtonContainer>
						<Wrapper data={data} />
						<ButtonContainer direction="next">
							<NextButton
								disabled={false}
								type="button"
								onClick={() => {
									if (!isPreviousData && data?.has_more) {
										setPage((old) => old + 1);
									}
								}}
							>
								<MdOutlineNavigateNext color="grey" size={40} />
							</NextButton>
						</ButtonContainer>
					</ContentContainer>
					<PaginationComponent
						currentPage={page}
						setPage={setPage}
						totalPages={data?.total_pages as number}
					/>
				</Container>
			)}
		</div>
	);
};

export default Home;
