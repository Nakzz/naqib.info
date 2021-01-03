import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import { initializeApollo } from "../../utils/apolloClient";

interface Post {
	title: string;
	slug: string;
	posted: string;
	body: string;
	heading: string;
	image: {
        filename?: string
    }
	author: {
		name: string;
		email: string;
	};
	categories: {
		name: string;
	};
	comments: {
		name: string;
    };
    tags:[{
        name: string;
        slug: string;
    }]
}

interface Props {
	post: Post;
}

const apolloClient = initializeApollo();

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
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
	const {
		data: { allPosts },
	} = await apolloClient.query({
		query: gql`
			# Write your query or mutation here
			{
				allPosts(where:{slug:"${params.slug}"}) {
                    title
                    slug
                    image{
                        filename
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
			}
		`,
	});
	// console.log(allPosts);

	// Pass post data to the page via props
	return { props: { post: allPosts[0] } };
}

export class index extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const hostname: String = "https://naqib.info/public/blogs/";

		console.log(this.props);
		const { post } = this.props;
		const postedOn = new Date(post.posted).toDateString();
		const markup = { __html: post.body };

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
											src={hostname + post.image.filename}
											alt="blog-details"
										/>
										<div className="date">
											{postedOn.substring(0, postedOn.length - 5)}
										</div>
									</div>

									<div className="article-content">
										<ul className="category">
                                            {post.tags && post.tags.length>0? (
                                                 post.tags.map((e,i)=>{
                                                     return (
                                                        <li key={i}>
                                                        <Link href={"../blogs/tags/"+e.slug}>
                                                     <a > {e.name}</a>
                                                        </Link>
                                                    </li>
                                                     )
                                                 })   
                                            ) : (" ")}
											
										</ul>

										<h3>{post.heading}</h3>

										<div dangerouslySetInnerHTML={markup}></div>

										<div disabled={true} className="share-post">
											<ul>
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
														<i className="icofont-linkedin"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i className="icofont-instagram"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i className="icofont-vimeo"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div disabled={true} className="post-controls-buttons">
									<div className="controls-left">
										<a href="#">
											<i className="icofont-double-left"></i>TODO: Prev Post
										</a>
									</div>

									<div disabled={true} className="controls-right">
										<a href="#">
											TODO:Next Post <i className="icofont-double-right"></i>
										</a>
									</div>
								</div>

								<div disabled={true} className="post-comments">
									<h3>Comments</h3>
									<div className="single-comment">
										<div className="comment-img">
											<img
												src={require("../../images/client-image/1.jpg")}
												alt="client"
											/>
										</div>
										<div className="comment-content">
											<h4>John Smith</h4>
											<p>
												Lorem ipsum, dolor sit amet consectetur adipisicing
												elit. Et minus, saepe porro a voluptatem, quidem aut
												libero consequatur unde molestiae quae impedit
												accusantium dolor est corporis! Dolores ut dignissimos
												doloribus?
											</p>
											<span>Jan 19, 2018 - 9:10AM</span>
											<a href="#">
												<i className="icofont-reply"></i>
											</a>
										</div>
									</div>

									<div className="single-comment left-m">
										<div className="comment-img">
											<img
												src={require("../../images/client-image/2.jpg")}
												alt="client"
											/>
										</div>
										<div className="comment-content">
											<h4>Doe John</h4>
											<p>
												Lorem ipsum, dolor sit amet consectetur adipisicing
												elit. Et minus, saepe porro a voluptatem, quidem aut
												libero consequatur unde molestiae quae impedit
												accusantium dolor est corporis! Dolores ut dignissimos
												doloribus?
											</p>
											<span>Jan 19, 2018 - 9:10AM</span>
											<a href="#">
												<i className="icofont-reply"></i>
											</a>
										</div>
									</div>

									<div className="single-comment">
										<div className="comment-img">
											<img
												src={require("../../images/client-image/3.jpg")}
												alt="client"
											/>
										</div>
										<div className="comment-content">
											<h4>Steven Doe</h4>
											<p>
												Lorem ipsum, dolor sit amet consectetur adipisicing
												elit. Et minus, saepe porro a voluptatem, quidem aut
												libero consequatur unde molestiae quae impedit
												accusantium dolor est corporis! Dolores ut dignissimos
												doloribus?
											</p>
											<span>Jan 19, 2018 - 9:10AM</span>
											<a href="#">
												<i className="icofont-reply"></i>
											</a>
										</div>
										<div className="single-comment">
											<div className="comment-img">
												<img
													src={require("../../images/client-image/1.jpg")}
													alt="client"
												/>
											</div>
											<div className="comment-content">
												<h4>John Cina</h4>
												<p>
													Lorem ipsum, dolor sit amet consectetur adipisicing
													elit. Et minus, saepe porro a voluptatem, quidem aut
													libero consequatur unde molestiae quae impedit
													accusantium dolor est corporis! Dolores ut dignissimos
													doloribus?
												</p>
												<span>Jan 19, 2018 - 9:10AM</span>
												<a href="#">
													<i className="icofont-reply"></i>
												</a>
											</div>
										</div>
									</div>
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
													cols="30"
													rows="5"
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

							<div disabled={true} className="col-lg-4 col-md-12">
								<div className="sidebar">
									<div className="widget widget_search">
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

									<div disabled={true} className="widget widget_recent_entries">
										<h3 className="widget-title">
											<span>Recent Posts</span>
										</h3>

										<ul>
											<li>
												<a href="#">
													<img
														src={require("../../images/blog-image/1.jpg")}
														alt="image"
													/>
												</a>

												<h5>
													<a href="#">The Most Popular New top Business Apps</a>
												</h5>
												<p className="date">21 March, 2019</p>
											</li>

											<li>
												<a href="#">
													<img
														src={require("../../images/blog-image/2.jpg")}
														alt="image"
													/>
												</a>

												<h5>
													<a href="#">3 WooCommerce Plugins to Boost Sales</a>
												</h5>
												<p className="date">20 March, 2019</p>
											</li>

											<li>
												<a href="#">
													<img
														src={require("../../images/blog-image/3.jpg")}
														alt="image"
													/>
												</a>

												<h5>
													<a href="#">
														The Best Marketing top Management Tools
													</a>
												</h5>
												<p className="date">27 March, 2019</p>
											</li>

											<li>
												<a href="#">
													<img
														src={require("../../images/blog-image/4.jpg")}
														alt="image"
													/>
												</a>

												<h5>
													<a href="#">How to Build a Business Dashboard</a>
												</h5>
												<p className="date">27 January, 2019</p>
											</li>
										</ul>
									</div>

									<div disabled={true} className="widget widget_categories">
										<h3 className="widget-title">
											<span>Categories</span>
										</h3>

										<ul>
											<li>
												<a href="#">AJAX</a>
											</li>
											<li>
												<a href="#">Apache</a>
											</li>
											<li>
												<a href="#">CSS</a>
											</li>
											<li>
												<a href="#">PHP</a>
											</li>
											<li>
												<a href="#">Django</a>
											</li>
											<li>
												<a href="#">Error</a>
											</li>
											<li>
												<a href="#">IIS</a>
											</li>
											<li>
												<a href="#">JavaScript</a>
											</li>
										</ul>
									</div>

									<div className="widget widget_tag_cloud">
										<h3 className="widget-title">
											<span>Tags</span>
										</h3>

										<div className="tagcloud">
											<a href="#">Error</a>
											<a href="#">Cake Bake</a>
											<a href="#">Dromzone</a>
											<a href="#">File</a>
											<a href="#">Yii</a>
											<a href="#">Yii2</a>
											<a href="#">UUID</a>
											<a href="#">Setup</a>
											<a href="#">Error</a>
											<a href="#">Cake Bake</a>
											<a href="#">Dromzone</a>
											<a href="#">File</a>
											<a href="#">Yii</a>
											<a href="#">Yii2</a>
											<a href="#">UUID</a>
											<a href="#">Setup</a>
										</div>
									</div>

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
									</div>
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
