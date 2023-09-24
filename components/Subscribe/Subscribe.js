import React from 'react'
import Sub from '/public/images/resource/newsletter.png'
import Image from 'next/image'


const Subscribe = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    
    return (
        <section className="newsletter-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Newsletter</div>
                                <h2>Subscribe Our Newsletter</h2>
                            </div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo </div>
                            <div className="newsletter-form">
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div className="form-group">
                                        <input type="email" name="email" value="" placeholder="Enter Your Email" required="" />
                                        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Subscribe Now</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <Image src={Sub} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Subscribe;