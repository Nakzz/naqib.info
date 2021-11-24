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
                        <h1>Our Services</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Our Services</li>
                        </ul>
                    </div>
                </div>

                <section className="services-area ptb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-pie-chart"></i>
                                    </div>
                                    <h3>Branding</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-brand-designfloat"></i>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-stock-mobile"></i>
                                    </div>
                                    <h3>Photography</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-live-support"></i>
                                    </div>
                                    <h3>Live Support</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-travelling"></i>
                                    </div>
                                    <h3>Content Writing</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-delivery-time"></i>
                                    </div>
                                    <h3>Timely Deliverables</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-pie-chart"></i>
                                    </div>
                                    <h3>Branding</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-brand-designfloat"></i>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-stock-mobile"></i>
                                    </div>
                                    <h3>Photography</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-live-support"></i>
                                    </div>
                                    <h3>Live Support</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-travelling"></i>
                                    </div>
                                    <h3>Content Writing</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-delivery-time"></i>
                                    </div>
                                    <h3>Timely Deliverables</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
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
