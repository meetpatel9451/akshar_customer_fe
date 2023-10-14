import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import BankDetailPage from '../../components/BankDetailPage/BankDetailPage'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const BankDetail = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Bank Details'} pagesub={'Bank Details'}/> 
            <BankDetailPage/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default BankDetail;


