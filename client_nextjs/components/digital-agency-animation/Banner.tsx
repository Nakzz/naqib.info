import React, { Component } from "react";
import TypedReact from "../home/typedReact";
import Link from "next/link";
import Parallax from "parallax-js";

export class Banner extends Component {
	//TODO(2): componentdidmount() and get the strings in the TypedReact from API. Set defaults.

	render() {
		var scene = document.getElementById("scene");
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
		});

		return (
			<div id="scene">
				<div className="main-banner digital-agency-banner">
					<div id="scroll-down">
						<span className="arrow-down"></span>
						<span id="scroll-title">Scroll down</span>
					</div>

					<div className="d-table">
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
													"I'm an <strong>Entreprenuer...</strong>",
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
						<img src={require("../../images/shapes/1.png")} alt="shape" />
					</div>

					<div className="shape2">
						<img src={require("../../images/shapes/2.png")} alt="shape" />
					</div>
					<div className="shape3">
						<img src={require("../../images/shapes/3.png")} alt="shape" />
					</div>
					<div className="shape4">
						<img src={require("../../images/shapes/4.png")} alt="shape" />
					</div>
					<div className="shape5">
						<img src={require("../../images/shapes/5.png")} alt="shape" />
					</div>
					<div className="shape6">
						<img src={require("../../images/shapes/6.png")} alt="shape" />
					</div>
					<div className="shape7">
						<img src={require("../../images/shapes/7.png")} alt="shape" />
					</div>
					<div className="shape8">
						<img src={require("../../images/shapes/8.png")} alt="shape" />
					</div>
					<div className="shape9 rotateme">
						<img src={require("../../images/shapes/9.png")} alt="shape" />
					</div>
					<div className="shape10 rotateme">
						<img src={require("../../images/shapes/10.png")} alt="shape" />
					</div>
					<div className="circle-shape1">
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
			</div>
		);
	}
}

export default Banner;
