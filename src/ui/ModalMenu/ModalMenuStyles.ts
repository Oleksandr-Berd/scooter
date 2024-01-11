import styled from "@emotion/styled";

export const Overlay = styled.div`
position: absolute;
z-index: 5;
transform: translateY(64px);


width: 100vw;
height: calc(100vh - 64px);


background-color: rgba(0, 0, 0, 0.9);
`

export const SideBar = styled.aside`
width: calc(68% - 32px*2);
height: calc(100% - 64px - 24px);

display: flex;
flex-direction: column;
justify-content: space-between;

padding-top: 64px;
padding-bottom: 24px;
padding-left: 32px;
padding-right: 32px;

background-color: #333a44;
`