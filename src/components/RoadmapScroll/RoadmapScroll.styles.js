import styled from "styled-components";

import backgroundImage from "../../images/background.svg";

export const Card = styled.section`
  position: relative;

  margin: 0 auto;
  padding-top: 120px;

  width: 1440px;
  height: 800px;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ListStyled = styled.ul`
  /* display: flex; */
  gap: 40px;
  overflow-x: scroll;
`;
