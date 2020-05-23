import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <section className="skill-area">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="section-title">
                                    <span className="wow fadeInUp">Why Choose Us</span>
                                    <h2 className="wow fadeInDown">Some of Our Skills</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Branding</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">92</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Marketing</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Design</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Development</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skill-image">
                                <img src={require("../../images/man.png")} className="man-image" alt="man" />
                                <img src={require("../../images/shapes/16.png")} className="back-image" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
