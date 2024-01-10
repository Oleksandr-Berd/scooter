import CareerJoin from "../../components/CareerJoin/CareerJoin";
import HeroPage from "../../components/HeroPage/HeroPage";
import Vacancies from "../../components/Vacancies/Vacancies";
import Values from "../../components/Values/Values";

const CareersPage:React.FC = () => {
    return ( <div>
        <HeroPage content="Careers"/>
        <CareerJoin/>
        <Values/>
        <Vacancies/>
    </div> );
}
 
export default CareersPage;