import styled from "@emotion/styled";

export const LinkStyled = styled.a`
display: ${props => props.content === "Apply" && "block"};

padding-top: 14px;
padding-bottom: 14px;
padding-left: ${props => props.content === "Learn More" || "Say Hello" ? "44px" : "39px"};
padding-right: ${props => props.content === "Learn More" || "Say Hello" ? "44px" : "39px"};

margin-left: auto;
margin-right: auto;

font-family: "Space";
font-size: 15px;
line-height: 1.67;

background-color: #fcb72b;
color: #fff;
`