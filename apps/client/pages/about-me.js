import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/about/Skills";
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
        {/* <Funfacts /> */}

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
