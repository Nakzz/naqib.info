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
                        <h1>Our Team</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                </div>

                <section className="team-details-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="team-member-image">
                                    <img src={require("../images/team-image/2.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="team-details-info">
                                    <h3>Monica Bellucci</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <div className="personal-information">
                                        <h3>Personal Information</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                        <ul>
                                            <li className="row">
                                                <span className="col-lg-2">
                                                    Specialty
                                                </span>
                                                <span className="col-lg-1">
                                                    :
                                                </span>
                                                <span className="col-lg-9">
                                                    Web Programmer
                                                </span>
                                            </li>

                                            <li className="row">
                                                <span className="col-lg-2">
                                                    Experience
                                                </span>
                                                <span className="col-lg-1">
                                                    :
                                                </span>
                                                <span className="col-lg-9">
                                                    05 Years
                                                </span>
                                            </li>

                                            <li className="row">
                                                <span className="col-lg-2">
                                                    Email
                                                </span>
                                                <span className="col-lg-1">
                                                    :
                                                </span>
                                                <span className="col-lg-9">
                                                    <a href="#">monicabellucci@artflex.com</a>
                                                </span>
                                            </li>

                                            <li className="row">
                                                <span className="col-lg-2">
                                                    Phone
                                                </span>
                                                <span className="col-lg-1">
                                                    :
                                                </span>
                                                <span className="col-lg-9">
                                                    <a href="#">(+888)-123-8888</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="overview-desc">
                                    <h3>Overview and Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="overview-desc">
                                    <div className="skills">
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h3 className="skill-title">Branding</h3>

                                                <div className="skill-percentage">
                                                    <div className="count-box"><span className="count-text">95</span>%</div>
                                                </div>
                                            </div>

                                            <div className="skill-bar">
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
                        </div>
                    </div>
                </section>
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
