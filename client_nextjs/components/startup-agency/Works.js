import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    require('../../images/work-image/1.jpg'),
    require('../../images/work-image/2.jpg'),
    require('../../images/work-image/3.jpg'),
    require('../../images/work-image/4.jpg'),
    require('../../images/work-image/5.jpg'),
    require('../../images/work-image/6.jpg')
]

export class Works extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="works-area ptb-120 pb-0 bg-08071c">
                <div className="container">
                    <div className="section-title">
                        <span>Our Work</span>
                        <h2>We have completed 2K project successfully</h2>
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                        <div className="single-work m-0">
                            <img src={require("../../images/work-image/1.jpg")} alt="image" />

                            <div className="works-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <Link href="#">
                                <a className="link-btn"><i className="icofont-external-link"></i></a>
                            </Link>

                            <Link href="#">
                                <a 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0 })}}
                                >
                                    <i className="icofont-expand"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    {isOpenImage && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpenImage: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}

                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="single-work m-0">
                            <img src={require("../../images/work-image/2.jpg")} alt="image" />

                            <div className="works-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <Link href="#">
                                <a className="link-btn">
                                    <i className="icofont-external-link"></i>
                                </a>
                            </Link>

                            <Link href="#">
                                <a 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 1 })}}
                                >
                                    <i className="icofont-expand"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="single-work m-0">
                            <img src={require("../../images/work-image/3.jpg")} alt="image" />

                            <div className="works-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <Link href="#">
                                <a className="link-btn"><i className="icofont-external-link"></i></a>
                            </Link>

                            <Link href="#">
                                <a 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 2 })}}
                                >
                                    <i className="icofont-expand"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="single-work m-0">
                            <img src={require("../../images/work-image/4.jpg")} alt="image" />

                            <div className="works-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <Link href="#">
                                <a className="link-btn"><i className="icofont-external-link"></i></a>
                            </Link>

                            <Link href="#">
                                <a 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 3 })}}
                                >
                                    <i className="icofont-expand"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                        <div className="single-work m-0">
                            <img src={require("../../images/work-image/5.jpg")} alt="image" />

                            <div className="works-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <Link href="#">
                                <a className="link-btn"><i className="icofont-external-link"></i></a>
                            </Link>

                            <Link href="#">
                                <a 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 4 })}}
                                >
                                    <i className="icofont-expand"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                        <div className="single-work m-0">
                            <img src={require("../../images/work-image/6.jpg")} alt="image" />

                            <div className="works-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <Link href="#">
                                <a className="link-btn"><i className="icofont-external-link"></i></a>
                            </Link>

                            <Link href="#">
                                <a 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5 })}}
                                >
                                    <i className="icofont-expand"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="shape11"><img src={require("../../images/shapes/11.png")} alt="shape" /></div>
                <div className="shape12"><img src={require("../../images/shapes/12.png")} alt="shape" /></div>
            </section>
        );
    }
}

export default Works;
