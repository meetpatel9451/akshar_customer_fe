import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero3 from '/public/images/main-slider/content-image-2.png'
import hero4 from '/public/images/main-slider/content-image-3.png'
import hero5 from '/public/images/main-slider/content-image-4.png'
import Image from "next/image";

const Hero = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
    };


    return (
        <section className="banner-section-four">
            <div className="main-slider-carousel owl-carousell">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${'/images/main-slider/image-2.jpg'})` }}>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${'/images/main-slider/dotted-layer-1.png'})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="title">What’s Your SEO Score</div>
                                            <h1>SEO Services Provide <br /> For Your Agency</h1>
                                            <div className="btns-box">
                                                <Link href="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
                                                <Link href="/contact" className="theme-btn btn-style-nine"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <Image src={hero3} alt="" />
                                            </div>
                                            <div className="images-icons">
                                                <div className="image-1">
                                                    <Image src={hero4} alt="" />
                                                </div>
                                                <div className="image-2">
                                                    <Image src={hero5} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${'/images/main-slider/image-2.jpg'})` }}>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${'/images/main-slider/dotted-layer-1.png'})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="title">What’s Your SEO Score</div>
                                            <h1>SEO Services Provide <br /> For Your Agency</h1>
                                            <div className="btns-box">
                                                <Link href="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
                                                <Link href="/contact" className="theme-btn btn-style-nine"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <Image src={hero3} alt="" />
                                            </div>
                                            <div className="images-icons">
                                                <div className="image-1">
                                                    <Image src={hero4} alt="" />
                                                </div>
                                                <div className="image-2">
                                                    <Image src={hero5} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="owl-item">
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    )
}



export default Hero;