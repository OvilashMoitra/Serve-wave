"use client"
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import PriceSection from '@/components/ui/PriceSection'


import ContactCalltoAction from '@/shared/ContactCalltoAction/ContactCalltoAction'
import "./page.module.css"
import HomePageBanner from '@/components/ui/HomePageBanner'
import { useEffect } from 'react'

import FAQSection from '@/components/ui/FAQSection'

import Link from 'next/link'
import FeedbackForm from '@/components/ui/FeedbackForm'

export default function Home() {


  return (
    <div className='bg-slate-900'>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
      <Navbar />
      <HomePageBanner/>
        <ContactCalltoAction />
        <PriceSection />
        <FAQSection />
        <Footer />
    </div>
    </div>
  )
}
