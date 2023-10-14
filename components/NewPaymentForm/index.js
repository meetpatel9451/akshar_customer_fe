import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const laminationOptions = [
    { value: 'bopp_single_side', label: 'Bopp Single Side' },
    { value: 'bopp_front_back', label: 'Bopp Front Back' },
    { value: 'matt_single_side', label: 'Matt Single Side' },
    { value: 'matt_front_side', label: 'Matt Front Side' },
];

const NewPaymentForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pin_code: '',
        phone: '',
        gst_no: '',
    });
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

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                address: '',
                city: '',
                state: '',
                pin_code: '',
                phone: '',
                gst_no: '',
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    {/* <span className="icon flaticon-user-2"></span> */}
                    <div className="form-field">
                        <input
                            value={forms.date}
                            type="text"
                            name="date"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Date" />
                        {validator.message('date', forms.date, 'required|alpha_space')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    {/* <span className="icon flaticon-big-envelope"></span> */}
                    <div className="form-field">
                        <input
                            value={forms.type}
                            type="text"
                            name="type"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Type" />
                        {validator.message('type', forms.type, 'required|email')}
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
                        {validator.message('remarks', forms.address, 'required')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    {/* <span className="icon flaticon-big-envelope"></span> */}
                    <div className="form-field">
                        <input
                            value={forms.utrno}
                            type="text"
                            name="utrno"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="UTR No" />
                        {validator.message('utrno', forms.utrno, 'required')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    {/* <span className="icon flaticon-big-envelope"></span> */}
                    <div className="form-field">
                        <input
                            value={forms.bankName}
                            type="text"
                            name="bankName"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Bank Name" />
                        {validator.message('bankName', forms.state, 'required')}
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
                        {validator.message('amount', forms.amount, 'required')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    {/* <span className="icon flaticon-phone-call"></span> */}
                    <div className="form-field">
                        <input
                            value={forms.file}
                            type="file"
                            name="file"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="File" />
                        {validator.message('file', forms.file, 'required|phone')}
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                    <button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="txt">Upload receipt</span></button>
                </div>

            </div>
        </form>
    )
}

export default NewPaymentForm;