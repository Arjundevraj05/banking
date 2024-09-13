import React from 'react'
import styles from "./styles"

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Business from '@/components/Business';
import Billing from '@/components/Billing';
import CardDeal from '@/components/CardDeal';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Footer2 from '@/components/Footer2';
import Navbar from '@/components/Navbar';

import Image from "next/image";
const uiux = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      
      {/* Add margin to push the Stats section down */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mt-16`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
        </div>
      </div>
    </div>
  )
}

export default uiux;
