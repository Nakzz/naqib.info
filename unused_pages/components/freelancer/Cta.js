import React, { Component } from 'react';

export class Cta extends Component {
    render() {
        return (
            <section className="cta-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="cta-content">
                        <span>Looking for exclusive services?</span>
                        <h2>Get the best for your business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
