import React, { Component } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    dots:true,
    smartSpeed: 2000,
    animateOut: 'slideOutDown',
    autoplayHoverPause:true,
    animateIn: 'fadeInUp',
    items:1,
    autoplay:true,
    navText: [
        "<i class='icofont-arrow-left'></i>",
        "<i class='icofont-arrow-right'></i>"
    ]
}

export class Banner extends Component {

    state = {
        display: false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <React.Fragment>
            {this.state.display ? <OwlCarousel 
                className="home-slides agency-portfolio-home owl-carousel owl-theme"
                {...options}
            >
                <div className="main-banner item-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        We are creative digital agency
                                                    </h1>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg5">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        We are creative digital agency
                                                    </h1>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg6">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        We are creative digital agency
                                                    </h1>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default Banner;
