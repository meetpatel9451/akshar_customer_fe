import React, { useState } from 'react'
import { useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import API from '../../store/api';

const laminationOptions = [
    { value: 'bopp_single_side', label: 'Bopp Single Side' },
    { value: 'bopp_front_back', label: 'Bopp Front Back' },
    { value: 'matt_single_side', label: 'Matt Single Side' },
    { value: 'matt_front_side', label: 'Matt Front Side' },
];

const ProfileForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        home_address: '',
        city: '',
        state: '',
        pin_code: '',
        phone: '',
        gst_no: '',
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

    useEffect(async() => {
        const user_id = localStorage.getItem("user_id");
        console.log("user_id ", typeof user_id, Number(user_id));
        const url = `api/v1/client/${Number(user_id)}`;
    const response = await API.get(url);
    if(response?.data?.data){
        setForms(response?.data?.data)
    }
 console.log("response ", response);
    },[])

    const submitHandler = async(e) => {
        e.preventDefault();
        const user_id = localStorage.getItem("user_id");
        if (validator.allValid()) {
            setLoading(true);
            console.log("forms", forms);
            validator.hideMessages();
            const url = `api/v1/client/${Number(user_id)}`;
            const _request = {
                name: forms.name,
                email: forms.email,
                home_address: forms.home_address,
                city: forms.city,
                state: forms.state,
                pin_code: forms.pin_code,
                phone: forms.phone,
                gst_no: forms.gst_no,
            }
            const response = await API.patch(url, _request);
            console.log("response ", response);
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

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <div className="form-field">
                        <input
                            value={forms.home_address}
                            type="text"
                            name="home_address"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your address" />
                        {validator.message('home_address', forms.home_address, 'required')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <div className="form-field">
                        <input
                            value={forms.city}
                            type="text"
                            name="city"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your city" />
                        {validator.message('city', forms.city, 'required')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <div className="form-field">
                        <input
                            value={forms.state}
                            type="text"
                            name="state"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="State" />
                        {validator.message('state', forms.state, 'required')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <div className="form-field">
                        <input
                            value={forms.pin_code}
                            type="text"
                            name="pin_code"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Pin Code" />
                        {validator.message('pin_code', forms.pin_code, 'required')}
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
                            placeholder="Contact No." />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <div className="form-field">
                        <input
                            value={forms.gst_no}
                            type="text"
                            name="gst_no"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="GST No./Pan No." />
                        {validator.message('gst_no', forms.gst_no, 'required')}
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                    <button disabled={loading} className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="txt">Update Profile</span></button>
                </div>

            </div>
        </form>
    )
}

export default ProfileForm;