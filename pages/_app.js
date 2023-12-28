import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../styles/animate.css';
import '../styles/owl.css';
import '../styles/animation.css';
import '../styles/custom-animate.css';
import '../styles/style.css';
import '../styles/responsive.css';
import { useRouter } from "next/router";
import AuthPage from "./login";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import BankDetails from "../components/BankDetailPage/BankDetailPage";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if((router.pathname == "/shop" || router.pathname == "/quotation") && !token){
      setIsAuthenticate(true)
    }else{
      setIsAuthenticate(false)
    }
  },[router])

  const handleClose = () => {
    setOpen(!open)
  }

  return ( <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {!isAuthenticate ? <AuthPage /> : <Component {...pageProps} /> }
        <ToastContainer />
      </PersistGate>
    </Provider>
    {/* <Dialog
    open={open}
    keepMounted
    onClose={handleClose}
    maxWidth="lg"
    fullWidth
    PaperProps={{sx: {borderRadius:4}}}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent sx={{backgroundColor: '#FD8C56', color: '#fff'}}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}><IconButton onClick={() => setOpen(false)}><span className="fa fa-close"></span></IconButton></Box>
        <section style={{ padding: 20 }}>
            <div className="circle-layer" style={{ backgroundImage: `url(${'/images/icons/about-circle.png'})` }}></div>

            <div>
                <div style={{ display: 'flex' }} >
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
                            <h4 style={{ fontWeight: 700 }}>AKSHAR GRAPHICS AND PRINTER</h4> <br />
                            <h5 style={{ fontWeight: 500 }}>Scan Qr Code</h5>
                            <div className='qr-border'></div>
                            <img src='/images/icons/sample.png' alt='qrcode'></img>
                            <div className="copy-text">
                                <input type="text" className="text" value="9825699952-1@idfcfirst" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </DialogContent> */}
    {/* <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={handleClose}>Agree</Button>
    </DialogActions> */}
  {/* </Dialog> */}
  </>

  )
}

export default MyApp
