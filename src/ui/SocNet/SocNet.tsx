import { NavLink } from "react-router-dom";

import * as SC from './SocNetStyles'

import { ReactComponent as Fb } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import {ReactComponent as Istagram} from '../../assets/icons/instagram.svg'

const SocNet:React.FC = () => {
  return (
    <SC.SocNetList>
      <SC.SocNetItem>
        <NavLink to="www.facebook.com">
          <Fb />
        </NavLink>
      </SC.SocNetItem>
      <SC.SocNetItem>
        <NavLink to="www.twitter.com">
          <Twitter />
        </NavLink>
      </SC.SocNetItem>
      <SC.SocNetItem>
        <NavLink to="www.instagram.com">
            <Istagram/>
        </NavLink>
      </SC.SocNetItem>
    </SC.SocNetList>
  );
};

export default SocNet;
