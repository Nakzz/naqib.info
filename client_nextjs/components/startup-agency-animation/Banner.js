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
                className="home-slides startup-agency-home owl-carousel owl-theme"
                {...options}
            >
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row h-100 align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="hero-image">
                                            <img src={require("../../images/startup-agency-slider/1.jpg")} alt="image" />
                                        </div>
                                    </div>
                                    
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-5 col-md-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        We are creative digital agency
                                                    </h1>
                                                    <a 
                                                        href="#"
                                                        className={`
                                                            btn btn-primary ${isVisible ? "animated fadeInDown" : ''}
                                                        `}
                                                    >
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape1">
                        <img src={require("../../images/shapes/1.png")} alt="shape" />
                    </div>
                    <div className="shape2">
                        <img src={require("../../images/shapes/2.png")} alt="shape" />
                    </div>
                    <div className="shape3">
                        <img src={require("../../images/shapes/3.png")} alt="shape" />
                    </div>
                    <div className="shape4">
                        <img src={require("../../images/shapes/4.png")} alt="shape" />
                    </div>
                    <div className="shape5">
                        <img src={require("../../images/shapes/5.png")} alt="shape" />
                    </div>
                    <div className="shape6">
                        <img src={require("../../images/shapes/6.png")} alt="shape" />
                    </div>
                    <div className="shape7">
                        <img src={require("../../images/shapes/7.png")} alt="shape" />
                    </div>
                    <div className="shape8">
                        <img src={require("../../images/shapes/8.png")} alt="shape" />
                    </div>
                    <div className="shape9 rotateme">
                        <img src={require("../../images/shapes/9.png")} alt="shape" />
                    </div>
                    <div className="shape10 rotateme">
                        <img src={require("../../images/shapes/10.png")} alt="shape" />
                    </div>
                </div>

                <div className="main-banner item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row h-100 align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="hero-image">
                                            <img src={require("../../images/startup-agency-slider/2.jpg")} alt="image" />
                                        </div>
                                    </div>
                                    
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-5 col-md-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        We are creative digital agency
                                                    </h1>
                                                    <a 
                                                        href="#"
                                                        className={`
                                                            btn btn-primary ${isVisible ? "animated fadeInDown" : ''}
                                                        `}
                                                    >
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape1">
                        <img src={require("../../images/shapes/1.png")} alt="shape" />
                    </div>
                    <div className="shape2">
                        <img src={require("../../images/shapes/2.png")} alt="shape" />
                    </div>
                    <div className="shape3">
                        <img src={require("../../images/shapes/3.png")} alt="shape" />
                    </div>
                    <div className="shape4">
                        <img src={require("../../images/shapes/4.png")} alt="shape" />
                    </div>
                    <div className="shape5">
                        <img src={require("../../images/shapes/5.png")} alt="shape" />
                    </div>
                    <div className="shape6">
                        <img src={require("../../images/shapes/6.png")} alt="shape" />
                    </div>
                    <div className="shape7">
                        <img src={require("../../images/shapes/7.png")} alt="shape" />
                    </div>
                    <div className="shape8">
                        <img src={require("../../images/shapes/8.png")} alt="shape" />
                    </div>
                    <div className="shape9 rotateme">
                        <img src={require("../../images/shapes/9.png")} alt="shape" />
                    </div>
                    <div className="shape10 rotateme">
                        <img src={require("../../images/shapes/10.png")} alt="shape" />
                    </div>
                </div>

                <div className="main-banner item-bg3">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row h-100 align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="hero-image">
                                            <img src={require("../../images/startup-agency-slider/3.jpg")} alt="image" />
                                        </div>
                                    </div>
                                    
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-5 col-md-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        We are creative digital agency
                                                    </h1>
                                                    <a 
                                                        href="#"
                                                        className={`
                                                            btn btn-primary ${isVisible ? "animated fadeInDown" : ''}
                                                        `}
                                                    >
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape1">
                        <img src={require("../../images/shapes/1.png")} alt="shape" />
                    </div>
                    <div className="shape2">
                        <img src={require("../../images/shapes/2.png")} alt="shape" />
                    </div>
                    <div className="shape3">
                        <img src={require("../../images/shapes/3.png")} alt="shape" />
                    </div>
                    <div className="shape4">
                        <img src={require("../../images/shapes/4.png")} alt="shape" />
                    </div>
                    <div className="shape5">
                        <img src={require("../../images/shapes/5.png")} alt="shape" />
                    </div>
                    <div className="shape6">
                        <img src={require("../../images/shapes/6.png")} alt="shape" />
                    </div>
                    <div className="shape7">
                        <img src={require("../../images/shapes/7.png")} alt="shape" />
                    </div>
                    <div className="shape8">
                        <img src={require("../../images/shapes/8.png")} alt="shape" />
                    </div>
                    <div className="shape9 rotateme">
                        <img src={require("../../images/shapes/9.png")} alt="shape" />
                    </div>
                    <div className="shape10 rotateme">
                        <img src={require("../../images/shapes/10.png")} alt="shape" />
                    </div>
                </div>
            </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default Banner;
