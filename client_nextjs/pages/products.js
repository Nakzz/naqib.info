import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductsContent from '../components/shop/ProductsContent';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg2">
                    <div className="container">
                        <h1>Our Latest Products</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
                <ProductsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
