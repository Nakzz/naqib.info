import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Signup</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Signup</li>
                        </ul>
                    </div>
                </div>

                <section className="signup-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="signup-form">
                                    <h3>Create your Account</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Username" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Signup Now!</button>
                                                <br />
                                                <span>Already a registered user? <a href="login.html">Login!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="signup-image">
                                    <img src={require("../images/marketing.png")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
