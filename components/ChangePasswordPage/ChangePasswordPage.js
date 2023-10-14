import React from 'react';
import Link from 'next/link'
import ChangePasswordForm from '../ChangePasswordForm'

const ChangePasswordPage = () => {

    return (
        <div>
            <section className="contact-form-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Change Password</h2>
                        <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
                    </div>
                    <div className="inner-container">
                        <div className="contact-form">
                            <ChangePasswordForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ChangePasswordPage;
