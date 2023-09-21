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
import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <section className="my-skill-area bg-f8f9fe ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Some of My Skills</h2>
                    </div>

                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">HTML</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">92</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">CSS</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">92</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">PHP</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Wordpress</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skill-content pl-5">
                                <h3>Every Day is a New Challenge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.</p>
                                <a href="#" className="btn btn-primary">Hire Me</a>
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

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span>Get in Touch</span>
              <h2>Want to work with us? Let's talk about the project!</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary wow fadeInUp">Contact Us</a>
            </Link>
          </div>
        </div>

        <div class="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div class="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div class="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div class="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div class="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div class="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import TypedReact from "../home/typedReact";
import Link from "next/link";

export default class ParallaxHomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.scene = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {relativeInput: true});
	}
	componentWillUnmount() {
		this.parallax.disable();
	}
	render() {
		return (
			<div className="parallax_banner" ref={(el) => (this.scene = el)}>


				
			</div>
		);
	}
}
--------------------------------------------------
import React, { Component } from "react";
import Post from "./Post"

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
    heading:string;

}

interface Props {
	data: BlogPosts[];
}

export class Blog extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		// console.log(this.props.data);
		let posts = this.props.data.map((item, ind) => {
			return <Post data={item} key={ind}/>
		});

		return (
			<section className="blog-area ptb-120">
				<div className="container">
					<div className="section-title">
						<span className="wow fadeInUp">Latest Blog</span>
						<h2 className="wow fadeInDown">
							Read about what I've been doing recently!
						</h2>
					</div>
					<div className="row">
						{this.props.data ? posts : ""}
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import axios from "axios";

interface IState {
	github: number;
}

export class Funfacts extends Component<any, IState> {
	constructor(props) {
		super(props);

		this.state = {
			github: 0,
		};
	}

	async componentDidMount() {
		let api_token = "e3dea8b4b7dbf908f92141f43726d8a6bc0f98c0";

		let { data } = await axios.get("https://api.github.com/user", {
			auth: {
				username: "nakzz",
				password: api_token,
			},
		});
		// console.log(data)

		this.setState({ github: data.public_repos });
	}

	render() {
		const { github } = this.state;

		return (
			<section className="funfacts-area ptb-120 bg-38d16a">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<a href="https://github.com/Nakzz/">
									<h3>
										<span className="odometer" data-count={github}>
											{github}
										</span>
									</h3>
									<p>Public Github Projects</p>
								</a>
							</div>
						</div>

						{/* <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="3325">3325</span></h3>
                                <p>Creative Projects</p>
                            </div>
                        </div> */}

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<h3>
									<span className="odometer" data-count="54380">
										6438
									</span>
								</h3>
								<p>Lines of Code of this application</p>
							</div>
						</div>
						<div className=" container">
							{/* <a href="https://github.com/Nakzz/"> */}
								<div className="col-lg-12 col-md-12 col-sm-12 row justify-content-md-center m-t-40">
									<img src="https://github-readme-stats.vercel.app/api?username=nakzz&count_private=true&show_icons=true&hide_title=true&theme=vue" />
								</div>
							{/* </a> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import {
	CSSTransition,
	TransitionGroup,
	Transition,
} from "react-transition-group";

import FullOption from "./pie-chart/FullOption";
import BarSkill from "./barSkill";
import { setSubSkills } from "../store/actions/skillAction";

interface IProps {
	data: ISkills[];
	setSubSkills: any;
	skillPicked: number;
}

interface ISkills {
	title: string;
	value: string;
	color: string;
	heading: string;
	body: string;
	subSkills: ISubSkills[];
}

interface ISubSkills {
	name: string;
	level: string;
	image: { publicUrlTransformed: string };
	link: string;
}

export class Skills extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	dispatchSubSkills(allSkills) {
		let subSkill = [];

		if (allSkills)
			allSkills.forEach((e: ISkills, index: number) => {
				// console.log(e)
				if (e)
					e.subSkills.forEach((elem: ISubSkills) => {
						subSkill.push({
							id: index,
							title: elem.name,
							val: elem.level,
						});
					});
			});

		// console.log(subSkill);
		this.props.setSubSkills(subSkill);
	}

	render() {
		const { data, skillPicked } = this.props;

		this.dispatchSubSkills(this.props.data);

		// console.log(data);
		if (data) {
			return (
				<section className="skill-area m-t-50">
					<div className="skill-image">
						<img
							src={require("./../images/shapes/16.png")}
							className="back-image smaller"
							alt="shape"
						/>
					</div>
					<div className="container">
						<div className="row h-100 ">
							<div className="col-lg-5 col-md-12">
								<div className="our-skill">
									<TransitionGroup key={skillPicked} className="section-title">
										<div>
											<span className="wow fadeInUp">
												Some technologies I've worked with
											</span>

											<CSSTransition
												key={skillPicked}
												timeout={800}
												classNames="item"
											>
												<div className="wow fadeInDown">
													<h3 className="wow fadeInDown">
														{data.length > 0 && data[skillPicked]
															? data[skillPicked].title
															: ""}
													</h3>
													{data.length > 0 && data[skillPicked] ? (
														<div>
															<h5>{data[skillPicked].heading}</h5>
															<div
																dangerouslySetInnerHTML={{
																	__html: data[skillPicked].body,
																}}
															></div>

															<div className="row justify-content-md-center m-t-40">
																{data[skillPicked].subSkills.map((e, i) => {
																	if (e && e.image)
																		return (
																			<div key={i} className="col-lg-4 col-md-6 m-t-20 ">
																				<div className="single-about-box text-center">
																					<a href={e.link}>
																						<div className="icon">
																							<img
																								src={
																									e.image.publicUrlTransformed
																								}
																								alt="image"
																							/>
																						</div>
																						<p>{e.name}</p>
																					</a>
																				</div>
																			</div>
																		);
																})}
															</div>
														</div>
													) : (
														""
													)}
												</div>
											</CSSTransition>
										</div>
									</TransitionGroup>

									{/* <div className="col-lg-12 col-md-12">
										<BarSkill />
									</div> */}
								</div>
							</div>

							<div className="col-lg-7 col-md-12 align-items-end">
								<div className="m-t-20">
									{/* <FullOption data={dataMock} /> */}
									<FullOption data={data} />
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		} else return null;
	}
}

const mapStateToProps = (state) => ({
	skillPicked: state.skillReducer.skillPicked,
});

export default connect(mapStateToProps, { setSubSkills })(Skills);
--------------------------------------------------
import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <section className="my-skill-area bg-f8f9fe ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Some of My Skills</h2>
                    </div>

                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">HTML</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">92</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">CSS</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">92</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">PHP</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Wordpress</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skill-content pl-5">
                                <h3>Every Day is a New Challenge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.</p>
                                <a href="#" className="btn btn-primary">Hire Me</a>
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

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span>Get in Touch</span>
              <h2>Want to work with us? Let's talk about the project!</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary wow fadeInUp">Contact Us</a>
            </Link>
          </div>
        </div>

        <div class="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div class="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div class="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div class="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div class="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div class="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import TypedReact from "../home/typedReact";
import Link from "next/link";

export default class ParallaxHomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.scene = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {relativeInput: true});
	}
	componentWillUnmount() {
		this.parallax.disable();
	}
	render() {
		return (
			<div className="parallax_banner" ref={(el) => (this.scene = el)}>


				
			</div>
		);
	}
}
--------------------------------------------------
import React, { Component } from "react";
import Post from "./Post"

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
    heading:string;

}

