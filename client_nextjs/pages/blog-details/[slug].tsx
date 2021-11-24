import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	FacebookMessengerIcon,
	FacebookMessengerShareButton,
	LinkedinIcon,
	RedditIcon,
	TwitterIcon,
	RedditShareButton,
	TwitterShareButton,
	LinkedinShareButton,
} from "react-share";

import { initializeApollo } from "../../utils/apolloClient";
import { hostnameResolver } from "../../utils/hostname";

interface IPost {
	title: string;
	slug: string;
	posted: string;
	body: string;
	heading: string;
	image: {
		publicUrlTransformed?: string;
	};
	author: {
		name: string;
		email: string;
	};
	categories: {
		name: string;
		slug: string;
	}[];
	comments: IComment[];
	tags: [
		{
			name: string;
			slug: string;
		}
	];
}
interface IComment {
	name: string;
	body: string;
	date: string;
	replies?: IComment[];
}
interface ITag {
	name?: string;
	slug?: string;
}
interface IProps {
	post: IPost;
	tags: ITag[];
	recentPosts?: [];
}
interface IState {
	recentPosts?: [];
}

// const apolloClient = initializeApollo();

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
const apolloClient = initializeApollo();

	const { data } = await apolloClient.query({
		query: gql`
			# Write your query or mutation here
			{
				allPosts(where: { status: published, private: false }) {
					slug
				}
			}
		`,
	});
	// console.log(data)

	// Get the paths we want to pre-render based on posts
	const paths = data.allPosts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths: paths,
		fallback: true, // See the "fallback" section below
	};
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
const apolloClient = initializeApollo();

	const {
		data: { allPosts },
		data: { allTags },
	} = await apolloClient.query({
		query: gql`
			# Write your query or mutation here
			{
				allPosts(where:{slug:"${params.slug}"}) {
                    title
                    slug
                    image{
                        publicUrlTransformed
                    }
                    posted
                    heading
                    body
                    author{
                        name
                        email
                      }
                    categories{
                        name
                        slug
                    }
                    comments{
                        name
                        body
                        date
                        replies{
                            name
                            
                            body
                            date
                            replies{
                                name
                                
                                body
                                date
                                replies{
                                    name
                                }
                            }
                        }
                    }
                    tags{
                        name
                        slug
                    }
                }
                allTags {
					slug
					name
				}
			}
		`,
	});
	console.log(allPosts);

	
	const  recentPosts  = await apolloClient.query({
		query: gql`
			# Write your query or mutation here
			{
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
						publicUrlTransformed(transformation: { width: "150", crop: "limit" })
					}
				}
			}
		`,
	});

	

	// Pass post data to the page via props
	return { props: { post: allPosts[0] ? allPosts[0] : null, tags: allTags, recentPosts: recentPosts.data.allPosts } };
}

