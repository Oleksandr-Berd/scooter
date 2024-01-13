import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const HomeNavList = styled.ul`
  overflow: hidden;

  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;

    margin-bottom: 104px;
  }

  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;

    margin-bottom: 200px;
  }
`;

export const HomeNavItem = styled.li<Partial<IStyles>>`
  position: relative;

  text-align: center;

  &:not(:last-child) {
    margin-bottom: 120px;
  }

  &::before {
    content: url(${(props) => props.bg});
    position: absolute;
    top: 0;
    left: 0;
  }

  &:nth-child(1)::before {
    transform: translateY(170px);
  }

  &:nth-child(2)::before {
    transform: translateX(-50%);
  }

  &:nth-child(3)::before {
    transform: translateX(13%);
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 128px;
    }

    &:nth-child(1)::before {
      transform: translateY(307px) translateX(-60px);
    }

    &:nth-child(odd)::after {
      content: url(${(props) => props.secBg});
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;

      transform: translateX(calc(350px + 104px));
    }

    &:nth-child(even)::after {
      content: url(${(props) => props.secBg});
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      transform: translateX(calc(-350px - 104px));
    }

    &:nth-child(3)::before {
      transform: translateX(295px) translateY(85px);
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      text-align: left;
    }

    &:nth-child(odd)::after {
      transform: translateX(calc(350px + 164px));
    }

    &:nth-child(even)::after {
      transform: translateX(calc(-350px - 164px));
    }

    &:nth-child(odd) > div {
      margin-right: 220px;
    }

    &:nth-child(even) > div {
      margin-left: 220px;
    }

    &:nth-child(1)::before{
      left: auto;
      right: 0;
      transform: translateY(307px) translateX(160px);
    }

    &:nth-child(2)::before {
    transform: translateX(-65%);
  }

  &:nth-child(3)::before {
    right: 0;
    left: auto;
      transform: translateX(500px) translateY(85px);
    }
  }
`;

export const Image = styled.img`
  width: 311px;
  height: 311px;

  margin-bottom: 56px;

  border-radius: 50%;

  @media (min-width: 768px) {
    width: 445px;
    height: 445px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 32px;

  font-size: 32px;
  letter-spacing: -1.43px;
  line-height: 1;

  color: #495567;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
