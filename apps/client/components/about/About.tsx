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
                  src={"images/blog-home-image/WED-37.jpg"}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Me</span>
                  <h2 className="wow fadeInDown">
                    AJ Naqib: Innovator, Explorer, Lifelong Learner
                  </h2>
                  <h5>
                    <i>A global citizen with a galaxy of dreams</i>
                  </h5>
                </div>
                <p>
                  With a <b>B.S. degree in Applied Computer Science</b>, my
                  journey began at the
                  <b>University of Wisconsin-Madison</b>, focusing on{" "}
                  <b>Entrepreneurship</b> and <b>Product Development</b>.
                  Originating from Bangladesh, I have found a second home in New
                  York.
                </p>
                <p>
                  Awarded a Full-Tuition Leadership and Merit-based Scholarship
                  by the <b>POSSE Foundation</b>, my venture into the startup
                  ecosystem led to founding <b>Breezy Systems LLC</b>, where I
                  innovated real-world technological solutions.
                </p>
                <p>
                  My interests span across quantum computing, space exploration,
                  and the evolving realm of AI and machine learning. Challenges
                  inspire me, driving my pursuit for innovative solutions in
                  technology.
                </p>
                <p>
                  Beyond my professional pursuits, I am deeply engaged in a
                  variety of activities. From staying updated on emerging
                  technologies and market trends to engaging in boxing, hiking,
                  and IoT projects, my life is a continuous journey of learning
                  and growth. I am AJ, ever curious, ever evolving.
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
