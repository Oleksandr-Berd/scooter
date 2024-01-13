import * as SC from './ManualStyles'

import {manualItems} from '../../db/db'
import ManualItem from './ManualItem';
import line from '../../assets/patterns/grey_line.svg'
import deskLine from '../../assets/patterns/desk_line.svg'
import { useMediaQuery } from 'usehooks-ts';

const Manual:React.FC = () => {

const isDesktop = useMediaQuery("(min-width:1440px)")

    return ( <SC.ManualSection bg={isDesktop ? deskLine : line}>
        <SC.ManualList>
            {manualItems.map(({id, name, icon, body})=> <ManualItem name={name} icon={icon} body={body} key={id}/>)}
        </SC.ManualList>
    </SC.ManualSection> );
}
 
export default Manual;