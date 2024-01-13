import styled from "@emotion/styled";

export const VacanciesSection = styled.section`
padding-left: 32px;
padding-right: 32px;

margin-bottom: 120px;

@media (min-width: 1440px){
    padding-left: 165px;
    padding-right: 165px;
}
`

export const Item = styled.li`
padding-top: 36px;
padding-bottom: 32px;
padding-left: 32px;
padding-right: 32px;

text-align: center;

background-color: #f2f5f9;
color: #495567;

&:not(:last-child){
    margin-bottom: 16px;
}

& >h3{
margin-bottom: 4px;

font-size: 18px;
line-height: 1.33;
letter-spacing: -0.8px;

color: #495567;

@media (min-width: 768px){
    margin-bottom: 8px;

    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -1.07px;
}
}

& > p{

font-size: 15px;
line-height: 1.67;
}

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 34px;
    padding-bottom: 33px;
    padding-left: 48px;
    padding-right: 48px;
}
`

export const ContentWrapper = styled.div`
margin-bottom: 16px;

@media (min-width: 768px){
    text-align: left;
}
`

