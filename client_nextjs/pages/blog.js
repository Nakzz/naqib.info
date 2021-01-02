import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Our Latest Blog</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Our Latest Blog</li>
                        </ul>
                    </div>
                </div>

                <section className="blog-area ptb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/1.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Feb, 2019</span>
                                        <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/2.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Agency</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">27 Feb, 2019</span>
                                        <h3><a href="#">The Best Marketing top Management Tools</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/3.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">IT</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">28 Feb, 2019</span>
                                        <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/4.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Jan, 2019</span>
                                        <h3><a href="#">The Guide to Running a Client Discovery Process</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/5.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Agency</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">24 Feb, 2019</span>
                                        <h3><a href="#">How to Build a Business Dashboard</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/6.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">IT</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">24 Feb, 2019</span>
                                        <h3><a href="#">6 Small Things That Are Making You Less Productive</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/7.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">IT</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">28 Feb, 2019</span>
                                        <h3><a href="#">6 Ways Agencies Can Generate More Leads</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/1.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Feb, 2019</span>
                                        <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/2.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Agency</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">27 Feb, 2019</span>
                                        <h3><a href="#">The Best Marketing top Management Tools</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/3.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">IT</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">28 Feb, 2019</span>
                                        <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/4.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Jan, 2019</span>
                                        <h3><a href="#">The Guide to Running a Client Discovery Process</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog-image/1.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Feb, 2019</span>
                                        <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
