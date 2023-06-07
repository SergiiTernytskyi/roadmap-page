import { CardItem, CardList, CardTitle, ItemStyled } from "./PhaseCard.styles";

export const PhaseCard = ({ title, list }) => {
  return (
    <ItemStyled>
      <CardTitle>{title}</CardTitle>
      <CardList>
        {list.map((card) => {
          return <CardItem>{card}</CardItem>;
        })}
      </CardList>
    </ItemStyled>
  );
};
