import React, { Component } from "react";

export class Boxes extends Component {
  render() {
    return (
      <section className="boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <i className="icofont-dart"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box black-color">
                <div className="icon">
                  <i className="icofont-handshake-deal"></i>
                </div>
                <h3>Market Analysis</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-box">
                <div className="icon">
                  <i className="icofont-pie-chart"></i>
                </div>
                <h3>Business Promotion</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require("./../images/shapes/3.png")} alt="shape" />
        </div>
        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Boxes;
--------------------------------------------------
import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <section className="skill-area">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-skill">
                <div className="section-title">
                  <span className="wow fadeInUp">Why Choose Us</span>
                  <h2 className="wow fadeInDown">Some of Our Skills</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Branding</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="95"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="95"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Marketing</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="90"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="90"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Design</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="95"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="95"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Development</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="93"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="93"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="skill-image">
                <img
                  src={require("./../images/man.png")}
                  className="man-image"
                  alt="man"
                />
                <img
                  src={require("./../images/shapes/16.png")}
                  className="back-image"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class Blog extends Component {
  render() {
    return (
      <section className="blog-area ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Latest Blog</span>
            <h2 className="wow fadeInDown">
              Read Inspirational Story every week
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/1.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">Technology</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">25 Feb, 2019</span>
                  <h3>
                    <a href="#">The Most Popular New top Business Apps</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/2.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">Agency</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">27 Feb, 2019</span>
                  <h3>
                    <a href="#">The Best Marketing top Management Tools</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/3.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">IT</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">28 Feb, 2019</span>
                  <h3>
                    <a href="#">3 WooCommerce Plugins to Boost Sales</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span className="wow fadeInUp">Get in Touch</span>
              <h2 className="wow fadeInDown">
                Want to work with us? Let's talk about the project!
              </h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary">Contact Us</a>
            </Link>
          </div>
        </div>

        <div className="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div className="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div className="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div className="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div className="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div className="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";

export class Boxes extends Component {
  render() {
    return (
      <section className="boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <i className="icofont-dart"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box black-color">
                <div className="icon">
                  <i className="icofont-handshake-deal"></i>
                </div>
                <h3>Market Analysis</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-box">
                <div className="icon">
                  <i className="icofont-pie-chart"></i>
                </div>
                <h3>Business Promotion</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require("./../images/shapes/3.png")} alt="shape" />
        </div>
        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Boxes;
--------------------------------------------------
import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <section className="skill-area">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-skill">
                <div className="section-title">
                  <span className="wow fadeInUp">Why Choose Us</span>
                  <h2 className="wow fadeInDown">Some of Our Skills</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Branding</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="95"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="95"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Marketing</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="90"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="90"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Design</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="95"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="95"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Development</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="93"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="93"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="skill-image">
                <img
                  src={require("./../images/man.png")}
                  className="man-image"
                  alt="man"
                />
                <img
                  src={require("./../images/shapes/16.png")}
                  className="back-image"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class Blog extends Component {
  render() {
    return (
      <section className="blog-area ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Latest Blog</span>
            <h2 className="wow fadeInDown">
              Read Inspirational Story every week
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/1.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">Technology</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">25 Feb, 2019</span>
                  <h3>
                    <a href="#">The Most Popular New top Business Apps</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/2.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">Agency</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">27 Feb, 2019</span>
                  <h3>
                    <a href="#">The Best Marketing top Management Tools</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/3.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">IT</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">28 Feb, 2019</span>
                  <h3>
                    <a href="#">3 WooCommerce Plugins to Boost Sales</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span className="wow fadeInUp">Get in Touch</span>
              <h2 className="wow fadeInDown">
                Want to work with us? Let's talk about the project!
              </h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary">Contact Us</a>
            </Link>
          </div>
        </div>

        <div className="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div className="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div className="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div className="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div className="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div className="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";

export class Boxes extends Component {
  render() {
    return (
      <section className="boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <i className="icofont-dart"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box black-color">
                <div className="icon">
                  <i className="icofont-handshake-deal"></i>
                </div>
                <h3>Market Analysis</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-box">
                <div className="icon">
                  <i className="icofont-pie-chart"></i>
                </div>
                <h3>Business Promotion</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecenas accumsan lacus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require("./../images/shapes/3.png")} alt="shape" />
        </div>
        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Boxes;
--------------------------------------------------
import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <section className="skill-area">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-skill">
                <div className="section-title">
                  <span className="wow fadeInUp">Why Choose Us</span>
                  <h2 className="wow fadeInDown">Some of Our Skills</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Branding</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="95"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="95"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Marketing</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="90"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="90"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Design</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="95"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="95"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Development</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="93"
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div
                          className="bar progress-line"
                          data-width="93"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="skill-image">
                <img
                  src={require("./../images/man.png")}
                  className="man-image"
                  alt="man"
                />
                <img
                  src={require("./../images/shapes/16.png")}
                  className="back-image"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class Blog extends Component {
  render() {
    return (
      <section className="blog-area ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Latest Blog</span>
            <h2 className="wow fadeInDown">
              Read Inspirational Story every week
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/1.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">Technology</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">25 Feb, 2019</span>
                  <h3>
                    <a href="#">The Most Popular New top Business Apps</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/2.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">Agency</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">27 Feb, 2019</span>
                  <h3>
                    <a href="#">The Best Marketing top Management Tools</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img
                        src={require("./../images/blog-image/3.jpg")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <a href="#">IT</a>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">28 Feb, 2019</span>
                  <h3>
                    <a href="#">3 WooCommerce Plugins to Boost Sales</a>
                  </h3>
                  <a href="#" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span className="wow fadeInUp">Get in Touch</span>
              <h2 className="wow fadeInDown">
                Want to work with us? Let's talk about the project!
              </h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary">Contact Us</a>
            </Link>
          </div>
        </div>

        <div className="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div className="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div className="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div className="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div className="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div className="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";
import {
  BLOG_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  DOMAIN,
} from "../../utils/constants";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-120 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="#">
                    <img src={require("./../images/logo.png")} alt="logo" />
                  </a>
                </div>

                <ul className="social-links">
                  <li>
                    <a href={LINKEDIN_URL}>
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB_URL}>
                      <i className="icofont-github"></i>
                    </a>
                  </li>

                  <li>
                    <a href={"mailto:" + EMAIL}>
                      <i className="icofont-email"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about-me">About</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Portfolio</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Contact</a>
                  </li>
                  <li>
                    <a href={BLOG_URL}>Blog</a>
                  </li>
                  {/* <li><a href="/projects">Portfolio</a></li> */}
                  {/* <li><a href="/blog">Blog</a></li> */}
                  {/* <li><a href="/contact">Contact</a></li> */}
                  {/* <li><a href="/faq">FAQ's</a></li> */}
                  {/* TODO: use links instead of direct a href */}
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Get in Touch</h3>

                <p>I'd love to chat!</p>

                <ul className="footer-contact-info">
                  {/* <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li> */}
                  {/* <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span> 
                                        <a href="tel:347-356-7867">+1 347 356 7867</a>
                                    </li> */}

                  <li>
                    <i className="icofont-email"></i>
                    <span>Email:</span>
                    <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright {new Date().getUTCFullYear()} All rights reserved.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 text-right">
                <p>
                  Developed by{" "}
                  <a href={DOMAIN} target="_blank">
                    Ajmain Naqib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={require("../images/line-bg.png")}
          className="line-bg"
          alt="line-bg"
        />
        <div className="shape23">
          <img src={require("./../images/shapes/23.png")} alt="shape" />
        </div>
        <div className="shape24">
          <img src={require("./../images/shapes/24.png")} alt="shape" />
        </div>
        <div className="shape27">
          <img src={require("./../images/shapes/27.png")} alt="shape" />
        </div>
      </footer>
    );
  }
}

export default Footer;
--------------------------------------------------
class GoTop extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            thePosition: false
        }
    };

    componentDidMount() {
        this._isMounted = true;
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }
    
    onScrollStep = () => {
        this._isMounted = true;
        if (window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        this._isMounted = true;
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className="go-top" onClick={this.scrollToTop}>
                    <i className="icofont-hand-drawn-up"></i>
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.renderGoTopIcon()}
            </React.Fragment>
        )
    }
}

export default GoTop;--------------------------------------------------
class Loader extends React.Component {
    render(){
        return (
            <div className="preloader">
			    <div className="loader"></div> 
		    </div>
        );
    }
}
 
export default Loader;--------------------------------------------------
import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
};

export class Feedback extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="feedback-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/1.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      Steven Lucy, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/2.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      John Smith, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/3.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      David Warner, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        <img
          src={require("./../images/quote.png")}
          className="quote-img"
          alt="quote"
        />
      </section>
    );
  }
}

export default Feedback;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import {
  BLOG_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  DOMAIN,
} from "../../utils/constants";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-120 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="#">
                    <img src={require("./../images/logo.png")} alt="logo" />
                  </a>
                </div>

                <ul className="social-links">
                  <li>
                    <a href={LINKEDIN_URL}>
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB_URL}>
                      <i className="icofont-github"></i>
                    </a>
                  </li>

                  <li>
                    <a href={"mailto:" + EMAIL}>
                      <i className="icofont-email"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about-me">About</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Portfolio</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Contact</a>
                  </li>
                  <li>
                    <a href={BLOG_URL}>Blog</a>
                  </li>
                  {/* <li><a href="/projects">Portfolio</a></li> */}
                  {/* <li><a href="/blog">Blog</a></li> */}
                  {/* <li><a href="/contact">Contact</a></li> */}
                  {/* <li><a href="/faq">FAQ's</a></li> */}
                  {/* TODO: use links instead of direct a href */}
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Get in Touch</h3>

                <p>I'd love to chat!</p>

                <ul className="footer-contact-info">
                  {/* <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li> */}
                  {/* <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span> 
                                        <a href="tel:347-356-7867">+1 347 356 7867</a>
                                    </li> */}

                  <li>
                    <i className="icofont-email"></i>
                    <span>Email:</span>
                    <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright {new Date().getUTCFullYear()} All rights reserved.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 text-right">
                <p>
                  Developed by{" "}
                  <a href={DOMAIN} target="_blank">
                    Ajmain Naqib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={require("../images/line-bg.png")}
          className="line-bg"
          alt="line-bg"
        />
        <div className="shape23">
          <img src={require("./../images/shapes/23.png")} alt="shape" />
        </div>
        <div className="shape24">
          <img src={require("./../images/shapes/24.png")} alt="shape" />
        </div>
        <div className="shape27">
          <img src={require("./../images/shapes/27.png")} alt="shape" />
        </div>
      </footer>
    );
  }
}

