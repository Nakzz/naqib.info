import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    dots:false,
    autoplayHoverPause:true,
    items:1,
    autoplay:true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ]
}

export class Feedback extends Component {

    state = {
        display: false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="feedback-area-two ptb-120 bg-38d16a">
                <div className="container">
                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="single-feedback center-feedback-box">
                                    <img src={require("../../images/client-image/1.jpg")} alt="image" />

                                    <p>"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

                                    <h3>Steven Lucy, <span>CEO at ThemeForest</span></h3>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-feedback center-feedback-box">
                                    <img src={require("../../images/client-image/2.jpg")} alt="image" />

                                    <p>"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

                                    <h3>John Smith, <span>CEO at ThemeForest</span></h3>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-feedback center-feedback-box">
                                    <img src={require("../../images/client-image/3.jpg")} alt="image" />

                                    <p>"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

                                    <h3>David Warner, <span>CEO at ThemeForest</span></h3>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

                <img src={require("../../images/quote.png")} className="quote-img" alt="quote" />
            </section>
        );
    }
}

export default Feedback;
