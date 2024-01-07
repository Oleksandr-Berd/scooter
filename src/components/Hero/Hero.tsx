import * as SC from './HeroStyled'

import bgMob from '../../assets/images/home-hero-mobile.jpg'
import rightArrow from '../../assets/patterns/right-arrow.svg'

import ButtonLink from "../../ui/BtnLink/BtnLink";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon bg={bgMob} secBg={rightArrow}>
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
