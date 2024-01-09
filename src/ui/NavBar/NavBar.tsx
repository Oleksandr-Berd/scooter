import { NavLink } from "react-router-dom";

import * as SC from './NavBarStyled'

import { navBar } from "../../db/db";
import { ILocation } from "../../utils/interfaces";

const NavBar:React.FC<ILocation> = ({location}) => {
    return ( <nav>
        {navBar.map(({id, name, path})=> <SC.NavBarItem key={id} location={location}><NavLink to={path}>{name}</NavLink></SC.NavBarItem>)}
    </nav> );
}
 
export default NavBar;