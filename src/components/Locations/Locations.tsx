import * as SC from "./LocationsStyles";

import mapMob from "../../assets/images/world-map-mobile.png";
import mapTab from '../../assets/images/world-map-tablet.png'
import { locations } from "../../db/db";
import ButtonLink from "../../ui/BtnLink/BtnLink";
import { useMediaQuery } from "usehooks-ts";

const Locations: React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <SC.LocationsSection>
        <SC.MapWrapper>
      <img src={isTablet ? mapTab : mapMob} alt="map" />
      <SC.List>
        {locations.map(({ id, city }) => (
          <SC.Item city={city} key={id}>{city}
          {isTablet ? <SC.Triangle></SC.Triangle> : null}
          </SC.Item>
        ))}
      </SC.List>
      </SC.MapWrapper>
      <SC.ContentWrapper>
        <SC.Title >Your City Not Listed?</SC.Title>
        <SC.Body>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </SC.Body>
        <ButtonLink content="Message Us" path="#"/>
      </SC.ContentWrapper>
    </SC.LocationsSection>
  );
};

export default Locations;
