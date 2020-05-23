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
                                        <h1>We are creative digital agency</h1>
                                        <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="btn btn-primary">Get Started</a>
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
            </div>
        );
    }
}

export default Banner;
