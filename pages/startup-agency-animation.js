import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/startup-agency-animation/Banner';
import Boxes from '../components/startup-agency-animation/Boxes';
import WhyChooseUs from '../components/startup-agency-animation/WhyChooseUs';
import Services from '../components/startup-agency-animation/Services';
import About from '../components/startup-agency-animation/About';
import Works from '../components/startup-agency-animation/Works';
import Feedback from '../components/startup-agency-animation/Feedback';
import HowWeWork from '../components/startup-agency-animation/HowWeWork';
import Team from '../components/startup-agency-animation/Team';
import Features from '../components/startup-agency-animation/Features';
import Skills from '../components/startup-agency-animation/Skills';
import Funfacts from '../components/startup-agency-animation/Funfacts';
import Blog from '../components/startup-agency-animation/Blog';
import Partner from '../components/startup-agency-animation/Partner';
import Contact from '../components/startup-agency-animation/Contact';

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
                <Boxes />
                <WhyChooseUs />
                <Services />
                <About />
                <Works />
                <Feedback />
                <HowWeWork />
                <Team />
                <Features />
                <Skills />
                <Funfacts />
                <Blog />
                <Partner />
                <Contact />

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
