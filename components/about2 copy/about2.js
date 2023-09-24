import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/resource/about.png'
import Image from 'next/image'

const About2 = (props) => {
    return (
        <section className="about-section">
            <div className="circle-layer" style={{ backgroundImage: `url(${'/images/icons/about-circle.png'})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">ABOUT US</div>
                                <h2>Akshar graphics and printing</h2>
                            </div>
                            <div className="bold-text">Our mission is simple</div>
                            <div className="text">To provide innovative and high-quality graphics and printing solutions that exceed our clients' expectations. We believe that every project, no matter the size, should receive the utmost attention to detail and creativity.</div>
                            <Link href="/about" className="theme-btn btn-style-five"><span className="txt">Learn More</span></Link>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="1">
                                <Image src={abimg} alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About2;