import styled from "styled-components";

import backgroundImage from "../../images/background.svg";

export const Section = styled.section`
  position: relative;
  padding: 95px 20px 0;
  overflow: hidden;

  margin: 0 auto;

  width: 375px;
  height: 600px;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  @media (min-width: 744px) {
    padding: 95px 70px 0;
    width: 744px;
    height: 700px;
    background-size: cover;
    background-position: top left;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    background-size: contain;
    padding-top: 120px;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 40px;
  overflow-x: auto;
`;
