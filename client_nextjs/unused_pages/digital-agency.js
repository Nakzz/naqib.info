import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Banner from '../components/digital-agency/Banner';
import About from '../components/digital-agency/About';
import Footer from '../components/layout/Footer';
import Services from '../components/digital-agency/Services';
import ChooseUs from '../components/digital-agency/ChooseUs';
import Crafting from '../components/digital-agency/Crafting';
import Works from '../components/digital-agency/Works';
import Feedback from '../components/digital-agency/Feedback';
import HowWeWork from '../components/digital-agency/HowWeWork';
import Team from '../components/digital-agency/Team';
import Cta from '../components/digital-agency/Cta';
import Skills from '../components/digital-agency/Skills';
import Funfacts from '../components/digital-agency/Funfacts';
import Blog from '../components/digital-agency/Blog';
import Partner from '../components/digital-agency/Partner';
import Contact from '../components/digital-agency/Contact';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <About />
                <Services />
                <ChooseUs />
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
