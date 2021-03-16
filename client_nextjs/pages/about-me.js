import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutMe from '../components/about/AboutMe';
import Education from '../components/about/Education';
import Services from '../components/freelancer/Services';
import Skills from '../components/freelancer/Skills';
import About from '../components/digital-agency-animation/About';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>About Me</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>About Me</li>
                        </ul>
                    </div>
                </div>
                {/* <AboutMe /> */}
                <About />
                <Education/>
                {/* <Skills /> */}

                {/* <Cta /> */}
                {/* <Services /> */}
                {/* <Funfacts /> */}

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
