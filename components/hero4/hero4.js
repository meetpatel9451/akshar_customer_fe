import React, { useEffect } from "react";
import Link from 'next/link'
import Slider from "react-slick";
import { useRouter } from "next/router";
import API from "../../store/api";

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

    let router =  useRouter();
    
    
    useEffect(() => {
 console.log("useEffect ");
 const fetchData = async () => {

     console.log("router?.query?.token ", router?.query?.token);
        if(router?.query?.token){
 
                const url =   `auth/verify/email?token=${router?.query?.token}`;
                const response = await API.post(url, ).then((response) => {
                    console.log("response", response);
                    // setNotificationMsg({ status: 200, msg: "User registered successfully!" })
                    
                    if(window.location.pathname == "/login"){
                        router.push({ pathname: '/' });
                    }else{
                        router.push({ pathname: window.location.pathname });
                    }
                   
                }).catch((err) => {
                    // setLoading(false);
                    // setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
                });

        }
    }
    fetchData();
    },[router])


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
                                            <div className="title">Unlock your imgination with Akshar Graphics</div>
                                            <h1>Stunning graphics and <br /> Priting solution await!</h1>
                                            <div className="btns-box">
                                                <Link href="/shop" className="theme-btn btn-style-three"><span className="txt">Let's Start</span></Link>
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
                                            <div className="title">Unlock your imgination with Akshar Graphics</div>
                                            <h1>Stunning graphics and <br /> Priting solution await!</h1>
                                            <div className="btns-box">
                                                <Link href="/shop" className="theme-btn btn-style-three"><span className="txt">Let's Start</span></Link>
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
                                            <div className="title">Unlock your imgination with Akshar Graphics</div>
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