interface Props {
	data: BlogPosts[];
}

export class Blog extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		// console.log(this.props.data);
		let posts = this.props.data.map((item, ind) => {
			return <Post data={item} key={ind}/>
		});

		return (
			<section className="blog-area ptb-120">
				<div className="container">
					<div className="section-title">
						<span className="wow fadeInUp">Latest Blog</span>
						<h2 className="wow fadeInDown">
							Read about what I've been doing recently!
						</h2>
					</div>
					<div className="row">
						{this.props.data ? posts : ""}
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import axios from "axios";

interface IState {
	github: number;
}

export class Funfacts extends Component<any, IState> {
	constructor(props) {
		super(props);

		this.state = {
			github: 0,
		};
	}

	async componentDidMount() {
		let api_token = "e3dea8b4b7dbf908f92141f43726d8a6bc0f98c0";

		let { data } = await axios.get("https://api.github.com/user", {
			auth: {
				username: "nakzz",
				password: api_token,
			},
		});
		// console.log(data)

		this.setState({ github: data.public_repos });
	}

	render() {
		const { github } = this.state;

		return (
			<section className="funfacts-area ptb-120 bg-38d16a">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<a href="https://github.com/Nakzz/">
									<h3>
										<span className="odometer" data-count={github}>
											{github}
										</span>
									</h3>
									<p>Public Github Projects</p>
								</a>
							</div>
						</div>

						{/* <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="3325">3325</span></h3>
                                <p>Creative Projects</p>
                            </div>
                        </div> */}

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<h3>
									<span className="odometer" data-count="54380">
										6438
									</span>
								</h3>
								<p>Lines of Code of this application</p>
							</div>
						</div>
						<div className=" container">
							{/* <a href="https://github.com/Nakzz/"> */}
								<div className="col-lg-12 col-md-12 col-sm-12 row justify-content-md-center m-t-40">
									<img src="https://github-readme-stats.vercel.app/api?username=nakzz&count_private=true&show_icons=true&hide_title=true&theme=vue" />
								</div>
							{/* </a> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import {
	CSSTransition,
	TransitionGroup,
	Transition,
} from "react-transition-group";

import FullOption from "./pie-chart/FullOption";
import BarSkill from "./barSkill";
import { setSubSkills } from "../store/actions/skillAction";

interface IProps {
	data: ISkills[];
	setSubSkills: any;
	skillPicked: number;
}

interface ISkills {
	title: string;
	value: string;
	color: string;
	heading: string;
	body: string;
	subSkills: ISubSkills[];
}

interface ISubSkills {
	name: string;
	level: string;
	image: { publicUrlTransformed: string };
	link: string;
}

export class Skills extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	dispatchSubSkills(allSkills) {
		let subSkill = [];

		if (allSkills)
			allSkills.forEach((e: ISkills, index: number) => {
				// console.log(e)
				if (e)
					e.subSkills.forEach((elem: ISubSkills) => {
						subSkill.push({
							id: index,
							title: elem.name,
							val: elem.level,
						});
					});
			});

		// console.log(subSkill);
		this.props.setSubSkills(subSkill);
	}

	render() {
		const { data, skillPicked } = this.props;

		this.dispatchSubSkills(this.props.data);

		// console.log(data);
		if (data) {
			return (
				<section className="skill-area m-t-50">
					<div className="skill-image">
						<img
							src={require("./../images/shapes/16.png")}
							className="back-image smaller"
							alt="shape"
						/>
					</div>
					<div className="container">
						<div className="row h-100 ">
							<div className="col-lg-5 col-md-12">
								<div className="our-skill">
									<TransitionGroup key={skillPicked} className="section-title">
										<div>
											<span className="wow fadeInUp">
												Some technologies I've worked with
											</span>

											<CSSTransition
												key={skillPicked}
												timeout={800}
												classNames="item"
											>
												<div className="wow fadeInDown">
													<h3 className="wow fadeInDown">
														{data.length > 0 && data[skillPicked]
															? data[skillPicked].title
															: ""}
													</h3>
													{data.length > 0 && data[skillPicked] ? (
														<div>
															<h5>{data[skillPicked].heading}</h5>
															<div
																dangerouslySetInnerHTML={{
																	__html: data[skillPicked].body,
																}}
															></div>

															<div className="row justify-content-md-center m-t-40">
																{data[skillPicked].subSkills.map((e, i) => {
																	if (e && e.image)
																		return (
																			<div key={i} className="col-lg-4 col-md-6 m-t-20 ">
																				<div className="single-about-box text-center">
																					<a href={e.link}>
																						<div className="icon">
																							<img
																								src={
																									e.image.publicUrlTransformed
																								}
																								alt="image"
																							/>
																						</div>
																						<p>{e.name}</p>
																					</a>
																				</div>
																			</div>
																		);
																})}
															</div>
														</div>
													) : (
														""
													)}
												</div>
											</CSSTransition>
										</div>
									</TransitionGroup>

									{/* <div className="col-lg-12 col-md-12">
										<BarSkill />
									</div> */}
								</div>
							</div>

							<div className="col-lg-7 col-md-12 align-items-end">
								<div className="m-t-20">
									{/* <FullOption data={dataMock} /> */}
									<FullOption data={data} />
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		} else return null;
	}
}

const mapStateToProps = (state) => ({
	skillPicked: state.skillReducer.skillPicked,
});

export default connect(mapStateToProps, { setSubSkills })(Skills);
--------------------------------------------------
import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <section className="my-skill-area bg-f8f9fe ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Some of My Skills</h2>
                    </div>

                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">HTML</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">92</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">CSS</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">92</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">PHP</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Wordpress</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skill-content pl-5">
                                <h3>Every Day is a New Challenge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.</p>
                                <a href="#" className="btn btn-primary">Hire Me</a>
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

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span>Get in Touch</span>
              <h2>Want to work with us? Let's talk about the project!</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary wow fadeInUp">Contact Us</a>
            </Link>
          </div>
        </div>

        <div class="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div class="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div class="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div class="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div class="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div class="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import TypedReact from "../home/typedReact";
import Link from "next/link";

export default class ParallaxHomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.scene = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {relativeInput: true});
	}
	componentWillUnmount() {
		this.parallax.disable();
	}
	render() {
		return (
			<div className="parallax_banner" ref={(el) => (this.scene = el)}>


				
			</div>
		);
	}
}
--------------------------------------------------
import React, { Component } from "react";
import Post from "./Post"

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
    heading:string;

}

