import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer-area ptb-120 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={require("../../images/footer-logo.png")} alt="logo" />
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul className="social-links">
                                    <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4">
                                <h3>Quick Links</h3>

                                <ul className="list">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Recent Post</h3>

                                <ul className="footer-recent-post">
                                    <li>
                                        <a href="#">The Most Popular New Business Apps</a>

                                        <span>25 Feb 2019</span>
                                    </li>

                                    <li>
                                        <a href="#">The Best Marketing Management Tools</a>

                                        <span>27 Feb 2019</span>
                                    </li>

                                    <li>
                                        <a href="#">3 WooCommerce Plugins to Boost Sales</a>

                                        <span>28 Feb 2019</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get in Touch</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li>

                                    <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span> 
                                        <a href="#">+44 014799584</a>
                                    </li>

                                    <li>
                                        <i className="icofont-email"></i>
                                        <span>Email:</span> 
                                        <a href="#">support@fleja.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @2019. All rights reserved.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 text-right">
                                <p>Design & Developed by <a href="https://envytheme.com" target="_blank">EnvyTheme</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../images/line-bg.png")} className="line-bg" alt="line-bg" />
                <div className="shape23">
                    <img src={require("../../images/shapes/23.png")} alt="shape" />
                </div>
                <div className="shape24">
                    <img src={require("../../images/shapes/24.png")} alt="shape" />
                </div>
                <div className="shape27">
                    <img src={require("../../images/shapes/27.png")} alt="shape" />
                </div>
            </footer>
        );
    }
}

export default Footer;
