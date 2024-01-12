import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const ManualSection = styled.section<Partial<IStyles>>`
  margin-bottom: 120px;

  @media (min-width: 768px) {
    position: relative;

    margin-bottom: 145px;

    &::before {
      content: url(${(props) => props.bg});
      position: absolute;
      top: 0;
      left: 0;
z-index: -1;
      transform: translateX(138px) translateY(-24%);
    }
  }
`;

export const ManualList = styled.ul`
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;
  }
`;

export const Item = styled.li`
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > div {
      text-align: left;
    }
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 96px;
    height: 96px;

    margin-bottom: 0;
    margin-right: 79px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.89px;

  color: #495567;

  @media (min-width: 768px) {
    margin-bottom: 27px;

    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -1.07px;
  }
`;

export const Body = styled.p`
  font-size: 15px;
  line-height: 1.67;

  color: #939caa;
`;
