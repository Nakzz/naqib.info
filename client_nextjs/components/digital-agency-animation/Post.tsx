import Link from "next/link";
import {hostnameResolver} from "../../utils/hostname"

export default function Post(props) {
	const { data, i } = props;

	const hostname: String = hostnameResolver() + "public/blogs/";
	
	const item = data;
	// console.log(item);
	return (
		<>
			<div key={i} className="col-lg-4 col-md-6">
				<div className="single-blog-post">
					<div className="blog-image">
						<Link href={"/blog-details/" + item.slug}>
							<a>
								<img
									src={item.image ? item.image.publicUrlTransformed : ""}
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
						<span className="date">{new Date(item.posted).toDateString()}</span>
						<h3>
							<Link href={"/blog-details/" + item.slug}>
							
							<p className="">
							{item.heading} 
							</p>
							
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
		</>
	);
}
