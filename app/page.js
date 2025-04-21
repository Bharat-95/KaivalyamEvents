import AboutSection from '@/components/About'
import DecorCoverageSection from '@/components/Coverage'
import CtaBanner from '@/components/CTAbanner'
import Follow from '@/components/Follow'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/Services'
import HowItWorks from '@/components/Works'
import React from 'react'

const page = () => {
  return (
    <div className='lg:space-y-10'>
      <Hero />
      <AboutSection />
      <HowItWorks />
      <CtaBanner />
      <ServicesOverview />
      <DecorCoverageSection/>
      <Follow />
    </div>
  )
}

export default page