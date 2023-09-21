import Link from "next/link";
import {hostnameResolver} from "../utils/hostname"

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
// }--------------------------------------------------
import React, { Component } from 'react';
import Typed from 'typed.js';


export default class TypedReact extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        smartBackspace: true,
        shuffle: true,
        backDelay: 100,
        showCursor : true

      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="">
          <div className=" wow fadeInDown">
            <h3>
            <span style={{  }}
              ref={(el) => { this.el = el; }}
            />
            </h3>
              
          </div>

        </div>
      );
    }
  }
  --------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Interface } from "readline";

interface IProps {
	data: {
		name: string;
		path: string;
		heading: string;
		image: { filename: string };
	}[];
}

interface IState {
	photoIndex: number;
	isOpenImage: boolean;
}

function Project(props) {
	const { data, i, index, setState } = props;
	const item = data;

	const hostname: String = "https://naqib.info/public/projects/";

	console.log(index, index == 0 || index % 5 === 1);

	const link = "/projects/" + item.path;
	const bootClass =
		index == 0 || index % 5 === 0
			? "col-lg-6 col-md-12 col-sm-12 p-0"
			: "col-lg-3 col-md-6 col-sm-6 p-0";

	return (
		<div key={i} className={bootClass}>
			<div className="single-work m-0">
				<img src={require("./../images/work-image/2.jpg")} alt="image" />

				<div className="works-content">
					<h3>
						<Link href={link}>
							<a href="">{item.name}</a>
						</Link>
					</h3>
					<p>{item.heading}</p>
				</div>
				{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

				<Link href={link}>
					<a
						className="popup-btn"
						onClick={(e) => {
							e.preventDefault();
							setState({ isOpenImage: true, photoIndex: i });
						}}
					>
						<i className="icofont-expand"></i>
					</a>
				</Link>
			</div>
		</div>
	);
}

let images = [];

export class Works extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			photoIndex: 0,
			isOpenImage: false,
		};
	}

	render() {
		// console.log(this.props)
		const { photoIndex, isOpenImage } = this.state;
		let index = 0;
		let items = this.props.data.map((item, ind) => {
			const hostname: String = "https://naqib.info/public/projects/";

			//const { data, i, index, setState } = props;
			//const item = data;

			console.log(index, index == 0 || index % 5 === 1);

			const link = "/projects/" + item.path;
			let imageLink;
			if (item.image && item.image.filename)
				imageLink = hostname + item.image.filename;
			else imageLink = "./../images/work-image/1.jpg";

			const bootClass =
				index == 0 || index % 5 === 0
					? "col-lg-6 col-md-12 col-sm-12 p-0"
					: "col-lg-3 col-md-6 col-sm-6 p-0";

			index++;
			images.push(imageLink);

			return (
				<div key={ind} className={bootClass}>
					<div className="single-work m-0 m-b-50">
						<img src={imageLink} alt="image" />

						<div className="works-content">
							<h3>
								<Link href={link}>
									<a href="">{item.name}</a>
								</Link>
							</h3>
							<p>{item.heading}</p>
						</div>
						{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

						<Link href={link}>
							<a
								className="popup-btn"
								onClick={(e) => {
									e.preventDefault();
									this.setState({ isOpenImage: true, photoIndex: index });
								}}
							>
								<i className="icofont-expand"></i>
							</a>
						</Link>
					</div>
				</div>
			);

			//return

			// <Project data={item} index={index++} key={ind} setState={this.setState}/>;
		});

		console.log(images);

		if (this.props.data && this.props.data.length != 0)
			return (
				<section className="works-area ptb-120 pb-0 bg-08071c">
					<div className="container">
						<div className="section-title">
							<span className="wow fadeInUp">Highlighted Projects </span>
							<h2 className="wow fadeInDown">
								A few projects I have worked on
							</h2>
						</div>
					</div>

					<div className="row m-0 justify-content-md-center">
						{this.props.data ? items : ""}

						{isOpenImage && (
							<Lightbox
								mainSrc={images[photoIndex]}
								nextSrc={images[(photoIndex + 1) % images.length]}
								prevSrc={
									images[(photoIndex + images.length - 1) % images.length]
								}
								onCloseRequest={() => this.setState({ isOpenImage: false })}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex:
											(photoIndex + images.length - 1) % images.length,
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % images.length,
									})
								}
							/>
						)}
					</div>

					<div className="shape11">
						<img src={require("./../images/shapes/11.png")} alt="shape" />
					</div>
					<div className="shape12">
						<img src={require("./../images/shapes/12.png")} alt="shape" />
					</div>
				</section>
			);
		else return null;
	}
}

