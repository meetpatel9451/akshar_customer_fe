import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import sSimg from '/public/images/resource/service-2.jpg';
import sSimg2 from '/public/images/resource/service-3.jpg';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';


const ServiceSinglePage = (props) => {

    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={serviceDetails?.sTitle} pagesub={serviceDetails?.sTitle} />
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar sticky-top">
                                <div className="sidebar-widget">
                                    <ul className="service-list">
                                        {Services.slice(0, 6).map((service, i) => (
                                            <li key={i}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}> <span className="color-layer"></span>{service.sTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="broucher-widget">
                                    <div className="widget-content" style={{ backgroundImage: `url(${'/images/background/pattern-19.jpg'})` }}>
                                        <h3>Download <br /> Our Brochures</h3>
                                        <div className="icon flaticon-pdf-1"></div>
                                        <div className="text">Business is a marketing discipline focused on growing visibility in organic (non-paid) technic required.</div>
                                        <Link href="/" className="download">Click here to download</Link>
                                    </div>
                                </div>
                                <div className="help-widget">
                                    <div className="widget-content">
                                        <h4>Need Help ?</h4>
                                        <div className="text">Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</div>
                                        <ul className="help-list">
                                            <li><Link href="/"><span className="icon fa fa-phone"></span>+0 000 0000 000</Link></li>
                                            <li><Link href="/"><span className="icon fa fa-envelope-o"></span>Merix@example.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                            <div className="service-detail">
                                <div className="inner-box">
                                    <div className="image">
                                        <Image src={serviceDetails?.sImg} alt="" />
                                    </div>
                                    <div className="lower-content">
                                        <h3>Content Marketing</h3>
                                        <p>Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool.</p>
                                        <h4>Features</h4>
                                        <p>Designed with the harried business person in mind, Basecamp helps managers and team members stay on top of their professional lives. The app boasts that users will no longer drown in a sea of emails as that feature is already embedded into the app. Additionally, the scheduling and tracking features help ensure teams never again miss a deadline. Another interesting component of Basecamp is that managercan eliminate the need for “check-in” meetings by sending an automated message daily to employees that ask for a recap of what they accomplished that day. Then employees can “tag” teammates in their recaps to explain what they need help with or what they finished.</p>
                                        <div className="two-columns">
                                            <div className="row clearfix">
                                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                                    <div className="image">
                                                        <Image src={sSimg} alt="" />
                                                    </div>
                                                </div>
                                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                                    <h4>Cost</h4>
                                                    <p>A unique feature of Basecamp is that the app doesn’t charge for an increase in the number of users or projects. So unlike some of its peers, Basecamp charges a flat-fixed fee of $99 a month for a team, no matter the size.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4>Why It’s Good for SEO Pros</h4>
                                        <p>Managing a client’s SEO consists of many different timelines and action items. Keeping track of client emails, meetings, and central documents is a full-time job.</p>
                                        <div className="two-columns">
                                            <div className="row clearfix">
                                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                                    <p>By offering one of the best all-encompassing software solutions, Basecamp helps busy SEO pros stay on top of their entire business by more efficiently checking in with their team and deadlines in one easy to use the app.Casie Gillette, senior director of digital marketing at KoMarketing, uses Basecamp mainly for communicating to clients.</p>
                                                    <p>“Basecamp is our primary means of communication with clients,” Gillette said. “For any deliverable, it allows an easy way to track the conversation and adjust docs accordingly.”</p>
                                                </div>
                                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                                    <div className="image">
                                                        <Image src={sSimg2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <PartnerSection styleClass={'style-two'}/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
