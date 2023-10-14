import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Refund & Cancellation Policy'}  />
            <section className="privacy-section">
                <div className="auto-container">
                    <div className="privacy-content">
                        {/* <h2>Within India</h2> */}
                        <p>Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase.</p>
                        <p>In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:</p>
                        </div>
                        <div className="privacy-content">
                        <h3><b>Cancellation Policy</b></h3>
                        <p>For Cancellations please contact the us via contact us link.</p>
                        <p>Requests received later than 10 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.</p>
                        </div>
                        <div className="privacy-content">
                        
                        <h3><b>Refund Policy</b></h3>
                        <p>We will try our best to create the suitable design concepts for our clients.</p>
                        <p>In case any client is not completely satisfied with our products we can provide a refund.</p>
                        <p>In case any client is not completely satisfied with our products we can provide a refund.</p>
                        
                              
                        
                    </div>
                    

                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
