import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import API from '../../store/api';
import LoginPage from './login';

const RegisterPage = () => {
    const router = useRouter();

    const [registerForms, setRegisterForms] = useState({
        email: '',
        password: '',confirm_password: '',
        username: '',
        confirm_password: '',address: '', city: '',state: '',
        pincode: '', contact_number: '', tin_number: '', gst_number: ''

    });

    const [registerValidator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeREgisterHandler = e => {
        console.log("changeHandler ", e.target.value );
        setRegisterForms({ ...registerForms, [e.target.name]: e.target.value })
        if (registerValidator.allValid()) {
            registerValidator.hideMessages();
        } else {
            registerValidator.showMessages();
        }
    };

    const SubmitRegisterHandler = async(e) => {
        e.preventDefault();
        console.log("registerForms ", registerForms);
        
        
        if (registerValidator.allValid()) {
            if(registerForms?.password != registerForms?.confirm_password){
                console.log(" Password not match")
            }else{
                registerValidator.hideMessages();
            const _request = {
                name: registerForms?.name,
                email: registerForms?.email,
                username: registerForms.username,
                password: registerForms?.password,
                home_address: registerForms?.address,
                city: registerForms?.city,
                pin_code: registerForms?.pincode,
                phone: registerForms?.contact_number,
                tin_no: registerForms?.tin_number,
                gst_no: registerForms?.gst_number,
                state: registerForms?.state,
                // client_code: registerForms,
                // client_category: registerForms,
                // file_code: registerForms,
                email_reminder: false,
                sms_reminder: false,
                // remarks: "",
                credit_limit: 0
            }
            const url = 'auth/client_register';
            const response = await API.post(url, _request);
            console.log("response ", response);
            // setForms({
            //     email: '',
            //     password: '',
            // })

            router.push({ pathname: window.location.pathname});
        }
        } else {
            console.log("showMessages ");
            registerValidator.showMessages();
        }
    }

    return (
       

                            <div >

                                <div className="form-title">
                                    <h2>Register Now</h2>
                                </div>

                                <div className="styled-form register-form">
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-user"></span></span>
                                        <input type="text" name="name" placeholder="Your Name *" value={registerForms.name} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('name', registerForms.name, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="email" name="email" placeholder="Emai Address*" 
                                        value={registerForms.email} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('email', registerForms.email, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="text" name="username" placeholder="Username*" value={registerForms.username} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('username', registerForms.username, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                        <input type="password" name="password" placeholder="Enter Password" value={registerForms.password} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('password', registerForms.password, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                        <input type="password" name="confirm_password" placeholder="Enter Confirm Password" value={registerForms.confirm_password} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('confirm_password', registerForms.confirm_password, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                        <textarea
                                            type="text"
                                            name="address"
                                            placeholder="Address" 
                                            value={registerForms.address} 
                                            onBlur={(e) => changeREgisterHandler(e)}
                                            onChange={(e) => changeREgisterHandler(e)} />
                                            {registerValidator.message('address', registerForms.address, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="text" name="city" placeholder="City*" value={registerForms.city} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('city', registerForms.city, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="text" name="pincode" placeholder="Pincode*" value={registerForms.pincode} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('pincode', registerForms.pincode, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="text" name="contact_number" placeholder="Contact Number*" value={registerForms.contact_number} 
                                        onBlur={(e) => changeREgisterHandler(e)}
                                        onChange={(e) => changeREgisterHandler(e)} />
                                        {registerValidator.message('contact_number', registerForms.contact_number, 'required')}
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="text" name="tin_number" placeholder="Tin number(if you have)" onChange={(e) => changeREgisterHandler(e)} />
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="text" name="gst_number" placeholder="Gst number(if you have)" onChange={(e) => changeREgisterHandler(e)} />
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <select name="state" id="state" onChange={(e) => changeREgisterHandler(e)} >
                                            <option value="in_gujarat">In Gujarat</option>
                                            <option value="out_gujarat">Out Gujarat</option>
                                        </select>
                                    </div>
                                    <div className="clearfix">
                                        <div className="form-group pull-left">
                                            <button type="button" className="theme-btn btn-style-two" onClick={SubmitRegisterHandler}><span className="txt">Register here</span></button>
                                        </div>
                                        <div className="form-group submit-text pull-right">
                                            * You must be a free registered to use services.
                                        </div>
                                    </div>
                                </div>

                            </div>

                       
    )
};
export default RegisterPage;
