import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/resource/about-1.png'
import abicon from '/public/images/icons/about-circle.png'
import Image from 'next/image'


const About = (props) => {
    return (
        <section className="about-section style-two">
            <div className="circle-layer" style={{ backgroundImage: `url(${abicon})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="1">
                                <Image src={abimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">ABOUT US</div>
                                <h2>Grow Business with SEO</h2>
                            </div>
                            <div className="bold-text">Over 12 years Merix helping companies reach their financial and branding goals.</div>
                            <div className="text">Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</div>
                            <Link href="/about" className="theme-btn btn-style-ten"><span className="txt">Learn More</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;