import AboutInfo from "../../components/AboutInfo/AboutInfo";
import HeroPage from "../../components/HeroPage/HeroPage";

const AboutPage:React.FC = () => {
    return ( <div>
        <HeroPage content="About"/>
        <AboutInfo/>
    </div> );
}
 
export default AboutPage;