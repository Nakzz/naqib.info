import React, { Component } from 'react';

export class Services extends Component {
    render() {
        return (
            <section className="welcome-services ptb-120 bg-38d16a">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">Our Services</span>
                        <h2 className="wow fadeInDown">Welcome to our business digital agency</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-dart"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-handshake-deal"></i>
                                </div>
                                <h3>Market Analysis</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Business Promotion</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
            </section>
        );
    }
}

export default Services;
