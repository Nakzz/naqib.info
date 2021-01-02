import Link from "next/link";

export default function Post(props) {
	const { data, i } = props;
	console.log(data);

	const item = data;
	return (
		<div key={i} className="col-lg-4 col-md-6">
			<div className="single-blog-post">
				<div className="blog-image">
					<Link href={"/blog-details/" + item.slug}>
						<a>
							<img src={require("../../images/blog-image/1.jpg")} alt="image" />
						</a>
					</Link>

					<div className="post-tag">
						<Link href={"/blog-details/" + item.slug}>
							<a href={item.slug}>{item.title}</a>
						</Link>
					</div>
				</div>

				<div className="blog-post-content">
					<span className="date">{new Date(item.posted).toDateString()}</span>
					<h3>
						<Link href={"/blog-details/" + item.slug}>{item.heading}</Link>
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
}