export default Footer;
--------------------------------------------------
class GoTop extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            thePosition: false
        }
    };

    componentDidMount() {
        this._isMounted = true;
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }
    
    onScrollStep = () => {
        this._isMounted = true;
        if (window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        this._isMounted = true;
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className="go-top" onClick={this.scrollToTop}>
                    <i className="icofont-hand-drawn-up"></i>
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.renderGoTopIcon()}
            </React.Fragment>
        )
    }
}

export default GoTop;--------------------------------------------------
class Loader extends React.Component {
    render(){
        return (
            <div className="preloader">
			    <div className="loader"></div> 
		    </div>
        );
    }
}
 
export default Loader;--------------------------------------------------
import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
};

export class Feedback extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="feedback-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/1.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      Steven Lucy, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/2.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      John Smith, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/3.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      David Warner, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        <img
          src={require("./../images/quote.png")}
          className="quote-img"
          alt="quote"
        />
      </section>
    );
  }
}

export default Feedback;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import {
  BLOG_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  DOMAIN,
} from "../../utils/constants";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-120 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="#">
                    <img src={require("./../images/logo.png")} alt="logo" />
                  </a>
                </div>

                <ul className="social-links">
                  <li>
                    <a href={LINKEDIN_URL}>
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB_URL}>
                      <i className="icofont-github"></i>
                    </a>
                  </li>

                  <li>
                    <a href={"mailto:" + EMAIL}>
                      <i className="icofont-email"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about-me">About</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Portfolio</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Contact</a>
                  </li>
                  <li>
                    <a href={BLOG_URL}>Blog</a>
                  </li>
                  {/* <li><a href="/projects">Portfolio</a></li> */}
                  {/* <li><a href="/blog">Blog</a></li> */}
                  {/* <li><a href="/contact">Contact</a></li> */}
                  {/* <li><a href="/faq">FAQ's</a></li> */}
                  {/* TODO: use links instead of direct a href */}
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Get in Touch</h3>

                <p>I'd love to chat!</p>

                <ul className="footer-contact-info">
                  {/* <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li> */}
                  {/* <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span> 
                                        <a href="tel:347-356-7867">+1 347 356 7867</a>
                                    </li> */}

                  <li>
                    <i className="icofont-email"></i>
                    <span>Email:</span>
                    <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright {new Date().getUTCFullYear()} All rights reserved.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 text-right">
                <p>
                  Developed by{" "}
                  <a href={DOMAIN} target="_blank">
                    Ajmain Naqib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={require("../images/line-bg.png")}
          className="line-bg"
          alt="line-bg"
        />
        <div className="shape23">
          <img src={require("./../images/shapes/23.png")} alt="shape" />
        </div>
        <div className="shape24">
          <img src={require("./../images/shapes/24.png")} alt="shape" />
        </div>
        <div className="shape27">
          <img src={require("./../images/shapes/27.png")} alt="shape" />
        </div>
      </footer>
    );
  }
}

