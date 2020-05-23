import React, { Component } from 'react';

export class AboutMe extends Component {
    render() {
        return (
            <section className="about-area ptb-120">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span>About Me</span>
                                    <h2>Who I am and What I do</h2>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.</p>

                                <a href="#" className="btn btn-primary">Download CV</a>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../images/about.jpg")} alt="about-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;
