import * as SC from "./LocationsStyles";

import mapMob from "../../assets/images/world-map-mobile.png";
import { locations } from "../../db/db";
import ButtonLink from "../../ui/BtnLink/BtnLink";

const Locations: React.FC = () => {
  return (
    <SC.LocationsSection>
      <img src={mapMob} alt="map" />
      <SC.List>
        {locations.map(({ id, city }) => (
          <SC.Item key={id}>{city}</SC.Item>
        ))}
      </SC.List>
      <div>
        <SC.Title>Your City Not Listed?</SC.Title>
        <SC.Body>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </SC.Body>
        <ButtonLink content="Message Us" path="#"/>
      </div>
    </SC.LocationsSection>
  );
};

export default Locations;
