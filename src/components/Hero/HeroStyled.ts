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

background-image: url(${props => props.bg});
background-repeat: no-repeat;
background-size: cover;

color: #fff;

&:before{
    content: url(${props => props.secBg});

    position: absolute;

    bottom: 0;
    left: 0;

    transform: translateX(-312px) translateY(-34px);
}
`

export const HeroTitle = styled.h2`
margin-bottom: 24px;

font-size: 40px;
letter-spacing: -1.79px;
`

export const HeroBody = styled.p`
margin-bottom: 34px;

font-size: 15px;
line-height: 1.67;
`