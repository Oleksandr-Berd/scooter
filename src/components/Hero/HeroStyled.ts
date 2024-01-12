import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const HeroCon = styled.section<IStyles>`
  position: relative;

  padding-top: 115px;
  padding-bottom: 179px;
  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;

  text-align: center;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;

  color: #fff;

  &:before {
    content: url(${(props) => props.secBg});

    position: absolute;

    bottom: 0;
    left: 0;

    transform: translateX(-312px) translateY(-34px);
  }

  @media (min-width: 768px) {
    padding-top: 137px;
    padding-bottom: 217px;
    padding-left: 97px;
    padding-right: 98px;

    margin-bottom: 122px;

    &:before {
      transform: translateX(-127px) translateY(-34px);
    }

    &:after {
      content: url(${(props) => props.thirdBg});

      position: absolute;
      bottom: 0;
      right: 0;

      transform: translateX(31px) translateY(-45px);
    }
  }

  @media (min-width: 1440px) {
    padding-top: 153px;
    padding-bottom: 152px;
    padding-left: 165px;

    text-align: left;

    &:before {
      transform: translateX(705px) translateY(-145px);
    }

    &:after {
      content: url(${(props) => props.thirdBg});

      position: absolute;
      bottom: 0;
      right: 0;

      transform: translateX(31px) translateY(-165px);
    }
  }
`;

export const HeroTitle = styled.h2`
  margin-bottom: 24px;

  font-size: 40px;
  letter-spacing: -1.79px;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1;
    letter-spacing: -2.5px;
  }

  @media (min-width: 1440px) {
    width: 500px;

    margin-bottom: 40px;
  }
`;

export const BodyWrapper = styled.div<Partial <IStyles>>`
  @media (min-width: 1440px) {
    position: relative;

    width: 405px;

    margin-left: calc(260px - 165px);

    &::before{
        content: url(${props => props.bg});
        position: absolute;
        top: 0;
        left: 0;

        transform: translateX(-260px) translateY(50px);
    }
  }
`;

export const HeroBody = styled.p`
  margin-bottom: 34px;

  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;
