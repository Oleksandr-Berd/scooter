import { NavLink } from "react-router-dom";

import * as SC from './NavBarStyled'

import { navBar } from "../../db/db";
import { ILocation, IMenu } from "../../utils/interfaces";

const NavBar:React.FC<ILocation & Partial<IMenu>> = ({location, handleMenu}) => {
    return ( <nav>
        {navBar.map(({id, name, path})=> <SC.NavBarItem key={id} location={location} onClick={handleMenu}><NavLink to={path}>{name}</NavLink></SC.NavBarItem>)}
    </nav> );
}
 
export default NavBar;