import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    require('../../images/work-image/1.jpg'),
    require('../../images/work-image/6.jpg'),
    require('../../images/work-image/21.jpg'),
    require('../../images/work-image/20.jpg'),
    require('../../images/work-image/19.jpg'),
    require('../../images/work-image/18.jpg')
]

export class PortfolioContent extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="works-area ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/1.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Digital Marketing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

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

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/6.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Digital Marketing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

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

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/21.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Digital Marketing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

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

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/20.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Digital Marketing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

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

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/19.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Digital Marketing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

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

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work">
                                <img src={require("../../images/work-image/18.jpg")} alt="image" />

                                <div className="works-content">
                                    <h3><a href="#">Digital Marketing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <a href="#" className="link-btn"><i className="icofont-external-link"></i></a>

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

export default PortfolioContent;
