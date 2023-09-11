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
