import React, { Component } from "react";
import TypedReact from "../home/typedReact";
import Link from "next/link";
import Parallax from "parallax-js";
import { isBrowser, isMobile, isTablet, isDesktop } from "react-device-detect";

type IState = {
	width: Number;
	height: Number;
	rootClass: string;
};

export class Banner extends Component<any, IState> {
	scene: React.RefObject<any>;
	parallax: any;
	//TODO(2): componentdidmount() and get the strings in the TypedReact from API. Set defaults.

	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, rootClass: "digital-agency-banner" };
		this.scene = React.createRef();
	}

	componentDidMount() {
		try {
			this.parallax = new Parallax(this.scene, {
				relativeInput: true,
				limitY: 2 ,
			});
		} catch (error) {
			// console.log(error);
			console.log("Can't init parallax: Its a mobile");

		}
	}

	componentWillUnmount() {
		try {
			this.parallax.disable();
		} catch (error) {
			// console.log(error);
			console.log("Can't destroy parallax: Its a mobile");

		}
	}

	render() {
		// if(this.state.width <= 1024 && this.parallax)

		if (!isDesktop || isTablet) {
			if (this.state.rootClass != "digital-agency-banner_notBrowser")
				this.setState({ rootClass: "digital-agency-banner_notBrowser" });

			console.log("Its a mobile");
		} 



		return (
			<div className={"main-banner " + this.state.rootClass}>
				<div id="scroll-down">
					<span className="arrow-down"></span>
					<span id="scroll-title">Scroll down</span>
				</div>

				{isDesktop && !isTablet ? (
						<div
							className="parallax_banner"
							ref={(el: any) => (this.scene = el)}
						>
							<div data-depth=".1" className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="row h-100 align-items-center">
											<div className="col-lg-6 col-md-12">
												<div className="hero-content">
													<h4 className="wow fadeInUp m-l-20">Hey there! </h4>
													<h1 className="wow m-b-20">My name is AJ </h1>

													<TypedReact
														strings={[
															"I'm a <strong>Software Engineer...</strong>",
															"I'm an <strong>Entrepreneur...</strong>",
															"I'm a <strong>Photographer...</strong>",
															"I'm a <strong>Leader...</strong>",
															"I'm a POSSE scholar...",
															"I'm a FIRST alum...",
														]}
													/>

													<Link href="/about-me">
														<a className="m-t-30 btn btn-primary wow fadeInLeft">
															Learn more about me!
														</a>
													</Link>

													{/* TODO: add api link for CV */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="imgHolder" data-depth=".4">
								<img
									src={require("../../images/home/header_aj.png")}
									alt="adidas"
								/>
							</div>
						</div>
				) : (
					
						<div className="d-table">
							<div className="d-table-cell">
								<div className="container">
									<div className="row h-100 align-items-center">
										<div className="col-lg-6 col-md-12">
											<div className="hero-content">
												<h4 className="wow fadeInUp m-l-20">
													Hey there! {" "}
												</h4>
												<h1 className="wow m-b-20">My name is AJ </h1>

												<TypedReact
													strings={[
														"I'm a <strong>Software Engineer...</strong>",
														"I'm an <strong>Entrepreneur...</strong>",
														"I'm a <strong>Photographer...</strong>",
														"I'm a <strong>Leader...</strong>",
														"I'm a POSSE scholar...",
														"I'm a FIRST alum...",
													]}
												/>

												<Link href="/about-me">
													<a className="m-t-30 btn btn-primary wow fadeInLeft">
														Learn more about me!
													</a>
												</Link>

												{/* TODO: add api link for CV */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					
				)}

				<div className="banner-social-buttons">
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/ajmain/">
								<i className="icofont-linkedin"></i>

								<span>Linkedin</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/Nakzz/">
								<i className="icofont-github"></i>

								<span>Github</span>
							</a>
						</li>

						<li>
							<a href="mailto:ajmain@naqib.info">
								<i className="icofont-email"></i>

								<span>Email</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="shape1">
					<img src={require("../../images/shapes/1.png")} alt="shape1" />
				</div>

				<div className="shape2">
					<img src={require("../../images/shapes/2.png")} alt="shape2" />
				</div>
				<div data-depth="0.7" className="shape3">
					<img src={require("../../images/shapes/3.png")} alt="shape3" />
				</div>
				<div className="shape4">
					<img src={require("../../images/shapes/4.png")} alt="shape4" />
				</div>
				<div className="shape5">
					<img src={require("../../images/shapes/5.png")} alt="shape5" />
				</div>
				<div className="shape6">
					<img src={require("../../images/shapes/6.png")} alt="shape6" />
				</div>
				<div className="shape7">
					<img src={require("../../images/shapes/7.png")} alt="shape7" />
				</div>
				<div className="shape8">
					<img src={require("../../images/shapes/8.png")} alt="shape8" />
				</div>
				<div className="shape9 rotateme">
					<img src={require("../../images/shapes/9.png")} alt="shape9" />
				</div>
				<div className="shape10 rotateme">
					<img src={require("../../images/shapes/10.png")} alt="shape10" />
				</div>
				<div data-depth="0.82" className="circle-shape1">
					<img
						src={require("../../images/shapes/circle1.png")}
						alt="shape"
						className="w-150"
					/>
				</div>
				<div className="circle-shape2">
					<img
						src={require("../../images/shapes/circle2.png")}
						alt="shape"
						className="w-150"
					/>
				</div>
			</div>
		);
	}
}

export default Banner;
