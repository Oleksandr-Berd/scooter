import * as SC from "./LogoStyles";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { ILocation } from "../../utils/interfaces";

const Logo: React.FC<ILocation> = ({location}) => {
  return (
    <SC.LogoStyled location={location}>
      <LogoSvg />
    </SC.LogoStyled>
  );
};

export default Logo;
