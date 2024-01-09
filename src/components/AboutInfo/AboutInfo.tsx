import * as SC from './AboutInfoStyles'

import digitalImg from "../../assets/images/digital-era.jpg";
import betterLive from "../../assets/images/better-living.jpg";

import firstArrow from '../../assets/patterns/left-upward-arrow.svg'
import secondArrow from '../../assets/patterns/right-arrow.svg'

const AboutInfo:React.FC = () => {
  return (
    <SC.InfoSection>
      <SC.List>
        <SC.Item bg={firstArrow}>
          <img src={digitalImg} alt="digital" />
          <h3>Mobility for the digital era</h3>
          <p>
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </p>
        </SC.Item>
        <SC.Item bg={secondArrow}>
          <img src={betterLive} alt="betterment" />
          <h3>Better urban living</h3>
          <p>
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </SC.Item>
      </SC.List>
    </SC.InfoSection>
  );
};

export default AboutInfo;
