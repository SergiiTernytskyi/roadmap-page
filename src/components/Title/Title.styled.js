import styled from "styled-components";

export const TitleStyled = styled.h1`
  margin: 0 auto;
  margin-bottom: 28px;

  font-family: "Black Han Sans";
  font-weight: 400;
  font-size: 40px;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  color: #1c303a;

  @media (min-width: 744px) {
    font-size: 48px;
  }
  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const TitleShadow = styled.div`
  position: absolute;
  top: 42px;
  left: 0px;
  right: 0;
  margin: 0 auto;
  z-index: -1;

  font-family: "Yellowtail";
  font-weight: 400;
  font-size: 80px;
  line-height: 1.06;
  text-align: center;
  text-transform: capitalize;
  color: #859a50;
  opacity: 0.2;

  @media (min-width: 744px) {
    font-size: 100px;
  }
  @media (min-width: 1440px) {
    font-size: 140px;
  }
`;
