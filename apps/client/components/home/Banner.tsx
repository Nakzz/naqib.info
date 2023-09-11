import TypedReact from "../typedReact";
import Link from "next/link";
import { isBrowser, isMobile, isTablet, isDesktop } from "react-device-detect";
import React, { Component } from "react";
import Parallax from "parallax-js";

const INITIAL_STATE = {
  width: 0,
  height: 0,
  rootClass: "digital-agency-banner",
};

// FIXME: add these references instead of image path with require
const AJ_IMAGE_SMALL = "../../images/headshots/0M1A3350_0.5x.png";
const AJ_IMAGE_LARGE = "../../images/headshots/0M1A3350_0.5x.png";

class Banner extends Component {
  scene = React.createRef();

  state = INITIAL_STATE;

  parallax = null;

  componentDidMount() {
    this.initParallax();
  }

  componentWillUnmount() {
    this.destroyParallax();
  }

  initParallax = () => {
    try {
      this.parallax = new Parallax(this.scene.current, {
        relativeInput: true,
        limitY: 2,
      });
    } catch (error) {
      console.log("Can't init parallax: Its a mobile");
    }
  };

  destroyParallax = () => {
    try {
      this.parallax.disable();
    } catch (error) {
      console.log("Can't destroy parallax: Its a mobile");
    }
  };

  isMobile = () => {
    const isMobile = !isDesktop || isTablet;
    if (
      isMobile &&
      this.state.rootClass !== "digital-agency-banner_notBrowser"
    ) {
      this.setState({ rootClass: "digital-agency-banner_notBrowser" });
    }
    return isMobile;
  };

  HeroContent = () => (
    <div className="hero-content">
      <h4 className="wow fadeInUp m-l-20">Hey there!</h4>
      <h1 className="wow m-b-20 hero-header">My name is AJ</h1>
      <TypedReact
        className="statements"
        strings={[
          "I'm a <strong>Technologist...</strong>",
          "I'm the Visionary behind <strong>Breezy Systems LLC...</strong>",
          "I'm an <strong>Innovator at the crossroads of AI and Space Exploration...</strong>",
          "I'm a <strong>Leader with a passion for mentoring...</strong>",
          "I'm a distinguished <strong>POSSE Scholar...</strong>",
          "I'm an adventurer, <strong>from the boxing ring to hiking trails...</strong>",
        ]}
      />
      <Link href="/about-me">
        <a className="m-t-30 btn btn-primary wow fadeInLeft">
          Learn more about me!
        </a>
      </Link>
    </div>
  );

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
    this.initParallax();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    this.destroyParallax();
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  ContactCard = () => (
    // <div className="contact-card">
    //   <h1>Contact Me</h1>
    //   <p>Name: AJ</p>
    // </div>
    <div class="contact-card-wrapper">
      <div class="contact-card">
        <div class="text-content">
          <div class="contact-header">
            <h2>
              <strong>AJ Naqib</strong>
            </h2>
            <h5>
              <i>A global citizen with a galaxy of dreams</i>
            </h5>
          </div>
          <div class="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:aj.naqib@example.com">aj.naqib@example.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:1234567890">123-456-7890</a>
            </p>
            <p>
              <strong>Location:</strong> Washington, DC
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/ajnaqib">
                linkedin.com/in/ajnaqib
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/ajnaqib">github.com/ajnaqib</a>
            </p>
          </div>
          <div class="about-me">
            <ul>
              <li>
                Armed with a B.S. in Applied Computer Science, I've journeyed
                from Bangladesh to New York and Washington, DC, turning caffeine
                into code and dreams into reality.
              </li>
              <li>
                Launched a cosmic rocket called Breezy Systems LLC, fueled by
                entrepreneurial spirit and passion for product development.
              </li>
              <li>
                I dive into the quantum realm at Blackstone, navigating the
                nebulous world of finance and computing.
              </li>
              <li>
                With interests as diverse as the cosmos, I explore tech trends,
                spar in the interstellar boxing ring, and hike across the
                digital landscape.
              </li>
            </ul>
          </div>
        </div>
        <div class="image">
          <img
            class="imgHolder"
            src="../../images/headshots/0M1A3748.jpg"
            alt="Picture of AJ in Large Screen"
            data-depth=".4"
          />
        </div>
      </div>
    </div>
  );

  render() {
    const isMobile = this.isMobile();
    const shouldDisplayContactCard = this.state.width < 768;
    return (
      <>
        {shouldDisplayContactCard && <this.ContactCard />}
        <div className={`main-banner ${this.state.rootClass}`}>
          <div id="scroll-down">
            <span className="arrow-down"></span>
            <span id="scroll-title">Scroll down</span>
          </div>

          {shouldDisplayContactCard ? (
            <div className="">
              <this.HeroContent />
            </div>
          ) : (
            <div className="parallax_banner" ref={this.scene}>
              <div data-depth=".1">
                <this.HeroContent />
              </div>
              <img
                className="imgHolder"
                src={require("../../images/headshots/0M1A3350_0.5x.png")}
                alt="Picture of AJ in Large Screen"
                data-depth=".4"
              />
            </div>
          )}

          <div className="shape1">
            <img src={require("../../images/shapes/1.png")} alt="shape1" />
          </div>
          <div className="shape2">
            <img src={require("../../images/shapes/2.png")} alt="shape2" />
          </div>
          <div data-depth="0.7" className="shape3">
            <img src={require("../../images/shapes/3.png")} alt="shape3" />
          </div>
          <div className="shape4">
            <img src={require("../../images/shapes/4.png")} alt="shape4" />
          </div>
          <div className="shape5">
            <img src={require("../../images/shapes/5.png")} alt="shape5" />
          </div>
          <div className="shape6">
            <img src={require("../../images/shapes/6.png")} alt="shape6" />
          </div>
          <div className="shape7">
            <img src={require("../../images/shapes/7.png")} alt="shape7" />
          </div>
          <div className="shape8">
            <img src={require("../../images/shapes/8.png")} alt="shape8" />
          </div>
          <div className="shape9 rotateme">
            <img src={require("../../images/shapes/9.png")} alt="shape9" />
          </div>
          <div className="shape10 rotateme">
            <img src={require("../../images/shapes/10.png")} alt="shape10" />
          </div>
          <div className="circle-shape1">
            <img
              src={require("../../images/shapes/circle1.png")}
              alt="shape"
              className="w-150"
            />
          </div>
          <div className="circle-shape2">
            <img
              src={require("../../images/shapes/circle2.png")}
              alt="shape"
              className="w-150"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
