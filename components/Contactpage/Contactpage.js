import React from 'react';
import Link from 'next/link'
import ContactForm from '../ContactFrom'

const Contactpage = () => {

    return (
        <div>
            <div className="contact-info-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="title">Follow Our Info</div>
                        <h2>Contact information</h2>
                        <div className="text">We are the experts in printing and graphics. No project is too big or too small for us.  <br /> Contact us today and get ready to be amazed.</div>
                    </div>
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-clock"></div>
                                        10:00am to 6:00pm <br /> Sunday Closed
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-pin"></div>
                                        1st floor,26 Advani Market
                                        Nr. B.G Tower
                                        O/s Delhi Darwaja
                                        Shahibaug Road
                                        <br />
                                        Ahmedabad,Gujarat
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-phone-call"></div>
                                        <a href="tel:+91-79403-22176">+91 79403 22176</a><br></br>
                                        <a href="tel:+91-99989-99229">+91 99989 99229</a>
                                        <br></br><a href="mailto:akshargraphics00@gmail.com">akshargraphics00@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <ul className="social-box">
                                    <span>Our Socials Links <i>Print this page to PDF for the complete set of vectors.</i></span>
                                    <li className="facebook"><Link className="fa fa-facebook-f" href="/contact"></Link></li>
                                    <li className="twitter"><Link className="fa fa-twitter" href="/contact"></Link></li>
                                    <li className="linkedin"><Link href="/contact" className="fa fa-google-plus"></Link></li>
                                    <li className="pinterest"><Link href="/contact" className="fa fa-pinterest-p"></Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="map-boxed">
                        <div className="map-outer">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14684.953696918314!2d72.57437024545516!3d23.05171896090318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846e090fd0b9%3A0x1b45752bcc307f6e!2sDudheshwar%2C%20Ahmedabad%2C%20Gujarat%20380004!5e0!3m2!1sen!2sin!4v1694608010796!5m2!1sen!2sin" width="100%" height="560px" frameborder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>

                </div>
            </div>
            <section className="contact-form-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="title">Don’t Hasitate To Contact With us</div>
                        <h2>Now Very Easy</h2>
                        <div className="text">Whether you need a business card, a Envelope, or a Stickers, we have the skills and tools to make it happen.<br /> Contact us now and get a free quote.</div>
                    </div>
                    <div className="inner-container">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Contactpage;