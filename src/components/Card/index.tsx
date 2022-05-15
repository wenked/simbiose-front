import React from "react";
import { Rounet } from "../../types";
import {
	Container,
	Content,
	Button,
	ButtonContainer,
	Description,
	Label,
	Title,
	ValuesContainer,
	Values,
} from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import formatter from "../../utils/formatter";

interface CardProps {
	data: Rounet | undefined;
}

const MAX_LENGTH = 250;
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in`;

const Card: React.FC<CardProps> = ({ data }) => {
	const [isLiked, setIsLiked] = React.useState(false);

	return (
		<Container>
			<Content>
				<Label>
					<span>ROUANET</span>
				</Label>
				<Title>
					{(data?.nome.length as number) > 30 ? `${data?.nome.substring(0, 30)}...` : data?.nome}
				</Title>

				<Description>
					<span>
						{data?.municipio} - {data?.uf}
					</span>
					<p>
						{(data?.resumo.length as number) > MAX_LENGTH
							? `${data?.resumo.substring(0, MAX_LENGTH)}...`
							: data?.resumo}
					</p>
				</Description>
				<ValuesContainer>
					<Values>
						<span>Aprovado</span>
						<span className="price">{formatter(Number(data?.valor_aprovado))}</span>
					</Values>
					<Values>
						<span>Captado</span>
						<span className="price">{formatter(Number(data?.valor_captado))}</span>
					</Values>
				</ValuesContainer>
				<ButtonContainer>
					<Button onClick={() => {}}>ADICIONAR</Button>
					{isLiked ? (
						<AiFillHeart
							color="grey"
							style={{ cursor: "pointer" }}
							size={30}
							onClick={() => setIsLiked(!isLiked)}
						/>
					) : (
						<AiOutlineHeart
							style={{ cursor: "pointer" }}
							color="grey"
							size={30}
							onClick={() => setIsLiked(!isLiked)}
						/>
					)}
				</ButtonContainer>
			</Content>
		</Container>
	);
};

export default Card;
