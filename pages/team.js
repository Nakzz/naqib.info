import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Team from '../components/digital-agency/Team';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Our Team</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                </div>
                
                <Team />
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
