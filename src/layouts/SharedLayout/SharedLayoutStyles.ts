import styled from "@emotion/styled";
import { IMenu } from "../../utils/interfaces";

export const SharedLayoutStyled = styled.main<Partial <IMenu>>`
max-height: ${props => props.isMenu ? "100vh" : "auto"};

overflow: hidden;
`