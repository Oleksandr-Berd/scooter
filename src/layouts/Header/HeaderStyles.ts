import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
position: relative;

padding-top: 24px;
padding-bottom: 24px;
padding-left: 32px;

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 22px;
    padding-bottom: 21px;
    padding-left: 39px;
    padding-right: 40px;
}
`

export const MenuBtn = styled.button`
background-color: transparent;

border: none;
`