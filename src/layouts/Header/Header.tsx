import * as SC from './HeaderStyles'

import { ReactComponent as BurgerSvg } from "../../assets/icons/hamburger.svg";
import {ReactComponent as CloseSvg} from '../../assets/icons/close.svg'

import Logo from "../../components/Logo/Logo";
import { IMenu } from '../../utils/interfaces';

const Header: React.FC<IMenu> = ({handleMenu, isMenu}) => {
  return (
    <SC.HeaderStyled>
      <SC.MenuBtn onClick={handleMenu}>
        {isMenu ? <CloseSvg/> : <BurgerSvg/>}
      </SC.MenuBtn>
      <Logo location="header"/>
    </SC.HeaderStyled>
  );
};

export default Header;
