import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

export class BlogBody extends Component {
    render() {
        return (
            <section className="blog-section ptb-80">
                <div className="container">
                    {/* <div className="blog-items row"> */}
                    <Masonry
                        className={'blog-items row'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/1.jpg")} alt="image" />
                                    </a>

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
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/2.jpg")} alt="image" />
                                    </a>

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
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/3.jpg")} alt="image" />
                                    </a>

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
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post without-thumbnail">
                                <div className="blog-post-content">
                                    <span className="date">01 Feb, 2019</span>
                                    <h3><a href="#">The 15 Best Time Tracking Apps of 2019</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post with-video">
                                <div className="blog-video">
                                    <iframe src="https://www.youtube.com/embed/Squv4KI751w" allowFullScreen></iframe>
                                </div> 

                                <div className="blog-post-content">
                                    <span className="date">28 March, 2019</span>
                                    <h3><a href="#">7 Surefire Ways to Annoy Your Clients</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/4.jpg")} alt="image" />
                                    </a>

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

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post with-video">
                                <div className="blog-video">
                                    <iframe src="https://www.youtube.com/embed/Squv4KI751w" allowFullScreen></iframe>
                                </div> 

                                <div className="blog-post-content">
                                    <span className="date">21 Dec, 2019</span>
                                    <h3><a href="#">3 Ways to Get Client Approval for Scope Changes</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/5.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Agency</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">24 Feb, 2019</span>
                                    <h3><a href="#">How to Build a Business Dashboard for Your Inbound Marketing Agency</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post without-thumbnail">
                                <div className="blog-post-content">
                                    <span className="date">01 Aug, 2019</span>
                                    <h3><a href="#">5 Color Choice Mistakes You Should Avoid in Web Design</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/6.jpg")} alt="image" />
                                    </a>

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

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/blog-image/7.jpg")} alt="image" />
                                    </a>

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
                        
                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post without-thumbnail">
                                <div className="blog-post-content">
                                    <span className="date">01 Sep, 2019</span>
                                    <h3><a href="#">The 4 Types of Clients Every Agency Outgrows</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </Masonry>

                    <div className="row">
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
        );
    }
}

export default BlogBody;
