import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const DownloadSection = styled.section<IStyles>`
position: relative;

overflow: hidden;

padding-top: 88px;
padding-bottom: 88px;
padding-left: 32px;
padding-right: 32px;

text-align: center;

background-color: #495567;

&::before{
content: url(${props => props.bg});

    position: absolute;

    bottom: 0;
    left: 0;

    transform: translateX(-52%);
}
`

export const DownloadTitle = styled.h2`
margin-bottom: 40px;

font-size: 32px;
line-height: 1;
letter-spacing: -1.43px;

color: #fff;
`

export const BtnCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > button:first-of-type{
    margin-right: 13px;
}

& svg{
    width: 114px;
    height: 40px;
}
`