export default Footer;
--------------------------------------------------
class GoTop extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            thePosition: false
        }
    };

    componentDidMount() {
        this._isMounted = true;
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }
    
    onScrollStep = () => {
        this._isMounted = true;
        if (window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        this._isMounted = true;
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className="go-top" onClick={this.scrollToTop}>
                    <i className="icofont-hand-drawn-up"></i>
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.renderGoTopIcon()}
            </React.Fragment>
        )
    }
}

export default GoTop;--------------------------------------------------
class Loader extends React.Component {
    render(){
        return (
            <div className="preloader">
			    <div className="loader"></div> 
		    </div>
        );
    }
}
 
export default Loader;--------------------------------------------------
import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
};

export class Feedback extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="feedback-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/1.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      Steven Lucy, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/2.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      John Smith, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/3.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      David Warner, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        <img
          src={require("./../images/quote.png")}
          className="quote-img"
          alt="quote"
        />
      </section>
    );
  }
}

export default Feedback;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import {
  BLOG_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  DOMAIN,
} from "../../utils/constants";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-120 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="#">
                    <img src={require("./../images/logo.png")} alt="logo" />
                  </a>
                </div>

                <ul className="social-links">
                  <li>
                    <a href={LINKEDIN_URL}>
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB_URL}>
                      <i className="icofont-github"></i>
                    </a>
                  </li>

                  <li>
                    <a href={"mailto:" + EMAIL}>
                      <i className="icofont-email"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about-me">About</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Portfolio</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Contact</a>
                  </li>
                  <li>
                    <a href={BLOG_URL}>Blog</a>
                  </li>
                  {/* <li><a href="/projects">Portfolio</a></li> */}
                  {/* <li><a href="/blog">Blog</a></li> */}
                  {/* <li><a href="/contact">Contact</a></li> */}
                  {/* <li><a href="/faq">FAQ's</a></li> */}
                  {/* TODO: use links instead of direct a href */}
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Get in Touch</h3>

                <p>I'd love to chat!</p>

                <ul className="footer-contact-info">
                  {/* <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li> */}
                  {/* <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span> 
                                        <a href="tel:347-356-7867">+1 347 356 7867</a>
                                    </li> */}

                  <li>
                    <i className="icofont-email"></i>
                    <span>Email:</span>
                    <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright {new Date().getUTCFullYear()} All rights reserved.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 text-right">
                <p>
                  Developed by{" "}
                  <a href={DOMAIN} target="_blank">
                    Ajmain Naqib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={require("../images/line-bg.png")}
          className="line-bg"
          alt="line-bg"
        />
        <div className="shape23">
          <img src={require("./../images/shapes/23.png")} alt="shape" />
        </div>
        <div className="shape24">
          <img src={require("./../images/shapes/24.png")} alt="shape" />
        </div>
        <div className="shape27">
          <img src={require("./../images/shapes/27.png")} alt="shape" />
        </div>
      </footer>
    );
  }
}

export default Footer;
--------------------------------------------------
class GoTop extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            thePosition: false
        }
    };

    componentDidMount() {
        this._isMounted = true;
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }
    
    onScrollStep = () => {
        this._isMounted = true;
        if (window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        this._isMounted = true;
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className="go-top" onClick={this.scrollToTop}>
                    <i className="icofont-hand-drawn-up"></i>
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.renderGoTopIcon()}
            </React.Fragment>
        )
    }
}

export default GoTop;--------------------------------------------------
class Loader extends React.Component {
    render(){
        return (
            <div className="preloader">
			    <div className="loader"></div> 
		    </div>
        );
    }
}
 
export default Loader;--------------------------------------------------
import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
};

export class Feedback extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="feedback-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/1.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      Steven Lucy, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/2.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      John Smith, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <img
                      src={require("./../images/client-image/3.jpg")}
                      alt="image"
                    />

                    <p>
                      "Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua."
                    </p>

                    <h3>
                      David Warner, <span>CEO at ThemeForest</span>
                    </h3>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        <img
          src={require("./../images/quote.png")}
          className="quote-img"
          alt="quote"
        />
      </section>
    );
  }
}

export default Feedback;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
