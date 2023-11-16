import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '../../public/images/logo.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import API from '../../store/api';

const Header = (props) => {
    const [searchActive, setSearchState] = useState(false);
    const router = useRouter()

    const currentRoute = router.pathname

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [balance, setBalance] = useState([]);
 console.log("balance ", balance);

 const user_id = localStorage.getItem("user_id");
 const token = localStorage.getItem("token");
 
    useEffect(() => {
        async function fetchData() {
            const url = `api/v1/client/${user_id}`;
            
            try {
                console.log("url===> ", url);
                const response = await API.get(url);
                console.log("response", response);
                setBalance(response?.data?.data?.Ledger[0].balance)
              // Handle the response data here
            } catch (error) {
              console.error("Error fetching data:", error);
              // Handle the error here
            }
          }
      
          fetchData();
      
    },[])

    return (
        <header className="main-header header-style-one">
            <div className="header-upper">
                <div className="auto-container clearfix" style={{maxWidth: '85%'}}>
                    <div className="pull-left logo-box">
                        <div ><Link onClick={ClickHandler} href="/home4">
                            <Image src={Logo} style={{ height: '80px', width: '200px' }} alt="" title="" />
                            {/* <Box component="img" width={130} src={'../../public/images/logo.png'} /> */}
                            </Link></div>
                    </div>
                    <div className="nav-outer clearfix">
                        <MobileMenu/>
                        <nav className="main-menu navbar-expand-md">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li className={currentRoute == '/' ? "current dropdown" : "dropdown"}><Link onClick={ClickHandler} href="/">Home</Link>
                                        {/* <ul>
                                            <li><Link onClick={ClickHandler} href="/home">Homepage One</Link></li>
                                            <li><Link onClick={ClickHandler} href="/home2">Homepage Two</Link></li>
                                            <li><Link onClick={ClickHandler} href="/home3">Homepage Three</Link></li>
                                            <li><Link onClick={ClickHandler} href="/home4">Homepage Four</Link></li>
                                            <li><Link onClick={ClickHandler} href="/home5">Homepage Five</Link></li>
                                            <li><Link onClick={ClickHandler} href="/home6">Homepage Six</Link></li>
                                            <li className="dropdown"><Link onClick={ClickHandler} href="/">Header Styles</Link>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/home">Header Style One</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home2">Header Style Two</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home3">Header Style Three</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home4">Header Style Four</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home5">Header Style Five</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home6">Header Style Six</Link></li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className={currentRoute == '/about' ? "current dropdown" : "dropdown"}><Link onClick={ClickHandler} href="/about">About</Link>
                                        {/* <ul>
                                            <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                            <li><Link onClick={ClickHandler} href="/faq">Faq</Link></li>
                                            <li><Link onClick={ClickHandler} href="/price">Price</Link></li>
                                            <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                            <li><Link onClick={ClickHandler} href="/team-single/Bina-Rano">Team Detail</Link></li>
                                            <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                            <li><Link onClick={ClickHandler} href="/comming-soon">Comming Soon</Link></li>
                                            <li><Link onClick={ClickHandler} href="/terms">Terms & Condition</Link></li>
                                            <li><Link onClick={ClickHandler} href="/privacy">Privacy & Policy</Link></li>
                                        </ul> */}
                                    </li>
                                    {/* <li className="dropdown"><Link onClick={ClickHandler} href="/">Services</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/Content-Marketing">Content Marketing</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/Social-Marketing">Social Marketing</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/App-Development">App Development</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/SEO-Optimization">SEO Optimization</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/Web-Development">Web Development</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/PPC-Advertising">PPC Advertising</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="dropdown"><Link onClick={ClickHandler} href="/">Projects</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/projects">Projects</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">Projects Left Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-right-sidebar">Project Right Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Projects Details</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="dropdown has-mega-menu"><Link onClick={ClickHandler} href="/">Pages</Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu-bar row clearfix">
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>About Us</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/faq">Faq</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/price">Price</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/team-single/Bina-Rano">Team Detail</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/comming-soon">Comming Soon</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/terms">Terms & Condition</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/privacy">Privacy & Policy</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>Services</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/Content-Marketing">Content Marketing</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/Social-Marketing">Social Marketing</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/App-Development">App Development</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/SEO-Optimization">SEO Optimization</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/Web-Development">Web Development</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/PPC-Advertising">PPC Advertising</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>Blog</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href="/blog">Our Blog</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-classNameic">Blog classNameic</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/not-found">Not Found</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>Our Shop</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/product-single/Book-Item-1">Shop Details</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/shoping-cart">Cart Page</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/checkout">Checkout Page</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/login">Register</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li className={currentRoute == '/shop' ? "current dropdown" : "shop"}><Link onClick={ClickHandler} href="/shop">Product</Link>
                                        {/* <ul>
                                            <li><Link onClick={ClickHandler} href="/shop">Our Products</Link></li>
                                            <li><Link onClick={ClickHandler} href="/product-single/Book-Item-1">Product Single</Link></li>
                                            <li><Link onClick={ClickHandler} href="/shopping-cart">Shopping Cart</Link></li>
                                            <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                            <li><Link onClick={ClickHandler} href="/login">Account</Link></li>
                                        </ul> */}
                                    </li>
                                    {/* <li className="dropdown"><Link onClick={ClickHandler} href="/">Blog</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/blog">Our Blog</Link></li>
                                            <li><Link onClick={ClickHandler} href="/blog-classNameic">Blog classNameic</Link></li>
                                            <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
                                            <li><Link onClick={ClickHandler} href="/not-found">Not Found</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className={currentRoute == '/bank-details' ? "current dropdown" : "bank-details"}><Link onClick={ClickHandler} href="/bank-details">Bank Details</Link></li>
                                    <li className={currentRoute == '/contact' ? "current dropdown" : "contact"}><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>

                                    <li className="dropdown"><Link onClick={ClickHandler} href="/payment-receipt/profile">Payment Receipt</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/payment-receipt/profile">Profile</Link></li>
                                            <li><Link onClick={ClickHandler} href="/payment-receipt/history">Order & History</Link></li>
                                            {/* <li><Link onClick={ClickHandler} href="/payment-receipt/cash-memo">Cash memo</Link></li> */}
                                            <li><Link onClick={ClickHandler} href="/payment-receipt/ladger-statement">Ladger Statement</Link></li>
                                            <li><Link onClick={ClickHandler} href="/payment-receipt/change-password">Change Password</Link></li>
                                            <li><Link onClick={ClickHandler} href="/payment-receipt/payment">Payment</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="outer-box clearfix">
                            <div className="btn-box">
                                <Link onClick={ClickHandler} href="/quotation" className="theme-btn btn-style-one"><span className="txt">Get A Quote</span></Link>
                            </div>
                            {/* <div className="btn-box">
                                <Link onClick={ClickHandler} href="/quotation" className="theme-btn btn-style-one"><span className="txt">hjk</span></Link>
                            </div> */}
                            {(balance && user_id) && <div className="btn-box" style={{paddingLeft: '5px', padding: '10px', borderRadius: '5px', background: balance.includes("-") ? 'red' : 'green', boxShadow:'0px 0px 25px rgba(0, 0, 0, 0.15)' }}><h5 style={{ color: '#fff'}}><b>{balance} ₹</b></h5></div>}
                            {(user_id && token) && <div onClick={() => {
                                router.push(`/`);
                                localStorage.removeItem("user_id");
                                localStorage.removeItem("token")}} style={{marginLeft: '10px'}} className="search-box-btn"><span className="icon fa fa-sign-in"></span></div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`search-popup ${searchActive ? "search-active" : ""}`}>
                <button className="close-search style-two" onClick={() => setSearchState(!searchActive)}><span className="flaticon-multiply"></span></button>
                <button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="fa fa-arrow-up"></span></button>
                <form method="post" onClick={SubmitHandler}>
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search Here" required="" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);