import * as SC from "./FooterStyles";

import Logo from "../../components/Logo/Logo";
import NavBar from "../../ui/NavBar/NavBar";
import SocNet from "../../ui/SocNet/SocNet";

const Footer: React.FC = () => {
  return (
    <SC.FooterStyled>
      <div>
      <Logo location="footer" />
      <NavBar location="footer"/>
      </div>
      <SocNet/>
    </SC.FooterStyled>
  );
};

export default Footer;
