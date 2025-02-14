import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';
import { Alert, Backdrop, Box, CircularProgress, Snackbar } from '@mui/material';
import Link from 'next/link';

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
    const [showPassword, setShowPassword] = useState(true);

    const changeHandler = e => {
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
                setLoading(false);
                setNotificationMsg({ status: 200, msg: response.data.message })
                setForms({
                    email: '',
                    password: '',
                })
                if(window.location.pathname == "/login"){
                    router.push({ pathname: '/' });
                }else{
                    router.push({ pathname: window.location.pathname });
                }
                localStorage.setItem("token", response?.data?.result?.token);
                localStorage.setItem("user_id", JSON.stringify(response?.data?.result?.id));
            }).catch((err) => {
                setLoading(false);
                setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
            });
        } else {
            validator.showMessages();
        }
    }

    const spanStyle = {
        color: '#000', // Default text color
        transition: 'color 0.3s', // Smooth transition for color property
      };
    
      const hoverStyle = {
        color: 'blue', // Change text color on hover
      };

    return (
        <div>
            <div className="form-title">
                <h2>Login Here</h2>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
                    <span className="adon-icon" onClick={() => setShowPassword(!showPassword)}><span className={showPassword ? "fa fa-eye": "fa fa-eye-slash" }></span></span>
                    <input type={showPassword ? "password" : "text"} name="password" placeholder="Enter Password"
                        // onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)} />
                    {validator.message('password', forms.password, 'required')}
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}><Link href="/forget-password"><span style={{ color: '#000' }} onMouseOver={(e) => {
                    e.currentTarget.style.color = hoverStyle.color;
                }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = spanStyle.color;
                    }}
                >Forget Password?</span></Link></Box>


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
