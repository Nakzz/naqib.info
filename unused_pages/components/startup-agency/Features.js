import React, { Component } from 'react';

export class Features extends Component {
    render() {
        return (
            <section className="features-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="features-content">
                                <div className="section-title">
                                    <span>Our Features</span>
                                    <h2>Create the lifestyle you really desire it.</h2>
                                </div>

                                <div className="single-features-item">
                                    <div className="icon">
                                        <i className="icofont-globe-alt"></i>
                                    </div>
                                    <h3>Beautiful and easy to use</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean consecte tuer adipiscing elit enean.</p>
                                </div>

                                <div className="single-features-item">
                                    <div className="icon">
                                        <i className="icofont-brand-designfloat"></i>
                                    </div>
                                    <h3>Pixel perfect design</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="features-image text-center">
                                <img src={require("../../images/1.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