export class index extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			recentPosts: [],
		};
	}

	async componentDidMount() {
		// //TODO: this is happening from client side, so this link has to be public

		// const { data } = await apolloClient.query({
		// 	query: gql`
		// 		# Write your query or mutation here
		// 		{
		// 			allPosts(
		// 				orderBy: "id_DESC"
		// 				first: 4
		// 				where: { status: published, private: false }
		// 			) {
		// 				title
		// 				posted
		// 				slug
		// 				heading
		// 				image {
		// 					publicUrlTransformed(transformation: { width: "150", crop: "limit" })
		// 				}
		// 			}
		// 		}
		// 	`,
		// });

		// // console.log(data);

		// this.setState({ recentPosts: data.allPosts });
	}

	//TODO: Solve this.
	recursiveComment(e: IComment, i: any) {
		console.log(e);
		if (!e) return;
		else {
			return (
				<div key={i}>
					<div className={"single-comment left-m m-l-" + 20 * i}>
						<div className="comment-img">
							<img
								src={require("../../images/client-image/2.jpg")}
								alt="client"
							/>
						</div>
						<div className="comment-content">
							<h4>{e.name}</h4>
							<p>{e.body}</p>
							<span>{new Date(e.date).toDateString()}</span>
							<a href="#">
								<i className="icofont-reply"></i>
							</a>
						</div>
					</div>
					{e.replies.map((e2, j) => {
						console.log("will recurse?" + i);
						return this.recursiveComment(e2, i);
					})}
				</div>
			);
		}
	}

	render() {
		const hostnameBlogs: String = hostnameResolver() + "public/blogs/";
		const hostnameAvatars: String = hostnameResolver() + "public/avatars/";

		let social: any = {
			shareTitle: "",
			url: "https://naqib.info",
		};
		// console.log(this.props);
		const { post, tags, recentPosts } = this.props;
		if (post) {
			const postedOn = new Date(post.posted).toDateString();
			const markup = { __html: post.body };
			// const { recentPosts } = this.state;

			social.shareTitle = post.title + " | Naqib.info";
			{social.url =hostnameResolver(true) + "blog-details/" + post.slug }
			
			return (
				<React.Fragment>
					<Navbar />
					<div className="page-title-area item-bg1">
						<div className="container">
							<h1>{post.title}</h1>
							<ul>
								<li>
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>
								<li>Blog Details</li>
								<li>{post.slug}</li>
							</ul>
						</div>
					</div>

					<section className="blog-details-area ptb-120">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-12">
									<div className="blog-details">
										<div className="article-img">
											<img
												src={post.image.publicUrlTransformed}
												alt="blog-details"
											/>
											<div className="date">
												{postedOn.substring(0, postedOn.length - 5)}
											</div>
										</div>

										<div className="article-content">
											<ul className="category">
												{post.tags && post.tags.length > 0
													? post.tags.map((e, i) => {
															return (
																<li key={i}>
																	<Link href={"../blogs/tags/" + e.slug}>
																		<a> {e.name}</a>
																	</Link>
																</li>
															);
													  })
													: " "}
											</ul>

											<h3>{post.heading}</h3>

											<div dangerouslySetInnerHTML={markup}></div>

											<div className="share-post">
												<ul>
													<li>
														<FacebookShareButton
															url={social.url}
															quote={social.shareTitle}
															hashtag={"#naqib.info"}
															className="Demo__some-network__share-button"
														>
															<FacebookIcon size={32} round />
														</FacebookShareButton>
													</li>
													{/* <li> Need APP id for this
														<FacebookMessengerShareButton
															url={"shareUrl"}
															
															className="Demo__some-network__share-button"
														>
															<FacebookMessengerIcon size={32} round />
														</FacebookMessengerShareButton>
													</li> */}
													<li>
														<LinkedinShareButton
															url={social.url}
															className="Demo__some-network__share-button"
														>
															<LinkedinIcon size={32} round />
														</LinkedinShareButton>
													</li>
													<li>
														<TwitterShareButton
															url={social.url}
															title={social.shareTitle}
															className="Demo__some-network__share-button"
														>
															<TwitterIcon size={32} round />
														</TwitterShareButton>
													</li>
													<li>
														<EmailShareButton
															url={social.url}
															subject={social.shareTitle}
															body={"Check out this cool blog post I found."}
															className="Demo__some-network__share-button"
														>
															<EmailIcon size={32} round />
														</EmailShareButton>
													</li>
													<li>
														<RedditShareButton
															url={social.url}
															title={social.shareTitle}
															windowWidth={660}
															windowHeight={460}
															className="Demo__some-network__share-button"
														>
															<RedditIcon size={32} round />
														</RedditShareButton>
													</li>
												</ul>
											</div>
										</div>
									</div>

									{/* <div disabled={true} className="post-controls-buttons">
										<div className="controls-left">
											<a href="#">
												<i className="icofont-double-left"></i>TODO: Prev Post
											</a>
										</div>

										<div className="controls-right">
											<a href="#">
												TODO:Next Post <i className="icofont-double-right"></i>
											</a>
										</div>
									</div> */}

									<div disabled={true} className="post-comments">
										<h3>Comments</h3>

										{post.comments && post.comments.length > 0
											? post.comments.map((e, i) => {
													return (
														<div>
															<div key={i} className="single-comment">
																<div className="comment-img">
																	{/* TODO: if user is logged in, set image. */}
																	<img
																		// src={hostnameAvatars+e.}
																		src={require("../../images/client-image/2.jpg")}
																		alt="client"
																	/>
																</div>
																<div className="comment-content">
																	<h4>{e.name}</h4>
																	<p>{e.body}</p>
																	<span>{new Date(e.date).toDateString()}</span>
																	<a href="#">
																		<i className="icofont-reply"></i>
																	</a>
																</div>
															</div>

															{e.replies.map((e2, i) => {
																return this.recursiveComment(e2, i + 1);
															})}
														</div>
													);
											  })
											: " "}
									</div>

									<div disabled={true} className="leave-a-reply">
										<h3>TODO: Leave a Reply</h3>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="Full Name"
													/>
												</div>
											</div>

											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<input
														type="email"
														className="form-control"
														placeholder="E-Mail"
													/>
												</div>
											</div>

											<div className="col-lg-12 col-md-12">
												<div className="form-group">
													<textarea
														name="comment"
														cols={30}
														rows={5}
														className="form-control"
														placeholder="Your Comment"
													/>
												</div>
											</div>

											<div className="col-lg-12 col-md-12">
												<button type="submit" className="btn btn-primary">
													Submit
												</button>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-12">
									<div className="sidebar">
										<div disabled={true} className="widget widget_search">
											<form>
												<input
													type="text"
													className="form-control"
													placeholder="Search here..."
												/>
												<button type="submit">
													<i className="icofont-ui-search"></i>
												</button>
											</form>
										</div>

										<div className="widget widget_recent_entries">
											<h3 className="widget-title">
												<span>Recent Posts</span>
											</h3>

											<ul>
												{recentPosts
													? recentPosts.map((item: IPost, ind) => {
															return (
																<li key={ind}>
																	<Link href={"/blog-details/" + item.slug}>
																		<a href="">
																			<img
																				src={
																					item.image.publicUrlTransformed
																				}
																				alt="image"
																			/>
																		</a>
																	</Link>

																	<h5>
																		<Link href={"/blog-details/" + item.slug}>
																			{item.heading}
																		</Link>
																	</h5>
																	<p className="date">
																		{new Date(item.posted).toDateString()}
																	</p>
																</li>
															);
													  })
													: null}
											</ul>
										</div>

										<div
											disabled={true}
											className="m-t-40 widget widget_categories"
										>
											<h3 className="widget-title">
												<span>Categories</span>
											</h3>

											<ul>
												{post.categories && post.categories.length > 0
													? post.categories.map((e, i) => {
															return (
																<li key={i}>
																	<Link href={"../blogs/categories/" + e.slug}>
																		<a> {e.name}</a>
																	</Link>
																</li>
															);
													  })
													: " "}
											</ul>
										</div>

										<div disabled={true} className="m-t-20 widget widget_tag_cloud">
											<h3 className="widget-title">
												<span>Tags</span>
											</h3>

											<div className="tagcloud">
												{tags && tags.length > 0
													? tags.map((e, i) => {
															return (
																<Link key={i} href={"../blogs/tags/" + e.slug}>
																	<a> {e.name}</a>
																</Link>
															);
													  })
													: " "}
											</div>
										</div>

										{/*TODO: maybe someday
                                     <div className="widget widget_archive">
										<h3 className="widget-title">
											<span>Archives</span>
										</h3>

										<ul>
											<li>
												<a href="#">December 2018</a>
											</li>
											<li>
												<a href="#">January 2019</a>
											</li>
											<li>
												<a href="#">February 2019</a>
											</li>
											<li>
												<a href="#">March 2019</a>
											</li>
										</ul>
									</div> */}
									</div>
								</div>
							</div>
						</div>
					</section>

					<Footer />
				</React.Fragment>
			);
		} else return null;
	}
}

export default index;
