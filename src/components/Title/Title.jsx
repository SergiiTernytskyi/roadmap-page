import { TitleShadow, TitleStyled } from "./Title.styled";

export const Title = ({ children }) => {
  return (
    <>
      <TitleShadow>{children}</TitleShadow>
      <TitleStyled>{children}</TitleStyled>
    </>
  );
};
