import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import API from '../../store/api';


const laminationOptions = [
    { value: 'bopp_single_side', label: 'Bopp Single Side' },
    { value: 'bopp_front_back', label: 'Bopp Front Back' },
    { value: 'matt_single_side', label: 'Matt Single Side' },
    { value: 'matt_front_side', label: 'Matt Front Side' },
];

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

    const submitHandler =  async(e) => {
        e.preventDefault();
        setLoading(true);
        console.log("eeeeee ", forms);
        const user_id = localStorage.getItem("user_id");
        console.log("user_id ", typeof user_id, Number(user_id));
        if (validator.allValid()) {
            const _request = {...forms, client_id: Number(user_id)}
    console.log("_request ", _request);
    const url = 'api/v1/Inquiry';
    const response = await API.post(url, _request);
 console.log("response ", response?.data?.successCode);
            if(response?.data?.successCode == 201){
                setLoading(false);
                validator.hideMessages();
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                })
            }

        } else {
            validator.showMessages();
        }
    };

    return (
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
                            <MenuItem value={1}>Bopp Single Side</MenuItem>
                            <MenuItem value={2}>Bopp Front Back</MenuItem>
                            <MenuItem value={3}>Matt Single Side</MenuItem>
                            <MenuItem value={4}>Matt Front Side</MenuItem>
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
                            <MenuItem value={1}>Bopp Single Side</MenuItem>
                            <MenuItem value={2}>Bopp Front Back</MenuItem>
                            <MenuItem value={3}>Matt Single Side</MenuItem>
                            <MenuItem value={4}>Matt Front Side</MenuItem>
                        </Select>
                        {/* <input
                            value={forms.lamination}
                            type="text"
                            name="lamination"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lamination" /> */}
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
    )
}

export default QuotationForm;