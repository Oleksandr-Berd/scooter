import * as SC from './HomeNavStyles'

import ButtonLink from "../../ui/BtnLink/BtnLink";

type Props = {
    name: string,
    body:string,
    img: string,
    idx:number,
    path:string
}

const HomeNavItem:React.FC<Props> = ({name, body, img, idx, path}) => {

const isEven = (idx + 1) % 2 === 0

    return ( <SC.HomeNavItem>
        <SC.Image src={img} alt={name} />
        <SC.Title>{name}</SC.Title>
        <SC.Body>{body}</SC.Body>
        <ButtonLink path={path} content="Learn More"/>
    </SC.HomeNavItem> );
}
 
export default HomeNavItem;