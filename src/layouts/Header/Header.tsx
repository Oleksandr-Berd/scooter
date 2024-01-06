import * as SC from './HeaderStyles'

import { ReactComponent as BurgerSvg } from "../../assets/icons/hamburger.svg";

import Logo from "../../components/Logo/Logo";

const Header: React.FC = () => {
  return (
    <SC.HeaderStyled>
      <SC.MenuBtn>
        <BurgerSvg />
      </SC.MenuBtn>
      <Logo />
    </SC.HeaderStyled>
  );
};

export default Header;
