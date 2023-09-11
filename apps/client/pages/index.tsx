import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/home/Banner";
import Head from 'next/head';
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

interface IData{
	allSkills: any,
	allPages: any,
	allPosts: any,
	allInterests: any
}

export async function getServerSideProps() {
	const apolloClient = initializeApollo();

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
					name,
					path,
					heading,
					image {
						filename
					}
				}
				allInterests(
					orderBy: "id_ASC"	
					where: { status: published }
				) {
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
	const allPosts = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib').then(res => res.json()).then(blogPosts => blogPosts.items);
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
				<Services data={this.props.allInterests}/>
				<Blog data={this.props.allPosts} />
				<Footer />
			</React.Fragment>
		);
	}
}




export default index;
