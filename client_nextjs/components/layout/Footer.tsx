import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer-area ptb-120 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={require("../../images/logo.png")} alt="logo" />
                                    </a>
                                </div>

                                <ul className="social-links">
                                    
                                
                    <li>
                            <a href="https://www.linkedin.com/in/ajmain/">
                                <i className="icofont-linkedin"></i>

                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Nakzz/">
                                <i className="icofont-github"></i>

                            </a>
                        </li>

                        <li>
                            <a href="mailto:ajmain@naqib.info">
                                <i className="icofont-email"></i>

                            </a>
                        </li>
                                  
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4">
                                <h3>Quick Links</h3>

                                <ul className="list">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/about-me">About</a></li>
                                    <li><a href="/coming-soon">Portfolio</a></li>
                                    <li><a href="/coming-soon">Contact</a></li>
                                    <li><a href="/coming-soon">Blog</a></li>
                                    {/* <li><a href="/projects">Portfolio</a></li> */}
                                    {/* <li><a href="/blog">Blog</a></li> */}
                                    {/* <li><a href="/contact">Contact</a></li> */}
                                    {/* <li><a href="/faq">FAQ's</a></li> */}
                                {/* TODO: use links instead of direct a href */}
                                </ul>
                            </div>
                        </div>



                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get in Touch</h3>

                                <p>I'd love to chat!</p>

                                <ul className="footer-contact-info">
                                    {/* <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li> */}
                                    <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span> 
                                        <a href="tel:347-356-7867">+1 347 356 7867</a>
                                    </li>

                                    <li>
                                        <i className="icofont-email"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:ajmain@naqib.info">ajmain@naqib.info</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright {new Date().getUTCFullYear()} All rights reserved.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 text-right">
                                <p>Developed by <a href="https://naqib.info" target="_blank">Ajmain Naqib</a></p>
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
