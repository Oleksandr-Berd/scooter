import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const JoinSection = styled.section`
  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;

  text-align: center;
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
content: url(${props => props.bg});

    position: absolute;

    bottom: 0;

  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;

  font-size: 32px;
  line-height: 1;
  letter-spacing: -1.43px;

  color: #495567;
`;

export const Body = styled.p`
  margin-bottom: 32px;

  font-size: 15px;
  line-height: 1.67;

  color: #939caa;
`;
