import React, { Component } from 'react';

export class ChooseUs extends Component {
    render() {
        return (
            <section className="why-choose-us-area ptb-120">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="why-choose-us-img">
                                <img src={require("../../images/1.jpg")} className="front-img" alt="img" />
                                <img src={require("../../images/2.jpg")} className="back-img" alt="img" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="why-choose-us-content">
                                <div className="section-title">
                                    <span>WHy Choose Us</span>
                                    <h2>We are creative, designers & developers</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                <a href="#" className="btn btn-primary">About Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="why-choose-inner-area">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title">
                                    <h2>We like to find simple solutions to complex design requirements</h2>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon">
                                        <i className="icofont-handshake-deal"></i>
                                    </div>
                                    <h3>Digital Marketing</h3>
                                    <p>Quis suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon">
                                        <i className="icofont-brand-appstore"></i>
                                    </div>
                                    <h3>Market Analysis</h3>
                                    <p>Quis suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="single-box">
                                    <div className="icon">
                                        <i className="icofont-bullhorn"></i>
                                    </div>
                                    <h3>Brand Marketing</h3>
                                    <p>Quis suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ChooseUs;
