import React from 'react'
import Link from 'next/link'
import aImg2 from '/public/images/resource/analysic.png'
import Image from 'next/image'

const Analysis = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="analysis-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${'/images/background/analysic-bg.png'})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="title-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Market Analysis</div>
                                <h2>Data Analysis and <br /> Statistics for consulting</h2>
                            </div>
                            <div className="text">Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</div>
                            <Link onClick={ClickHandler} href="/about" className="theme-btn btn-style-five"><span className="txt">Lets Start</span></Link>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <Image src={aImg2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analysis;