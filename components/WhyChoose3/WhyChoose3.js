import React from 'react';
import Link from 'next/link'


const WhyChoose3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (

        <section className="services-section-three">
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${'/images/icons/icon-8.png'})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${'/images/icons/icon-9.png'})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${'/images/icons/icon-10.png'})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="row clearfix">
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-badge"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Best Security</Link></h5>
                                        <div className="text">We have seen great successes with everyone companies.</div>
                                    </div>
                                </div>
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-chat-3"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Risk Manage</Link></h5>
                                        <div className="text">Every business and industry requires an approach in our Heand.</div>
                                    </div>
                                </div>
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-growth"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Growth Revenue</Link></h5>
                                        <div className="text">Offer a wide range of printing services to grow your business.</div>
                                    </div>
                                </div>

                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon flaticon-management"></span>
                                        </div>
                                        <h5><Link onClick={ClickHandler} href="/services">Greate Support</Link></h5>
                                        <div className="text">Implement an online ordering system for customers to place orders easily and track their progress</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">WHY US CHOOSE NOW</div>
                                <h2>We Provide the Best <br/> Services For Business</h2>
                            </div>
                            <div className="bold-text">Providing excellent customer service, including responsive communication, on-time delivery, and a willingness to address customer concerns.</div>
                            <ul className="list-style-three">
                                <li>Focus on delivering high-quality printing with attention to detail and precision.</li>
                                <li>Compete on pricing by offering competitive rates while maintaining quality.</li>
                                <li>Maintain strict quality control measures to ensure the consistency and excellence of your printed materials.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default WhyChoose3;