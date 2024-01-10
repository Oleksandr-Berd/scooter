import HeroPage from "../../components/HeroPage/HeroPage";
import Locations from "../../components/Locations/Locations";

const LocationPage:React.FC = () => {
    return ( <div>
        <HeroPage content="Locations"/>
        <Locations/>
    </div> );
}
 
export default LocationPage;