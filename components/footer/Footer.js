import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Services from '../../api/Services';
import Projects from '../../api/project'
import Image from 'next/image';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className={`main-footer ${props.fClass}`}>
            <div className="pattern-layer" style={{ backgroundImage: `url(${'/images/background/pattern-3.png'})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${'/images/background/pattern-4.png'})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${'/images/background/pattern-5.png'})` }}></div>
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="logo">
                                            <Link onClick={ClickHandler} href="/"><Image src={Logo} alt="" /></Link>
                                        </div>
                                        <div className="text">Whether you need a business card, a Envelope, or a Sticker, we have the skills and tools to ake it happen. Contact us now and get a free quote.</div>
                                        <ul className="social-box">
                                            <li><Link onClick={ClickHandler} href="/" className="fa fa-facebook-f"></Link></li>
                                            <li><Link onClick={ClickHandler} href="/" className="fa fa-linkedin"></Link></li>
                                            <li><Link onClick={ClickHandler} href="/" className="fa fa-twitter"></Link></li>
                                            <li><Link onClick={ClickHandler} href="/" className="fa fa-google"></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Services</h4>
                                        <ul className="list-link">
                                            {Services.slice(0, 5).map((service, i) => (
                                                <li key={i}><Link onClick={ClickHandler} href={`/${service.slug}`} >{service.sTitle}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h4>instagram</h4>
                                        <div className="widget-content">
                                            <div className="images-outer clearfix">
                                                {Projects.slice(0, 6).map((project, prj) => (
                                                    <figure className="image-box" key={prj}><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}><Image src={project.pImg} alt="" /></Link></figure>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Contact info</h4>
                                        <ul className="list-style-two">
                                            <li><span className="icon flaticon-wall-clock"></span>Mon – Sat 10:00pm - 8:00pm</li>
                                            <li><span className="icon flaticon-phone-call"></span><Link onClick={ClickHandler} href="/">07940322176 / </Link> <Link onClick={ClickHandler} href="/">9998999229</Link></li>
                                            <li><span className="icon flaticon-email"></span><Link onClick={ClickHandler} href="/">akshargraphics@gmail.com</Link></li>
                                            <li><span className="icon flaticon-maps-and-flags"></span>1st floor, 26 Advani Market, Nr. B.G Tower, Shahibaug Road, Ahmedabad, Gujarat</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;