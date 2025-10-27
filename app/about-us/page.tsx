import AboutHero from '@/components/AboutUs/about-hero';
import AboutStatsSimple from '@/components/AboutUs/about-stats';
import MissionVisionValues from '@/components/AboutUs/mission-vision';
import OurPartners from '@/components/AboutUs/our-partners';
import Navbar from '@/components/Home/Navbar';
import BackToTop from '@/components/shared/BackToTop';
import Footer from '@/components/shared/footer/Footer';
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar />
            <div className='mt-20'>
                <AboutHero />
                <MissionVisionValues />
                <AboutStatsSimple />
                <OurPartners />
            </div>
            <Footer />
            <BackToTop showText={false} showIcon={true} />
        </>
    );
}
