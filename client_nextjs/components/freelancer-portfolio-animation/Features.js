import React, { Component } from 'react';

export class Features extends Component {
    render() {
        return (
            <section className="features-boxes-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <span className="wow fadeInDown">01</span>
                                <h3 className="wow fadeInUp">Digital Branding</h3>
                                <p>Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <span className="wow fadeInDown">02</span>
                                <h3 className="wow fadeInUp">Team Management</h3>
                                <p>Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-box">
                                <span className="wow fadeInDown">03</span>
                                <h3 className="wow fadeInUp">Creative Mind</h3>
                                <p>Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
