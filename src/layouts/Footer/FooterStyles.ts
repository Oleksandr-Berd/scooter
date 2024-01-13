import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
padding-top: 64px;
padding-bottom: 88px;

text-align: center;

background-color: #333a44;

& > div > *:first-of-type{
    margin-bottom: 41px;
}

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 35px;
    padding-bottom: 32px;
    padding-left: 40px;
    padding-right: 40px;

&>div{
    display: flex;
    flex-direction: row;
    align-items: center;

& > *:first-of-type{
    margin-bottom: 0;
    margin-right: 59px;
}
}

    & > *:first-of-type{
    margin-bottom: 0px;
}
}

@media (min-width: 1440px){
    padding-top: 36px;
    padding-bottom: 36px;
    padding-left: 165px;
    padding-right: 165px;
}
`