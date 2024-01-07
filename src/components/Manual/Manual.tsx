import * as SC from './ManualStyles'

import {manualItems} from '../../db/db'
import ManualItem from './ManualItem';

const Manual:React.FC = () => {
    return ( <SC.ManualSection>
        <SC.ManualList>
            {manualItems.map(({id, name, icon, body})=> <ManualItem name={name} icon={icon} body={body} key={id}/>)}
        </SC.ManualList>
    </SC.ManualSection> );
}
 
export default Manual;