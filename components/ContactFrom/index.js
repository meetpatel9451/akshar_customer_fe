import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import API from '../../store/api';
import { Alert, Box, Snackbar } from '@mui/material';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false)
    const [notificationMsg, setNotificationMsg] = useState({})
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
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
    const submitHandler = async (e) => {
        const _request = { ...forms }
        e.preventDefault();
        if (validator.allValid()) {
            setLoading(true)
            validator.hideMessages();
            const url = 'api/v1/contact-us';
            const response = await API.post(url, _request).then((res) => {
                setLoading(false);
                setNotificationMsg({status: 200, msg: "Contact Information Submitted Sucessfully!"})
            }).catch((err) => {
                setLoading(false);
                setNotificationMsg({status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message})
            });
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <>
            <>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <span className="icon flaticon-user-2"></span>
                            <div className="form-field">
                                <input
                                    value={forms.name}
                                    type="text"
                                    name="name"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    placeholder="Your Name" />
                                {validator.message('name', forms.name, 'required|alpha_space')}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <span className="icon flaticon-phone-call"></span>
                            <div className="form-field">
                                <input
                                    value={forms.phone}
                                    type="text"
                                    name="phone"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    placeholder="Your phone" />
                                {validator.message('phone', forms.phone, 'required|phone')}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <span className="icon flaticon-big-envelope"></span>
                            <div className="form-field">
                                <input
                                    value={forms.email}
                                    type="email"
                                    name="email"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    placeholder="Your Email" />
                                {validator.message('email', forms.email, 'required|email')}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <span className="icon flaticon-notepad"></span>
                            <div className="form-field">
                                <input
                                    value={forms.subject}
                                    type="text"
                                    name="subject"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    placeholder="Subject" />
                                {validator.message('subject', forms.subject, 'required')}
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <span className="icon flaticon-message"></span>
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                placeholder="Message">
                            </textarea>
                            {validator.message('message', forms.message, 'required')}
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                            <button className="theme-btn btn-style-three" type="submit" name="submit-form" disabled={loading} ><span className="txt">Submit Now</span></button>
                        </div>

                    </div>
                </form>
            </>
            <Box>
                <Snackbar open={Object.keys(notificationMsg).length > 0 ? true : false} autoHideDuration={6000} sx={{ marginTop: 10 }} onClose={onClose} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} >
                    <Alert severity={notificationMsg?.status == 200 ? "success": "error"} sx={{ width: '100%' }}>
                        {notificationMsg?.msg || ""}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default ContactForm;