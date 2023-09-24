import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link'


const pricing = [
    {
        li1: 'Social Media Marketing',
        li2: '5.600 Keywords',
        li3: 'One Way Link Building',
        li4: '10 Free Optimization',
        li5: '10 Press Releases',
        title: 'Standard',
        price: '69.99',
        price2: '109.99',
        btnClass: 'btn-style-eleven',
        shape:'/images/background/price-pattern-1.png',
    },
    {
        li1: 'Social Media Marketing',
        li2: '5.600 Keywords',
        li3: 'One Way Link Building',
        li4: '10 Free Optimization',
        li5: '10 Press Releases',
        title: 'Economy',
        price: '79.99',
        price2: '129.99',
        active: 'active',
        btnClass: 'btn-style-six',
        shape:'/images/background/price-pattern-3.png',
    },
    {
        li1: 'Social Media Marketing',
        li2: '5.600 Keywords',
        li3: 'One Way Link Building',
        li4: '10 Free Optimization',
        li5: '10 Press Releases',
        title: 'Standard',
        price: '69.99',
        price2: '149.99',
        btnClass: 'btn-style-eight',
        shape:'/images/background/price-pattern-2.png',
    },


]


const Pricing = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <section className={`pricing-section style-three ${props.sClass}`}>
            <div className="pattern-layer" style={{ backgroundImage: `url(${'/images/background/pattern-1.png'})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${'/images/background/pattern-20.png'})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Packages</div>
                    <h2>Our Pricing Table</h2>
                    <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
                </div>

                <div className="pricing-tabs tabs-box">

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                {pricing.map((pricing, ptem) => (
                                    <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${pricing.active}`} key={ptem}>
                                        <div className="inner-box">
                                            <div className="title">{pricing.title}</div>
                                            <div className="price">${pricing.price}</div>
                                            <ul className="price-list">
                                                <li>{pricing.li1}</li>
                                                <li>{pricing.li2}</li>
                                                <li>{pricing.li3}</li>
                                                <li>{pricing.li4}</li>
                                                <li>{pricing.li5}</li>
                                            </ul>
                                            <Link href="/" className={`theme-btn  ${pricing.btnClass}`}><span className="txt">Buy Now</span></Link>
                                            <div className="price-pattern-layer" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row">
                                {pricing.map((pricing, ptem) => (
                                    <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${pricing.active}`} key={ptem}>
                                        <div className="inner-box">
                                            <div className="title">{pricing.title}</div>
                                            <div className="price">${pricing.price2}</div>
                                            <ul className="price-list">
                                                <li>{pricing.li1}</li>
                                                <li>{pricing.li2}</li>
                                                <li>{pricing.li3}</li>
                                                <li>{pricing.li4}</li>
                                                <li>{pricing.li5}</li>
                                            </ul>
                                            <Link href="/" className={`theme-btn  ${pricing.btnClass}`}><span className="txt">Buy Now</span></Link>
                                            <div className="price-pattern-layer" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                    </TabContent>
                    <div className="buttons-outer">
                        <Nav tabs className="tab-buttons clearfix">
                            <NavItem className='tab-btn'>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Monthly
                                </NavLink>
                            </NavItem>
                            <NavItem className='tab-btn'>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >

                                    Yearly
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Pricing;