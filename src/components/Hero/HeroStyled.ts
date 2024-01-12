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

@media (min-width: 768px){
    padding-top: 137px;
    padding-bottom: 217px;
    padding-left: 97px;
    padding-right: 98px;

    margin-bottom: 122px;

    &:before{
        transform: translateX(-127px) translateY(-34px);
    }

    &:after{
        content: url(${props => props.thirdBg});

        position: absolute;
        bottom: 0;
        right: 0;

        transform: translateX(31px) translateY(-45px);
    }
}
`

export const HeroTitle = styled.h2`
margin-bottom: 24px;

font-size: 40px;
letter-spacing: -1.79px;

@media (min-width: 768px){
    font-size: 56px;
    line-height: 1;
    letter-spacing: -2.5px;
}
`

export const HeroBody = styled.p`
margin-bottom: 34px;

font-size: 15px;
line-height: 1.67;

@media (min-width: 768px){
    margin-bottom: 32px;
}
`