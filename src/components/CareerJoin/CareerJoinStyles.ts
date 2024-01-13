import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const JoinSection = styled.section`
  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    padding-left: 165px;
    padding-right: 165px;
  }
`;

export const ImageWrapper = styled.div<Partial<IStyles>>`
  position: relative;

  display: inline-block;

  margin-bottom: 56px;

  & > img {
    width: 311px;
    height: 311px;

    border-radius: 50%;
  }

  &::before {
    content: url(${(props) => props.bg});

    position: absolute;

    bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 64px;

    & > img {
      width: 445px;
      height: 445px;
    }

    &::before {
      transform: translateX(-100px);
    }

    &::after {
      content: url(${(props) => props.secBg});
      position: absolute;

      top: 0;
      right: 0;

      transform: translateX(115%);
    }
  }

  @media (min-width: 1440px){
    &::before {
      transform: translateX(-130px);
      z-index: 1;
    }
  }
`;

export const ContentWrapper = styled.div`
@media (min-width: 1440px){
  text-align: left;

  margin-right: 225px;
}
`

export const Title = styled.h2`
  margin-bottom: 32px;

  font-size: 32px;
  line-height: 1;
  letter-spacing: -1.43px;

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