export default Works;
--------------------------------------------------
import React, { Component } from "react";

function Service(props) {
  const { data, i } = props;
  const item = data;

  return (
    <div key={i} className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="icon">
          <i className={item.icoFont}></i>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </div>
  );
}

export class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("props from services render: " + JSON.stringify(this.props));

    let items = this.props.data.map((item, ind) => {
      return <Service data={item} key={ind} />;
    });

    if (this.props.data && this.props.data.length != 0)
      return (
        <section className="welcome-services ptb-120 bg-38d16a">
          <div className="container">
            <div className="section-title">
              <span className="wow fadeInUp">I am passionate about</span>
              <h2 className="wow fadeInDown">Leading Innovations in...</h2>
            </div>

            <div className="row justify-content-md-center">
              {this.props.data ? items : ""}

              {/* <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="circle-top rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
          <div className="circle-bottom rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
        </section>
      );
    else return null;
  }
}

export default Services;
--------------------------------------------------
import Link from "next/link";
import {hostnameResolver} from "../utils/hostname"

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
// }--------------------------------------------------
import React, { Component } from 'react';
import Typed from 'typed.js';


export default class TypedReact extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        smartBackspace: true,
        shuffle: true,
        backDelay: 100,
        showCursor : true

      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="">
          <div className=" wow fadeInDown">
            <h3>
            <span style={{  }}
              ref={(el) => { this.el = el; }}
            />
            </h3>
              
          </div>

        </div>
      );
    }
  }
  --------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Interface } from "readline";

interface IProps {
	data: {
		name: string;
		path: string;
		heading: string;
		image: { filename: string };
	}[];
}

interface IState {
	photoIndex: number;
	isOpenImage: boolean;
}

function Project(props) {
	const { data, i, index, setState } = props;
	const item = data;

	const hostname: String = "https://naqib.info/public/projects/";

	console.log(index, index == 0 || index % 5 === 1);

	const link = "/projects/" + item.path;
	const bootClass =
		index == 0 || index % 5 === 0
			? "col-lg-6 col-md-12 col-sm-12 p-0"
			: "col-lg-3 col-md-6 col-sm-6 p-0";

	return (
		<div key={i} className={bootClass}>
			<div className="single-work m-0">
				<img src={require("./../images/work-image/2.jpg")} alt="image" />

				<div className="works-content">
					<h3>
						<Link href={link}>
							<a href="">{item.name}</a>
						</Link>
					</h3>
					<p>{item.heading}</p>
				</div>
				{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

				<Link href={link}>
					<a
						className="popup-btn"
						onClick={(e) => {
							e.preventDefault();
							setState({ isOpenImage: true, photoIndex: i });
						}}
					>
						<i className="icofont-expand"></i>
					</a>
				</Link>
			</div>
		</div>
	);
}

let images = [];

export class Works extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			photoIndex: 0,
			isOpenImage: false,
		};
	}

	render() {
		// console.log(this.props)
		const { photoIndex, isOpenImage } = this.state;
		let index = 0;
		let items = this.props.data.map((item, ind) => {
			const hostname: String = "https://naqib.info/public/projects/";

			//const { data, i, index, setState } = props;
			//const item = data;

			console.log(index, index == 0 || index % 5 === 1);

			const link = "/projects/" + item.path;
			let imageLink;
			if (item.image && item.image.filename)
				imageLink = hostname + item.image.filename;
			else imageLink = "./../images/work-image/1.jpg";

			const bootClass =
				index == 0 || index % 5 === 0
					? "col-lg-6 col-md-12 col-sm-12 p-0"
					: "col-lg-3 col-md-6 col-sm-6 p-0";

			index++;
			images.push(imageLink);

			return (
				<div key={ind} className={bootClass}>
					<div className="single-work m-0 m-b-50">
						<img src={imageLink} alt="image" />

						<div className="works-content">
							<h3>
								<Link href={link}>
									<a href="">{item.name}</a>
								</Link>
							</h3>
							<p>{item.heading}</p>
						</div>
						{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

						<Link href={link}>
							<a
								className="popup-btn"
								onClick={(e) => {
									e.preventDefault();
									this.setState({ isOpenImage: true, photoIndex: index });
								}}
							>
								<i className="icofont-expand"></i>
							</a>
						</Link>
					</div>
				</div>
			);

			//return

			// <Project data={item} index={index++} key={ind} setState={this.setState}/>;
		});

		console.log(images);

		if (this.props.data && this.props.data.length != 0)
			return (
				<section className="works-area ptb-120 pb-0 bg-08071c">
					<div className="container">
						<div className="section-title">
							<span className="wow fadeInUp">Highlighted Projects </span>
							<h2 className="wow fadeInDown">
								A few projects I have worked on
							</h2>
						</div>
					</div>

					<div className="row m-0 justify-content-md-center">
						{this.props.data ? items : ""}

						{isOpenImage && (
							<Lightbox
								mainSrc={images[photoIndex]}
								nextSrc={images[(photoIndex + 1) % images.length]}
								prevSrc={
									images[(photoIndex + images.length - 1) % images.length]
								}
								onCloseRequest={() => this.setState({ isOpenImage: false })}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex:
											(photoIndex + images.length - 1) % images.length,
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % images.length,
									})
								}
							/>
						)}
					</div>

					<div className="shape11">
						<img src={require("./../images/shapes/11.png")} alt="shape" />
					</div>
					<div className="shape12">
						<img src={require("./../images/shapes/12.png")} alt="shape" />
					</div>
				</section>
			);
		else return null;
	}
}

export default Works;
--------------------------------------------------
import React, { Component } from "react";

function Service(props) {
  const { data, i } = props;
  const item = data;

  return (
    <div key={i} className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="icon">
          <i className={item.icoFont}></i>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </div>
  );
}

export class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("props from services render: " + JSON.stringify(this.props));

    let items = this.props.data.map((item, ind) => {
      return <Service data={item} key={ind} />;
    });

    if (this.props.data && this.props.data.length != 0)
      return (
        <section className="welcome-services ptb-120 bg-38d16a">
          <div className="container">
            <div className="section-title">
              <span className="wow fadeInUp">I am passionate about</span>
              <h2 className="wow fadeInDown">Leading Innovations in...</h2>
            </div>

            <div className="row justify-content-md-center">
              {this.props.data ? items : ""}

              {/* <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="circle-top rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
          <div className="circle-bottom rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
        </section>
      );
    else return null;
  }
}

export default Services;
--------------------------------------------------
import Link from "next/link";
import {hostnameResolver} from "../utils/hostname"

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
// }--------------------------------------------------
import React, { Component } from 'react';
import Typed from 'typed.js';


export default class TypedReact extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        smartBackspace: true,
        shuffle: true,
        backDelay: 100,
        showCursor : true

      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="">
          <div className=" wow fadeInDown">
            <h3>
            <span style={{  }}
              ref={(el) => { this.el = el; }}
            />
            </h3>
              
          </div>

        </div>
      );
    }
  }
  --------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Interface } from "readline";

interface IProps {
	data: {
		name: string;
		path: string;
		heading: string;
		image: { filename: string };
	}[];
}

interface IState {
	photoIndex: number;
	isOpenImage: boolean;
}

function Project(props) {
	const { data, i, index, setState } = props;
	const item = data;

	const hostname: String = "https://naqib.info/public/projects/";

	console.log(index, index == 0 || index % 5 === 1);

	const link = "/projects/" + item.path;
	const bootClass =
		index == 0 || index % 5 === 0
			? "col-lg-6 col-md-12 col-sm-12 p-0"
			: "col-lg-3 col-md-6 col-sm-6 p-0";

	return (
		<div key={i} className={bootClass}>
			<div className="single-work m-0">
				<img src={require("./../images/work-image/2.jpg")} alt="image" />

				<div className="works-content">
					<h3>
						<Link href={link}>
							<a href="">{item.name}</a>
						</Link>
					</h3>
					<p>{item.heading}</p>
				</div>
				{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

				<Link href={link}>
					<a
						className="popup-btn"
						onClick={(e) => {
							e.preventDefault();
							setState({ isOpenImage: true, photoIndex: i });
						}}
					>
						<i className="icofont-expand"></i>
					</a>
				</Link>
			</div>
		</div>
	);
}

let images = [];

export class Works extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			photoIndex: 0,
			isOpenImage: false,
		};
	}

	render() {
		// console.log(this.props)
		const { photoIndex, isOpenImage } = this.state;
		let index = 0;
		let items = this.props.data.map((item, ind) => {
			const hostname: String = "https://naqib.info/public/projects/";

			//const { data, i, index, setState } = props;
			//const item = data;

			console.log(index, index == 0 || index % 5 === 1);

			const link = "/projects/" + item.path;
			let imageLink;
			if (item.image && item.image.filename)
				imageLink = hostname + item.image.filename;
			else imageLink = "./../images/work-image/1.jpg";

			const bootClass =
				index == 0 || index % 5 === 0
					? "col-lg-6 col-md-12 col-sm-12 p-0"
					: "col-lg-3 col-md-6 col-sm-6 p-0";

			index++;
			images.push(imageLink);

			return (
				<div key={ind} className={bootClass}>
					<div className="single-work m-0 m-b-50">
						<img src={imageLink} alt="image" />

						<div className="works-content">
							<h3>
								<Link href={link}>
									<a href="">{item.name}</a>
								</Link>
							</h3>
							<p>{item.heading}</p>
						</div>
						{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

						<Link href={link}>
							<a
								className="popup-btn"
								onClick={(e) => {
									e.preventDefault();
									this.setState({ isOpenImage: true, photoIndex: index });
								}}
							>
								<i className="icofont-expand"></i>
							</a>
						</Link>
					</div>
				</div>
			);

			//return

			// <Project data={item} index={index++} key={ind} setState={this.setState}/>;
		});

		console.log(images);

		if (this.props.data && this.props.data.length != 0)
			return (
				<section className="works-area ptb-120 pb-0 bg-08071c">
					<div className="container">
						<div className="section-title">
							<span className="wow fadeInUp">Highlighted Projects </span>
							<h2 className="wow fadeInDown">
								A few projects I have worked on
							</h2>
						</div>
					</div>

					<div className="row m-0 justify-content-md-center">
						{this.props.data ? items : ""}

						{isOpenImage && (
							<Lightbox
								mainSrc={images[photoIndex]}
								nextSrc={images[(photoIndex + 1) % images.length]}
								prevSrc={
									images[(photoIndex + images.length - 1) % images.length]
								}
								onCloseRequest={() => this.setState({ isOpenImage: false })}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex:
											(photoIndex + images.length - 1) % images.length,
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % images.length,
									})
								}
							/>
						)}
					</div>

					<div className="shape11">
						<img src={require("./../images/shapes/11.png")} alt="shape" />
					</div>
					<div className="shape12">
						<img src={require("./../images/shapes/12.png")} alt="shape" />
					</div>
				</section>
			);
		else return null;
	}
}

export default Works;
--------------------------------------------------
import React, { Component } from "react";

function Service(props) {
  const { data, i } = props;
  const item = data;

  return (
    <div key={i} className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="icon">
          <i className={item.icoFont}></i>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </div>
  );
}

export class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("props from services render: " + JSON.stringify(this.props));

    let items = this.props.data.map((item, ind) => {
      return <Service data={item} key={ind} />;
    });

    if (this.props.data && this.props.data.length != 0)
      return (
        <section className="welcome-services ptb-120 bg-38d16a">
          <div className="container">
            <div className="section-title">
              <span className="wow fadeInUp">I am passionate about</span>
              <h2 className="wow fadeInDown">Leading Innovations in...</h2>
            </div>

            <div className="row justify-content-md-center">
              {this.props.data ? items : ""}

              {/* <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="circle-top rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
          <div className="circle-bottom rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
        </section>
      );
    else return null;
  }
}

export default Services;
--------------------------------------------------
import Link from "next/link";
import {hostnameResolver} from "../utils/hostname"

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
// }--------------------------------------------------
import React, { Component } from 'react';
import Typed from 'typed.js';


export default class TypedReact extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        smartBackspace: true,
        shuffle: true,
        backDelay: 100,
        showCursor : true

      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="">
          <div className=" wow fadeInDown">
            <h3>
            <span style={{  }}
              ref={(el) => { this.el = el; }}
            />
            </h3>
              
          </div>

        </div>
      );
    }
  }
  --------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Interface } from "readline";

interface IProps {
	data: {
		name: string;
		path: string;
		heading: string;
		image: { filename: string };
	}[];
}

interface IState {
	photoIndex: number;
	isOpenImage: boolean;
}

function Project(props) {
	const { data, i, index, setState } = props;
	const item = data;

	const hostname: String = "https://naqib.info/public/projects/";

	console.log(index, index == 0 || index % 5 === 1);

	const link = "/projects/" + item.path;
	const bootClass =
		index == 0 || index % 5 === 0
			? "col-lg-6 col-md-12 col-sm-12 p-0"
			: "col-lg-3 col-md-6 col-sm-6 p-0";

	return (
		<div key={i} className={bootClass}>
			<div className="single-work m-0">
				<img src={require("./../images/work-image/2.jpg")} alt="image" />

				<div className="works-content">
					<h3>
						<Link href={link}>
							<a href="">{item.name}</a>
						</Link>
					</h3>
					<p>{item.heading}</p>
				</div>
				{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

				<Link href={link}>
					<a
						className="popup-btn"
						onClick={(e) => {
							e.preventDefault();
							setState({ isOpenImage: true, photoIndex: i });
						}}
					>
						<i className="icofont-expand"></i>
					</a>
				</Link>
			</div>
		</div>
	);
}

let images = [];

export class Works extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			photoIndex: 0,
			isOpenImage: false,
		};
	}

	render() {
		// console.log(this.props)
		const { photoIndex, isOpenImage } = this.state;
		let index = 0;
		let items = this.props.data.map((item, ind) => {
			const hostname: String = "https://naqib.info/public/projects/";

			//const { data, i, index, setState } = props;
			//const item = data;

			console.log(index, index == 0 || index % 5 === 1);

			const link = "/projects/" + item.path;
			let imageLink;
			if (item.image && item.image.filename)
				imageLink = hostname + item.image.filename;
			else imageLink = "./../images/work-image/1.jpg";

			const bootClass =
				index == 0 || index % 5 === 0
					? "col-lg-6 col-md-12 col-sm-12 p-0"
					: "col-lg-3 col-md-6 col-sm-6 p-0";

			index++;
			images.push(imageLink);

			return (
				<div key={ind} className={bootClass}>
					<div className="single-work m-0 m-b-50">
						<img src={imageLink} alt="image" />

						<div className="works-content">
							<h3>
								<Link href={link}>
									<a href="">{item.name}</a>
								</Link>
							</h3>
							<p>{item.heading}</p>
						</div>
						{/* 
				<Link href={link} passHref>
					<a className="link-btn">
						<i className="icofont-external-link"></i>
					</a>
				</Link> */}

						<Link href={link}>
							<a
								className="popup-btn"
								onClick={(e) => {
									e.preventDefault();
									this.setState({ isOpenImage: true, photoIndex: index });
								}}
							>
								<i className="icofont-expand"></i>
							</a>
						</Link>
					</div>
				</div>
			);

			//return

			// <Project data={item} index={index++} key={ind} setState={this.setState}/>;
		});

		console.log(images);

		if (this.props.data && this.props.data.length != 0)
			return (
				<section className="works-area ptb-120 pb-0 bg-08071c">
					<div className="container">
						<div className="section-title">
							<span className="wow fadeInUp">Highlighted Projects </span>
							<h2 className="wow fadeInDown">
								A few projects I have worked on
							</h2>
						</div>
					</div>

					<div className="row m-0 justify-content-md-center">
						{this.props.data ? items : ""}

						{isOpenImage && (
							<Lightbox
								mainSrc={images[photoIndex]}
								nextSrc={images[(photoIndex + 1) % images.length]}
								prevSrc={
									images[(photoIndex + images.length - 1) % images.length]
								}
								onCloseRequest={() => this.setState({ isOpenImage: false })}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex:
											(photoIndex + images.length - 1) % images.length,
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % images.length,
									})
								}
							/>
						)}
					</div>

					<div className="shape11">
						<img src={require("./../images/shapes/11.png")} alt="shape" />
					</div>
					<div className="shape12">
						<img src={require("./../images/shapes/12.png")} alt="shape" />
					</div>
				</section>
			);
		else return null;
	}
}

export default Works;
--------------------------------------------------
import React, { Component } from "react";

function Service(props) {
  const { data, i } = props;
  const item = data;

  return (
    <div key={i} className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="icon">
          <i className={item.icoFont}></i>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </div>
  );
}

export class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("props from services render: " + JSON.stringify(this.props));

    let items = this.props.data.map((item, ind) => {
      return <Service data={item} key={ind} />;
    });

    if (this.props.data && this.props.data.length != 0)
      return (
        <section className="welcome-services ptb-120 bg-38d16a">
          <div className="container">
            <div className="section-title">
              <span className="wow fadeInUp">I am passionate about</span>
              <h2 className="wow fadeInDown">Leading Innovations in...</h2>
            </div>

            <div className="row justify-content-md-center">
              {this.props.data ? items : ""}

              {/* <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="circle-top rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
          <div className="circle-bottom rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
        </section>
      );
    else return null;
  }
}

export default Services;
--------------------------------------------------
