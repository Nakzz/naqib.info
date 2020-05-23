import React, { Component } from 'react';

export class Team extends Component {
    render() {
        return (
            <section className="team-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Team Member</span>
                        <h2>We Have Quality full Team</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/1.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Jennifer Aniston</h3>
                                    <span>Photographer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/2.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Monica Bellucci</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/3.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Kate Winslet</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/4.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Adelbert</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/5.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Abraham</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/6.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Aaron</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
