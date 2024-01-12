import { useMediaQuery } from 'usehooks-ts';

import * as SC from './HeroStyled'

import bgMob from '../../assets/images/home-hero-mobile.jpg'
import bgTab from '../../assets/images/home-hero-tablet.jpg'
import rightArrow from '../../assets/patterns/right-arrow.svg'
import circles from '../../assets/patterns/white-circles.svg'

import ButtonLink from "../../ui/BtnLink/BtnLink";

const Hero: React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <SC.HeroCon bg={isTablet? bgTab : bgMob} secBg={rightArrow} thirdBg={circles}>
      <SC.HeroTitle>Scooter sharing made simple</SC.HeroTitle>
      <SC.HeroBody>
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </SC.HeroBody>
      <ButtonLink content="Get Scootin" path="#download"/>
    </SC.HeroCon>
  );
};

export default Hero;
