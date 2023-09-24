import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo-3.png'
import btn1 from '/public/images/icons/app-btn.png'
import btn2 from '/public/images/icons/google-btn.png'
import Image from 'next/image'

const Footer2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="footer-style-two" style={{ backgroundImage: `url(${'/images/background/map-pattern-2.png'})` }}>
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">

                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">

                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="logo">
                                            <Link onClick={ClickHandler} href="/home2"><Image src={Logo} alt="" /></Link>
                                        </div>
                                        <div className="text">Lorem ipsum dolor amet consectetur adip- ielit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis....</div>
                                    </div>
                                </div>

                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Quicky links</h4>
                                        <div className="row clearfix">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <ul className="list-link-two">
                                                    <li><Link onClick={ClickHandler} href="/services">How It Works</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/services">Guarantee</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog">Report Bug</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <ul className="list-link-two">
                                                    <li><Link onClick={ClickHandler} href="/about">About Singleton</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/testimonial">Testimonials</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget contact-info-widget">
                                        <h4>Contact us</h4>
                                        <div className="widget-content">
                                            <ul>
                                                <li>Mon – Sat 10:00pm - 8:00pm</li>
                                                <li><a href="tel:+07940322176">07940322176</a> <a href="tel:+9998999229">9998999229</a></li>
                                                <li><a href="mailto:akshargraphics@gmail.com">akshargraphics@gmail.com</a></li>
                                                <li>16122 Collins Street West, Melbourne, VIC Srsars</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget app-widget">
                                        <h4>Download the App</h4>
                                        <div className="app-btns clearfix">
                                            <Link onClick={ClickHandler} href="/home2"><Image src={btn1} alt="" /></Link>&ensp;
                                            <Link onClick={ClickHandler} href="/home2"><Image src={btn2} alt="" /></Link>
                                        </div>

                                        <ul className="social-box">
                                            <li className="follow">Follow Us Now</li>
                                            <li><Link onClick={ClickHandler} href="/home2" className="fa fa-facebook-f"></Link></li>
                                            <li><Link onClick={ClickHandler} href="/home2" className="fa fa-linkedin"></Link></li>
                                            <li><Link onClick={ClickHandler} href="/home2" className="fa fa-twitter"></Link></li>
                                            <li><Link onClick={ClickHandler} href="/home2" className="fa fa-google"></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright">Copyright &copy; 2023. All Rights Reserved By <Link href="/">noor_tech.</Link></div>
                        </div>
                        <div className="nav-column col-lg-6 col-md-12 col-sm-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/privacy">Privacy</Link></li>
                                <li><Link onClick={ClickHandler} href="/faq">FAQs</Link></li>
                                <li><Link onClick={ClickHandler} href="/login">Account</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer2;