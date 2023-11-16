import React from 'react'

const BankDetails = (props) => {



    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const handleCopyText = () => {
        let copyText = document.querySelector(".copy-text");
        let input = copyText.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
            copyText.classList.remove("active");
        }, 2500);
    }

    return (
        <section className="bank-detail-section">
            <div className="circle-layer" style={{ backgroundImage: `url(${'/images/icons/about-circle.png'})` }}></div>

            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Follow Below Bank Details</div>
                    <h2>Bank Information

                    </h2>
                    <div className="text">We are the experts in printing and graphics. No project is too big or too small for us.  <br /> Contact us today and get ready to be amazed.</div>
                </div>

                <div className="inner-container" >
                    <div className="bank-detail-block col-lg-6 col-md-6 col-sm-12" style={{
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div className="inner-box">
                            <h5>Bank :  &nbsp; </h5>
                            <h6>IDFC First Bank </h6>
                        </div>
                        <div className="inner-box">
                            <h5>A/C Name : &nbsp;</h5>
                            <h6>Akshar Graphics And Printing Press </h6>
                        </div>
                        <div className="inner-box">
                            <h5>Current A/C NO : &nbsp;</h5>
                            <h6>10048578709</h6>
                        </div>
                        <div className="inner-box">
                            <h5>RTGS / NEFT IFSC CODE : &nbsp; </h5>
                            <h6>IDFB0040101</h6>
                        </div>
                        <div className="inner-box">
                            <h5>Branch : &nbsp;</h5>
                            <h6>SHAHIBAUG BRANCH, <br /> AHMEDABAD-380004.</h6>
                        </div><br /><br /><br />
                        <div className="inner-box">
                            <h5>Bank : &nbsp; </h5>
                            <h6>BANK OF BARODA </h6>
                        </div>
                        <div className="inner-box">
                            <h5>A/C Name : &nbsp;</h5>
                            <h6>Akshar Graphics And Printing Press </h6>
                        </div>
                        <div className="inner-box">
                            <h5>Current A/C NO : &nbsp;</h5>
                            <h6>03270200000853</h6>
                        </div>
                        <div className="inner-box">
                            <h5>RTGS / NEFT IFSC CODE : &nbsp;</h5>
                            <h6>BARB0FATAHM</h6>
                        </div>
                        <div className="inner-box">
                            <h5>Branch : &nbsp; </h5>
                            <h6>FATEHPUR, PALDI BRANCH, <br /> AHMEDABAD-380007.</h6>
                        </div>
                    </div>

                    <div className="bank-detail-block col-lg-6 col-md-6 col-sm-12">
                        <div className="qr-container">
                            <h4 style={{ fontWeight: 700, textAlign: "center" }}>AKSHAR GRAPHICS AND PRINTER</h4> <br />
                            <h5 style={{ fontWeight: 500 }}>Scan Qr Code</h5>
                            <div className='qr-border'></div>
                            <img src='/images/icons/sample.png' alt='qrcode'></img>
                            <div className="copy-text">
                                <input type="text" className="text" value="9825699952-1@idfcfirst" />
                                <button onClick={handleCopyText}>COPY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BankDetails;