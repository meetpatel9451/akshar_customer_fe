import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';

const LoginPage = () => {
    const router = useRouter();

    const [forms, setForms] = useState({
        email: '',
        password: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    ///

    const changeHandler = e => {
        console.log("changeHandler ", changeHandler);
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const SubmitHandler = async(e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            const url = 'auth/client_login';
            const response = await API.post(url, forms);
            setForms({
                email: '',
                password: '',
            })
            localStorage.setItem("token", response?.data?.result?.token);
            localStorage.setItem("user_id", JSON.stringify(response?.data?.result?.id));
            router.push({ pathname: window.location.pathname});
        } else {
            validator.showMessages();
        }
    }

    return (
        
                            <div >

                                <div className="form-title">
                                    <h2>Login Here</h2>
                                </div>

                                <div className="styled-form login-form">
                                    {/* <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-user"></span></span>
                                        <input type="text" name="username"  placeholder="Your Name *" />
                                    </div> */}
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="email" name="email"  placeholder="Enter Mail id *" value={forms.email} 
                                        // onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)} />
                                        {validator.message('email', forms.email, 'required')}
                                        
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                        <input type="password" name="password" placeholder="Enter Password" 
                                        // onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)} />
                                        {validator.message('password', forms.password, 'required')}
                                    </div>

                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <input type="checkbox" id="remember-me" /><label className="remember-me" for="remember-me">&nbsp; Remember Me</label>
                                        </div>
                                    </div>

                                    <div className="clearfix" style={{marginTop: "12px"}}>
                                        <div className="form-group pull-left">
                                            <button type="button" onClick={SubmitHandler} className="theme-btn btn-style-two"><span className="txt">login</span></button>
                                        </div>
                                        {/* <div className="form-group social-links-two pull-right">
                                            Or login with <Link href="/" className="img-circle facebook"><span className="fa fa-facebook-f"></span></Link> <Link href="/" className="img-circle twitter"><span className="fa fa-twitter"></span></Link> <Link href="/" className="img-circle google-plus"><span className="fa fa-google-plus"></span></Link>
                                        </div> */}
                                    </div>


                                </div>

                            </div>
    )
};
export default LoginPage;
