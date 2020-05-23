import React, { Component } from 'react';

export class HowWeWork extends Component {
    render() {
        return (
            <section className="how-we-work ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Around the World</span>
                        <h2>Superior design & concept work</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-work-box">
                                <div className="number">
                                    01
                                </div>
                                <h3>Research</h3>
                                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>
                                
                                <i className="icofont-light-bulb"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-work-box">
                                <div className="number">
                                    02
                                </div>
                                <h3>UI Design</h3>
                                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>
                                
                                <i className="icofont-ruler-alt-2"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-work-box">
                                <div className="number">
                                    03
                                </div>
                                <h3>Development</h3>
                                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>
                                
                                <i className="icofont-calculator"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-work-box">
                                <div className="number">
                                    04
                                </div>
                                <h3>Analysis</h3>
                                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>
                                
                                <i className="icofont-mathematical-alt-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowWeWork;
