import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';
import LoginPage from './login';
import RegisterPage from './register';

const AuthPage = (props) => {
    // const router = useRouter();

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Login / Register'} pagesub={'Account'} />
            <section className="register-section">
                <div className="auto-container">
                    <form method="post" >
                        <div className="row clearfix">
                            <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <LoginPage />
                            </div>

                            <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <RegisterPage />
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
