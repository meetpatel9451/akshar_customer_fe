import React from 'react';
import ProfileForm from '../ProfileForm'
import NewPaymentForm from '../NewPaymentForm';

const AddNewPayment = () => {

    return (
        <div>
            <section className="contact-form-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Add New Payment</h2>
                        <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
                    </div>
                    <div className="inner-container">
                        <div className="contact-form">
                            <NewPaymentForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default AddNewPayment;
