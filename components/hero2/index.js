import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import hero1 from '/public/images/resource/banner-3.png'
import Image from "next/image";


const Hero2 = () => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (

        <section className="banner-section-five">
            <ul className="social-box">
                <li><Link href="/home2" className="fa fa-facebook-f"></Link></li>
                <li><Link href="/home2" className="fa fa-linkedin"></Link></li>
                <li><Link href="/home2" className="fa fa-twitter"></Link></li>
                <li><Link href="/home2" className="fa fa-google"></Link></li>
            </ul>
            <div className="single-item-carousel">

                <Slider {...settings}>
                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best for You</div>
                                        <h1>We’re Digital AIl <br /> Startup Support</h1>
                                        <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                                        <div className="clearfix">
                                            <Link href="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                            <div className="phone-box">
                                                <span className="phone-icon fa fa-phone"></span>
                                                <a className="phone" href="tel:+07940322176">07940322176 / 9998999229</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <Image src={hero1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best for You</div>
                                        <h1>We’re Digital AIl <br /> Startup Support</h1>
                                        <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                                        <div className="clearfix">
                                            <Link href="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                            <div className="phone-box">
                                                <span className="phone-icon fa fa-phone"></span>
                                                <a className="phone" href="tel:+07940322176">07940322176</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <Image src={hero1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best for You</div>
                                        <h1>We’re Digital AIl <br /> Startup Support</h1>
                                        <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                                        <div className="clearfix">
                                            <Link href="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                            <div className="phone-box">
                                                <span className="phone-icon fa fa-phone"></span>
                                                <a className="phone" href="tel:+07940322176">07940322176</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <Image src={hero1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>


            </div>
        </section>
    )
}

export default Hero2;