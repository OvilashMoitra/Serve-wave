"use client"

import Footer from "@/components/ui/Footer";

import Navbar from "@/components/ui/Navbar";

import PurchaseCard from "@/components/ui/Purchase/PurchaseCard";

import { useSearchParams } from 'next/navigation'

const page = ({ params }: { params: { id: string } }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = useSearchParams()
 
  const search = searchParams.get('cart_id')
  
    return (
        <div className='bg-slate-900'>
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
                <Navbar />
                <PurchaseCard id={params.id} cart_id={search!}/>
                <Footer />
            </div>
        </div>
    );
};

export default page;