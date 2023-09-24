import React from "react";
import Link from 'next/link'
import hero3 from '/public/images/resource/banner-2.png'
import Image from "next/image";

const Hero3 = () => {
    return (
        <section className="banner-section-six">
        <div className="patern-layer-one" style={{ backgroundImage: `url(${'/images/background/2.png'})` }}></div>
        <div className="patern-layer-two" style={{ backgroundImage: `url(${'/images/background/pattern-1.png'})` }}></div>
        <div className="auto-container">
            <div className="row clearfix">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="title">Digital Marketing</div>
                        <h1>Your Business Find Better Solutions.</h1>
                        <div className="text">Getting online is easy. Succeeding online is a different <br/> story. You’ll need more than just a beautiful.</div>
                        <div className="btn-box">
                            <Link href="/about" className="theme-btn btn-style-three"><span className="txt">Read More</span></Link>
                            <Link href="/services" className="theme-btn btn-style-five"><span className="txt">Our Services</span></Link>
                        </div>
                    </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <Image src={hero3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero3;