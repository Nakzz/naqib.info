import React, { Component } from "react";
import Post from "./Post"

interface BlogPosts {
	title: string;
	posted: string;
	slug: string;
    heading:string;

}

interface Props {
	data: BlogPosts[];
}

export class Blog extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		// console.log(this.props.data);
		let posts = this.props.data.map((item, ind) => {
			return <Post data={item} key={ind}/>
		});

		return (
			<section className="blog-area ptb-120">
				<div className="container">
					<div className="section-title">
						<span className="wow fadeInUp">Latest Blog</span>
						<h2 className="wow fadeInDown">
							Read about what I've been doing recently!
						</h2>
					</div>
					<div className="row">
						{this.props.data ? posts : ""}
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
