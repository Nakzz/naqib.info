import React, { Component } from 'react';

export class Cta extends Component {
    render() {
        return (
            <section className="cta-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="cta-content">
                        <span>Looking for exclusive services?</span>
					    <h2>Get the best for your business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="btn btn-primary wow fadeInUp">Contact Us</a>
                    </div>
                </div>

                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape" />
                </div>
                <div className="shape14 rotateme">
                    <img src={require("../../images/shapes/14.png")} alt="shape" />
                </div>
                <div className="shape15 rotateme">
                    <img src={require("../../images/shapes/15.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Cta;