interface Props {
	data: BlogPosts[];
}

export class Blog extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		// console.log(this.props.data);
		let posts = this.props.data.map((item, ind) => {
			return <Post data={item} key={ind}/>
		});

		return (
			<section className="blog-area ptb-120">
				<div className="container">
					<div className="section-title">
						<span className="wow fadeInUp">Latest Blog</span>
						<h2 className="wow fadeInDown">
							Read about what I've been doing recently!
						</h2>
					</div>
					<div className="row">
						{this.props.data ? posts : ""}
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import axios from "axios";

interface IState {
	github: number;
}

export class Funfacts extends Component<any, IState> {
	constructor(props) {
		super(props);

		this.state = {
			github: 0,
		};
	}

	async componentDidMount() {
		let api_token = "e3dea8b4b7dbf908f92141f43726d8a6bc0f98c0";

		let { data } = await axios.get("https://api.github.com/user", {
			auth: {
				username: "nakzz",
				password: api_token,
			},
		});
		// console.log(data)

		this.setState({ github: data.public_repos });
	}

	render() {
		const { github } = this.state;

		return (
			<section className="funfacts-area ptb-120 bg-38d16a">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<a href="https://github.com/Nakzz/">
									<h3>
										<span className="odometer" data-count={github}>
											{github}
										</span>
									</h3>
									<p>Public Github Projects</p>
								</a>
							</div>
						</div>

						{/* <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="3325">3325</span></h3>
                                <p>Creative Projects</p>
                            </div>
                        </div> */}

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<h3>
									<span className="odometer" data-count="54380">
										6438
									</span>
								</h3>
								<p>Lines of Code of this application</p>
							</div>
						</div>
						<div className=" container">
							{/* <a href="https://github.com/Nakzz/"> */}
								<div className="col-lg-12 col-md-12 col-sm-12 row justify-content-md-center m-t-40">
									<img src="https://github-readme-stats.vercel.app/api?username=nakzz&count_private=true&show_icons=true&hide_title=true&theme=vue" />
								</div>
							{/* </a> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import {
	CSSTransition,
	TransitionGroup,
	Transition,
} from "react-transition-group";

import FullOption from "./pie-chart/FullOption";
import BarSkill from "./barSkill";
import { setSubSkills } from "../store/actions/skillAction";

interface IProps {
	data: ISkills[];
	setSubSkills: any;
	skillPicked: number;
}

interface ISkills {
	title: string;
	value: string;
	color: string;
	heading: string;
	body: string;
	subSkills: ISubSkills[];
}

interface ISubSkills {
	name: string;
	level: string;
	image: { publicUrlTransformed: string };
	link: string;
}

export class Skills extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	dispatchSubSkills(allSkills) {
		let subSkill = [];

		if (allSkills)
			allSkills.forEach((e: ISkills, index: number) => {
				// console.log(e)
				if (e)
					e.subSkills.forEach((elem: ISubSkills) => {
						subSkill.push({
							id: index,
							title: elem.name,
							val: elem.level,
						});
					});
			});

		// console.log(subSkill);
		this.props.setSubSkills(subSkill);
	}

	render() {
		const { data, skillPicked } = this.props;

		this.dispatchSubSkills(this.props.data);

		// console.log(data);
		if (data) {
			return (
				<section className="skill-area m-t-50">
					<div className="skill-image">
						<img
							src={require("./../images/shapes/16.png")}
							className="back-image smaller"
							alt="shape"
						/>
					</div>
					<div className="container">
						<div className="row h-100 ">
							<div className="col-lg-5 col-md-12">
								<div className="our-skill">
									<TransitionGroup key={skillPicked} className="section-title">
										<div>
											<span className="wow fadeInUp">
												Some technologies I've worked with
											</span>

											<CSSTransition
												key={skillPicked}
												timeout={800}
												classNames="item"
											>
												<div className="wow fadeInDown">
													<h3 className="wow fadeInDown">
														{data.length > 0 && data[skillPicked]
															? data[skillPicked].title
															: ""}
													</h3>
													{data.length > 0 && data[skillPicked] ? (
														<div>
															<h5>{data[skillPicked].heading}</h5>
															<div
																dangerouslySetInnerHTML={{
																	__html: data[skillPicked].body,
																}}
															></div>

															<div className="row justify-content-md-center m-t-40">
																{data[skillPicked].subSkills.map((e, i) => {
																	if (e && e.image)
																		return (
																			<div key={i} className="col-lg-4 col-md-6 m-t-20 ">
																				<div className="single-about-box text-center">
																					<a href={e.link}>
																						<div className="icon">
																							<img
																								src={
																									e.image.publicUrlTransformed
																								}
																								alt="image"
																							/>
																						</div>
																						<p>{e.name}</p>
																					</a>
																				</div>
																			</div>
																		);
																})}
															</div>
														</div>
													) : (
														""
													)}
												</div>
											</CSSTransition>
										</div>
									</TransitionGroup>

									{/* <div className="col-lg-12 col-md-12">
										<BarSkill />
									</div> */}
								</div>
							</div>

							<div className="col-lg-7 col-md-12 align-items-end">
								<div className="m-t-20">
									{/* <FullOption data={dataMock} /> */}
									<FullOption data={data} />
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		} else return null;
	}
}

const mapStateToProps = (state) => ({
	skillPicked: state.skillReducer.skillPicked,
});

export default connect(mapStateToProps, { setSubSkills })(Skills);
--------------------------------------------------
import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <section className="my-skill-area bg-f8f9fe ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Some of My Skills</h2>
                    </div>

                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">HTML</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">92</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">CSS</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">92</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">PHP</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Wordpress</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">80</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skill-content pl-5">
                                <h3>Every Day is a New Challenge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.</p>
                                <a href="#" className="btn btn-primary">Hire Me</a>
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

export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span>Get in Touch</span>
              <h2>Want to work with us? Let's talk about the project!</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Link href="#">
              <a className="btn btn-primary wow fadeInUp">Contact Us</a>
            </Link>
          </div>
        </div>

        <div class="shape13">
          <img src={require("./../images/shapes/13.png")} alt="shape" />
        </div>
        <div class="shape18">
          <img src={require("./../images/shapes/18.png")} alt="shape" />
        </div>
        <div class="shape19">
          <img src={require("./../images/shapes/19.png")} alt="shape" />
        </div>
        <div class="shape20 rotateme">
          <img src={require("./../images/shapes/20.png")} alt="shape" />
        </div>
        <div class="shape21">
          <img src={require("./../images/shapes/21.png")} alt="shape" />
        </div>
        <div class="shape22">
          <img src={require("./../images/shapes/22.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Contact;
--------------------------------------------------
import React, { Component } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import TypedReact from "../home/typedReact";
import Link from "next/link";

export default class ParallaxHomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.scene = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {relativeInput: true});
	}
	componentWillUnmount() {
		this.parallax.disable();
	}
	render() {
		return (
			<div className="parallax_banner" ref={(el) => (this.scene = el)}>


				
			</div>
		);
	}
}
--------------------------------------------------
import React, { Component } from "react";
import Post from "./Post"

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
    heading:string;

}

