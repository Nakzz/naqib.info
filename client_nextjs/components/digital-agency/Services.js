import React, { Component } from 'react';
import Link from 'next/link';

export class Services extends Component {
    render() {
        return (
            <section className="welcome-services ptb-120 bg-38d16a">
                <div className="container">
                    <div className="section-title">
                        <span>Our Services</span>
                        <h2>Welcome to our business digital agency</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-dart"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-handshake-deal"></i>
                                </div>
                                <h3>Market Analysis</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Business Promotion</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn">
                                <Link href="/services-one">
                                    <a className="btn btn-primary">More Services</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
