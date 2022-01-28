import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Post from "../../../components/digital-agency-animation/Post";

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
	body: string;
	heading : string;
}

interface Props {
	allPosts: BlogPosts[];
	tag: string;
}

import { initializeApollo } from "../../../utils/apolloClient";

const apolloClient = initializeApollo();

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const { data } = await apolloClient.query({
		query: gql`
			# Write your query or mutation here
			{
				allTags {
					slug
				}
			}
		`,
	});
	// console.log(data);

	// Get the paths we want to pre-render based on posts
	const paths = data.allTags.map((tag) => ({
		params: { tags: tag.slug },
	}));

	return {
		paths: paths,
		fallback: true, // See the "fallback" section below
	};
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	console.log(params);
	const { data } = await apolloClient.query({
		query: gql`
			# Write your query or mutation here
			{
				allPosts(
					orderBy: "id_DESC"
					where:{tags_some:{slug:"${params.tags}"}}
				) {
					title
					posted
					slug
					heading
					body
				}
			}
		`,
	});
	// console.log("getServerSideProps");
	// console.log(data);

	return {
		props: { ...data, tag: params.tags },
	};
}
export class index extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		// console.log(this.props);
		let posts = this.props.allPosts
			? this.props.allPosts.map((item, ind) => {
					return <Post data={item} key={ind} />;
			  })
			: null;

		return (
			<React.Fragment>
				<Navbar />
				<div className="page-title-area item-bg1">
					<div className="container">
						<h1>Posts tagged: {this.props.tag}</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Blog</li>
							<li>Tags</li>
						</ul>
					</div>
				</div>

				<section className="blog-area ptb-120">
					<div className="container">
						<div className="row">
							{this.props.allPosts ? posts : ""}

							<div disabled={true} className="col-lg-12 col-md-12">
								<div className="pagination-area">
									<nav aria-label="Page navigation">
										<ul className="pagination justify-content-center">
											<li className="page-item">
												<a className="page-link" href="#">
													<i className="icofont-double-left"></i>
												</a>
											</li>
											<li className="page-item active">
												<a className="page-link" href="#">
													1
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													2
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													3
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													<i className="icofont-double-right"></i>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</React.Fragment>
		);
	}
}

export default index;
