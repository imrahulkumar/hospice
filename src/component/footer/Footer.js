import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const footerStyle = {
            backgroundImage: "url('assets/css/bg-image/footer-bg-4.jpg')"
        };
        const footerStyleBottom = {
            borderColor: "#ffffff40"
        }

        return (
            <div>
                {/* Footer Section Start Here  */}
                <footer style={footerStyle}>
                    <div class="footer-top padding-tb">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="footer-item first-set">
                                        <div class="footer-inner">
                                            <div class="footer-content">
                                                <div class="title">
                                                    <h6>About Covid-19</h6>
                                                </div>
                                                <div class="content">
                                                    <p>We believe in Simple Creative and Flexible Design Standards.</p>
                                                    <h6>Headquarters:</h6>
                                                    <p>795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                                                    <ul class="lab-ul">
                                                        <li>
                                                            <p><span>Phone:</span>(91) 8547 632521</p>
                                                        </li>
                                                        <li>
                                                            <p><span>Email:</span><a href="index-4.html#">info@covid-19.com</a></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="footer-item">
                                        <div class="footer-inner">
                                            <div class="footer-content">
                                                <div class="title">
                                                    <h6>Navigate</h6>
                                                </div>
                                                <div class="content">
                                                    <ul class="lab-ul">
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Advertisers</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Developers</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Resources</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Company</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Connect</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="footer-item">
                                        <div class="footer-inner">
                                            <div class="footer-content">
                                                <div class="title">
                                                    <h6>Social Contact</h6>
                                                </div>
                                                <div class="content">
                                                    <ul class="lab-ul">
                                                        <li><a href="index-4.html#"><i class="icofont-facebook"></i>Facebook</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-twitter"></i>Twitter</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-instagram"></i>Instagram</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-youtube"></i>YouTube</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-xing"></i>Xing</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="footer-item">
                                        <div class="footer-inner">
                                            <div class="footer-content">
                                                <div class="title">
                                                    <h6>Privacy And Tos</h6>
                                                </div>
                                                <div class="content">
                                                    <ul class="lab-ul">
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Advertiser Agreement</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Acceptable Use Policy</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Privacy Policy</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Technology Privacy</a></li>
                                                        <li><a href="index-4.html#"><i class="icofont-caret-right"></i>Developer Agreement</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom" style={footerStyleBottom}>
                        <div class="container">
                            <div class="section-wrapper">
                                <p>&copy; 2020 All Rights Reserved. Designed by <a href="https://themeforest.net/user/codexcoder">CodexCoder</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer Section Ending Here */}

                {/* scrollToTop start here  */}
                <a href="index-4.html#" class="scrollToTop"><i class="icofont-swoosh-up"></i><span class="pluse_1"></span><span class="pluse_2"></span></a>
                {/* scrollToTop ending here  */}
            </div>
        );
    }
}

export default Footer;