import React from 'react';
import Link from 'next/link';
import cImg2 from '/public/images/resource/business.png'
import cImg3 from '/public/images/resource/business-arrow.png'
import Image from 'next/image';


const WhyChoose = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="business-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${'/images/background/pattern-23.png'})` }}></div>
            <div className="auto-container">
                <div className="sec-title light">
                    <div className="title">WHY US CHOOSE NOW</div>
                    <h2>We Provide the Best Facilites For Business</h2>
                    <div className="text">At [Your Agency Name], we understand that your choice of a graphics and printing partner can significantly impact the success of your projects. Here's why we believe we're the best choice for all your graphics and printing needs:

.</div>
                </div>
                <Link  nClick={ClickHandler} href="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image wow slideInUp">
                                    <Image src={cImg2} alt="" />
                                </div>
                                <div className="arrow-image wow fadeInRight">
                                    <Image src={cImg3} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">01</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-safe"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Best Security</h4>
                                            <div className="text">We have seen great successes with everyone companies.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">02</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-chat-2"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Risk Manage</h4>
                                            <div className="text">Every business and industry requires an approach in our Heand.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">03</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-growth"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Growth Revenue</h4>
                                            <div className="text">You make sure you know how campaign is performing Business</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">04</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-management"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Greate Support</h4>
                                            <div className="text">To generate highly focused leads ready to purchases our service</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">05</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-united"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Expert Team Work</h4>
                                            <div className="text">Get access to everyone in your organization with a team directory.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default WhyChoose;