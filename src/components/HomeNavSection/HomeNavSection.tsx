import * as SC from './HomeNavStyles'

import { homeNav } from "../../db/db";
import HomeNavItem from "./HomeNavItem";

const HomeNavSection:React.FC = () => {
    return ( <section>
        <SC.HomeNavList>
            {homeNav.map(({id, name, img, body, path}, idx) => <HomeNavItem key={id} name={name} body={body} img={img} idx={idx} path={path}/>)}
        </SC.HomeNavList>
    </section> );
}
 
export default HomeNavSection;