import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
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
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
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
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
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
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
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
