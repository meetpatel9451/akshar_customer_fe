import React, { Fragment, useState } from 'react';
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
        
        email: '',
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
            console.log("forms?.password ", forms?.email);
            // if(forms?.confirm_password == forms?.password){
                setIsEqual(true);
                validator.hideMessages();
                const url = `auth/forgot-password?email=${forms?.email}`;
                const response = await API.post(url).then((response) => {
                    setNotificationMsg({ status: 200, msg: response?.data?.data?.message })
                    setLoading(false);
                    console.log("response", response);
            
                }).catch((err) => {
                    setLoading(false);
                    setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
                });
            // }else{
            //     setIsEqual(true);
            // }
        } else {
            validator.showMessages();
        }
    }

    return (
        <div>
            <div className="form-title">
                <h2>Forget Your Password</h2>
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
