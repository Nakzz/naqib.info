import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/freelancer/Banner';
import Features from '../components/freelancer/Features';
import About from '../components/freelancer/About';
import Services from '../components/freelancer/Services';
import Cta from '../components/freelancer/Cta';
import Skills from '../components/freelancer/Skills';
import Funfacts from '../components/freelancer/Funfacts';
import Works from '../components/freelancer/Works';
import Feedback from '../components/freelancer/Feedback';
import Blog from '../components/freelancer/Blog';

export class index extends Component {
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
