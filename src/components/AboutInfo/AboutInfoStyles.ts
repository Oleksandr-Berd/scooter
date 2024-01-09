import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const InfoSection = styled.section`
margin-bottom: 120px;
`

export const List = styled.ul`
padding-left: 32px;
padding-right: 32px;
`

export const Item = styled.li<Partial <IStyles>>`
position: relative;


text-align: center;



&:first-of-type::before{
    content: url(${props => props.bg});

    position: absolute;
    top: 0;

    transform: translateY(80%);
}

&:last-child::before{
    content: url(${props => props.bg});

    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(-30%);
}

& >img{
    width: 311px;
    height: 311px;

    margin-bottom: 56px;

    border-radius: 50%;
}

& > h3{
    margin-bottom: 32px;

    font-size: 32px;
    line-height: 1;
    letter-spacing: -1.43px;
    
    color: #495567;
}

& > p{
    font-size: 15px;
    line-height: 1.67;

    color: #939caa;
}

&:not(:last-child){
    margin-bottom: 120px;
}
`