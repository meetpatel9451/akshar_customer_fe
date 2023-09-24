import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Testimonial from '../../components/Testimonial/Testimonial';
import Pricing from '../../components/Pricing/Pricing';
import PartnerSection from '../../components/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Features />
            <About />
            <ServiceSection />
            <FunFact styleClass={'style-two margin-top'}/>
            <CtaSection styleClass={'style-two'}/>
            <TeamSection />
            <Testimonial />
            <Pricing />
            <PartnerSection />
            <BlogSection />
            <Footer fClass={'style-three'}/>
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;