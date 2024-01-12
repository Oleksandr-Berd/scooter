import styled from "@emotion/styled";
import { ILocation } from "../../utils/interfaces";

export const NavBarItem = styled.li<ILocation>`
  & > a {
    font-size: 15px;
    line-height: 1.67;

    color: ${(props) => props.location === "footer" ? "#939CAA" : "#e5ecf4"};
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.location === "footer" ? "16px" : "24px"};
  }
`;
