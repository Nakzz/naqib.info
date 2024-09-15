import React, { Component } from "react";
import Post from "./Post";

interface BlogPosts {
  title: string;
  posted: string;
  slug: string;
  heading: string;
}

interface Props {
  data: BlogPosts[];
}

export class BlogBanner extends Component<Props> {
  renderPosts() {
    return this.props.data.map((item, ind) => <Post data={item} key={ind} />);
  }

  render() {
    const { data } = this.props;

    return (
      <section className="blog-area ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Latest Blog</span>
            <h2 className="wow fadeInDown">
              Read about what I've been doing recently!
            </h2>
          </div>
          <div className="row">{data ? this.renderPosts() : ""}</div>
        </div>
      </section>
    );
  }
}

export default BlogBanner;
