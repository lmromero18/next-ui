import React from 'react'
import Section from '../components/Section'
import FeatureSection from '../components/FeatureSection'
import MetricsSection from '../components/MetricsSection'
import IntegrationSection from '../components/IntegrationsSection'
import TestimonialSection from '../components/TestimonialSection'
import CtaSection from '../components/CtaSection'
import FaqSection from '../components/FaqSection'
import CustomerOpinionSection from '../components/CustomerOpinionSection'
import GiveUsAShot from '../components/GiveUsAShot'

const Home = () => {
  return (
    <>
      <Section />
      <IntegrationSection />
      <MetricsSection />
      <FeatureSection />
      <TestimonialSection />
      <CtaSection />
      <FaqSection />
      <CustomerOpinionSection />
      <GiveUsAShot />
    </>

  )
}

export default Home
