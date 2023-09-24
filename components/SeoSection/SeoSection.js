import React from 'react'
import rImg from '/public/images/resource/seo-1.png'
import Image from 'next/image'

const SeoSection = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="seo-section-two">
            <div className="image-layer" style={{ backgroundImage: `url(${'/images/background/pattern-21.png'})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Web SEO</div>
                                <h2>Check Your Website For SEO</h2>
                            </div>
                            <div className="seo-form-two">
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div className="form-group clearfix">
                                        <input type="text" name="website" value="" placeholder="Your Website URL" required />
                                        <input type="email" name="email" value="" placeholder="Your Email" required />
                                    </div>
                                    <button type="submit" className="theme-btn btn-style-eleven"><span className="txt">Send Now</span></button>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="seo-image titlt" data-tilt data-tilt-max="5">
                                <Image src={rImg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default SeoSection;