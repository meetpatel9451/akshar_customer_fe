import React from 'react'

const BuildStep2 = (props) => {
    return (
        <section className="steps-section" style={{ backgroundImage: `url(${'/images/background/pattern-14.png'})` }}>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">How to order</div>
                    <h2>Follow the few step.</h2>
                </div>

                <div className="row clearfix">
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">01</div>
                            </div>
                            <h6>Select Product</h6>
                        </div>
                    </div>
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">02</div>
                            </div>
                            <h6>Upload your design</h6>
                        </div>
                    </div>
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">03</div>
                            </div>
                            <h6>Place Order</h6>
                        </div>
                    </div>
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">04</div>
                            </div>
                            <h6>Packaging and Shipping</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuildStep2;