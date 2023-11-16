import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },

    {
        id: 4,
        title: 'About Us',
        link: '/about',
    },

    {
        id: 6,
        title: 'Product',
        link: '/shop',
    },
    {
        id: 7,
        title: 'Bank Details',
        link: '/bank-details',
        
    },

    {
        id: 3,
        title: 'Contact Us',
        link: '/contact',
    },
    {
        id: 8,
        title: 'Payment Reciept',
        link: '/payment-receipt/profile',
        submenu: [
            {
                id: 71,
                title: 'Profile',
                link: '/payment-receipt/profile'
            },
            {
                id: 72,
                title: 'Order & History',
                link: '/payment-receipt/history'
            },
            {
                id: 73,
                title: 'Ledger Statement',
                link: '/payment-receipt/ladger-statement'
            },
            {
                id: 74,
                title: 'Change Password',
                link: '/payment-receipt/change-password'
            },
            {
                id: 75,
                title: 'Payment',
                link: '/payment-receipt/payment'
            },
        ]
    },
]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`mobile-menu-wrap ${menuActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-nav-toggler" onClick={() => setMenuState(!menuActive)}><span className="icon flaticon-menu"></span></div>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={() => setMenuState(!menuActive)}></div>
                
                <div className="close-btn" onClick={() => setMenuState(!menuActive)}><span className="icon flaticon-multiply"></span></div>
                <nav className="menu-box">
                    <div className="menu-outer">
                        <ul className="navigation">
                            {menus.map((item, mn) => {
                                return (
                                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                        {item.submenu ?
                                            <Fragment>
                                                <li>
                                                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                                        <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                                    </p>
                                                </li>
                                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                                    <List className="subMenu">
                                                        <Fragment>
                                                            {item.submenu.map((submenu, i) => {
                                                                return (
                                                                    <ListItem key={i}>
                                                                        <Link onClick={ClickHandler} className="active"
                                                                            href={submenu.link}>{submenu.title}</Link>
                                                                    </ListItem>
                                                                )
                                                            })}
                                                        </Fragment>
                                                    </List>
                                                </Collapse>
                                            </Fragment>
                                            : <Link className="active"
                                                href={item.link}>{item.title}</Link>
                                        }
                                    </ListItem>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu;