import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutUsArea from '../components/about/AboutUsArea';
import Cta from '../components/about/Cta';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Funfacts from '../components/about/Funfacts';
import Skills from '../components/about/Skills';
import Team from '../components/about/Team';
import Feedback from '../components/about/Feedback';
import Contact from '../components/about/Contact';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>About Us</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>

                <AboutUsArea />
                <Cta />
                <WhyChooseUs />
                <Funfacts />
                <Skills />
                <Team />
                <Feedback />
                <Contact />

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
