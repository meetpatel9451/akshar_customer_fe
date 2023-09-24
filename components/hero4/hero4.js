import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import hero5 from '/public/images/main-slider/banner_gif.gif'
import icon1 from '/public/images/main-slider/icon-1.svg'
import icon2 from '/public/images/main-slider/icon-2.svg'
import icon3 from '/public/images/main-slider/icon-3.svg'
import icon4 from '/public/images/main-slider/icon-4.png'
import icon5 from '/public/images/main-slider/icon-5.png'
import icon6 from '/public/images/main-slider/icon-6.png'
import Image from "next/image";

const Hero4 = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
    };


    return (
        <section className="banner-section">
            <div className="main-slider-carousel">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${'/images/main-slider/slider_background.svg'})` }}>
                            <div className="patern-layer-one" style={{ backgroundImage: `url(${'/images/main-slider/pattern-1.png'})` }}></div>
                            <div className="patern-layer-two" style={{ backgroundImage: `url(${'/images/main-slider/pattern-2.png'})` }}></div>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${'/images/main-slider/dotted-layer.png'})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">

                                    <div className="content-column col-lg-6 col-md-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
                                        <div className="inner-column">
                                            <div className="title">Unlock your imgination</div>
                                            <h1>Stunning graphics and <br /> Priting solution await!</h1>
                                            <div className="btns-box">
                                                <Link href="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                                                <Link href="/contact" className="theme-btn btn-style-four"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                            <div className="inner-column">
                                                <div className="image">
                                                    <img src="images/main-slider/banner_gif.gif"/>
                                                    {/* <Image src={hero5} alt="" /> */}
                                                </div>
                                                {/* <div className="images-icons parallax-scene-1"> */}
                                                    {/* <div className="slider_backgrousvg" data-depth="0.30">
                                                        <Image src={icon1} alt="" />
                                                    </div> */}
                                                    {/* <div className="image-2" data-depth="0.30">
                                                        <Image src={icon2} alt="" />
                                                    </div>
                                                    <div className="image-3" data-depth="0.30">
                                                        <Image src={icon3} alt="" />
                                                    </div>
                                                    <div className="image-4" data-depth="0.50">
                                                        <Image src={icon4} alt="" />
                                                    </div>
                                                    <div className="image-5" data-depth="0.50">
                                                        <Image src={icon5} alt="" />
                                                    </div>
                                                    <div className="image-6" data-depth="0.50">
                                                        <Image src={icon6} alt="" />
                                                    </div> */}
                                                {/* </div> */}
                                            </div>
                                        </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${'/images/main-slider/slider_background.svg'})` }}>
                            <div className="patern-layer-one" style={{ backgroundImage: `url(${'/images/main-slider/pattern-1.png'})` }}></div>
                            <div className="patern-layer-two" style={{ backgroundImage: `url(${'/images/main-slider/pattern-2.png'})` }}></div>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${'/images/main-slider/dotted-layer.png'})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">

                                    <div className="content-column col-lg-6 col-md-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
                                        <div className="inner-column">
                                            <div className="title">Unlock your imgination</div>
                                            <h1>Stunning graphics and <br /> Priting solution await!</h1>
                                            <div className="btns-box">
                                                <Link href="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                                                <Link href="/contact" className="theme-btn btn-style-four"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src="images/main-slider/banner_gif.gif"/>
                                                {/* <Image src={hero5} alt="" /> */}
                                            </div>
                                            {/* <div className="images-icons parallax-scene-1">
                                                <div className="slider_backgrousvg" data-depth="0.30">
                                                    <Image src={icon1} alt="" />
                                                </div>
                                                <div className="image-2" data-depth="0.30">
                                                    <Image src={icon2} alt="" />
                                                </div>
                                                <div className="image-3" data-depth="0.30">
                                                    <Image src={icon3} alt="" />
                                                </div>
                                                <div className="image-4" data-depth="0.50">
                                                    <Image src={icon4} alt="" />
                                                </div>
                                                <div className="image-5" data-depth="0.50">
                                                    <Image src={icon5} alt="" />
                                                </div>
                                                <div className="image-6" data-depth="0.50">
                                                    <Image src={icon6} alt="" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${'/images/main-slider/slider_background.svg'})` }}>
                            <div className="patern-layer-one" style={{ backgroundImage: `url(${'/images/main-slider/pattern-1.png'})` }}></div>
                            <div className="patern-layer-two" style={{ backgroundImage: `url(${'/images/main-slider/pattern-2.png'})` }}></div>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${'/images/main-slider/dotted-layer.png'})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">

                                    <div className="content-column col-lg-6 col-md-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
                                        <div className="inner-column">
                                            <div className="title">Unlock your imgination</div>
                                            <h1>Stunning graphics and <br /> Priting solution await!</h1>
                                            <div className="btns-box">
                                                <Link href="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                                                <Link href="/contact" className="theme-btn btn-style-four"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src="images/main-slider/banner_gif.gif"/>
                                                {/* <Image src={hero5} alt="" /> */}
                                            </div>
                                            {/* <div className="images-icons parallax-scene-1">
                                                <div className="image-1" data-depth="0.30">
                                                    <Image src={icon1} alt="" />
                                                </div>
                                                <div className="image-2" data-depth="0.30">
                                                    <Image src={icon2} alt="" />
                                                </div>
                                                <div className="image-3" data-depth="0.30">
                                                    <Image src={icon3} alt="" />
                                                </div>
                                                <div className="image-4" data-depth="0.50">
                                                    <Image src={icon4} alt="" />
                                                </div>
                                                <div className="image-5" data-depth="0.50">
                                                    <Image src={icon5} alt="" />
                                                </div>
                                                <div className="image-6" data-depth="0.50">
                                                    <Image src={icon6} alt="" />
                                                </div>
                                            </div> */}
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



export default Hero4;