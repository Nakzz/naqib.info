# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2


# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /opt/app

RUN apk add --no-cache yarn g++ make libpng-dev pkgconfig autoconf automake libtool nasm build-base zlib-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN yarn install

RUN yarn build 


# CMD [ "ls", "/data" ] 
# CMD [ "yarn", "start"]


# # Install dependencies only when needed
# FROM node:${NODE_VERSION}-alpine AS builder

# WORKDIR /opt/app
# COPY package*.json ./
# RUN yarn install

# RUN yarn build

# # Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS runner

# ARG X_TAG
# WORKDIR /opt/app
# ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
# # CMD ["node_modules/.bin/next", "start"]
CMD [ "yarn", "start"]


--------------------------------------------------
Hgm1C9wVCJ2in-pVO8wQPkXonUjQW1TynkINPKczQ1g.yUK15FCUPT7s22l7kYtYWlGrwFc5bK4znjKXNAhGVeI--------------------------------------------------
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSass = require("@zeit/next-sass");
const postcssflexbugsfixes = require("postcss-flexbugs-fixes");
const postcsspresetenv = require("postcss-preset-env");
const purgeCSS = require("@fullhuman/postcss-purgecss")

module.exports = withPlugins([
	[
		optimizedImages,
		{
			inlineImageLimit: 8192,
			imagesFolder: "images",
			imagesName: "[name]-[hash].[ext]",
			handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
			optimizeImages: true,
			optimizeImagesInDev: false,
			// mozjpeg: {
			//     quality: 80,
			// },
			optipng: {
				optimizationLevel: 3,
			},
			pngquant: false,
			gifsicle: {
				interlaced: true,
				optimizationLevel: 3,
			},
			webp: {
				preset: "default",
				quality: 75,
			},
		},
	],
	// [withCSS],
    // [withSass],
    postcssflexbugsfixes,
    [
        postcsspresetenv,
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
        purgeCSS,
      {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
	],
	// [withFonts],
	
]);
--------------------------------------------------
declare namespace React {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
      disabled?: boolean;
    }
  }
--------------------------------------------------
export const BLOG_URL = 'https://blog.naqib.info';
export const LINKEDIN_URL = "https://www.linkedin.com/in/ajmain/"
export const GITHUB_URL = "https://github.com/Nakzz/"

export const EMAIL = "aj@naqib.info"

export const DOMAIN = "https://naqib.info"
--------------------------------------------------
const dev = process.env.NODE_ENV !== "production";

