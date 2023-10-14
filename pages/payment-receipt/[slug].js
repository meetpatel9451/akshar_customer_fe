import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar'

import PaymentSidebar from '../../api/PaymentSidebar';
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
// import ProfilePage from '../../components/profilePage/ProfilePage';
import HistoryPage from '../../components/HistoryPage/HistoryPage';
import CashMemoPage from '../../components/CashMemoPage/CashMemoPage';
import LedgerStatementPage from '../../components/LedgerStatementPage/LedgerStatementPage';
import ChangePasswordPage from '../../components/ChangePasswordPage/ChangePasswordPage';
import PaymentPage from '../../components/PaymentPage/PaymentPage';
import AddNewPayment from '../../components/AddNewPayment/AddNewPayment';

import highQualityPrinting from '/public/images/icons/high-quality-printing.png' 
import simg2 from '/public/images/resource/service-5.jpg'
import simg3 from '/public/images/resource/service-6.jpg'

import sIcon1 from '/public/images/icons/service-1.png' 
import sIcon2 from '/public/images/icons/service-2.png' 
import sIcon3 from '/public/images/icons/service-3.png' 


const sidebarItem = [
    {
        Id: '1',
        sTitle: 'Profile', 
        slug: 'profile',
        sImg:highQualityPrinting,
        Icon:'flaticon-pie-chart',
        sIcon:sIcon1,
        des:'Add/Update the profile',
    },
    {
        Id: '2',
        sTitle: 'Order And History', 
        slug: 'history',
        sImg:simg2,
        sIcon:sIcon2,
        Icon:'flaticon-line-chart',
        des:'To show the past order and history',
    },
    // {
    //     Id: '3',
    //     sIcon:sIcon3,
    //     sTitle: 'Cash Memo', 
    //     slug: 'cash-memo',
    //     sImg:simg3,
    //     Icon:'flaticon-bar-chart',
    //     des:'To manage the cash memo',
    // },
    {
        Id: '4',
        sIcon:sIcon3,
        sTitle: 'Ladger Statement', 
        slug: 'ladger-statement',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To manage the ladger statement',
    },
    {
        Id: '5',
        sIcon:sIcon3,
        sTitle: 'Change Password', 
        slug: 'change-password',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To reset the password',
    },
    {
        Id: '6',
        sIcon:sIcon3,
        sTitle: 'Payment', 
        slug: 'payment',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To upload the payment receipt',
    },
    {
        Id: '7',
        sIcon:sIcon3,
        sTitle: 'Add New Payment', 
        slug: 'add-payment',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To upload the payment receipt',
    },
]

const PaymentReceipt = (props) => {

    const router = useRouter()

    const sidebarDetails = sidebarItem.find(item => item.slug === router.query.slug)
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const getComponent = () => {
        console.log("sidebarDetails?.slug",sidebarDetails?.slug);
        switch(sidebarDetails?.slug) {
            case 'profile':
            //   return <ProfilePage />;
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
            case 'add-payment':
              return <AddNewPayment />;
            default:
            //   return <ProfilePage />;
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


