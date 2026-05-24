import Hero from "../components/Hero";
import Stats from "../components/Stats";
import OurServices from "../components/OurServices";
import TrustedBy from "../components/TrustedBy";

const Home = ()=>{
    return (
        <div className="w-full relative overflow-hidden min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100">
            <Hero/>
            <Stats/>
            <OurServices/>
            <TrustedBy/>
        </div>
    )
}

export default Home;