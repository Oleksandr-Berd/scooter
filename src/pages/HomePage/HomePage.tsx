import Download from "../../components/Download/Download";
import Hero from "../../components/Hero/Hero";
import HomeNavSection from "../../components/HomeNavSection/HomeNavSection";
import Manual from "../../components/Manual/Manual";

const HomePage:React.FC = () => {
    return ( <div>
        <Hero/>
        <Manual/>
        <HomeNavSection/>
        <Download/>
    </div> );
}
 
export default HomePage;