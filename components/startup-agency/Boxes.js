import React, { Component } from 'react';

export class Boxes extends Component {
    render() {
        return (
            <section className="boxes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="icofont-dart"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-box black-color">
                                <div className="icon">
                                    <i className="icofont-handshake-deal"></i>
                                </div>
                                <h3>Market Analysis</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Business Promotion</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Boxes;
