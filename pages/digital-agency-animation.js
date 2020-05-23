import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/digital-agency-animation/Banner';
import About from '../components/digital-agency-animation/About';
import Services from '../components/digital-agency-animation/Services';
import WhyChooseUs from '../components/digital-agency-animation/WhyChooseUs';
import Crafting from '../components/digital-agency-animation/Crafting';
import Works from '../components/digital-agency-animation/Works';
import Feedback from '../components/digital-agency-animation/Feedback';
import HowWeWork from '../components/digital-agency-animation/HowWeWork';
import Team from '../components/digital-agency-animation/Team';
import Cta from '../components/digital-agency-animation/Cta';
import Skills from '../components/digital-agency-animation/Skills';
import Funfacts from '../components/digital-agency-animation/Funfacts';
import Blog from '../components/digital-agency-animation/Blog';
import Partner from '../components/digital-agency-animation/Partner';
import Contact from '../components/digital-agency-animation/Contact';

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
                <About />
                <Services />
                <WhyChooseUs />
                <Crafting />
                <Works />
                <Feedback />
                <HowWeWork />
                <Team />
                <Cta />
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
