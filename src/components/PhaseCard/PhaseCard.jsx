import { CardItem, CardList, CardTitle, ItemStyled } from "./PhaseCard.styles";

export const PhaseCard = () => {
  return (
    <ItemStyled>
      <CardTitle>Phase 1</CardTitle>
      <CardList>
        <CardItem>Special events</CardItem>
        <CardItem>Launch social networks</CardItem>
        <CardItem>Launch token</CardItem>
        <CardItem>Launch token on DEX</CardItem>
      </CardList>
    </ItemStyled>
  );
};
