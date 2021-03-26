import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="thank-you-area">
                    <div className="container">
                        <h1>Thank You</h1>
                        <Link href="/">
                            <a className="btn btn-primary">Go Home</a>
                        </Link>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
