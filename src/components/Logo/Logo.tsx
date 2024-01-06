import * as SC from "./LogoStyles";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <SC.LogoStyled>
      <LogoSvg />
    </SC.LogoStyled>
  );
};

export default Logo;
