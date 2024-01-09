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
`