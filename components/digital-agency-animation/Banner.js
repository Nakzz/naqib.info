import React, { Component } from 'react';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner digital-agency-banner">
                <div id="scroll-down">
                    <span className="arrow-down"></span>
                    <span id="scroll-title">
                        Scroll down
                    </span>
                </div>

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInUp">We are creative digital agency</h1>
                                        <p className="wow fadeInDown">Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="btn btn-primary wow fadeInLeft">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-social-buttons">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="icofont-facebook"></i>

                                <span>Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="icofont-twitter"></i>

                                <span>Twitter</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="icofont-instagram"></i>

                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="shape1">
                    <img src={require("../../images/shapes/1.png")} alt="shape" />
                </div>

                <div className="shape2">
                    <img src={require("../../images/shapes/2.png")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../images/shapes/3.png")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shapes/4.png")} alt="shape" />
                </div>
                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div class="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
                <div className="shape8">
                    <img src={require("../../images/shapes/8.png")} alt="shape" />
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="circle-shape1">
                    <img src={require("../../images/shapes/circle1.png")} alt="shape" className="w-150" />
                </div>
                <div className="circle-shape2">
                    <img src={require("../../images/shapes/circle2.png")} alt="shape" className="w-150" />
                </div>
            </div>
        );
    }
}

export default Banner;
