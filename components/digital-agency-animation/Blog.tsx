import React, { Component } from "react";
import Link from "next/link";

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
}

interface Props {
	data: BlogPosts[];
}

export class Blog extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		console.log(this.props.data);
		let posts = this.props.data.map((item, ind) => {
			return (
				<div className="col-lg-4 col-md-6">
					<div className="single-blog-post">
						<div className="blog-image">
							<Link  href={"/blog-details/" + item.slug}>
								<a>
									<img
										src={require("../../images/blog-image/1.jpg")}
										alt="image"
									/>
								</a>
							</Link>

							<div className="post-tag">
                                <Link href={"/blog-details/" + item.slug}>
                                <a href={item.slug}>{item.title}</a>

							</Link>
							</div>
						</div>

						<div className="blog-post-content">
							<span className="date">
								{new Date(item.posted).toDateString()}
							</span>
							<h3>
								<Link href="/about-us">test link</Link>
								<Link href={"/blog-details/" + item.slug}>
									Connect with blog microservice
								</Link>
							</h3>
							<Link href={"/blog-details/" + item.slug}>
								<a className="read-more-btn">
									Read More <i className="icofont-double-right"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			);
		});

		return (
			<section className="blog-area ptb-120">
				<div className="container">
					<div className="section-title">
						<span className="wow fadeInUp">Latest Blog</span>
						<h2 className="wow fadeInDown">
							Read Inspirational Story every week
						</h2>
					</div>
					<div className="row">
						{this.props.data ? posts : ""}
						{/*
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a><img src={require("../../images/blog-image/1.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Technology</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">28 Feb, 2099</span>
                                    <h3><a href="#">TODO: Connect with blog microservice</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a><img src={require("../../images/blog-image/2.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Machine Learning</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">28 Feb, 2099</span>
                                    <h3><a href="#">TODO: Connect with blog microservice</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a><img src={require("../../images/blog-image/3.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Development</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">28 Feb, 2099</span>
                                    <h3><a href="#">TODO: Connect with blog microservice</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div> 
                        */}
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
