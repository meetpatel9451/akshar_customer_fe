import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import Features from '../components/Features';
import About from '../components/about/about';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import FunFact from '../components/FunFact';
import CtaSection from '../components/CtaSection/CtaSection';
import TeamSection from '../components/TeamSection/TeamSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Testimonial from '../components/Testimonial/Testimonial';
import Pricing from '../components/Pricing/Pricing';
import PartnerSection from '../components/PartnerSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Hero4 from '../components/hero4/hero4';
import Features2 from '../components/Features2/Features2';
import About2 from '../components/about2/about2';
import ServiceSectionS4 from '../components/ServiceSectionS4/ServiceSectionS4';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero4 />
            <Features2 />
            <About2 />
            <ServiceSectionS4 />
            {/* <PartnerSection styleClass={'style-three'}/> */}
            {/* <CtaSection /> */}
            {/* <FunFact /> */}
            {/* <Testimonial /> */}
            {/* <TeamSectionS2 /> */}
            {/* <Pricing /> */}
            {/* <BlogSection />  */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;