import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/startup-agency/Banner';
import Boxes from '../components/startup-agency/Boxes';
import WhyChooseUs from '../components/startup-agency/WhyChooseUs';
import Services from '../components/startup-agency/Services';
import About from '../components/startup-agency/About';
import Works from '../components/startup-agency/Works';
import Feedback from '../components/startup-agency/Feedback';
import HowWeWork from '../components/startup-agency/HowWeWork';
import Team from '../components/startup-agency/Team';
import Features from '../components/startup-agency/Features';
import Skills from '../components/startup-agency/Skills';
import Funfacts from '../components/startup-agency/Funfacts';
import Blog from '../components/startup-agency/Blog';
import Partner from '../components/startup-agency/Partner';
import Contact from '../components/startup-agency/Contact';

export class index extends Component {
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
