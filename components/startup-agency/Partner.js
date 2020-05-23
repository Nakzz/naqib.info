import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    autoplay:true,
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:3,
        },
        1200:{
            items:5,
        }
    }
}

export class Partner extends Component {

    state = {
        display:false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="partner-area ptb-120 bg-38d16a">
                <div className="container">
                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="partner-item">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/partner-image/1.png")} alt="partner" />
                                            <img src={require("../../images/partner-image/1.png")} alt="partner" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="partner-item">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/partner-image/2.png")} alt="partner" />
                                            <img src={require("../../images/partner-image/2.png")} alt="partner" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="partner-item">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/partner-image/3.png")} alt="partner" />
                                            <img src={require("../../images/partner-image/3.png")} alt="partner" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="partner-item">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/partner-image/4.png")} alt="partner" />
                                            <img src={require("../../images/partner-image/4.png")} alt="partner" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="partner-item">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/partner-image/5.png")} alt="partner" />
                                            <img src={require("../../images/partner-image/5.png")} alt="partner" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Partner;
