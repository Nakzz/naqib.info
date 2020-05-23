import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/freelancer-portfolio-animation/Banner';
import Features from '../components/freelancer-portfolio-animation/Features';
import About from '../components/freelancer-portfolio-animation/About';
import Services from '../components/freelancer-portfolio-animation/Services';
import Cta from '../components/freelancer-portfolio-animation/Cta';
import Skills from '../components/freelancer-portfolio-animation/Skills';
import Funfacts from '../components/freelancer-portfolio-animation/Funfacts';
import Works from '../components/freelancer-portfolio-animation/Works';
import Feedback from '../components/freelancer-portfolio-animation/Feedback';
import Blog from '../components/freelancer-portfolio-animation/Blog';

export class index extends Component {

    componentDidMount(){ 
        this.setState({ display: true });
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Features />
                <About />
                <Services />
                <Cta />
                <Skills />
                <Funfacts />
                <Works />
                <Feedback />
                <Blog />

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
