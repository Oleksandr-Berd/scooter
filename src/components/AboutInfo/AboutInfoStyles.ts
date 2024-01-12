import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const InfoSection = styled.section`
  margin-bottom: 120px;
`;

export const List = styled.ul`
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;
  }
`;

export const Item = styled.li<Partial<IStyles>>`
  position: relative;

  text-align: center;

  &:first-of-type::before {
    content: url(${(props) => props.bg});

    position: absolute;
    top: 0;

    transform: translateY(80%);
  }

  &:last-child::before {
    content: url(${(props) => props.bg});

    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(-30%);
  }

  & > img {
    width: 311px;
    height: 311px;

    margin-bottom: 56px;

    border-radius: 50%;
  }

  & > h3 {
    margin-bottom: 32px;

    font-size: 32px;
    line-height: 1;
    letter-spacing: -1.43px;

    color: #495567;
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;

    color: #939caa;
  }

  &:not(:last-child) {
    margin-bottom: 120px;
  }

  @media (min-width: 768px) {
    &:first-of-type::before {
      transform: translateY(268px) translateX(-130px);
    }

    &:first-of-type::after {
      content: url(${(props) => props.secBg});
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;

      transform: translateX(100%);
    }

    &:last-child::before {
      transform: translateX(-45%);
    }

    &:last-child::after {
      content: url(${(props) => props.secBg});
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;

      transform: translateX(-100%);
    }

    & > img {
      width: 445px;
      height: 445px;
    }

    & > h3 {
      margin-bottom: 40px;

      font-size: 48px;
      letter-spacing: -2.14px;
    }
  }
`;
