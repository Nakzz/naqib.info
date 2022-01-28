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
				<img src={require("../../images/work-image/2.jpg")} alt="image" />

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
			else imageLink = "../../images/work-image/1.jpg";

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
						<img src={require("../../images/shapes/11.png")} alt="shape" />
					</div>
					<div className="shape12">
						<img src={require("../../images/shapes/12.png")} alt="shape" />
					</div>
				</section>
			);
		else return null;
	}
}

export default Works;
