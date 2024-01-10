import styled from "@emotion/styled";

export const VacanciesSection = styled.section`
padding-left: 32px;
padding-right: 32px;

margin-bottom: 120px;
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
}

& > p{
margin-bottom: 16px;

font-size: 15px;
line-height: 1.67;
}
`

