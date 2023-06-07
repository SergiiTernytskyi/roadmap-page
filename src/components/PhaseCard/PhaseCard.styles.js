import styled from "styled-components";
import bambooFrame from "../../images/bambooFrame.svg";

export const ItemStyled = styled.article`
  position: relative;
  padding: 76px 105px 92px;

  width: 605px;
  height: 364px;

  background-color: #fff1bb;
  background-image: url(${bambooFrame});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const CardTitle = styled.h2`
  margin-bottom: 8px;

  font-family: "Nerko One";
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;
  color: #53865d;
  text-align: center;
`;

export const CardList = styled.ul`
  list-style: circle inside;

  ::before {
    content: " ";
    position: absolute;
    left: 50px;
    top: 38px;

    width: 500px;
    height: 280px;
  }
`;

export const CardItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }

  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  color: #1c303a;
`;
