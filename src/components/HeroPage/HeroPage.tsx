import { useMediaQuery } from "usehooks-ts";

import * as SC from "./HeroPageStyles";

import aboutMob from "../../assets/images/about-hero-mobile.jpg";

type Props = {
  content: string;
};

const HeroPage: React.FC<Props> = ({ content }) => {
  const isTablet = useMediaQuery("(min-width:768px)");

  const handleBg = () => {
    if (!isTablet) {
      return content === "About" && aboutMob;
    } else{
        return "___"
    }
  };

  return (
    <SC.HeroPageStyled bg={handleBg}>
      <SC.Title>{content}</SC.Title>
    </SC.HeroPageStyled>
  );
};

export default HeroPage;
