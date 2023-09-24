import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/resource/error.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="error-section">
            <div className="auto-container">
                <div className="content">
                    <div className="error-image">
                        <Image src={erimg} alt="" />
                    </div>
                    <h2>Oops.... Page Not Found</h2>
                    <div className="text">Sorry, but the page you are looking for does not existing</div>
                    <Link onClick={ClickHandler} href="/home" className="theme-btn btn-style-five"><span className="txt">Go to home page</span></Link>
                </div>
            </div>
        </section>
    )
}

export default Error;