import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                <section className="contact-info-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>
                                    <h3>Mail Here</h3>
                                    <p><a href="#">admin@artflex.com</a></p>
                                    <p><a href="#">info@artflex.com</a></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-google-map"></i>
                                    </div>
                                    <h3>Visit Here</h3>
                                    <p>1660 Travis Street Miramar, FL 33025, California</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-phone"></i>
                                    </div>
                                    <h3>Call Here</h3>
                                    <p><a href="#">+123 456 7890</a></p>
                                    <p><a href="#">+241 452 4526</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="contact-area ptb-120">
                    <div className="container">
                        <div className="section-title">
                            <span>Contact Us</span>
                            <h2>Get In Touch With Us</h2>
                        </div>

                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src={require("../images/marketing.png")} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" required={true} data-error="Please enter your name" placeholder="Name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