interface Props {
	data: BlogPosts[];
}

export class Blog extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		// console.log(this.props.data);
		let posts = this.props.data.map((item, ind) => {
			return <Post data={item} key={ind}/>
		});

		return (
			<section className="blog-area ptb-120">
				<div className="container">
					<div className="section-title">
						<span className="wow fadeInUp">Latest Blog</span>
						<h2 className="wow fadeInDown">
							Read about what I've been doing recently!
						</h2>
					</div>
					<div className="row">
						{this.props.data ? posts : ""}
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
--------------------------------------------------
import React, { Component } from "react";
import axios from "axios";

interface IState {
	github: number;
}

export class Funfacts extends Component<any, IState> {
	constructor(props) {
		super(props);

		this.state = {
			github: 0,
		};
	}

	async componentDidMount() {
		let api_token = "e3dea8b4b7dbf908f92141f43726d8a6bc0f98c0";

		let { data } = await axios.get("https://api.github.com/user", {
			auth: {
				username: "nakzz",
				password: api_token,
			},
		});
		// console.log(data)

		this.setState({ github: data.public_repos });
	}

	render() {
		const { github } = this.state;

		return (
			<section className="funfacts-area ptb-120 bg-38d16a">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<a href="https://github.com/Nakzz/">
									<h3>
										<span className="odometer" data-count={github}>
											{github}
										</span>
									</h3>
									<p>Public Github Projects</p>
								</a>
							</div>
						</div>

						{/* <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="3325">3325</span></h3>
                                <p>Creative Projects</p>
                            </div>
                        </div> */}

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<h3>
									<span className="odometer" data-count="54380">
										6438
									</span>
								</h3>
								<p>Lines of Code of this application</p>
							</div>
						</div>
						<div className=" container">
							{/* <a href="https://github.com/Nakzz/"> */}
								<div className="col-lg-12 col-md-12 col-sm-12 row justify-content-md-center m-t-40">
									<img src="https://github-readme-stats.vercel.app/api?username=nakzz&count_private=true&show_icons=true&hide_title=true&theme=vue" />
								</div>
							{/* </a> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import {
	CSSTransition,
	TransitionGroup,
	Transition,
} from "react-transition-group";

import FullOption from "./pie-chart/FullOption";
import BarSkill from "./barSkill";
import { setSubSkills } from "../store/actions/skillAction";

interface IProps {
	data: ISkills[];
	setSubSkills: any;
	skillPicked: number;
}

interface ISkills {
	title: string;
	value: string;
	color: string;
	heading: string;
	body: string;
	subSkills: ISubSkills[];
}

interface ISubSkills {
	name: string;
	level: string;
	image: { publicUrlTransformed: string };
	link: string;
}

export class Skills extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	dispatchSubSkills(allSkills) {
		let subSkill = [];

		if (allSkills)
			allSkills.forEach((e: ISkills, index: number) => {
				// console.log(e)
				if (e)
					e.subSkills.forEach((elem: ISubSkills) => {
						subSkill.push({
							id: index,
							title: elem.name,
							val: elem.level,
						});
					});
			});

		// console.log(subSkill);
		this.props.setSubSkills(subSkill);
	}

	render() {
		const { data, skillPicked } = this.props;

		this.dispatchSubSkills(this.props.data);

		// console.log(data);
		if (data) {
			return (
				<section className="skill-area m-t-50">
					<div className="skill-image">
						<img
							src={require("./../images/shapes/16.png")}
							className="back-image smaller"
							alt="shape"
						/>
					</div>
					<div className="container">
						<div className="row h-100 ">
							<div className="col-lg-5 col-md-12">
								<div className="our-skill">
									<TransitionGroup key={skillPicked} className="section-title">
										<div>
											<span className="wow fadeInUp">
												Some technologies I've worked with
											</span>

											<CSSTransition
												key={skillPicked}
												timeout={800}
												classNames="item"
											>
												<div className="wow fadeInDown">
													<h3 className="wow fadeInDown">
														{data.length > 0 && data[skillPicked]
															? data[skillPicked].title
															: ""}
													</h3>
													{data.length > 0 && data[skillPicked] ? (
														<div>
															<h5>{data[skillPicked].heading}</h5>
															<div
																dangerouslySetInnerHTML={{
																	__html: data[skillPicked].body,
																}}
															></div>

															<div className="row justify-content-md-center m-t-40">
																{data[skillPicked].subSkills.map((e, i) => {
																	if (e && e.image)
																		return (
																			<div key={i} className="col-lg-4 col-md-6 m-t-20 ">
																				<div className="single-about-box text-center">
																					<a href={e.link}>
																						<div className="icon">
																							<img
																								src={
																									e.image.publicUrlTransformed
																								}
																								alt="image"
																							/>
																						</div>
																						<p>{e.name}</p>
																					</a>
																				</div>
																			</div>
																		);
																})}
															</div>
														</div>
													) : (
														""
													)}
												</div>
											</CSSTransition>
										</div>
									</TransitionGroup>

									{/* <div className="col-lg-12 col-md-12">
										<BarSkill />
									</div> */}
								</div>
							</div>

							<div className="col-lg-7 col-md-12 align-items-end">
								<div className="m-t-20">
									{/* <FullOption data={dataMock} /> */}
									<FullOption data={data} />
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		} else return null;
	}
}

const mapStateToProps = (state) => ({
	skillPicked: state.skillReducer.skillPicked,
});

export default connect(mapStateToProps, { setSubSkills })(Skills);
--------------------------------------------------
