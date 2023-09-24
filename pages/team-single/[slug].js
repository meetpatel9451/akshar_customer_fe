import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../components/footer/Footer';
import Teams from '../../api/Teams'
import Subscribe from '../../components/Subscribe/Subscribe';
import Image from 'next/image';


const TeamSinglePage = (props) => {
    const router = useRouter()

    const TeamDetails = Teams.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={TeamDetails?.name} pagesub='Team Single' />
            <section className="team-single-section">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="image-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Image src={TeamDetails?.tImg} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h2>{TeamDetails?.name} <span className="category">{TeamDetails?.title}</span></h2>
                                <ul className="post-meta">
                                    <li><span className="icon flaticon-big-envelope"></span> <Link href="/">akshargraphics@gmail.com</Link></li>
                                    <li><span className="icon flaticon-phone-call"></span> <Link href="/">07940322176</Link></li>
                                    <li><span className="icon fa fa-whatsapp"></span> <Link href="/">07940322176</Link></li>
                                </ul>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet, Lorem in ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet, Fusce laoreet in ligula consectetur dolor non nulla porttitorcondimentum tincidunt,</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet, Lorem in ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="row clearfix">
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="list-style-three">
                                            <li>SEO for Small Business</li>
                                            <li>SEO for Local Services</li>
                                            <li>Enterprise SEO</li>
                                            <li>National SEO</li>
                                        </ul>
                                    </div>
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="list-style-three">
                                            <li>Professional Approach</li>
                                            <li>High Quality Work</li>
                                            <li>Satisfaction Guarantee</li>
                                            <li>Online Payment</li>
                                        </ul>
                                    </div>
                                </div>

                                <ul className="social-icon-one">
                                    <li><Link href="/" className="fa fa-facebook-f"></Link></li>
                                    <li><Link href="/" className="fa fa-twitter"></Link></li>
                                    <li><Link href="/" className="fa fa-linkedin"></Link></li>
                                    <li><Link href="/" className="fa fa-google"></Link></li>
                                    <li><Link href="/" className="fa fa-whatsapp"></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Subscribe/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;