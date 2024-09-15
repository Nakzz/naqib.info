import Link from "next/link";
import { hostnameResolver } from "../../utils/hostname";
import xss from "xss";

function getCategories(categories) {
  if (!categories) return "Test";
  return categories.join(", ");
}

function shortenDescription(description) {
  if (!description) return "";
  description = description.replace(/<figure[^>]*>.*?<\/figure>/g, "");
  return description.substring(
    0,
    description.indexOf(
      "</p>",
      description.indexOf("</p>", description.indexOf("</p>") + 1) + 1
    )
  );
}

const BlogImage = ({ thumbnail }) => {
  const sanitizedThumbnail = xss(thumbnail);
  return <img src={sanitizedThumbnail ? sanitizedThumbnail : ""} alt="image" />;
};

export default function Post(props) {
  const { data, i } = props;
  const { link, thumbnail, pubDate, title, description, categories } = data;
  const hostname = hostnameResolver() + "public/blogs/";

  return (
    <>
      <div key={i} className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="blog-image">
            <Link href={link}>
              <a>
                <BlogImage thumbnail={thumbnail} />
              </a>
            </Link>
            <div className="post-tag">
              <Link href={link}>
                <a href={xss(link)}>{getCategories(categories)}</a>
              </Link>
            </div>
          </div>
          <div className="blog-post-content">
            <span className="date">{new Date(pubDate).toDateString()}</span>
            <h3>
              <Link href={link}>
                <p className="">{title}</p>
              </Link>
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: xss(shortenDescription(description)),
              }}
            ></div>
            <Link href={link}>
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
