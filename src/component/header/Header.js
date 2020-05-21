import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div>
                {/* MOBILE VIEW: BEGIN */}
                <div className="mobile-menu">
                    <nav className="mobile-header">
                        <div className="header-logo">
                            <NavLink to="/"><img src="assets/images/logo/04.png" alt="logo"></img></NavLink>
                        </div>
                        <div className="header-bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                    <nav className="mobile-menu">
                        <div className="mobile-menu-area">
                            <div className="mobile-menu-area-inner">
                                <ul className="lab-ul">
                                    <li className="active"><a href="index-4.html#">Home</a>
                                        <ul className="lab-ul">
                                        <li><a href="index-4.html#0">Near By Help</a>
                                                <ul className="lab-ul">
                                                    <li><NavLink to="/near-by-me">Hopspital</NavLink></li>
                                                    <li><NavLink to="/near/blood-bank">Blood Bank</NavLink></li>
                                                    <li><NavLink to="/near/testing-laboratory">Testing Laboratory</NavLink></li>
                                                    <li><NavLink to="/near/chemist-outlet">Chemist Outlet</NavLink></li>
                                                    <li><NavLink to="/near/police-station">Police Station</NavLink></li>
                                                    </ul>
                                                    </li>
                                            {/* <li><a href="index-2.html">Home Style Two</a></li>
                                    <li><a href="index-3.html">Home Style Three</a></li>
                                    <li className="active"><a href="index-4.html">Home Style Four <sup>New</sup></a></li>
                                    <li><a href="index-5.html">Home Style Five <sup>New</sup></a></li>
                                    <li><a href="index-6.html">Home Style Six <sup>New</sup></a></li>
                                    <li><a href="index-7.html">Home Style Seven <sup>New</sup></a></li>
                                    <li><a href="one-page.html">One Page</a></li>
                                    <li><a href="index-box.html">Box Layout</a></li>
                                    <li><a href="../covid-19-rtl/index.html">Rtl Layout</a></li> */}
                                        </ul>
                                    </li>
                                    <li><a href="index-4.html#">Pages</a>
                                        <ul className="lab-ul">
                                            <li><a href="index-4.html#0">About Page</a>
                                                <ul className="lab-ul">
                                                    <li><a href="about.html">About Style 1</a></li>
                                                    <li><a href="about-2.html">About Style 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="outbreak.html">Outbreak</a></li>
                                            <li><a href="coming-soon.html">ComingSoon</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="service.html">Prevention</a></li>
                                    <li><a href="index-4.html#">Blog</a>
                                        <ul className="lab-ul">
                                            <li><a href="blog.html">Blog Style 1</a></li>
                                            <li><a href="blog-2.html">Blog Style 2</a></li>
                                            <li><a href="blog-3.html">Blog Style 3</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="index-4.html#0">Shop</a>
                                        <ul className="lab-ul">
                                            <li><a href="shop-page.html">Products Page</a></li>
                                            <li><a href="shop-single.html">Product Single</a></li>
                                            <li><a href="cart-page.html">Cart Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* MOBILE VIEW: END */}




                {/* DESKTOP VIEW: BEGIN */}
                <header className="header-section home-4">
                    <div className="header-area">
                        <div className="container">
                            <div className="primary-menu">
                                <div className="logo">
                                    <NavLink to="/"><img src="assets/images/logo/04.png" alt="logo"></img></NavLink>
                                </div>
                                <div className="main-area">
                                    <div className="main-menu">
                                        <ul className="lab-ul">
                                            <li className="active"><a href="index-4.html#">Home</a>
                                                <ul className="lab-ul">
                                                <li><a href="index-4.html#0">Near By Help</a>
                                                <ul className="lab-ul">
                                                    <li><NavLink to="/near-by-me">Hopspital</NavLink></li>
                                                    <li><NavLink to="/near/blood-bank">Blood Bank</NavLink></li>
                                                    <li><NavLink to="/near/testing-laboratory">Testing Laboratory</NavLink></li>
                                                    <li><NavLink to="/near/chemist-outlet">Chemist Outlet</NavLink></li>
                                                    <li><NavLink to="/near/police-station">Police Station</NavLink></li>
                                                    </ul>
                                                    </li>
                                                    {/* <li><a href="index-2.html">Home Style Two</a></li>
                                            <li><a href="index-3.html">Home Style Three</a></li>
                                            <li className="active"><a href="index-4.html">Home Style Four <sup>New</sup></a></li>
                                            <li><a href="index-5.html">Home Style Five <sup>New</sup></a></li>
                                            <li><a href="index-6.html">Home Style Six <sup>New</sup></a></li>
                                            <li><a href="index-7.html">Home Style Seven <sup>New</sup></a></li>
                                            <li><a href="one-page.html">One Page</a></li>
                                            <li><a href="index-box.html">Box Layout</a></li>
                                            <li><a href="../covid-19-rtl/index.html">Rtl Layout</a></li> */}
                                                </ul>
                                            </li>
                                            <li><a href="index-4.html#">Pages</a>
                                                <ul className="lab-ul">
                                                    <li><a href="index-4.html#0">About Page</a>
                                                        <ul className="lab-ul">
                                                            <li><a href="about.html">About Style 1</a></li>
                                                            <li><a href="about-2.html">About Style 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="outbreak.html">Outbreak</a></li>
                                                    <li><a href="coming-soon.html">ComingSoon</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="service.html">Prevention</a></li>
                                            <li><a href="index-4.html#">Blog</a>
                                                <ul className="lab-ul">
                                                    <li><a href="blog.html">Blog Style 1</a></li>
                                                    <li><a href="blog-2.html">Blog Style 2</a></li>
                                                    <li><a href="blog-3.html">Blog Style 3</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="index-4.html#0">Shop</a>
                                                <ul className="lab-ul">
                                                    <li><a href="shop-page.html">Products Page</a></li>
                                                    <li><a href="shop-single.html">Product Single</a></li>
                                                    <li><a href="cart-page.html">Cart Page</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-btn">
                                        <a href="index-4.html#" className="lab-btn style-2"><span>are you sick</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        );
    }
}
