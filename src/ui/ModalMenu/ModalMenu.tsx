import ReactDOM from 'react-dom';

import * as SC from './ModalMenuStyles'

import { portalContainer } from "../..";
import NavBar from '../NavBar/NavBar';
import ButtonLink from '../BtnLink/BtnLink';
import { IMenu } from '../../utils/interfaces';

const ModalMenu:React.FC<Partial <IMenu>> = ({handleMenu}) => {

    if (!portalContainer) {
        // Handle the case where the portal container is not found
        return null;
      }

    return ReactDOM.createPortal( <SC.Overlay>
        <SC.SideBar>
            <NavBar location='header' handleMenu={handleMenu}/>
            <ButtonLink content='Get Scootin' path='#download' handleMenu={handleMenu}/>
        </SC.SideBar>
        </SC.Overlay>, portalContainer );
}
 
export default ModalMenu;