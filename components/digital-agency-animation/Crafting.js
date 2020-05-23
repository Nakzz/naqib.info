import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

export class Crafting extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <React.Fragment>
            <section className="crafting-area ptb-120 bg-f8f9fe">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">About Us</span>
                        <h2 className="wow fadeInDown">We are creatives with 25 years of experience</h2>
                    </div>

                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="crafting-content">
                                <div className="single-item item-one">
                                    <i className="icofont-wink-smile"></i>
                                    <h6>Community</h6>
                                </div>

                                <div className="single-item item-two">
                                    <i className="icofont-ebook"></i>
                                    <h6>Honest pricing</h6>
                                </div>

                                <div className="single-item item-three">
                                    <i className="icofont-wink-smile"></i>
                                    <h6>Management</h6>
                                </div>

                                <div className="single-item item-four">
                                    <i className="icofont-stock-mobile"></i>
                                    <h6>Mobile Design</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="crafting-image">
                                <img src={require("../../images/cta-about.jpg")} alt="image" />

                                <Link href="#">
                                    <a 
                                        className="video-btn popup-youtube"
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                    >
                                        <i className="icofont-play-alt-3"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
            </section>

            <ModalVideo 
                channel='youtube' 
                isOpen={this.state.isOpen} 
                videoId='0O2aH4XLbto' 
                onClose={() => this.setState({isOpen: false})} 
            />

            </React.Fragment>
        );
    }
}

export default Crafting;
