import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ProfileView from "@/components/ui/Profile/ShowProfile";



export default function Home() {
  return (
    <div className='bg-slate-900'>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
      <Navbar />
      <ProfileView/>
            
      <Footer/>
    </div>
    </div>
  )
}
