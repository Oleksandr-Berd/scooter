import * as SC from './ManualStyles'

import {manualItems} from '../../db/db'
import ManualItem from './ManualItem';
import line from '../../assets/patterns/grey_line.svg'

const Manual:React.FC = () => {
    return ( <SC.ManualSection bg={line}>
        <SC.ManualList>
            {manualItems.map(({id, name, icon, body})=> <ManualItem name={name} icon={icon} body={body} key={id}/>)}
        </SC.ManualList>
    </SC.ManualSection> );
}
 
export default Manual;