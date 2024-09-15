import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <section className="team-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Team Member</span>
            <h2>We have quality full team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/1.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Jennifer Aniston</h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/2.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Monica Bellucci</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/3.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Kate Winslet</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Team;
--------------------------------------------------
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="cta-about">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-image">
                <img
                  src={require("../../images/blog-home-image/WED-37.jpg")}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Me</span>
                  <h2 className="wow fadeInDown">AJ Naqib</h2>
                  <h5>
                    <i>A global citizen with a galaxy of dreams</i>
                  </h5>
                </div>
                <p>
                  With a <b>B.S. degree in Applied Computer Science</b>, my
                  journey began by focusing on
                  <b>Entrepreneurship</b> and <b>Product Development</b> from
                  the University of Wisconsin- Madison. Originally from
                  Bangladesh, New York is now my hearth and home, and I
                  currently find myself nestled in the lively city of
                  Washington, DC.
                </p>
                <p>
                  My college adventure started with a Full-Tuition Leadership
                  and Merit-based Scholarship from the POSSE Foundation. My
                  passion for Entrepreneurship and Product Development was
                  ignited as I ventured into the startup ecosystem and founded
                  Breezy Systems LLC, aimed at innovating real-world
                  technological solutions.
                </p>
                <p>
                  As an Analyst at Blackstone, I explore the intersections of
                  finance and technology, always on the lookout for new
                  opportunities. I remain passionate about quantum computing and
                  space exploration, and I never back down from a challenge, no
                  matter how complex.
                </p>
                <p>
                  Beyond work and academia, my interests are as diverse as my
                  experiences. I enjoy keeping abreast of emerging technologies
                  and financial market trends. Boxing, hiking, and dabbling with
                  IoT and machine learning projects keep me engaged in my spare
                  time. I am AJ, always learning, always growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

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
                            <img src={require("../../images/shapes/dot-shape1.png")} alt="shape" />
                         </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Education;--------------------------------------------------
import React, { Component } from "react";

