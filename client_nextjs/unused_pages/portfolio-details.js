import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: true,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause:true,
    navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
    ]
}

export class index extends Component {

    state = {
        display: false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

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

                <section className="portfolio-details ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-8 col-md-12">
                                {this.state.display ? <OwlCarousel 
                                    className="portfolio-details-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="item">
                                        <img src={require("../images/work-image/1.jpg")} alt="image" />
                                    </div>

                                    <div className="item">
                                        <img src={require("../images/work-image/6.jpg")} alt="image" />
                                    </div>
                                </OwlCarousel> : ''}
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <div className="project-info">
                                    <ul>
                                        <li>Client:
                                            <span>David Warner</span>
                                        </li>
                                        <li>Category:
                                            <span><a href="#">Portfolio</a></span>
                                        </li>
                                        <li>Date:
                                            <span>21 March, 2019</span>
                                        </li>
                                        <li>Share:
                                            <ul>
                                                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                                <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                                <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-8">
                                <div className="portfolio-details-content">
                                    <h3>Digital Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
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
