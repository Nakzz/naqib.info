import Link from "next/link";
import {hostnameResolver} from "../../utils/hostname"

export default function Post(props) {
	const { data, i } = props;

	const hostname: String = hostnameResolver() + "public/blogs/";
	
	const item = data;
	console.log(item);
	return (
		<>
			<div key={i} className="col-lg-4 col-md-6">
				<div className="single-blog-post">
					<div className="blog-image">
						<Link href={item.link}>
							<a>
								<img
									src={item.thumbnail ? item.thumbnail : ""}
									alt="image"
								/>
							</a>
						</Link>

						<div className="post-tag">
							<Link href={item.link}>
								<a href={item.link}>{get_categories(item.categories)}</a>
								
							</Link>
						</div>
					</div>

					<div className="blog-post-content">
						<span className="date">{new Date(item.pubDate).toDateString()}</span>
						<h3>
							<Link href={item.link}>
							
							<p className="">
							{item.title} 
							</p>
							
							</Link>
						</h3>
						<div dangerouslySetInnerHTML={{__html: shorten_description(item.description)}}></div>

						<Link href={item.link}>
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


function shorten_description(description) {
	if (!description)
		return ""
	// remove everything inside figure tags from description
	 description = description.replace(/<figure[^>]*>.*?<\/figure>/g, "");

	// keep up until third paragraph tag
	description = description.substring(0, description.indexOf("</p>", description.indexOf("</p>", description.indexOf("</p>") + 1) + 1));

	// console.log(description);
	return description
}


// function to return string of item.categoies separated by comma from a list of categories or return "Test" if no categories
function get_categories(categories) {
	if(!categories)
		return "Test";

	if (categories.length > 0) {
		return categories.join(", ");
	} else {
		return "Test";
	}
}

// function get_categories(categories) {
// 	let categories_string = "";	
// 	for (let i = 0; i < categories.length; i++) {
// 		if (i == categories.length - 1) {
// 			categories_string += categories[i];
// 		} else {
// 			categories_string += categories[i] + ", ";
// 		}
// 	}
// 	return categories_string;
// }