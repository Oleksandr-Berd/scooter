import styled from "@emotion/styled";

export const ValuesSection = styled.section`
padding-left: 32px;
padding-right: 32px;

margin-bottom: 145px;

text-align: center;

@media (min-width: 768px){
    padding-left: 155px;
    padding-right: 156px;

    margin-bottom: 120px;
}

@media (min-width: 1440px){
    padding-left: 165px;
    padding-right: 165px;

}
`

export const Title = styled.h2`
margin-bottom: 64px;

font-size: 32px;
line-height: 1;

color: #495567;

@media (min-width: 768px){
    margin-bottom: 105px;
    font-size: 48px;
    letter-spacing: -2.14px;
}
`

export const List = styled.ul`

@media (min-width: 1440px){
    display: flex;
    flex-direction: row;
}
`

export const Item = styled.li`


&:not(:last-child){
    margin-bottom: 56px;
}

& > h3{
    margin-bottom: 27px;

    font-size: 24px;
    line-height: 1.67;

    color: #495567;
}

& > p{
    font-size: 15px;
    line-height: 1.67;

    color: #939caa;
}

@media (min-width: 1440px){
    &:not(:last-child){
        margin-bottom: 0;
        margin-right: 30px;
    }
}
`

export const ImgWrapper = styled.div`
position: relative;

display: inline-block;

margin-bottom: 64px;

& >img{
    width: 240px;
    height: 240px;

    border-radius: 50%;
}
`
export const Count = styled.div`
position: absolute;
bottom: 0;
left: 0;

transform: translateX(72px) translateY(42px);

width: 96px;
height: 96px;

display: flex;
align-items: center;
justify-content: center;

font-family: "Space";
font-size: 24px;
line-height: 1.67;

background-color: #fcb72b;
color: #495567;

border-radius: 50%;
`


