import React, { Component } from 'react';

export class AboutUsArea extends Component {
    render() {
        return (
            <section className="about-us-area ptb-120">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-8">
                            <div className="about-us-content">
                                <div className="section-title">
                                    <h2>Welcome To Our Business Digital Agency</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <div className="row m-0">
                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-dart"></i>
                                            </div>
                                            <h3>Digital Marketing</h3>
                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas jisan.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-handshake-deal"></i>
                                            </div>
                                            <h3>Market Analysis</h3>
                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas jisan.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-pie-chart"></i>
                                            </div>
                                            <h3>Business Promotion</h3>
                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas jisan.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-live-support"></i>
                                            </div>
                                            <h3>Live Support</h3>
                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas jisan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="about-us-image">
                                <img src={require("../../images/about2.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsArea;
