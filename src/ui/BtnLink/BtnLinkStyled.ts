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

@media (min-width: 768px){
padding-left: ${props => props.content === "Apply" && "68px"};
padding-right: ${props => props.content === "Apply" && "67px"};

}
transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover, &:focus{
    background-color: #fff;
    color: #fcb72b;
    border: 1px solid #fcb72b;

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
`