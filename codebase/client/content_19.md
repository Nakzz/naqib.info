import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
