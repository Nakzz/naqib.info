import React, { Component } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("./../images/work-image/1.jpg"),
  require("./../images/work-image/2.jpg"),
  require("./../images/work-image/3.jpg"),
  require("./../images/work-image/4.jpg"),
  require("./../images/work-image/5.jpg"),
  require("./../images/work-image/6.jpg"),
];

export class Works extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false,
  };

  render() {
    const { photoIndex, isOpenImage } = this.state;
    return (
      <section className="works-area ptb-120 pb-0 bg-08071c">
        <div className="container">
          <div className="section-title">
            <span className="fadeInUp wow">Our Work</span>
            <h2 className="wow fadeInDown">
              We have completed 2K project successfully
            </h2>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/1.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 0 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          {isOpenImage && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpenImage: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/2.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 1 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/3.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 2 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/4.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 3 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/5.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 4 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/6.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 5 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="shape11">
          <img src={require("./../images/shapes/11.png")} alt="shape" />
        </div>
        <div className="shape12">
          <img src={require("./../images/shapes/12.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Works;
--------------------------------------------------
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
      <section className="feedback-area-two ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback center-feedback-box">
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
                  <div className="single-feedback center-feedback-box">
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
                  <div className="single-feedback center-feedback-box">
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
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("./../images/work-image/1.jpg"),
  require("./../images/work-image/2.jpg"),
  require("./../images/work-image/3.jpg"),
  require("./../images/work-image/4.jpg"),
  require("./../images/work-image/5.jpg"),
  require("./../images/work-image/6.jpg"),
];

export class Works extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false,
  };

  render() {
    const { photoIndex, isOpenImage } = this.state;
    return (
      <section className="works-area ptb-120 pb-0 bg-08071c">
        <div className="container">
          <div className="section-title">
            <span className="fadeInUp wow">Our Work</span>
            <h2 className="wow fadeInDown">
              We have completed 2K project successfully
            </h2>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/1.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 0 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          {isOpenImage && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpenImage: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/2.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 1 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/3.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 2 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/4.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 3 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/5.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 4 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/6.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 5 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="shape11">
          <img src={require("./../images/shapes/11.png")} alt="shape" />
        </div>
        <div className="shape12">
          <img src={require("./../images/shapes/12.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Works;
--------------------------------------------------
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
      <section className="feedback-area-two ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback center-feedback-box">
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
                  <div className="single-feedback center-feedback-box">
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
                  <div className="single-feedback center-feedback-box">
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
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("./../images/work-image/1.jpg"),
  require("./../images/work-image/2.jpg"),
  require("./../images/work-image/3.jpg"),
  require("./../images/work-image/4.jpg"),
  require("./../images/work-image/5.jpg"),
  require("./../images/work-image/6.jpg"),
];

export class Works extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false,
  };

  render() {
    const { photoIndex, isOpenImage } = this.state;
    return (
      <section className="works-area ptb-120 pb-0 bg-08071c">
        <div className="container">
          <div className="section-title">
            <span className="fadeInUp wow">Our Work</span>
            <h2 className="wow fadeInDown">
              We have completed 2K project successfully
            </h2>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/1.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 0 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          {isOpenImage && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpenImage: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/2.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 1 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/3.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 2 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/4.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 3 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/5.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 4 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="single-work m-0">
              <img src={require("./../images/work-image/6.jpg")} alt="image" />

              <div className="works-content">
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link href="#">
                <a className="link-btn">
                  <i className="icofont-external-link"></i>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="popup-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ isOpenImage: true, photoIndex: 5 });
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="shape11">
          <img src={require("./../images/shapes/11.png")} alt="shape" />
        </div>
        <div className="shape12">
          <img src={require("./../images/shapes/12.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Works;
--------------------------------------------------
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
      <section className="feedback-area-two ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback center-feedback-box">
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
                  <div className="single-feedback center-feedback-box">
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
                  <div className="single-feedback center-feedback-box">
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
