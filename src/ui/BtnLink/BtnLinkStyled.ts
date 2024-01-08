import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LinkStyled = styled(NavLink)`
padding-top: 14px;
padding-bottom: 14px;
padding-left: ${props => props.content === "Learn More" ? "44px" : "39px"};
padding-right: ${props => props.content === "Learn More" ? "44px" : "39px"};

font-family: "Space";
font-size: 15px;
line-height: 1.67;

background-color: #fcb72b;
color: #fff;
`