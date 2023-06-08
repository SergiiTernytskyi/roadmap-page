import styled from "styled-components";
import bambooFrame from "../../images/bambooFrame.svg";

export const ItemStyled = styled.li`
  position: relative;
  padding: 76px 140px 92px;
  flex-shrink: 0;

  width: 605px;
  height: 364px;

  background-image: url(${bambooFrame}),
    linear-gradient(to right, #fff1bb 0%, #fff1bb 100%);
  background-repeat: no-repeat;
  background-size: contain, 500px 280px;
  background-position: left top, 50px 38px;
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
  list-style: disc;
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
