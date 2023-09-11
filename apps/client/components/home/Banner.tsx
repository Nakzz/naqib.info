import TypedReact from "../typedReact";
import Link from "next/link";
import { isBrowser, isMobile, isTablet, isDesktop } from "react-device-detect";
// import React, { Component } from "react";
import Parallax from "parallax-js";
import React, { useState, useEffect, useRef } from "react";

const INITIAL_STATE = {
  width: 0,
  height: 0,
  rootClass: "digital-agency-banner",
};

// FIXME: add these references instead of image path with require
const AJ_IMAGE_SMALL = "../../images/headshots/0M1A3350_0.5x.png";
const AJ_IMAGE_LARGE = "../../images/headshots/0M1A3350_0.5x.png";

const Banner = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rootClass, setRootClass] = useState("digital-agency-banner");
  const sceneRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    const initParallaxDelayed = () => {
      try {
        if (sceneRef.current) {
          console.log("Trying to initParallaxDelayed");
          if (!isMobileDevice()) {
            try {
              parallaxRef.current = new Parallax(sceneRef.current, {
                relativeInput: true,
                // hoverOnly: true,
                limitY: 5,
              });
              setParallax(parallaxRef.current);
              // console.log(parallaxRef.current);
            } catch (error) {
              console.log("Can't init parallax: ", error.message);
              throw error;
            }
          }
        } else {
          throw "Empty Ref";
        }
      } catch (error) {
        console.log("Couldn't initParallax, trying again in 300ms");

        // If the ref is not attached yet, try again after a short delay.
        setTimeout(initParallaxDelayed, 300); // Try again after 300ms.
      }
    };

    initParallaxDelayed();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      destroyParallax();
    };
  }, []);

  // const initParallax = () => {

  // };

  const destroyParallax = () => {
    if (parallaxRef.current) {
      try {
        parallaxRef.current.disable();
      } catch (error) {
        console.log("Can't destroy parallax: ", error.message);
      }
    }
  };

  const isMobileDevice = () => {
    const mobile = !isDesktop || isTablet;
    if (mobile && rootClass !== "digital-agency-banner_notBrowser") {
      setRootClass("digital-agency-banner_notBrowser");
    }
    return mobile;
  };

  const HeroContent = () => (
    <div className="hero-content">
      <h1 className="wow fadeInUp">Driven by Innovation.</h1>
      <h4 className="wow m-b-20 hero-header">
        A blend of Technical Mastery & Visionary Leadership.
      </h4>
      <TypedReact
        className="statements"
        strings={[
          "I'm a <strong>Technologist...</strong>",
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

  const ContactCard = () => (
    <div className="contact-card-wrapper">
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

  const shouldDisplayContactCard = dimensions.width < 768;
  return (
    <>
      {shouldDisplayContactCard && <ContactCard />}
      <div className={`main-banner ${rootClass}`}>
        <div id="scroll-down">
          <span className="arrow-down"></span>
          <span id="scroll-title">Scroll down</span>
        </div>

        {shouldDisplayContactCard ? (
          <div>
            <HeroContent />
          </div>
        ) : (
          <div className="parallax_banner" ref={sceneRef}>
            <div data-depth=".1" style={{ width: '60%' }}>
              <HeroContent />
            </div>
            <img
              className="imgHolder"
              src={AJ_IMAGE_LARGE}
              alt="Picture of AJ in Large Screen"
              data-depth=".9"
            />
          </div>
        )}

        <div className="shape1">
          <img src="../../images/shapes/1.png" alt="shape1" />
        </div>
        <div className="shape2">
          <img src="../../images/shapes/2.png" alt="shape2" />
        </div>
        <div data-depth="0.7" className="shape3">
          <img src="../../images/shapes/3.png" alt="shape3" />
        </div>
        <div className="shape4">
          <img src="../../images/shapes/4.png" alt="shape4" />
        </div>
        <div className="shape5">
          <img src="../../images/shapes/5.png" alt="shape5" />
        </div>
        <div className="shape6">
          <img src="../../images/shapes/6.png" alt="shape6" />
        </div>
        <div className="shape7">
          <img src="../../images/shapes/7.png" alt="shape7" />
        </div>
        <div className="shape8">
          <img src="../../images/shapes/8.png" alt="shape8" />
        </div>
        <div className="shape9 rotateme">
          <img src="../../images/shapes/9.png" alt="shape9" />
        </div>
        <div className="shape10 rotateme">
          <img src="../../images/shapes/10.png" alt="shape10" />
        </div>
        <div className="circle-shape1">
          <img
            src="../../images/shapes/circle1.png"
            alt="shape"
            className="w-150"
          />
        </div>
        <div className="circle-shape2">
          <img
            src="../../images/shapes/circle2.png"
            alt="shape"
            className="w-150"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
