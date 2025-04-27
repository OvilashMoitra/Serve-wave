/* eslint-disable @next/next/no-img-element */
import AboutUsBanner from "@/components/ui/AboutUs/AboutUsBanner";
import AboutUsContactButton from "@/components/ui/AboutUs/AboutUsContactButton";
import AboutUsFeatures from "@/components/ui/AboutUs/AboutUsFeatures";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";



const AboutUs = () => {
    return (
        <div className='bg-slate-900'>
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                <Navbar />
                <div className="max-w-7xl mx-auto">
                    <AboutUsBanner />
                    <AboutUsFeatures />
                    <AboutUsContactButton />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;