import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Scrollbar from '../components/scrollbar/scrollbar';
import Footer from '../components/footer/Footer';
import Hero4 from '../components/hero4/hero4';
import Features2 from '../components/Features2/Features2';
import About2 from '../components/about2/about2';
import ServiceSectionS4 from '../components/ServiceSectionS4/ServiceSectionS4';
import { Box } from '@mui/material';
import BuildStep2 from '../components/BuildStep2/BuildStep2';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero4 />
            <Features2 />
            <About2 />
            <Box sx={{mb: 15}}>
            <BuildStep2 />
            </Box>
            <ServiceSectionS4 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;