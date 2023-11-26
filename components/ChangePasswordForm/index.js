import { Alert, Box, FormHelperText, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import API from '../../store/api';

const ChangePasswordForm = () => {

    const [forms, setForms] = useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const [notMatch, setNotMatch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState({})
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const changeHandler = (e) => {
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

    const submitHandler = async (e) => {
        e.preventDefault();
        const user_id = localStorage.getItem("user_id");
        if (validator.allValid()) {
            validator.hideMessages();
            if (forms?.new_password === forms?.confirm_password) {
                setNotMatch(false)
                setLoading(true);
                console.log("forms", forms);
                // localhost:3000/auth/client/reset_password
                const url = `/auth/client/reset_password`;
                const _request = {
                    old_password: forms?.old_password,
                    new_password: forms?.new_password,
                    client_id: Number(user_id)
                    // confirm_password: forms?.confirm_password
                }
                const response = await API.post(url, _request).then(res => {
                    setLoading(false);
                    setNotificationMsg({ status: 200, msg: "Password Updated Sucessfully!" })
                }).catch(err => {
                    setLoading(false);
                    setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
                });
                setLoading(false);
                if (response) {
                    setForms({
                        name: '',
                        email: '',
                        home_address: '',
                        city: '',
                        state: '',
                        pin_code: '',
                        phone: '',
                        gst_no: '',
                    })
                }
            } else {
                setNotMatch(true)
            }

        } else {
            validator.showMessages();
        }
    };

    return (
        <>

            <form onSubmit={(e) => submitHandler(e)}>
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <span className="icon flaticon-user-2"></span>
                        <div className="form-field">
                            <input
                                value={forms.old_password}
                                type="text"
                                name="old_password"
                                // onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Old Password" />
                            {validator.message('old_password', forms.old_password, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <span className="icon flaticon-big-envelope"></span>
                        <div className="form-field">
                            <input
                                value={forms.new_password}
                                type="text"
                                name="new_password"
                                // onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="New Password" />
                            {validator.message('new_password', forms.new_password, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <span className="icon flaticon-big-envelope"></span>
                        <div className="form-field">
                            <input
                                value={forms.confirm_password}
                                type="text"
                                name="confirm_password"
                                // onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Confirm Password" />
                            {validator.message('confirm_password', forms.confirm_password, 'required')}
                            {notMatch && forms.confirm_password && <FormHelperText error>New password and Confirm password not match
                            </FormHelperText>}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="txt">Change Password</span></button>
                    </div>

                </div>
            </form>
            <Box>
                <Snackbar open={Object.keys(notificationMsg).length > 0 ? true : false} autoHideDuration={6000} sx={{ marginTop: 10 }} onClose={onClose} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} >
                    <Alert severity={notificationMsg?.status == 200 ? "success" : "error"} sx={{ width: '100%' }}>
                        {notificationMsg?.msg || ""}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default ChangePasswordForm;