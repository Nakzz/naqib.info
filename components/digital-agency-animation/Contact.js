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
                            <h2 className="wow fadeInDown">Want to work with us? Let's talk about project!</h2>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <Link href="#">
                            <a className="btn btn-primary wow fadeInUp">Contact Us</a>
                        </Link>
                    </div>
                </div>

                <div class="shape13">
                    <img src={require("../../images/shapes/13.png")} alt="shape" />
                </div>
                <div class="shape18">
                    <img src={require("../../images/shapes/18.png")} alt="shape" />
                </div>
                <div class="shape19">
                    <img src={require("../../images/shapes/19.png")} alt="shape" />
                </div>
                <div class="shape20 rotateme">
                    <img src={require("../../images/shapes/20.png")} alt="shape" />
                </div>
                <div class="shape21">
                    <img src={require("../../images/shapes/21.png")} alt="shape" />
                </div>
                <div class="shape22">
                    <img src={require("../../images/shapes/22.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Contact;