export class Services extends Component {
	render() {
		return (
			<section className="services-area ptb-120 bg-f8f9fe">
				<div className="container">
					<div className="section-title">
						<h2>
							<span>Technical Skills</span>
						</h2>
						{/* <h2>Interactive services offered Me</h2> */}
						<p>
							I've worked with a wide variety of programming languages.
							Currently I use <b>Javascript </b> for most personal web applications. Whenever I
							need the most performance possible I obviously go with <b>C++</b>{" "}
							or <b>Java</b>. If I am working on a prototype or hobby project, I
							tend to lean towards <b>Python.</b>
						</p>
					</div>

					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/1.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Web Development</a>
									</h3>
									<p>
										I put emphasis on responsive presentation layer, as it is very
										important for User Experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/4.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="/blog/tags/system-design">System Design</a>
									</h3>
									<p>
										I build scalable and containerized micro-services while
										implementing CI/CD for better development experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">API Development</a>
									</h3>
									<p>
										Developing applications with an API-first approach allows
										for scalable and reusable applications
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Data Analysis</a>
									</h3>
									<p>
										Including but not limited to Algorithms, Modeling,
										Statistics and Visualization
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/6.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Project Management</a>
									</h3>
									<p>I am quite flexible, however generally follow Scrum and Agile methodology to manage my workflow </p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/5.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Engineering Drawing</a>
									</h3>
									<p>
										I utilize UML Diagrams, Flow-charts, 3D Designs,
										Architectural Sketches to better explain my work
									</p>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-4 col-md-6">
							<div className="services-box">
								

								<div className="services-content">
									<h3>
										<a href="#">Marketing</a>
									</h3>
									<p>
										Starting from content creations, to targeted advertising.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Services;--------------------------------------------------
import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <section className="team-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Team Member</span>
            <h2>We have quality full team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/1.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Jennifer Aniston</h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/2.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Monica Bellucci</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/3.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Kate Winslet</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Team;
--------------------------------------------------
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="cta-about">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-image">
                <img
                  src={require("../../images/blog-home-image/WED-37.jpg")}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Me</span>
                  <h2 className="wow fadeInDown">AJ Naqib</h2>
                  <h5>
                    <i>A global citizen with a galaxy of dreams</i>
                  </h5>
                </div>
                <p>
                  With a <b>B.S. degree in Applied Computer Science</b>, my
                  journey began by focusing on
                  <b>Entrepreneurship</b> and <b>Product Development</b> from
                  the University of Wisconsin- Madison. Originally from
                  Bangladesh, New York is now my hearth and home, and I
                  currently find myself nestled in the lively city of
                  Washington, DC.
                </p>
                <p>
                  My college adventure started with a Full-Tuition Leadership
                  and Merit-based Scholarship from the POSSE Foundation. My
                  passion for Entrepreneurship and Product Development was
                  ignited as I ventured into the startup ecosystem and founded
                  Breezy Systems LLC, aimed at innovating real-world
                  technological solutions.
                </p>
                <p>
                  As an Analyst at Blackstone, I explore the intersections of
                  finance and technology, always on the lookout for new
                  opportunities. I remain passionate about quantum computing and
                  space exploration, and I never back down from a challenge, no
                  matter how complex.
                </p>
                <p>
                  Beyond work and academia, my interests are as diverse as my
                  experiences. I enjoy keeping abreast of emerging technologies
                  and financial market trends. Boxing, hiking, and dabbling with
                  IoT and machine learning projects keep me engaged in my spare
                  time. I am AJ, always learning, always growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

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
                            <img src={require("../../images/shapes/dot-shape1.png")} alt="shape" />
                         </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Education;--------------------------------------------------
import React, { Component } from "react";

export class Services extends Component {
	render() {
		return (
			<section className="services-area ptb-120 bg-f8f9fe">
				<div className="container">
					<div className="section-title">
						<h2>
							<span>Technical Skills</span>
						</h2>
						{/* <h2>Interactive services offered Me</h2> */}
						<p>
							I've worked with a wide variety of programming languages.
							Currently I use <b>Javascript </b> for most personal web applications. Whenever I
							need the most performance possible I obviously go with <b>C++</b>{" "}
							or <b>Java</b>. If I am working on a prototype or hobby project, I
							tend to lean towards <b>Python.</b>
						</p>
					</div>

					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/1.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Web Development</a>
									</h3>
									<p>
										I put emphasis on responsive presentation layer, as it is very
										important for User Experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/4.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="/blog/tags/system-design">System Design</a>
									</h3>
									<p>
										I build scalable and containerized micro-services while
										implementing CI/CD for better development experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">API Development</a>
									</h3>
									<p>
										Developing applications with an API-first approach allows
										for scalable and reusable applications
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Data Analysis</a>
									</h3>
									<p>
										Including but not limited to Algorithms, Modeling,
										Statistics and Visualization
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/6.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Project Management</a>
									</h3>
									<p>I am quite flexible, however generally follow Scrum and Agile methodology to manage my workflow </p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/5.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Engineering Drawing</a>
									</h3>
									<p>
										I utilize UML Diagrams, Flow-charts, 3D Designs,
										Architectural Sketches to better explain my work
									</p>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-4 col-md-6">
							<div className="services-box">
								

								<div className="services-content">
									<h3>
										<a href="#">Marketing</a>
									</h3>
									<p>
										Starting from content creations, to targeted advertising.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Services;--------------------------------------------------
import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <section className="team-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Team Member</span>
            <h2>We have quality full team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/1.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Jennifer Aniston</h3>
                  <span>Photographer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/2.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Monica Bellucci</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-team">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/3.jpg")}
                    className="member-img"
                    alt="team"
                  />
                  <img
                    src={require("./../images/team-image/team-back.jpg")}
                    className="back-image"
                    alt="back-image"
                  />

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Kate Winslet</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Team;
--------------------------------------------------
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="cta-about">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-image">
                <img
                  src={require("../../images/blog-home-image/WED-37.jpg")}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Me</span>
                  <h2 className="wow fadeInDown">AJ Naqib</h2>
                  <h5>
                    <i>A global citizen with a galaxy of dreams</i>
                  </h5>
                </div>
                <p>
                  With a <b>B.S. degree in Applied Computer Science</b>, my
                  journey began by focusing on
                  <b>Entrepreneurship</b> and <b>Product Development</b> from
                  the University of Wisconsin- Madison. Originally from
                  Bangladesh, New York is now my hearth and home, and I
                  currently find myself nestled in the lively city of
                  Washington, DC.
                </p>
                <p>
                  My college adventure started with a Full-Tuition Leadership
                  and Merit-based Scholarship from the POSSE Foundation. My
                  passion for Entrepreneurship and Product Development was
                  ignited as I ventured into the startup ecosystem and founded
                  Breezy Systems LLC, aimed at innovating real-world
                  technological solutions.
                </p>
                <p>
                  As an Analyst at Blackstone, I explore the intersections of
                  finance and technology, always on the lookout for new
                  opportunities. I remain passionate about quantum computing and
                  space exploration, and I never back down from a challenge, no
                  matter how complex.
                </p>
                <p>
                  Beyond work and academia, my interests are as diverse as my
                  experiences. I enjoy keeping abreast of emerging technologies
                  and financial market trends. Boxing, hiking, and dabbling with
                  IoT and machine learning projects keep me engaged in my spare
                  time. I am AJ, always learning, always growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

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
                            <img src={require("../../images/shapes/dot-shape1.png")} alt="shape" />
                         </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Education;--------------------------------------------------
import React, { Component } from "react";

export class Services extends Component {
	render() {
		return (
			<section className="services-area ptb-120 bg-f8f9fe">
				<div className="container">
					<div className="section-title">
						<h2>
							<span>Technical Skills</span>
						</h2>
						{/* <h2>Interactive services offered Me</h2> */}
						<p>
							I've worked with a wide variety of programming languages.
							Currently I use <b>Javascript </b> for most personal web applications. Whenever I
							need the most performance possible I obviously go with <b>C++</b>{" "}
							or <b>Java</b>. If I am working on a prototype or hobby project, I
							tend to lean towards <b>Python.</b>
						</p>
					</div>

					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/1.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Web Development</a>
									</h3>
									<p>
										I put emphasis on responsive presentation layer, as it is very
										important for User Experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/4.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="/blog/tags/system-design">System Design</a>
									</h3>
									<p>
										I build scalable and containerized micro-services while
										implementing CI/CD for better development experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">API Development</a>
									</h3>
									<p>
										Developing applications with an API-first approach allows
										for scalable and reusable applications
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Data Analysis</a>
									</h3>
									<p>
										Including but not limited to Algorithms, Modeling,
										Statistics and Visualization
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/6.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Project Management</a>
									</h3>
									<p>I am quite flexible, however generally follow Scrum and Agile methodology to manage my workflow </p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/5.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Engineering Drawing</a>
									</h3>
									<p>
										I utilize UML Diagrams, Flow-charts, 3D Designs,
										Architectural Sketches to better explain my work
									</p>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-4 col-md-6">
							<div className="services-box">
								

								<div className="services-content">
									<h3>
										<a href="#">Marketing</a>
									</h3>
									<p>
										Starting from content creations, to targeted advertising.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Services;--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

let __dirname = path.resolve();

// import keys from "./server/config/keys";
// var privateKey = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/privkey.pem",
// 	"utf8"
// );
// var certificate = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/fullchain.pem",
// 	"utf8"
// );
// var credentials = { key: privateKey, cert: certificate };

const dev = process.env.NODE_ENV !== "production";

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

app.prepare().then(() => {
	const server = express();

	// Static files
	server.use(
		"/public",
		express.static("/data/naqib.info_static_content/public", {
			maxAge: dev ? "0" : "365d",
		})
	);

	// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
	server.use(
		"/images",
		express.static(path.join(__dirname, "images"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(
		"/_next",
		express.static(path.join(__dirname, ".next"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(bodyParser.json());

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
	});

	//NOT USING STRIPE
	// server.post('/api/stripe/checkout', async (req, res) => {
	//     await stripe.charges.create({
	//         amount: req.body.amount,
	//         currency: 'usd',
	//         description: 'Naqib.info application React Next eCommerce + Landing Page Templates',
	//         source: req.body.token.id
	//     });
	//     res.send({})
	// });

	const PORT = Number(process.env.PORT) || 7000;

	var httpServer = http.createServer(server);
	// var httpsServer = https.createServer(credentials, server);

	httpServer.listen(PORT, () => {
		// if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});

	// httpsServer.listen(PORT + 1, () => {
	// 	// if (err) throw err;
	// 	console.log(`> Read on http://localhost:${PORT + 1}`);
	// });
});
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

let __dirname = path.resolve();

// import keys from "./server/config/keys";
// var privateKey = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/privkey.pem",
// 	"utf8"
// );
// var certificate = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/fullchain.pem",
// 	"utf8"
// );
// var credentials = { key: privateKey, cert: certificate };

const dev = process.env.NODE_ENV !== "production";

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

app.prepare().then(() => {
	const server = express();

	// Static files
	server.use(
		"/public",
		express.static("/data/naqib.info_static_content/public", {
			maxAge: dev ? "0" : "365d",
		})
	);

	// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
	server.use(
		"/images",
		express.static(path.join(__dirname, "images"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(
		"/_next",
		express.static(path.join(__dirname, ".next"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(bodyParser.json());

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
	});

	//NOT USING STRIPE
	// server.post('/api/stripe/checkout', async (req, res) => {
	//     await stripe.charges.create({
	//         amount: req.body.amount,
	//         currency: 'usd',
	//         description: 'Naqib.info application React Next eCommerce + Landing Page Templates',
	//         source: req.body.token.id
	//     });
	//     res.send({})
	// });

	const PORT = Number(process.env.PORT) || 7000;

	var httpServer = http.createServer(server);
	// var httpsServer = https.createServer(credentials, server);

	httpServer.listen(PORT, () => {
		// if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});

	// httpsServer.listen(PORT + 1, () => {
	// 	// if (err) throw err;
	// 	console.log(`> Read on http://localhost:${PORT + 1}`);
	// });
});
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

let __dirname = path.resolve();

// import keys from "./server/config/keys";
// var privateKey = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/privkey.pem",
// 	"utf8"
// );
// var certificate = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/fullchain.pem",
// 	"utf8"
// );
// var credentials = { key: privateKey, cert: certificate };

const dev = process.env.NODE_ENV !== "production";

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

app.prepare().then(() => {
	const server = express();

	// Static files
	server.use(
		"/public",
		express.static("/data/naqib.info_static_content/public", {
			maxAge: dev ? "0" : "365d",
		})
	);

	// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
	server.use(
		"/images",
		express.static(path.join(__dirname, "images"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(
		"/_next",
		express.static(path.join(__dirname, ".next"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(bodyParser.json());

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
	});

	//NOT USING STRIPE
	// server.post('/api/stripe/checkout', async (req, res) => {
	//     await stripe.charges.create({
	//         amount: req.body.amount,
	//         currency: 'usd',
	//         description: 'Naqib.info application React Next eCommerce + Landing Page Templates',
	//         source: req.body.token.id
	//     });
	//     res.send({})
	// });

	const PORT = Number(process.env.PORT) || 7000;

	var httpServer = http.createServer(server);
	// var httpsServer = https.createServer(credentials, server);

	httpServer.listen(PORT, () => {
		// if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});

	// httpsServer.listen(PORT + 1, () => {
	// 	// if (err) throw err;
	// 	console.log(`> Read on http://localhost:${PORT + 1}`);
	// });
});
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

let __dirname = path.resolve();

// import keys from "./server/config/keys";
// var privateKey = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/privkey.pem",
// 	"utf8"
// );
// var certificate = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/fullchain.pem",
// 	"utf8"
// );
// var credentials = { key: privateKey, cert: certificate };

const dev = process.env.NODE_ENV !== "production";

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

app.prepare().then(() => {
	const server = express();

	// Static files
	server.use(
		"/public",
		express.static("/data/naqib.info_static_content/public", {
			maxAge: dev ? "0" : "365d",
		})
	);

	// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
	server.use(
		"/images",
		express.static(path.join(__dirname, "images"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(
		"/_next",
		express.static(path.join(__dirname, ".next"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(bodyParser.json());

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
	});

	//NOT USING STRIPE
	// server.post('/api/stripe/checkout', async (req, res) => {
	//     await stripe.charges.create({
	//         amount: req.body.amount,
	//         currency: 'usd',
	//         description: 'Naqib.info application React Next eCommerce + Landing Page Templates',
	//         source: req.body.token.id
	//     });
	//     res.send({})
	// });

	const PORT = Number(process.env.PORT) || 7000;

	var httpServer = http.createServer(server);
	// var httpsServer = https.createServer(credentials, server);

	httpServer.listen(PORT, () => {
		// if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});

	// httpsServer.listen(PORT + 1, () => {
	// 	// if (err) throw err;
	// 	console.log(`> Read on http://localhost:${PORT + 1}`);
	// });
});
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
