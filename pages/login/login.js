import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';
import { Alert, Box, Snackbar } from '@mui/material';

const LoginPage = () => {
    const router = useRouter();

    const [forms, setForms] = useState({
        email: '',
        password: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const [loading, setLoading] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState({})

    const changeHandler = e => {
        console.log("changeHandler ", changeHandler);
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const onClose = () => {
        setNotificationMsg({})
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            const url = 'auth/client_login';
            setLoading(true);
            const response = await API.post(url, forms).then((response) => {
                console.log("response", response);
                setLoading(false);
                setNotificationMsg({ status: 200, msg: "User registered successfully!" })
                setForms({
                    email: '',
                    password: '',
                })
                localStorage.setItem("token", response?.data?.result?.token);
                localStorage.setItem("user_id", JSON.stringify(response?.data?.result?.id));
                router.push({ pathname: window.location.pathname });
            }).catch((err) => {
                setLoading(false);
                setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
            });
        } else {
            validator.showMessages();
        }
    }

    return (
        <div>
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
                    <input type="email" name="email" placeholder="Enter Mail id *" value={forms.email}
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

                <div className="clearfix" style={{ marginTop: "12px" }}>
                    <div className="form-group pull-left">
                        <button type="button" onClick={SubmitHandler} className="theme-btn btn-style-two" disabled={loading}><span className="txt">login</span></button>
                    </div>
                    {/* <div className="form-group social-links-two pull-right">
                                            Or login with <Link href="/" className="img-circle facebook"><span className="fa fa-facebook-f"></span></Link> <Link href="/" className="img-circle twitter"><span className="fa fa-twitter"></span></Link> <Link href="/" className="img-circle google-plus"><span className="fa fa-google-plus"></span></Link>
                                        </div> */}
                </div>
            </div>
            <Box>
                <Snackbar open={Object.keys(notificationMsg).length > 0 ? true : false} autoHideDuration={6000} sx={{ marginTop: 10 }} onClose={onClose} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                    <Alert severity={notificationMsg?.status == 200 ? "success" : "error"} sx={{ width: '100%' }}>
                        {notificationMsg?.msg || ""}
                    </Alert>
                </Snackbar>
            </Box>
        </div>
    )
};
export default LoginPage;
