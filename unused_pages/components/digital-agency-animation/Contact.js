import React, { Component } from 'react';
import Link from 'next/link';

export class Contact extends Component {
    render() {
        return (
            <section className="contact-cta-area ptb-120">
                <div className="container">
                    <div className="contact-cta-content">
                        <div className="section-title">
                            <span className="wow fadeInUp">Get in Touch</span>
                            <h3 className="wow fadeInDown">If you like to discuss a project or partnership, Let's talk!</h3>
                        </div>
{/* TODO: redirect to a different page with differet communication. look at this for inspiration https://mattfarley.ca/startup-inquiry*/}
                        <Link href="/contact"> 
                            <a className="btn btn-primary wow fadeInUp">Start a conversation</a>
                        </Link>
                    </div>
                </div>

                <div className="shape13">
                    <img src={require("../../images/shapes/13.png")} alt="shape" />
                </div>
                <div className="shape18">
                    <img src={require("../../images/shapes/18.png")} alt="shape" />
                </div>
                <div className="shape19">
                    <img src={require("../../images/shapes/19.png")} alt="shape" />
                </div>
                <div className="shape20 rotateme">
                    <img src={require("../../images/shapes/20.png")} alt="shape" />
                </div>
                <div className="shape21">
                    <img src={require("../../images/shapes/21.png")} alt="shape" />
                </div>
                <div className="shape22">
                    <img src={require("../../images/shapes/22.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Contact;
