import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Shiping & Payments'}  />
            <section className="privacy-section">
                <div className="auto-container">
                    <div className="privacy-content">
                        {/* <h2>Within India</h2> */}
                        <p>Akshar Graphics is committed to deliver your order with good quality packaging within given time frame. We ship throughout the week, except, Sunday & public holidays. To ensure that your order reaches you in good condition, in the shortest span of time, we ship through patel courier express. and incase of non-availability of courier service at the delivery location, parcel will be sent via insured registered post parcel.</p>
                        <h2>DOMESTIC</h2>


                        <h3><b>For Unstitched Garments</b></h3>
                        <p>For domestic buyers, orders are shipped through registered domestic courier companies. These orders will be shipped within 15 business days, or as per the delivery date agreed at the time of order confirmation and Courier Company shipment delivery norms. Please note Sunday and Public Holidays are not set as working days for standard deliveries. For domestic buyers, orders are shipped and delivered through registered domestic courier companies. Please allow 7 business days to dispatch domestic orders.</p>
                        </div>
                        <div className="privacy-content">
                        
                        <h3><b>For Stitched Garments</b></h3>
                        <p>Garments are only made on order and will be ready within 2 Weeks for shipments.</p>
                        
                    </div>
                    <div className="privacy-content">
                        {/* <h2>Within India</h2> */}
                        <h2>SHIPPING CHARGES</h2>
                        <p>Except where otherwise specified on this Website, the materials on this Website are displayed solely for the purposes of promoting 's products and services available in India.</p>
                        <p>Shipping and handling rates may vary based on product, packaging, size, volume, type and other considerations. The shipping and handling charges are given at the time of check out and consumers will know about this before making payments.</p>
                        <p>Free shipping on <b>PRIME PRIVILEGES</b> Orders.</p>
                        <p>Only Domestic deliveries as applicable.</p>

                        <h3><b>NON-AVAILABILITY ON DELIVERY</b></h3>
                        <p>Our delivery partners will attempt to deliver the package twice before it is returned back to us. Please provide your complete & accurate address including zip code and mobile number in the delivery address, as it will help in making a faster delivery.</p>
                        
                        <h3><b>MODES OF PAYMENT</b></h3>
                        <p>For shipping to India we accept all major debit & credit cards (including Master, Visa) and provide Net Banking Option across major banks via our Third-party payment gateway, visa, PayPal , UPI, RuPay ,master card.</p>                        
                        <p><b>CASH ON DELIVERY</b> will be applicable and restricted to the invoice amount below INR 25,000</p>
                        <p>For any shipping & payment related query please contact our customer care at <span className="date">akshar16@gmail.com</span> or call our support team on <span className="date">079-40322176</span> or <span className="date">09998999229</span>.</p>
                        
                        </div>
                        <div className="privacy-content">
                        
                        {/* <h3><b>For Stitched Garments</b></h3> */}
                        
                    </div>
                    

                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
