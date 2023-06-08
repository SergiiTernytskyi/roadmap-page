import styled from "styled-components";
import bambooFrame from "../../images/bambooFrame.svg";

export const ItemStyled = styled.div`
  position: relative;
  padding: 58px 100px 66px;
  flex-shrink: 0;

  width: 430px;
  height: 258px;

  background-image: url(${bambooFrame}),
    linear-gradient(to right, #fff1bb 0%, #fff1bb 100%);
  background-repeat: no-repeat;
  background-size: contain, 352px 213px;
  background-position: left top, 34px 20px;

  @media (min-width: 744px) {
    padding: 61px 116px 82px;

    width: 490px;
    height: 295px;

    background-size: contain, 407px 245px;
    background-position: left top, 41px 23px;
  }

  @media (min-width: 1440px) {
    padding: 76px 140px 92px;

    width: 605px;
    height: 364px;

    background-size: contain, 500px 280px;
    background-position: left top, 50px 38px;
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: 8px;

  font-family: "Nerko One";
  font-weight: 400;
  font-size: 28px;
  line-height: 1.2;
  color: #53865d;
  text-align: center;

  @media (min-width: 744px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const CardList = styled.ul`
  list-style: disc;
`;

export const CardItem = styled.li`
  :not(:last-child) {
    margin-bottom: 6px;
  }

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: #1c303a;

  @media (min-width: 744px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
