import { Alert, Backdrop, Box, CircularProgress, MenuItem, Select, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import API from '../../store/api';

const NewPaymentForm = () => {

    const [forms, setForms] = useState({
        date: '',
        type: '',
        remarks: '',
        utr_no: '',
        bank_name: '',
        amount: '',
        receipt_img: '',
    });
    const [loading, setLoading] = useState(false);
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const [notificationMsg, setNotificationMsg] = useState({})
    const [error, serError] = useState(false);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };
    const fileChangeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.files[0] })
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
        if (validator.allValid()) {
            setLoading(true);
            validator.hideMessages();
            try {
                const user_id = localStorage.getItem("user_id");
                const url = `api/v1/ac_entry`;
                const formData = new FormData();

                formData.append(`client_id`, user_id);
                formData.append(`date`, forms.date);
                formData.append(`payment_type`, forms.type);
                formData.append(`remarks`, forms.remarks);
                formData.append(`utr_no`, forms.utr_no);
                formData.append(`bank_name`, forms.bank_name);
                formData.append(`amount`, forms.amount);
                formData.append(`file`, forms.receipt_img);
                formData.append(`debitor_creditor_type`, "client");
                formData.append(`credit_debit`, "credit");
                await API.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then((val) => {
                    setLoading(false);
                    setNotificationMsg({status: 200, msg: "Payment Submitted Sucessfully!"})
                    window.location.reload();
                }).catch((err) => {
                    setLoading(false);
                    setNotificationMsg({status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message})
                });
                setForms({
                    date: '',
                    type: '',
                    remarks: '',
                    utr_no: '',
                    bank_name: '',
                    amount: '',
                    receipt_img: '',
                });
            } catch (error) {
                setLoading(false);
            }
        } else {
            serError(true);
            validator.showMessages();
        }
    };

    return (
        <>

            <form onSubmit={(e) => submitHandler(e)}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-user-2"></span> */}
                        <div className="form-field">
                            <input
                                value={forms.date}
                                type="date"
                                name="date"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Date" />
                            {validator.message('date', forms.date, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">
                            <Select sx={{
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", ".MuiOutlinedInput-notchedOutline": {
                                    border: "none"
                                }
                            }} placeholder='Select Type' fullWidth name="type" id="type" onChange={(e) => changeHandler(e)} value={forms.type}>
                                <MenuItem value={"neft"}>NEFT</MenuItem>
                                <MenuItem value={"credit_limit"}>Credit Limit</MenuItem>
                                <MenuItem value={"cheque"}>Cheque</MenuItem>
                            </Select>
                            {/* <input
                            value={forms.type}
                            type="text"
                            name="type"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Type" /> */}
                            {validator.message('type', forms.type, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">
                            <input
                                value={forms.remarks}
                                type="text"
                                name="remarks"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="remarks" />
                            {validator.message('remarks', forms.remarks, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">
                            <input
                                value={forms.utr_no}
                                type="text"
                                name="utr_no"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="UTR No" />
                            {validator.message('utr_no', forms.utr_no, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">
                            <input
                                value={forms.bank_name}
                                type="text"
                                name="bank_name"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Bank Name" />
                            {validator.message('bank_name', forms.bank_name, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-big-envelope"></span> */}
                        <div className="form-field">
                            <input
                                value={forms.amount}
                                type="text"
                                name="amount"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Amount" />
                            {validator.message('amount', forms.amount, 'required|numeric')}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* <span className="icon flaticon-phone-call"></span> */}
                        <div className="form-field">
                            {/* <input type="file" id="imageUpload" name="imageUpload" accept="application/cdr" onChange={(e) => {
                                  let tempArray = [...selectedArray];
                                  tempArray[arrayIndex].image = e.target.files[0];
                                  setSelectedArray(tempArray);
                                }}/> */}
                            <input
                                value={forms.file}
                                type="file"
                                name="receipt_img"
                                onBlur={(e) => fileChangeHandler(e)}
                                onChange={(e) => fileChangeHandler(e)}
                                placeholder="File"
                                accept="*/*" />
                            {validator.message('receipt_img', forms.receipt_img, 'required')}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button disabled={loading} className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="txt">Add Payment</span></button>
                    </div>

                </div>
            </form>
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

export default NewPaymentForm;