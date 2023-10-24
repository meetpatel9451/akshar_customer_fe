import React from 'react'
// import mImg1 from '/public/images/637X571.png'
import mImg2 from '/public/images/icons/mission-1.png'
import mImg3 from '/public/images/icons/mission-2.png'
import Image from 'next/image'

const Mission = (props) => {

    return (
        <section className={`mission-section ${props.sClass}`}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                {/* <Image src={mImg1} alt="" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">WHO WE ARE</div>
                                <h2>Your success is our success</h2>
                            </div>
                            <div className="bold-text">Welcome to Akshar Graphics, a dynamic force in the world of graphic design and printing. We are more than just a printing company; we are your creative partners, dedicated to bringing your ideas to life through the power of print..</div>
                            <ul className="mission-list">
                                <li><span className="icon"><Image src={mImg2} alt="" /></span>We embrace cutting-edge printing technologies and stay at the forefront of industry trends to offer you innovative solutions that captivate your audience and set you apart.</li>
                                <li><span className="icon"><Image src={mImg3} alt="" /></span>Our state-of-the-art equipment, skilled team, and rigorous quality control processes ensure that every project meets or exceeds your expectations.</li>
                                {/* <li><span className="icon"><Image src={mImg4} alt="" /></span>We conduct our business with the utmost integrity and transparency. Trust is the foundation of our relationships, and we always honor our commitments.</li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Mission;