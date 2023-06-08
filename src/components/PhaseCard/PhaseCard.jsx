import { CardItem, CardList, CardTitle, ItemStyled } from "./PhaseCard.styles";

export const PhaseCard = ({ title, list }) => {
  return (
    <ItemStyled>
      <CardTitle>{title}</CardTitle>
      <CardList>
        {list.map((card, index) => {
          return <CardItem key={index}>{card}</CardItem>;
        })}
      </CardList>
    </ItemStyled>
  );
};
