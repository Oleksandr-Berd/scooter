import styled from "@emotion/styled";
import { ILocation } from "../../utils/interfaces";

export const NavBarItem = styled.li<ILocation>`
  & > a {
    font-size: 15px;
    line-height: 1.67;

    color: ${(props) => props.location === "footer" && "#939CAA"};
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
