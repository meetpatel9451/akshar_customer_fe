import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Quotationpage from '../../components/QuotationPage/QuotationPage';

const Quotation = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Quatation'} pagesub={'Quotation'}/> 
            <Quotationpage/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default Quotation;


