import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const HeroPageStyled = styled.section<Partial<IStyles>>`
  padding-top: 60px;
  padding-bottom: 60px;

  margin-bottom: 72px;

  text-align: center;

  background-image: url(${(props) => props.bg});

  @media (min-width: 768px) {
    position: relative;

    padding-top: 72px;
    padding-bottom: 72px;
    padding-left: 97px;

    text-align: left;

    &::after {
      content: url(${(props) => props.secBg});

      position: absolute;

      top: 0;
      right: 0;

      transform: translateY(69px) translateX(31px);
    }
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 1;
  letter-spacing: -1.79px;

  color: #fff;

  @media (min-width: 768px) {
    font-size: 56px;
    letter-spacing: -2.5px;
  }
`;
