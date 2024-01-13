import * as SC from "./HomeNavStyles";

import leftDown from "../../assets/patterns/right-arrow.svg";
import leftUpward from "../../assets/patterns/left-downward-arrow.svg";
import circle from "../../assets/patterns/circle.svg";

import ButtonLink from "../../ui/BtnLink/BtnLink";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  name: string;
  body: string;
  img: string;
  idx: number;
  path: string;
};

const HomeNavItem: React.FC<Props> = ({ name, body, img, idx, path }) => {
  const isEven = (idx + 1) % 2 === 0;
  const isDesktop = useMediaQuery("(min-width:1440px)");

  return (
    <>
      {isDesktop ? (
        <SC.HomeNavItem bg={isEven ? leftDown : leftUpward} secBg={circle}>
          {isEven ? <SC.Image src={img} alt={name} /> : null}
          <div>
            <SC.Title>{name}</SC.Title>
            <SC.Body>{body}</SC.Body>
            <ButtonLink path={path} content="Learn More" />
          </div>
          {!isEven ? <SC.Image src={img} alt={name} /> : null}
        </SC.HomeNavItem>
      ) : (
        <SC.HomeNavItem bg={isEven ? leftDown : leftUpward} secBg={circle}>
          <SC.Image src={img} alt={name} />
          <div>
            <SC.Title>{name}</SC.Title>
            <SC.Body>{body}</SC.Body>
            <ButtonLink path={path} content="Learn More" />
          </div>
        </SC.HomeNavItem>
      )}
    </>
  );
};

export default HomeNavItem;
