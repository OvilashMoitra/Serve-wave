import Footer from "@/components/ui/Footer";

import Navbar from "@/components/ui/Navbar";



const page = () => {
    return (
        <div className='bg-slate-900'>
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
                <Navbar />


                <Footer />
            </div>
        </div>
    );
};

export default page;