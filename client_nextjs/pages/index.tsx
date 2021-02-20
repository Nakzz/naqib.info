import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Banner from "../components/digital-agency-animation/Banner";
import About from "../components/digital-agency-animation/About";
import Services from "../components/digital-agency-animation/Services";
import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
import Crafting from "../components/digital-agency-animation/Crafting";
import Works from "../components/digital-agency-animation/Works";
import Feedback from "../components/digital-agency-animation/Feedback";
import HowWeWork from "../components/digital-agency-animation/HowWeWork";
import Team from "../components/digital-agency-animation/Team";
import Cta from "../components/digital-agency-animation/Cta";
import Skills from "../components/digital-agency-animation/Skills";
import Funfacts from '../components/freelancer/Funfacts';

import Blog from "../components/digital-agency-animation/Blog";
import Partner from "../components/digital-agency-animation/Partner";
import Contact from "../components/digital-agency-animation/Contact";
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
				allPosts(
					orderBy: "id_DESC"
					first: 4
					where: { status: published, private: false }
				) {
					title
					posted
					slug
					heading
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

	return {
		props: { ...data },
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
				{/* <About /> */}
				<Services data={this.props.allInterests}/>

				{/* <HowWeWork /> */}
				<Skills data={this.props.allSkills} />
				<Funfacts /> 

				{/* <WhyChooseUs /> TODO: add later */}

				<Works data={this.props.allPages}/>
				{/* <Feedback /> TODO: maybe in the future if I can get some bigger deals */}

				{/* TODO: add later */}
				<Blog data={this.props.allPosts} />

				<Contact />

				<Footer />
			</React.Fragment>
		);
	}
}




export default index;
