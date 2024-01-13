import { useMediaQuery } from "usehooks-ts";

import * as SC from "./HeroPageStyles";

import aboutMob from "../../assets/images/about-hero-mobile.jpg";
import aboutTab from '../../assets/images/about-hero-tablet.jpg';
import aboutDesk from '../../assets/images/about-hero-desktop.jpg'

import carLocMob from '../../assets/images/careers-location-hero-mobile.jpg'
import carLocTab from '../../assets/images/careers-locations-hero-tablet.jpg'
import carDesk from '../../assets/images/careers-locations-hero-desktop.jpg'

import circles from '../../assets/patterns/white-circles.svg'

type Props = {
  content: string;
};

const HeroPage: React.FC<Props> = ({ content }) => {
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1440px)")

  const handleBg = () => {

    if(isDesktop){
      return content === "About" ? aboutDesk :carDesk
    } else if (isTablet) {
      return content === "About" ? aboutTab : carLocTab;
    } else{
        return content === "About" ? aboutMob : carLocMob;
    }
  };

  return (
    <SC.HeroPageStyled bg={handleBg} secBg={circles}>
      <SC.Title>{content}</SC.Title>
    </SC.HeroPageStyled>
  );
};

export default HeroPage;
