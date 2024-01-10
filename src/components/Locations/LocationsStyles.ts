import styled from "@emotion/styled";

export const LocationsSection = styled.section`
padding-left: 32px;
padding-right: 32px;

margin-bottom: 72px;

text-align: center;

& > img{
    width: 311px;
    height: 152px;

    margin-bottom: 40px;
}
`

export const List = styled.ul`
margin-bottom: 72px;
`

export const Item = styled.li`
padding-top: 22px;
padding-bottom: 22px;

background-color: #FFF4df;

&:not(:last-child){
    margin-bottom: 16px;
}
`

export const Title = styled.h2`
margin-bottom: 32px;

font-size: 32px;
line-height: 1;

color: #495567;
`

export const Body = styled.p`
margin-bottom: 32px;

font-size: 15px;
line-height: 1.67;

color: #939caa;
`