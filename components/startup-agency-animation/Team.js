import React, { Component } from 'react';

export class Team extends Component {
    render() {
        return (
            <section className="team-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">Team Member</span>
                        <h2 className="wow fadeInDown">We have quality full team</h2>
                    </div>
 
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/1.jpg")} alt="team" />
                                </div>

                                <div className="team-content">
                                    <h3>Jennifer Aniston</h3>
                                    <span>Photographer</span>

                                    <ul className="social">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/2.jpg")} alt="team" />
                                </div>

                                <div className="team-content">
                                    <h3>Monica Bellucci</h3>
                                    <span>Web Developer</span>

                                    <ul className="social">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/3.jpg")} alt="team" />
                                </div>

                                <div className="team-content">
                                    <h3>Kate Winslet</h3>
                                    <span>Web Designer</span>

                                    <ul className="social">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape2">
                    <img src={require("../../images/shapes/2.png")} alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Team;
