import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Disclmimer'} pagesub={'Terms & Coditions'} />
            <section className="privacy-section">
                <div className="auto-container">
                    <div className="privacy-content">
                        <p>The information contained in this website is for general information purposes only. The information is provided by “Akshar Graphics” and whilst we endeavour to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                        </p>
                        <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.
                        </p>
                        <p>Through this website you are able to link to other websites which are not under the control of “Akshar Graphics”. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.

                        </p>
                        <p>Every effort is made to keep the website up and running smoothly. However, “Akshar Graphics” takes no responsibility for and will not be liable for the website being temporarily unavailable due to technical issues beyond our control.

                        </p>
                        
                    </div>
                    

                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
