import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
padding-top: 64px;
padding-bottom: 88px;

text-align: center;

background-color: #333a44;

& > *:first-of-type{
    margin-bottom: 41px;
}

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding-top: 35px;
    padding-bottom: 32px;
    padding-left: 40px;
    padding-right: 40px;

    & > *:first-of-type{
    margin-bottom: 0px;
    margin-right: 59px;
}
}
`