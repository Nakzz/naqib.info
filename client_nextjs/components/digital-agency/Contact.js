import React, { Component } from 'react';
import Link from 'next/link';

export class Contact extends Component {
    render() {
        return (
            <section className="contact-cta-area ptb-120">
                <div className="container">
                    <div className="contact-cta-content">
                        <div className="section-title">
                            <span>Get in Touch</span>
                            <h2>Want to work with us? Let's talk about project!</h2>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <Link href="#">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
