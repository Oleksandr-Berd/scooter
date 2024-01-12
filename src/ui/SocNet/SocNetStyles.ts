import styled from "@emotion/styled";

export const SocNetList = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-top: 85px;

@media (min-width: 768px){
    margin-top: 0;
    margin-left: calc(152px - 59px);
}
`

export const SocNetItem = styled.li`
&:not(:last-child){

    margin-right: 24px;
}
`