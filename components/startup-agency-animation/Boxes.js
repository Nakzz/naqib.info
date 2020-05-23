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

                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div className="shape2">
                    <img src={require("../../images/shapes/2.png")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../images/shapes/3.png")} alt="shape" />
                </div>
                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
            </section>
        );
    }
}

export default Boxes;
