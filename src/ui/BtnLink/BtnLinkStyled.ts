import styled from "@emotion/styled";

export const LinkStyled = styled.a`
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