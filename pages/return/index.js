import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Return & Exchnage'} pagesub={'Terms & Coditions'} />
            <section className="privacy-section">
                <div className="auto-container">
                    <div className="privacy-content">
                        <h2>Within India</h2>
                        <p>It is our endeavor to provide you with the best customer service possible hence we permit returns but only in case of the following reasons. No other requests will be entertained aside from those mentioned below.</p>
                        {/* <div className="date">Updated January 10, 2021</div> */}
                        <p><b>If the product is wrongfully delivered (product doesn’t match the item in the order confirmation) or has a genuine quality/manufacturing defect. Given the nature of the garment with hand blocked printing, the irregularities are the hall mark of the products and cannot be termed as damaged and will not be accepted as damaged. Akshar Graphics reserves the right and discretion.</b></p>
                        <p>To return or exchange a product or report damage in transit please call our support team <span className="date">@ 079-40322176</span> or <span className="date">09998999229</span> email: <span className="date">akshar16@gmail.com</span> within 48 hours of delivery.</p>
                        <p>Given the nature of our products, we reserve the sole discretion to provide the resolution to any situation as we deem fit. Each return or exchange request is handled on a case-by-case basis and we request you to get in touch with Customer care team for prompt resolution.</p>
                        <p>No refunds would be given if the customer has provided wrong or incomplete shipping address, there are 2 failed delivery attempts by our shipping agency and/or the package is refused by the recipient.</p>
                        <p>All refunds in genuine cases, or of order cancellation due to unforeseen circumstances will be initiated via NEFT using our payment gateway partner Kotak Mahindra.</p>
                        <p>All items to be returned or exchanged must be unused and in their original condition with all original tags and packaging intact, and should not be broken or tampered with.</p>
                                   
                        
                    </div>
                    <div className="privacy-content">
                    <h2>5 SIMPLE STEPS TO EXCHANGE OR RETURN YOUR GOODS</h2>
                        <h3>Step 1</h3>
                        <p>You need to inform us by email within 2 business days of receiving the parcel on <span className="date">akshar16@gmail.com</span> or call us on <span className="date">079-40322176</span>. If we are not informed within 2 business days regarding a return, the merchandise is considered sold for good.</p>
                        <h3>Step 2</h3>
                        <p>Please await a mail confirmation from our end for initiating the return.</p>
                        <h3>Step 3</h3>
                        <p>Please seal the package properly and courier it to us at.</p>
                        <p><b>Akshar Graphics,<br/>
                        Chandra Colony Corner,<br/>
                        Behind YES Bank Building,<br/>Near Cargo Ford Motors,
                        C.G. Road, Ellis Bridge,<br/>Ahmedabad-380006, Gujarat, India.</b></p>
                        
                        <h3>Step 4</h3>
                        <p>Please email us to inform us that you are sending the package back to us, with your order number as the subject line and tracking details in the body of the email.</p>
                        
                        <h3>Step 5</h3>
                        <p>Once we receive the products it will take is 7 business days for us to do a quality check and then we will call you or email you for an exchange.</p>
                        
                        <h3>Domestic orders</h3>
                        <p>At this point, we will not be accepting return or refund on Domestic order.</p>
                        
                        <h3>CANCELLATIONS AND MODIFICATIONS</h3>
                        <p>You can cancel an order until it has been processed in our warehouse. Any amount you paid will be credited back into your account.</p>

                        <p>Modification of Shipping address: You can modify the shipping address of your order before we have processed (shipped) it, by contacting our support team <span className="date">@ 079-40322176</span> or <span className="date">09998999229</span> or email:<span className="date">akshar16@gmail.com</span></p>
                        
                        
                        
                    </div>

                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
