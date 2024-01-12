import { useMediaQuery } from 'usehooks-ts';

import * as SC from './HeaderStyles'

import { ReactComponent as BurgerSvg } from "../../assets/icons/hamburger.svg";
import {ReactComponent as CloseSvg} from '../../assets/icons/close.svg'

import Logo from "../../components/Logo/Logo";
import { IMenu } from '../../utils/interfaces';
import NavBar from '../../ui/NavBar/NavBar';
import ButtonLink from '../../ui/BtnLink/BtnLink';

const Header: React.FC<IMenu> = ({handleMenu, isMenu}) => {

const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <SC.HeaderStyled>
    
      
      <Logo location="header"/>
      {!isTablet ? <SC.MenuBtn onClick={handleMenu}>
        {isMenu ? <CloseSvg/> : <BurgerSvg/>}
      </SC.MenuBtn>: <NavBar location='header'/>}
      {isTablet ? <ButtonLink content='Set Scootin' path='#download'/> : null}
    </SC.HeaderStyled>
  );
};

export default Header;
