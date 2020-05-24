import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section className="cta-about">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="cta-about-image">
                                <img src={require("../../images/home/graduation.jpg")} alt="cta-image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="cta-about-content ptb-120">
                                <div className="section-title">
                                    <span className="wow fadeInUp">About me</span>
                                    <h2 className="wow fadeInDown">Ajmain Naqib</h2>
                                    <h5><i>From the city that never sleeps</i></h5> 
                                </div>
                                <p>I am currently pursuing a <b>B.S. degree</b> in <b>Applied Computer Science</b> with a focus on <b>Entrepreneurship</b> and <b>Product Development</b> at University of Wisconsin- Madison. I am originially from Bangladesh, but now I call Madison my home. </p> 
                                {/* TODO: get from CMS API */}

                                <p>Although roles like Software Engineering, Product Development, and Executive Management is currently fulfilling the scope of my career interests, I am a curious soul always ready to learn more. I am interested in exploring the technology, business strategy and space exploration industry.</p>

                                <a href="#" className="btn btn-primary wow fadeInUp">Want to know more about me?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
