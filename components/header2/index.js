import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo.png'
import HeaderTopbar from '../HeaderTopbar';
import { totalPrice } from "../../utils";
import Image from 'next/image';


const Header2 = (props) => {
	const [searchActive, setSearchState] = useState(false);
	const [rightBarActive, setrightBarState] = useState(false);
	const [cartActive, setcartState] = useState(false);

	const SubmitHandler = (e) => {
		e.preventDefault()
	}

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	}

	const { carts } = props;

	return (
		<header className="main-header header-style-two">
			<HeaderTopbar />
			<div className="header-upper">
				<div className="auto-container clearfix">

					<div className="pull-left logo-box">
						<div className="logo"><Link href="/home"><Image src={Logo} alt="" title="" /></Link></div>
					</div>

					<div className="nav-outer clearfix">
						<MobileMenu />
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
									<li className="current dropdown"><Link onClick={ClickHandler} href="/">Home</Link>
										<ul>
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
										</ul>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} href="/">About</Link>
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
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} href="/">Services</Link>
										<ul>
											<li><Link onClick={ClickHandler} href="/services">Services</Link></li>
											<li><Link onClick={ClickHandler} href="/service-single/Content-Marketing">Content Marketing</Link></li>
											<li><Link onClick={ClickHandler} href="/service-single/Social-Marketing">Social Marketing</Link></li>
											<li><Link onClick={ClickHandler} href="/service-single/App-Development">App Development</Link></li>
											<li><Link onClick={ClickHandler} href="/service-single/SEO-Optimization">SEO Optimization</Link></li>
											<li><Link onClick={ClickHandler} href="/service-single/Web-Development">Web Development</Link></li>
											<li><Link onClick={ClickHandler} href="/service-single/PPC-Advertising">PPC Advertising</Link></li>
										</ul>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} href="/">Projects</Link>
										<ul>
											<li><Link onClick={ClickHandler} href="/projects">Projects</Link></li>
											<li><Link onClick={ClickHandler} href="/projects-left-sidebar">Projects Left Sidebar</Link></li>
											<li><Link onClick={ClickHandler} href="/projects-right-sidebar">Project Right Sidebar</Link></li>
											<li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Projects Detail</Link></li>
										</ul>
									</li>
									<li className="dropdown has-mega-menu"><Link onClick={ClickHandler} href="/">Pages</Link>
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
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} href="/">Shop</Link>
										<ul>
											<li><Link onClick={ClickHandler} href="/shop">Our Products</Link></li>
											<li><Link onClick={ClickHandler} href="/product-single/Book-Item-1">Product Single</Link></li>
											<li><Link onClick={ClickHandler} href="/shopping-cart">Shopping Cart</Link></li>
											<li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
											<li><Link onClick={ClickHandler} href="/login">Account</Link></li>
										</ul>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} href="/">Blog</Link>
										<ul>
											<li><Link onClick={ClickHandler} href="/blog">Our Blog</Link></li>
											<li><Link onClick={ClickHandler} href="/blog-classNameic">Blog classNameic</Link></li>
											<li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
											<li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
											<li><Link onClick={ClickHandler} href="/not-found">Not Found</Link></li>
										</ul>
									</li>
									<li><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>
								</ul>
							</div>
						</nav>
						<div className="outer-box clearfix">
							<div className="cart-box">
								<div className="dropdown">
									<button onClick={() => setcartState(!cartActive)} className="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										{" "}
										<span className="flaticon-cart"></span>
										{" "}

										<span className="total-cart">{carts.length}</span>
									</button>
									<div className={`dropdown-menu pull-right cart-panel ${cartActive ? "cart-active" : ""}`} aria-labelledby="dropdownMenu1">


										{carts &&
											carts.length > 0 &&
											carts.map((catItem, crt) => (
												<div className="cart-product" key={crt}>
													<div className="inner">
														<div className="cross-icon"><span className="icon fa fa-remove" onClick={() => props.removeFromCart(catItem.id)}></span>{" "}</div>
														<div className="image"><img src={catItem.proImg} alt="" /></div>
														<h3>{catItem.title}</h3>
														<div className="quantity-text">Quantity {" "} {catItem.qty}</div>
														<div className="price"> ${catItem.price}</div>
													</div>
												</div>
											))}

										<div className="cart-total">Sub Total: <span>${totalPrice(carts)}</span></div>
										<ul className="btns-boxed">
											<li><Link onClick={ClickHandler} href="/shopping-cart">View Cart</Link></li>
											<li><Link onClick={ClickHandler} href="/checkout">CheckOut</Link></li>
										</ul>

									</div>
								</div>
							</div>

							<div onClick={() => setSearchState(!searchActive)} className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div>
							<div className="btn-box">
								<Link href="/quotation" className="theme-btn btn-style-one"><span className="txt">Get A Quote</span></Link>
							</div>

							<div onClick={() => setrightBarState(!rightBarActive)} className="nav-btn navSidebar-button"><span className="icon flaticon-menu"></span></div>

						</div>
					</div>

				</div>
			</div>


			<div className={`search-popup ${searchActive ? "search-active" : ""}`}>
				<button className="close-search style-two" onClick={() => setSearchState(!searchActive)}><span className="flaticon-multiply"></span></button>
				<button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="fa fa-arrow-up"></span></button>
				<form method="post" onClick={SubmitHandler}>
					<div className="form-group">
						<input type="search" name="search-field" value="" placeholder="Search Here" required="" />
						<button type="submit"><i className="fa fa-search"></i></button>
					</div>
				</form>
			</div>

			<div className={`xs-sidebar-group info-group ${rightBarActive ? "isActive" : ""}`}>
				<div className="xs-overlay xs-bg-black" onClick={() => setrightBarState(!rightBarActive)}></div>
				<div className="xs-sidebar-widget">
					<div className="sidebar-widget-container">
						<div className="widget-heading">
							<span onClick={() => setrightBarState(!rightBarActive)} className="close-side-widget">
								X
							</span>
						</div>
						<div className="sidebar-textwidget">

							<div className="sidebar-info-contents">
								<div className="content-inner">
									<div className="logo">
										<Link href="/"><img src={Logo} alt="" /></Link>
									</div>
									<div className="content-box">
										<h2>About Us</h2>
										<p className="text">Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</p>
										<Link href="/contact" className="theme-btn btn-style-two"><span className="txt">Contact Now</span></Link>
									</div>
									<div className="contact-info">
										<h2>Contact Info</h2>
										<ul className="list-style-one">
											<li><span className="icon fa fa-location-arrow"></span>New York 24, Melborne City, USA</li>
											<li><span className="icon fa fa-phone"></span><a href="tel:+000-000-000-0000">(000) 000-000-0000</a></li>
											<li><span className="icon fa fa-envelope"></span><a href="mailto:akshargraphics@gmail.com">akshargraphics@gmail.com</a></li>
											<li><span className="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
										</ul>
									</div>
									<ul className="social-box">
										<li className="facebook"><Link href="/" className="fa fa-facebook-f"></Link></li>
										<li className="twitter"><Link href="/" className="fa fa-twitter"></Link></li>
										<li className="linkedin"><Link href="/" className="fa fa-linkedin"></Link></li>
										<li className="instagram"><Link href="/" className="fa fa-instagram"></Link></li>
										<li className="youtube"><Link href="/" className="fa fa-youtube"></Link></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		carts: state.cartList.cart,
	};
};
export default connect(mapStateToProps, { removeFromCart })(Header2);