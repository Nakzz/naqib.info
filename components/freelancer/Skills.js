import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <section className="my-skill-area ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Some of My Skills</h2>
                    </div>

                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">HTML</h3>

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
                                            <h3 className="skill-title">CSS</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">92</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">PHP</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Wordpress</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skill-content pl-5">
                                <h3>Every Day is a New Challenge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.</p>
                                <a href="#" className="btn btn-primary">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