// log the pageview with their URL
export const LogPageView = (url) => {
    //only log in prod
    if(!dev)
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }--------------------------------------------------
// lib/apolloClient.js
import { useMemo } from "react";
const https = require("https");
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined", // set to true for SSR
		link: new HttpLink({
			uri: process.env.CMS_URL,
			fetchOptions: {
				agent: new https.Agent({ rejectUnauthorized: false }), 
			},
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client,
	// the initial state gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
--------------------------------------------------
export function hostnameResolver(production = false) {
  let hostname = "";
  if (
    process.env.NODE_ENV === "docker_production" ||
    process.env.NODE_ENV === "production" ||
    production === true
  )
    hostname = "https://naqib.info/";
  else {
    hostname = "http://192.168.1.126:7001/";
  }

  return hostname;
}
--------------------------------------------------
import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);--------------------------------------------------
/// <reference types="next" />
/// <reference types="next/types/global" />
--------------------------------------------------
# naqib.info

## Dev Setup

- Open Dev Container
- `nvm install && nvm use && yarn install `

#TODO:

- Run Dockerized keystone in production proporly. Check access to /api playground and make sure that is blocked from www

# Bugs

- Build fails on following update
- "react": "^17.0.3" - Github not resolved yet
- "next-redux-wrapper": "^6.0.2",
- "next-fonts": "^1.5.1", - icofont, unexprexed char ''
- "next": "^10.0.9", -- Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

# F.A.Q.

### Error: spawn ../node_modules/optipng-bin/vendor/optipng

```
rm -rf node_modules/optipng-bin/
npm rebuild
```
--------------------------------------------------
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
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2


# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /opt/app

RUN apk add --no-cache yarn g++ make libpng-dev pkgconfig autoconf automake libtool nasm build-base zlib-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN yarn install

RUN yarn build 


# CMD [ "ls", "/data" ] 
# CMD [ "yarn", "start"]


# # Install dependencies only when needed
# FROM node:${NODE_VERSION}-alpine AS builder

# WORKDIR /opt/app
# COPY package*.json ./
# RUN yarn install

# RUN yarn build

# # Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS runner

# ARG X_TAG
# WORKDIR /opt/app
# ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
# # CMD ["node_modules/.bin/next", "start"]
CMD [ "yarn", "start"]


--------------------------------------------------
Hgm1C9wVCJ2in-pVO8wQPkXonUjQW1TynkINPKczQ1g.yUK15FCUPT7s22l7kYtYWlGrwFc5bK4znjKXNAhGVeI--------------------------------------------------
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSass = require("@zeit/next-sass");
const postcssflexbugsfixes = require("postcss-flexbugs-fixes");
const postcsspresetenv = require("postcss-preset-env");
const purgeCSS = require("@fullhuman/postcss-purgecss")

module.exports = withPlugins([
	[
		optimizedImages,
		{
			inlineImageLimit: 8192,
			imagesFolder: "images",
			imagesName: "[name]-[hash].[ext]",
			handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
			optimizeImages: true,
			optimizeImagesInDev: false,
			// mozjpeg: {
			//     quality: 80,
			// },
			optipng: {
				optimizationLevel: 3,
			},
			pngquant: false,
			gifsicle: {
				interlaced: true,
				optimizationLevel: 3,
			},
			webp: {
				preset: "default",
				quality: 75,
			},
		},
	],
	// [withCSS],
    // [withSass],
    postcssflexbugsfixes,
    [
        postcsspresetenv,
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
        purgeCSS,
      {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
	],
	// [withFonts],
	
]);
--------------------------------------------------
declare namespace React {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
      disabled?: boolean;
    }
  }
--------------------------------------------------
export const BLOG_URL = 'https://blog.naqib.info';
export const LINKEDIN_URL = "https://www.linkedin.com/in/ajmain/"
export const GITHUB_URL = "https://github.com/Nakzz/"

export const EMAIL = "aj@naqib.info"

export const DOMAIN = "https://naqib.info"
--------------------------------------------------
const dev = process.env.NODE_ENV !== "production";

// log the pageview with their URL
export const LogPageView = (url) => {
    //only log in prod
    if(!dev)
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }--------------------------------------------------
// lib/apolloClient.js
import { useMemo } from "react";
const https = require("https");
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined", // set to true for SSR
		link: new HttpLink({
			uri: process.env.CMS_URL,
			fetchOptions: {
				agent: new https.Agent({ rejectUnauthorized: false }), 
			},
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client,
	// the initial state gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
--------------------------------------------------
export function hostnameResolver(production = false) {
  let hostname = "";
  if (
    process.env.NODE_ENV === "docker_production" ||
    process.env.NODE_ENV === "production" ||
    production === true
  )
    hostname = "https://naqib.info/";
  else {
    hostname = "http://192.168.1.126:7001/";
  }

  return hostname;
}
--------------------------------------------------
import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);--------------------------------------------------
/// <reference types="next" />
/// <reference types="next/types/global" />
--------------------------------------------------
# naqib.info

## Dev Setup

- Open Dev Container
- `nvm install && nvm use && yarn install `

#TODO:

- Run Dockerized keystone in production proporly. Check access to /api playground and make sure that is blocked from www

# Bugs

- Build fails on following update
- "react": "^17.0.3" - Github not resolved yet
- "next-redux-wrapper": "^6.0.2",
- "next-fonts": "^1.5.1", - icofont, unexprexed char ''
- "next": "^10.0.9", -- Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

# F.A.Q.

### Error: spawn ../node_modules/optipng-bin/vendor/optipng

```
rm -rf node_modules/optipng-bin/
npm rebuild
```
--------------------------------------------------
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
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2


# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /opt/app

RUN apk add --no-cache yarn g++ make libpng-dev pkgconfig autoconf automake libtool nasm build-base zlib-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN yarn install

RUN yarn build 


# CMD [ "ls", "/data" ] 
# CMD [ "yarn", "start"]


# # Install dependencies only when needed
# FROM node:${NODE_VERSION}-alpine AS builder

# WORKDIR /opt/app
# COPY package*.json ./
# RUN yarn install

# RUN yarn build

# # Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS runner

# ARG X_TAG
# WORKDIR /opt/app
# ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
# # CMD ["node_modules/.bin/next", "start"]
CMD [ "yarn", "start"]


--------------------------------------------------
Hgm1C9wVCJ2in-pVO8wQPkXonUjQW1TynkINPKczQ1g.yUK15FCUPT7s22l7kYtYWlGrwFc5bK4znjKXNAhGVeI--------------------------------------------------
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSass = require("@zeit/next-sass");
const postcssflexbugsfixes = require("postcss-flexbugs-fixes");
const postcsspresetenv = require("postcss-preset-env");
const purgeCSS = require("@fullhuman/postcss-purgecss")

module.exports = withPlugins([
	[
		optimizedImages,
		{
			inlineImageLimit: 8192,
			imagesFolder: "images",
			imagesName: "[name]-[hash].[ext]",
			handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
			optimizeImages: true,
			optimizeImagesInDev: false,
			// mozjpeg: {
			//     quality: 80,
			// },
			optipng: {
				optimizationLevel: 3,
			},
			pngquant: false,
			gifsicle: {
				interlaced: true,
				optimizationLevel: 3,
			},
			webp: {
				preset: "default",
				quality: 75,
			},
		},
	],
	// [withCSS],
    // [withSass],
    postcssflexbugsfixes,
    [
        postcsspresetenv,
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
        purgeCSS,
      {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
	],
	// [withFonts],
	
]);
--------------------------------------------------
declare namespace React {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
      disabled?: boolean;
    }
  }
--------------------------------------------------
export const BLOG_URL = 'https://blog.naqib.info';
export const LINKEDIN_URL = "https://www.linkedin.com/in/ajmain/"
export const GITHUB_URL = "https://github.com/Nakzz/"

export const EMAIL = "aj@naqib.info"

export const DOMAIN = "https://naqib.info"
--------------------------------------------------
const dev = process.env.NODE_ENV !== "production";

// log the pageview with their URL
export const LogPageView = (url) => {
    //only log in prod
    if(!dev)
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }--------------------------------------------------
// lib/apolloClient.js
import { useMemo } from "react";
const https = require("https");
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined", // set to true for SSR
		link: new HttpLink({
			uri: process.env.CMS_URL,
			fetchOptions: {
				agent: new https.Agent({ rejectUnauthorized: false }), 
			},
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client,
	// the initial state gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
--------------------------------------------------
export function hostnameResolver(production = false) {
  let hostname = "";
  if (
    process.env.NODE_ENV === "docker_production" ||
    process.env.NODE_ENV === "production" ||
    production === true
  )
    hostname = "https://naqib.info/";
  else {
    hostname = "http://192.168.1.126:7001/";
  }

  return hostname;
}
--------------------------------------------------
import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);--------------------------------------------------
/// <reference types="next" />
/// <reference types="next/types/global" />
--------------------------------------------------
# naqib.info

## Dev Setup

- Open Dev Container
- `nvm install && nvm use && yarn install `

#TODO:

- Run Dockerized keystone in production proporly. Check access to /api playground and make sure that is blocked from www

# Bugs

- Build fails on following update
- "react": "^17.0.3" - Github not resolved yet
- "next-redux-wrapper": "^6.0.2",
- "next-fonts": "^1.5.1", - icofont, unexprexed char ''
- "next": "^10.0.9", -- Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

# F.A.Q.

### Error: spawn ../node_modules/optipng-bin/vendor/optipng

```
rm -rf node_modules/optipng-bin/
npm rebuild
```
--------------------------------------------------
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
--------------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
--------------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
--------------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
--------------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
--------------------------------------------------
