import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const HomeNavList = styled.ul`
overflow: hidden;

  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;
`;

export const HomeNavItem = styled.li<Partial <IStyles>>`
position: relative;


text-align: center;

  &:not(:last-child) {
    margin-bottom: 120px;
  }

&::before{
    content: url(${props => props.bg});
    position: absolute;
    top: 0;
    left: 0;
}

&:nth-child(1)::before{
    transform: translateY(170px);
}

&:nth-child(2)::before{
    transform: translateX(-50%);
}

&:nth-child(3)::before{
    transform: translateX(13%);
}
`;

export const Image = styled.img`
width: 311px;
height: 311px;

margin-bottom: 56px;

border-radius: 50%;
`

export const Title = styled.h3`
margin-bottom: 32px;

font-size: 32px;
letter-spacing: -1.43px;
line-height: 1;

color: #495567;
`

export const Body = styled.p`
margin-bottom: 32px;

font-size: 15px;
line-height: 1.67;

color: #939CAA;
`
