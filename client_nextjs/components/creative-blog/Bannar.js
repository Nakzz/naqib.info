import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    dots:false,
    smartSpeed: 2000,
    animateOut: 'slideOutDown',
    autoplayHoverPause: true,
    animateIn: 'fadeInUp',
    autoplay:true,
    navText: [
        "<i class='icofont-arrow-left'></i>",
        "<i class='icofont-arrow-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}

export class Bannar extends Component {

    state = {
        display: false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="blog-home">
                {this.state.display ? <OwlCarousel 
                    className="blog-home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="col-lg-12">
                        <div className="single-blog-box">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/blog-home-image/1.jpg")} alt="img" />
                                </a>
                            </div>

                            <div className="blog-post-content">
                                <div className="tags"><a href="#">Agency</a></div>
                                <h3><a href="#">How to Develop a Unique (& Memorable) Brand Identity in 2019</a></h3>

                                <ul>
                                    <li><i className="icofont-ui-calendar"></i> March 29, 2019</li>
                                    <li><i className="icofont-ui-user"></i> By <a href="#">Admin</a></li>
                                    <li><i className="icofont-clock-time"></i> 5 Mins Read</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="single-blog-box">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/blog-home-image/2.jpg")} alt="img" />
                                </a>
                            </div>

                            <div className="blog-post-content">
                                <div className="tags"><a href="#">Public</a></div>
                                <h3><a href="#">20 PR Tools for Monitoring & Managing Media Relations in 2019</a></h3>

                                <ul>
                                    <li><i className="icofont-ui-calendar"></i> March 14, 2019</li>
                                    <li><i className="icofont-ui-user"></i> By <a href="#">Admin</a></li>
                                    <li><i className="icofont-clock-time"></i> 10 Mins Read</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="single-blog-box">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/blog-home-image/3.jpg")} alt="img" />
                                </a>
                            </div>

                            <div className="blog-post-content">
                                <div className="tags"><a href="#">Talent</a></div>
                                <h3><a href="#">15 Employee Feedback Tools to Track Your Team's Engagement in 2019</a></h3>

                                <ul>
                                    <li><i className="icofont-ui-calendar"></i> March 11, 2019</li>
                                    <li><i className="icofont-ui-user"></i> By <a href="#">Admin</a></li>
                                    <li><i className="icofont-clock-time"></i> 7 Mins Read</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="single-blog-box">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/blog-home-image/4.jpg")} alt="img" />
                                </a>
                            </div>

                            <div className="blog-post-content">
                                <div className="tags"><a href="#">User</a></div>
                                <h3><a href="#">15 Usability Testing Tools for Optimizing Your Site in 2019</a></h3>

                                <ul>
                                    <li><i className="icofont-ui-calendar"></i> March 01, 2019</li>
                                    <li><i className="icofont-ui-user"></i> By <a href="#">Admin</a></li>
                                    <li><i className="icofont-clock-time"></i> 8 Mins Read</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </section>
        );
    }
}

export default Bannar;
