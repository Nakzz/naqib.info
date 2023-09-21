import React, { Component } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
export class Education extends Component{
//TODO(2): componentdidmount() and get the strings in the TypedReact from API
    render(){
        return(
            <div>
                 <section className="services-area ptb-120">
                    <div className="container">
                    <div className="section-title">
                        <span>The journey to knowledge and development</span>
                        <h2>Educational Background</h2>
                    </div>
                        <div className="row">

                        <div className="col-lg-6 col-md-6">
                                <div className="single-services-box">
                                        <div className="icon">
                                            <i className="icofont-graduate-alt"></i>
                                        </div>
                                        <h3>B.S. in Applied Computer Science </h3>
                                        <h5>with focus in Entrepreneurship and Product Development</h5>
                                        <p>University of Wisconsin Madison</p>
                                        <span>
                                            <i className="icofont-calendar pr-1"></i>
                                             2017-2022
                                        </span>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-6">
                                <div className="single-services-box">
                                        <div className="icon">
                                        <i className="icofont-education"></i>
                                        </div>
                                        <h3>Computer Science </h3>
                                        <h5>OpenCourseware</h5>
                                        <p>Massachusetts Institute of Technology</p>
                                        <span>
                                            <i className="icofont-calendar pr-1"></i>
                                             2017-2020
                                        </span>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-services-box">
                                        <div className="icon">
                                        <i className="icofont-globe-alt"></i>
                                        </div>
                                        <h3>Business and E-Commerce</h3>
                                        <p>LaGuardia Community College</p>
                                        <span>
                                            <i className="icofont-calendar pr-1"></i>
                                             2016-2017
                                        </span>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-services-box">
                                        <div className="icon">
                                        <i className="icofont-instrument"></i>
                                        </div>
                                        <h3>Architectural Engineering</h3>
                                        <p>Queensborough Community College</p>
                                        <span>
                                            <i className="icofont-calendar pr-1"></i>
                                             2015-2017
                                        </span>
                                </div>
                            </div>
                        </div>

                        <div className="circle-dot">
                            <img src={require("../../assets/images/shapes/dot-shape1.png")} alt="shape" />
                            {/* <Image src></Image> */}
                         </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Education;