import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllRounetData, getPaginatedRounetData } from "../../services/rouanet.service";
import Wrapper from "../../components/Wrapper";
import {
	NextButton,
	Container,
	ButtonContainer,
	BackButton,
	ContentContainer,
	FooterContainer,
	SeeMoreButton,
	Title,
	MainContainer,
} from "./styles";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import PaginationComponent from "../../components/PaginationComponent";
import { BsPlus, BsDash } from "react-icons/bs";
import Loading from "../../components/Loading";
import { AxiosError } from "axios";

type Props = {
	children?: React.ReactNode;
};

const Home: React.FC<Props> = () => {
	const [page, setPage] = useState(1);
	const [seeMore, setSeeMore] = useState(false);
	const { isLoading, isError, data, isPreviousData, error } = useQuery(
		["todos", page, seeMore],
		() => {
			if (!seeMore) {
				return getPaginatedRounetData({ page, limit: 3 });
			}

			return getAllRounetData();
		},
		{ keepPreviousData: true }
	);

	if (isError) {
		const axiosError = error as AxiosError | Error;

		return <div>Error: {axiosError?.message}</div>;
	}

	return (
		<MainContainer isLoading={isLoading}>
			{isLoading ? (
				<>
					<Loading />
					<span>Carregando...</span>
				</>
			) : (
				<Container>
					<Title>Ver outros projetos do Proponente</Title>
					<ContentContainer>
						{!seeMore && (
							<ButtonContainer direction="back">
								<BackButton
									type="button"
									onClick={() => setPage((old) => Math.max(old - 1, 0))}
									disabled={page === 1}
								>
									<MdNavigateBefore color="grey" size={40} />
								</BackButton>
							</ButtonContainer>
						)}
						<Wrapper data={data} />
						{!seeMore && (
							<ButtonContainer direction="next">
								<NextButton
									disabled={!data?.has_more}
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
						)}
					</ContentContainer>
					<FooterContainer seeMore={seeMore}>
						{!seeMore && (
							<PaginationComponent
								currentPage={page}
								setPage={setPage}
								totalPages={data?.total_pages as number}
							/>
						)}
						{seeMore ? (
							<SeeMoreButton type="button" onClick={() => setSeeMore(false)}>
								<BsDash color="grey" size={30} />
								<span>Ver menos</span>
							</SeeMoreButton>
						) : (
							<SeeMoreButton type="button" onClick={() => setSeeMore(true)}>
								<BsPlus color="grey" size={30} />
								<span>Ver todos</span>
							</SeeMoreButton>
						)}
					</FooterContainer>
				</Container>
			)}
		</MainContainer>
	);
};

export default Home;
