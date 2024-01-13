import * as SC from './CareerJoinStyles'

import joinImg from "../../assets/images/join-us.jpg";
import arrow from '../../assets/patterns/left-downward-arrow.svg'
import circle from '../../assets/patterns/circle.svg'

import ButtonLink from "../../ui/BtnLink/BtnLink";

const CareerJoin: React.FC = () => {
  return (
    <SC.JoinSection>
      <SC.ImageWrapper bg={arrow} secBg={circle}>
        <img src={joinImg} alt="join" />
      </SC.ImageWrapper>
      <SC.ContentWrapper>
      <SC.Title>Care to join our mission?</SC.Title>
      <SC.Body>
        We’re always looking for ambitious individuals to help us on our
        journey. If you’re passionate about our mission to provide clean,
        accessible transport to improve urban living we want to hear from you!
      </SC.Body>
      <ButtonLink content="Say Hello" path="#"/>
      </SC.ContentWrapper>
    </SC.JoinSection>
  );
};

export default CareerJoin;
