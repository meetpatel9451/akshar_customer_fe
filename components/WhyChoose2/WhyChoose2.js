import React from 'react';
import cImg from '/public/images/656X527.png'
import Image from 'next/image';


const WhyChoose2 = (props) => {
    return (

        <section className="skill-section">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Why Choose Us</div>
                                <h2>Why Choose Akshar Graphics</h2>
                            </div>
                            <div className="text">At Akshar Graphics, we understand that your choice of a graphics and printing partner can significantly impact the success of your projects. Here's why we believe we're the best choice for all your graphics and printing needs.</div>

                            <div className="skills">

                                <div className="skill-item" >
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Quality Assurance</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="95">95</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '95%'}}></div></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Personalized Service</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="92">92</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '92%'}}></div></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Timely Delivery</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="97">97</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '97%'}}></div></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <Image src={cImg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default WhyChoose2;