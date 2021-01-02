import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    dots:true,
    autoplayHoverPause:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}

export class Services extends Component {

    state = {
        display: false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="services-area ptb-120 bg-f8f9fe">
                <div className="container">
                    <div className="section-title">
                        <span>Our Services</span>
                        <h2>Interactive services offered by our team</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-pie-chart"></i>
                                    </div>
                                    <h3>User Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-brand-designfloat"></i>
                                    </div>
                                    <h3>Interface Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-stock-mobile"></i>
                                    </div>
                                    <h3>Mobile Apps</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-live-support"></i>
                                    </div>
                                    <h3>Help When Need</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-travelling"></i>
                                    </div>
                                    <h3>We Can Travel</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="icofont-delivery-time"></i>
                                    </div>
                                    <h3>Timely Deliverables</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
