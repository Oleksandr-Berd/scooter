import styled from "@emotion/styled";
import { IMap } from "../../utils/interfaces";

export const LocationsSection = styled.section`
  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 72px;

  text-align: center;

  & > img {
    width: 311px;
    height: 152px;

    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 40px;

    margin-bottom: 120px;

    & > img {
      width: 689px;
      height: 337px;
    }
  }
`;

export const MapWrapper = styled.div`
  position: relative;

  @media (min-width: 768px){
    display: inline-block;
  }
`;

export const List = styled.ul`
  margin-bottom: 72px;
`;

export const Item = styled.li<IMap>`
  padding-top: 22px;
  padding-bottom: 22px;

  background-color: #fff4df;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    position: absolute;

    top: 0;
    left: 0;

    width: 120px;

    transform: ${props => props.city === "New York" ? "translateY(50px) translateX(95px)" : props.city === "London" ? "translateY(20px) translateX(250px)": props.city === "Yokohama" ? "translateY(55px) translateX(530px)" : "translateY(150px) translateX(470px)"};


    padding-top: 2px;
    padding-bottom: 2px;

    font-family: "Space";
    font-size: 13px;
    letter-spacing: -0.58px;

    background-color: #fcb72b;
  }
`;

export const ContentWrapper = styled.div`
padding-left: calc(97px - 32px);
padding-right: calc(98px - 32px);
`

export const Title = styled.h2`
  margin-bottom: 32px;

  font-size: 32px;
  line-height: 1;

  color: #495567;

  @media (min-width: 768px){
    margin-bottom: 40px;

    font-size: 48px;
    letter-spacing: -2.14px;
  }
`;

export const Body = styled.p`
  margin-bottom: 32px;

  font-size: 15px;
  line-height: 1.67;

  color: #939caa;

  @media (min-width: 768px){
    margin-bottom: 40px;
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;

  bottom: 0;
  left: 0;

  transform: translateY(10px) translateX(50px);

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #fcb72b;
`;
