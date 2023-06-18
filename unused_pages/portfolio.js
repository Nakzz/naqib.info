import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PortfolioContent from '../components/portfolio/PortfolioContent';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg2">
                    <div className="container">
                        <h1>Our Portfolio</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Our Portfolio</li>
                        </ul>
                    </div>
                </div>
                <PortfolioContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
