import * as SC from "./AboutInfoStyles";

import digitalImg from "../../assets/images/digital-era.jpg";
import betterLive from "../../assets/images/better-living.jpg";

import firstArrow from "../../assets/patterns/left-upward-arrow.svg";
import secondArrow from "../../assets/patterns/right-arrow.svg";

import circle from "../../assets/patterns/circle.svg";
import { useMediaQuery } from "usehooks-ts";

const AboutInfo: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width:1440px)");

  return (
    <SC.InfoSection>
      <SC.List>
        <SC.Item bg={firstArrow} secBg={circle}>
          {!isDesktop ? <img src={digitalImg} alt="digital" /> : null}
          <div>
            <h3>Mobility for the digital era</h3>
            <p>
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
          {isDesktop ? <img src={digitalImg} alt="digital" /> : null}
        </SC.Item>
        <SC.Item bg={secondArrow} secBg={circle}>
          <img src={betterLive} alt="betterment" />
          <div>
            <h3>Better urban living</h3>
            <p>
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </SC.Item>
      </SC.List>
    </SC.InfoSection>
  );
};

export default AboutInfo;
