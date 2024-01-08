import styled from "@emotion/styled";

export const HomeNavList = styled.ul`
  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;
`;

export const HomeNavItem = styled.li`

text-align: center;

  &:not(:last-child) {
    margin-bottom: 120px;
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
