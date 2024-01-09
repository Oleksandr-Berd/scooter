import AboutInfo from "../../components/AboutInfo/AboutInfo";
import HeroPage from "../../components/HeroPage/HeroPage";
import Values from "../../components/Values/Values";

const AboutPage:React.FC = () => {
    return ( <div>
        <HeroPage content="About"/>
        <AboutInfo/>
        <Values/>
    </div> );
}
 
export default AboutPage;