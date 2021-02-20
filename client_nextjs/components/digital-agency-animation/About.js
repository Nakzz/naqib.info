import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section className="cta-about">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="cta-about-image">
                                <img src={require("../../images/home/graduation.jpg")} alt="cta-image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="cta-about-content ptb-120">
                                <div className="section-title">
                                    <span className="wow fadeInUp">About me</span>
                                    <h2 className="wow fadeInDown">Ajmain Naqib</h2>
                                    <h5><i>From the city that never sleeps</i></h5> 
                                </div>
                                <p>I am currently pursuing a <b>B.S. degree</b> in <b>Applied Computer Science</b> with a focus on <b>Entrepreneurship</b> and <b>Product Development</b> at University of Wisconsin- Madison. I am originially from Bangladesh, but now I call Madison my home. </p> 
                                {/* TODO: get from CMS API */}
                                <p>
                                I started my college career with a Full-Tuition Leadership and Merit-based Scholarship from the POSSE Foundation with the hopes of solving real-world problems with technology. Along the way, I found my passion for Entrepreneurship and Product Development as I started working with local startup companies, and eventually founded my own company - Breezy Systems LLC.
                                </p>
<p>
Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
</p>
                                {/* <a href="#" className="btn btn-primary wow fadeInUp">Want to know more about me?</a> */}
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 ">
                            <div className="ptb-50">

                            <p>Although roles like Software Engineering, Product Development, and Executive Management is currently fulfilling the scope of my career interests, I am a curious soul always ready to learn more. I am interested in exploring the technology, business strategy and space exploration industry.</p>

                                <p>Outside of school, work, and extracurriculars, I am enthusiastic about keeping up with emerging technologies and financial market trends. This interest expanded my network to connect with different industry professionals. During my spare time, I enjoy boxing, hiking, and tinkering with fun IoT and machine learning projects. </p> 
                               
                                {/* <a href="#" className="btn btn-primary wow fadeInUp">Want to know more about me?</a> */}
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
        );
    }
}

export default About;
