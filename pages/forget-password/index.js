import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';
import ForgetPassword from './forget';

const AuthPage = (props) => {
    // const router = useRouter();

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Forget Password'} />
            <section className="register-section">
                <div className="auto-container">
                    <form method="post" >
                        <div className="row clearfix" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <ForgetPassword />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AuthPage;
