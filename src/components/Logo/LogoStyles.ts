import styled from "@emotion/styled"
import { ILocation } from "../../utils/interfaces"

export const LogoStyled = styled.div<ILocation>`
position: ${props => props.location === "header" ? "absolute" : "static"};
top: ${props =>props.location==="header" ? "0" : "auto"};
left: ${props => props.location==="header" ? "calc(50% - 75.5px / 2)" : "auto"} ;

transform: ${props => props.location === "header" && "translateY(22px)"} ;

display: inline-block;

& > svg{
    width: ${props => props.location === "header" ? "75.5px" : "108px"} ;
    height: ${props => props.location === "header" ? "20px" : "29px"};

    fill: ${props => props.location === "header" ? "#495567" : "#fff"}
}

@media (min-width: 768px){
    position: static;

    top: auto;
    left: auto;
    transform: translateY(0);

    & > svg{
    width: ${props => props.location === "header" ? "108px" : "108px"} ;
    height: ${props => props.location === "header" ? "29px" : "29px"};
}

@media (min-width: 1440px){
    margin-right: 58px;
}
}
`