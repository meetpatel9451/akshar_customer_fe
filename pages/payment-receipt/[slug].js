import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import BankDetailPage from '../../components/BankDetailPage/BankDetailPage'
import Scrollbar from '../../components/scrollbar/scrollbar'

import PaymentSidebar from '../../api/PaymentSidebar';
import sSimg from '/public/images/resource/service-2.jpg';
import sSimg2 from '/public/images/resource/service-3.jpg';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProfilePage from '../../components/profilePage/ProfilePage';
import HistoryPage from '../../components/HistoryPage/HistoryPage';
import CashMemoPage from '../../components/CashMemoPage/CashMemoPage';
import LedgerStatementPage from '../../components/LedgerStatementPage/LedgerStatementPage';
import ChangePasswordPage from '../../components/ChangePasswordPage/ChangePasswordPage';
import PaymentPage from '../../components/PaymentPage/PaymentPage';

const PaymentReceipt = (props) => {

    const router = useRouter()

    const sidebarDetails = PaymentSidebar.find(item => item.slug === router.query.slug)
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const getComponent = () => {
        switch(sidebarDetails?.slug) {
            case 'profile':
              return <ProfilePage />;
            case 'history':
              return <HistoryPage />;
            case 'cash-memo':
              return <CashMemoPage />;
            case 'ladger-statement':
              return <LedgerStatementPage />;
            case 'change-password':
              return <ChangePasswordPage />;
            case 'payment':
              return <PaymentPage />;
            default:
              return <ProfilePage />;
          }
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={sidebarDetails?.sTitle} pagesub={sidebarDetails?.sTitle} />
            <div className="payment-sidebar-page-container">
                <div className="payment-container">
                    <div className="row clearfix">
                        <div className="sidebar-side left-sidebar col-lg-3 col-md-12 col-sm-12">
                            <aside className="sidebar sticky-top" style={{marginTop: "12px"}}>
                                <div className="sidebar-widget">
                                    <ul className="service-list">
                                        {PaymentSidebar.slice(0, 6).map((item, i) => (
                                            <li key={i}><Link onClick={ClickHandler} href={'/payment-receipt/[slug]'} as={`/payment-receipt/${item.slug}`}> <span className="color-layer"></span>{item.sTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>

                        <div className="content-side right-sidebar col-lg-9 col-md-12 col-sm-12">
                            <div className="service-detail">
                                <div className="inner-box">
                                    {getComponent()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <PartnerSection styleClass={'style-two'}/> */}
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default PaymentReceipt;


