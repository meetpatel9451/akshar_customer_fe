import React, { useState, useEffect } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import API from '../../store/api';
import { Alert, Box, Snackbar } from '@mui/material';

const QuotationForm = () => {

    const [forms, setForms] = useState({
        client_id: null,
        paper_type_id: null,
        lamination_id: null,
        client_name: "",
        mobile: "",
        job_width: "",
        job_height: "",
        quantity: "",
        other_details: ""
    });
    const [loading, setLoading] = useState(false);
    const [paperTypeList, setPaperTypeList] = useState([])
    const [laminationList, setLaminationList] = useState([])
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

    
    useEffect(() => {
        async function fetch() {
            const paperTypeRes = await API.get(`api/v1/paper-type`);
            if (paperTypeRes?.data?.data?.items?.length > 0) {
                setPaperTypeList(paperTypeRes?.data?.data?.items || [])
            } else {
                setPaperTypeList([])
            }

            const laminationRes = await API.get(`api/v1/lamination`);
            if (laminationRes?.data?.data?.items?.length > 0) {
                setLaminationList(laminationRes?.data?.data?.items || [])
            } else {
                setLaminationList([])
            }
        }
        fetch()
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();
        const user_id = localStorage.getItem("user_id");
        if (validator.allValid()) {
            setLoading(true);
            validator.hideMessages();
            const _request = { ...forms, client_id: Number(user_id) }
            const url = 'api/v1/inquiry';
            const response = await API.post(url, _request).then((res) => {
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                })
                setLoading(false);
                setNotificationMsg({ status: 200, msg: "Quotation's Request Submitted Sucessfully!" })
            }).catch((err) => {
                console.log("err", err);
                setLoading(false);
                setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
            });

        } else {
            validator.showMessages();
        }
    };

    return (
        <>
            <form onSubmit={(e) => submitHandler(e)}>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-user-2"></span>
                        <div className="form-field">
                            <input
                                value={forms.client_name}
                                type="text"
                                name="client_name"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Your Name" />
                            {validator.message('client_name', forms.client_name, 'required|alpha_space')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-phone-call"></span>
                        <div className="form-field">
                            <input
                                value={forms.mobile}
                                type="text"
                                name="mobile"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Your phone" />
                            {validator.message('mobile', forms.mobile, 'required|phone')}
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 form-group">
                        <span className="icon flaticon-big-envelope"></span>
                        <div className="form-field">
                            <input
                                value={forms.job_width}
                                type="text"
                                name="job_width"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Job Width" />
                            {validator.message('job_width', forms.job_width, 'required')}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 form-group">
                        <span className="icon flaticon-big-envelope"></span>
                        <div className="form-field">
                            <input
                                value={forms.job_height}
                                type="text"
                                name="job_height"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Job Height" />
                            {validator.message('job_height', forms.job_height, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-big-envelope"></span>
                        <div className="form-field">
                            <input
                                value={forms.quantity}
                                type="text"
                                name="quantity"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Quantity" />
                            {validator.message('quantity', forms.quantity, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">
                            <Select sx={{
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", ".MuiOutlinedInput-notchedOutline": {
                                    border: "none"
                                }
                            }} fullWidth name="paper_type_id" id="paper_type_id" onChange={(e) => changeHandler(e)} value={forms.paper_type_id}>
                                {
                                    paperTypeList.map((val, index) => (
                                        <MenuItem value={val?.id}>{val?.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            {/* <input
                            value={forms.paper_type}
                            type="text"
                            name="paper_type"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Paper type" /> */}
                            {validator.message('paper_type', forms.paper_type_id, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">

                            <Select fullWidth sx={{
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", ".MuiOutlinedInput-notchedOutline": {
                                    border: "none"
                                }
                            }} name="lamination_id" id="lamination_id" onChange={(e) => changeHandler(e)} value={forms.lamination_id}>
                                {
                                    laminationList.map((val, index) => (
                                        <MenuItem value={val?.id}>{val?.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            {validator.message('lamination', forms.lamination_id, 'required')}
                        </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-6 col-sm-12 form-group">
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
                </div> */}

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <span className="icon flaticon-message"></span>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.other_details}
                            type="text"
                            name="other_details"
                            placeholder="Other Details">
                        </textarea>
                        {validator.message('other_details', forms.other_details, 'required')}
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button className="theme-btn btn-style-three" disabled={loading} type="submit" name="submit-form"><span className="txt">Get A Quotation</span></button>
                    </div>

                </div>
            </form>
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
        </>
    )
}

export default QuotationForm;