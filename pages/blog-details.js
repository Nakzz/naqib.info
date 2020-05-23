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
                        <h1>Blog Details</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </div>

                <section className="blog-details-area ptb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="blog-details">
                                    <div className="article-img">
                                        <img src={require("../images/blog-image/1.jpg")} alt="blog-details" />
                                        <div className="date">20 <br /> Jan</div>
                                    </div>
                                    
                                    <div className="article-content">
                                        <ul className="category">
                                            <li><a href="#">IT</a></li>
                                            <li><a href="#">Mobile</a></li>
                                            <li><a href="#">Marketing</a></li>
                                            <li><a href="#">Design</a></li>
                                            <li><a href="#">Development</a></li>
                                        </ul>
                                            
                                        <h3>The Most Popular New top Business Apps</h3>
                                        
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore a repellendus debitis explicabo quisquam obcaecati....</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <blockquote className="blockquote">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <div className="share-post">
                                            <ul>
                                                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                                <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                                <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                                <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="post-controls-buttons">
                                    <div className="controls-left">
                                        <a href="#"><i className="icofont-double-left"></i> Prev Post</a>
                                    </div>

                                    <div className="controls-right">
                                        <a href="#">Next Post <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                                
                                <div className="post-comments">
                                    <h3>Comments</h3>
                                    <div className="single-comment">
                                        <div className="comment-img">
                                            <img src={require("../images/client-image/1.jpg")} alt="client" />
                                        </div>
                                        <div className="comment-content">
                                            <h4>John Smith</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Jan 19, 2018 - 9:10AM</span>
                                            <a href="#"><i className="icofont-reply"></i></a>
                                        </div>
                                    </div>
                                    
                                    <div className="single-comment left-m">
                                        <div className="comment-img">
                                            <img src={require("../images/client-image/2.jpg")} alt="client" />
                                        </div>
                                        <div className="comment-content">
                                            <h4>Doe John</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Jan 19, 2018 - 9:10AM</span>
                                            <a href="#"><i className="icofont-reply"></i></a>
                                        </div>
                                    </div>
                                    
                                    <div className="single-comment">
                                        <div className="comment-img">
                                            <img src={require("../images/client-image/3.jpg")} alt="client" />
                                        </div>
                                        <div className="comment-content">
                                            <h4>Steven Doe</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Jan 19, 2018 - 9:10AM</span>
                                            <a href="#"><i className="icofont-reply"></i></a>
                                        </div>
                                    </div>
                                    
                                    <div className="single-comment">
                                        <div className="comment-img">
                                            <img src={require("../images/client-image/1.jpg")} alt="client" />
                                        </div>
                                        <div className="comment-content">
                                            <h4>John Cina</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Jan 19, 2018 - 9:10AM</span>
                                            <a href="#"><i className="icofont-reply"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="leave-a-reply">
                                    <h3>Leave a Reply</h3>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="E-Mail" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Your Comment" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="form-control" placeholder="Search here..." />
                                            <button type="submit"><i className="icofont-ui-search"></i></button>
                                        </form>
                                    </div>

                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">
                                            <span>Categories</span>
                                        </h3>

                                        <ul>
                                            <li><a href="#">AJAX</a></li>
                                            <li><a href="#">Apache</a></li>
                                            <li><a href="#">CSS</a></li>
                                            <li><a href="#">PHP</a></li>
                                            <li><a href="#">Django</a></li>
                                            <li><a href="#">Error</a></li>
                                            <li><a href="#">IIS</a></li>
                                            <li><a href="#">JavaScript</a></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">
                                            <span>Recent Posts</span>
                                        </h3>

                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog-image/1.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">The Most Popular New top Business Apps</a></h5>
                                                <p className="date">21 March, 2019</p>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog-image/2.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">3 WooCommerce Plugins to Boost Sales</a></h5>
                                                <p className="date">20 March, 2019</p>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog-image/3.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">The Best Marketing top Management Tools</a></h5>
                                                <p className="date">27 March, 2019</p>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog-image/4.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">How to Build a Business Dashboard</a></h5>
                                                <p className="date">27 January, 2019</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_tag_cloud">
                                        <h3 className="widget-title">
                                            <span>Tags</span>
                                        </h3>

                                        <div className="tagcloud">
                                            <a href="#">Error</a>
                                            <a href="#">Cake Bake</a>
                                            <a href="#">Dromzone</a>
                                            <a href="#">File</a>
                                            <a href="#">Yii</a>
                                            <a href="#">Yii2</a>
                                            <a href="#">UUID</a>
                                            <a href="#">Setup</a>
                                            <a href="#">Error</a>
                                            <a href="#">Cake Bake</a>
                                            <a href="#">Dromzone</a>
                                            <a href="#">File</a>
                                            <a href="#">Yii</a>
                                            <a href="#">Yii2</a>
                                            <a href="#">UUID</a>
                                            <a href="#">Setup</a>
                                        </div>
                                    </div>

                                    <div className="widget widget_archive">
                                        <h3 className="widget-title">
                                            <span>Archives</span>
                                        </h3>

                                        <ul>
                                            <li><a href="#">December 2018</a></li>
                                            <li><a href="#">January 2019</a></li>
                                            <li><a href="#">February 2019</a></li>
                                            <li><a href="#">March 2019</a></li>
                                        </ul>
                                    </div>
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
