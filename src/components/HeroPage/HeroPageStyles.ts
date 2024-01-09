import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const HeroPageStyled = styled.section<Partial <IStyles>>`

padding-top: 60px;
padding-bottom: 60px;

margin-bottom: 72px;

text-align: center;

background-image: url(${props => props.bg});
`

export const Title = styled.h2`
font-size: 40px;
line-height: 1;
letter-spacing: -1.79px;

color: #fff;
`