import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductDetails from '../components/product-details/ProductDetails';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg2">
                    <div className="container">
                        <h1>Shop Details</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Shop Details</li>
                        </ul>
                    </div>
                </div>
                <ProductDetails />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
