import React, { Component } from 'react';
import {NavLink } from "react-router-dom"; 
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {},
            isUserLoggedIn: false
          };
    }

    componentDidMount() {  
        if(localStorage.getItem('currentUser')){
            const getCurrentUserData = JSON.parse(localStorage.getItem('currentUser'));
            console.log("getCurrentUserData",getCurrentUserData);
            this.setState({ userDetails: getCurrentUserData, isUserLoggedIn: true });
            
        }
    }

    responseGoogle = response => { 
        debugger
        this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
        const currentUser =  localStorage.setItem('currentUser', JSON.stringify(response.profileObj));
        console.log("currentUser", currentUser);

        if(response.error=='popup_closed_by_user'){
            this.setState({isUserLoggedIn:false}); 
        }
      };
    
      logout = () => {
        this.setState({isUserLoggedIn: false});
        localStorage.removeItem("currentUser");
      };


    render() {
        const logoutStyle = {
            background: '#8e42d1',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '13px',
            padding: '3px'
          };
        
        return (
 
            <div>
                {/* MOBILE VIEW: BEGIN */}
                <div className="mobile-menu">
                    <nav className="mobile-header">
                        <div className="header-logo">
                            <NavLink to="/"><img  style={{width: '30%'}} src="/assets/images/logo/04.png" alt="hospice"></img></NavLink>
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
                                            <li><NavLink to="/faq">Faq</NavLink></li>
                                            {/* <li><a href="outbreak.html">Outbreak</a></li>
                                            <li><a href="coming-soon.html">ComingSoon</a></li>
                                            <li><a href="404.html">404 Page</a></li> */}
                                        </ul>
                                    </li>
                                    <li><a href="service.html">Prevention</a></li>
                                    <li><a href="index-4.html#">Blog</a>
                                        <ul className="lab-ul">
                                            <li><a href="blog.html">Blog Style 1</a></li>
                                            {/* <li><a href="blog-2.html">Blog Style 2</a></li>
                                            <li><a href="blog-3.html">Blog Style 3</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li> */}
                                        </ul>
                                    </li>
                                    <li><a href="index-4.html#0">Shop</a>
                                        <ul className="lab-ul">
                                            <li><NavLink to="/shop">Products Page</NavLink></li>
                                            {/* <li><a href="shop-single.html">Product Single</a></li>
                                            <li><a href="cart-page.html">Cart Page</a></li> */}
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
                                    <NavLink to="/"><img src="/assets/images/logo/04.png" alt="logo"></img></NavLink>
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
                                                    {/* <li><a href="index-4.html#0">About Page</a>
                                                        <ul className="lab-ul">
                                                            <li><a href="about.html">About Style 1</a></li>
                                                            <li><a href="about-2.html">About Style 2</a></li>
                                                        </ul>
                                                    </li> */}
                                                    <li><NavLink to="/faq">Faq</NavLink></li>
                                                    {/* <li><a href="outbreak.html">Outbreak</a></li>
                                                    <li><a href="coming-soon.html">ComingSoon</a></li>
                                                    <li><a href="404.html">404 Page</a></li> */}
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
                                                    <li><NavLink to="/shop">Products Page</NavLink></li>
                                                    {/* <li><a href="shop-single.html">Product Single</a></li>
                                                    <li><a href="cart-page.html">Cart Page</a></li> */}
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-btn">                                                   

                                                    {!this.state.isUserLoggedIn && (
                                                        <GoogleLogin
                                                          clientId="255684780603-9ems19esfi7lbrddcbqvd7ht148f5mv9.apps.googleusercontent.com" //TO BE CREATED
                                                          render={renderProps => (
                                                            <button
                                                              className="lab-btn style-2"
                                                              onClick={renderProps.onClick}
                                                              disabled={renderProps.disabled}
                                                            >
                                                              <span>Log in with Google</span> 
                                                            </button>
                                                          )}
                                                          onSuccess={this.responseGoogle}
                                                          onFailure={this.responseGoogle}
                                                        />
                                                      )}
                                                      {this.state.isUserLoggedIn && (
                                                        <div className="userDetails-wrapper">
                                                          <div className="details-wrapper"> 
                                                               
                                                            <div className="image">
                                                              <img style={{width: "35px" , height:"35px", borderRadius:"50%"}} src={this.state.userDetails.imageUrl} />
                                                              <GoogleLogout
                                                              render={renderProps => (
                                                                <button
                                                                style={logoutStyle}
                                                                  className="logout-button"
                                                                  onClick={renderProps.onClick}
                                                                >
                                                                  Log Out
                                                                </button>
                                                              )}
                                                              onLogoutSuccess={this.logout}
                                                            />
                                                              </div>
                                                            <div style={{fontSize:"14px"}} >
                                                              Welcome Mr. {this.state.userDetails.givenName}{" "}
                                                              {this.state.userDetails.familyName}
                                                            </div>
                                                            <div style={{fontSize:"14px"}} ><i>{this.state.userDetails.email}</i></div>
                                                          </div> 
                                                        </div>
                                                      )}
                                    
                                   {/*  Welcome, ${this.state.username}  <NavLink className="lab-btn style-2" to="/login"><span>Login</span></NavLink>*/}
                                         
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
