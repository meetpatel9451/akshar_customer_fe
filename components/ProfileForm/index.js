import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const laminationOptions = [
    { value: 'bopp_single_side', label: 'Bopp Single Side' },
    { value: 'bopp_front_back', label: 'Bopp Front Back' },
    { value: 'matt_single_side', label: 'Matt Single Side' },
    { value: 'matt_front_side', label: 'Matt Front Side' },
];

const ProfileForm = () => {

    const [forms, setForms] = useState({
        name: 'John',
        email: 'john@gmail.com',
        address: '123, ambavadi road',
        city: 'Ahmedabad',
        state: 'Gujarat',
        pin_code: '334455',
        phone: '1234567890',
        gst_no: '9078563412',
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
                            value={forms.address}
                            type="text"
                            name="address"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your address" />
                        {validator.message('address', forms.address, 'required')}
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
                    <button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="txt">Update Profile</span></button>
                </div>

            </div>
        </form>
    )
}

export default ProfileForm;