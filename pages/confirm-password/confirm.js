import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';
import { Alert, Box, FormHelperText, Snackbar } from '@mui/material';

const LoginPage = () => {
    const router = useRouter();

    const [forms, setForms] = useState({
        
        password: '',
        newPassword: '',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const [loading, setLoading] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState({})
    const [showPassword, setShowPassword] = useState(true);
    const [isEqual, setIsEqual] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    
    // useEffect(() => {
    //     const fetchData = async () => {
       
    //            if(router?.query?.token){
        
    //                    const url =   `auth/verify/email?token=${router?.query?.token}`;
    //                    const response = await API.post(url).then((response) => {
    //                        // setNotificationMsg({ status: 200, msg: "User registered successfully!" })
                           
    //                        // if(window.location.pathname == "/login"){
    //                            router.push({ pathname: '/login' });
    //                        // }else{
    //                        //     router.push({ pathname: window.location.pathname });
    //                        // }
                          
    //                    }).catch((err) => {
    //                        // setLoading(false);
    //                        // setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
    //                    });
       
    //            }
    //        }
    //        fetchData();
    //        },[router])

    const onClose = () => {
        setNotificationMsg({})
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            if(forms?.newPassword == forms?.password){
                setIsEqual(false);
                validator.hideMessages();
                const url = `auth/update-password?token=${router?.query?.token}`;
                setLoading(true);
                const _request = {
                    newPassword: forms?.newPassword
                }
                const response = await API.post(url, _request).then((response) => {
                    setLoading(false);
                    setNotificationMsg({ status: 200, msg: response?.data?.data?.message })
                    setForms({
                        newPassword: '',
                        password: '',
                    })
                    // if(window.location.pathname == "/login"){
                        router.push({ pathname: '/login' });
                    
                }).catch((err) => {
                    setLoading(false);
                    setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
                });
            }else{
                setIsEqual(true);
            }
        } else {
            validator.showMessages();
        }
    }

    return (
        <div>
            <div className="form-title">
                <h2>Enter Your New Password Here</h2>
            </div>

            <div className="styled-form login-form">
                {/* <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-user"></span></span>
                                        <input type="text" name="username"  placeholder="Your Name *" />
                                    </div> */}
               
                <div className="form-group">
                    <span className="adon-icon" onClick={() => setShowPassword(!showPassword)}><span className={showPassword ? "fa fa-eye": "fa fa-eye-slash" }></span></span>
                    <input type={showPassword ? "password" : "text"} name="password" placeholder="Enter Password"
                        // onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)} />
                    {validator.message('password', forms.password, 'required')}
                </div>

                <div className="form-group">
                    <span className="adon-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}><span className={showConfirmPassword ? "fa fa-eye": "fa fa-eye-slash" }></span></span>
                    <input type={showConfirmPassword ? "password" : "text"} name="newPassword" placeholder="Enter Confirm Password"
                        // onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)} />
                        
                    {validator.message('newPassword', forms.password, 'required')}
                <Box>
                    {isEqual && (<FormHelperText error>Please enter same password and confirm password same.</FormHelperText>)}
                </Box>
                </div>

                <div className="clearfix" style={{ marginTop: "12px" }}>
                    <div className="form-group pull-left">
                        <button type="button" onClick={SubmitHandler} className="theme-btn btn-style-two" disabled={loading}><span className="txt">Submit</span></button>
                    </div>
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
