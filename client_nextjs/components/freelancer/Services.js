import React, { Component } from "react";

export class Services extends Component {
	render() {
		return (
			<section className="services-area ptb-120 bg-f8f9fe">
				<div className="container">
					<div className="section-title">
						<h2>
							<span>Technical Skills</span>
						</h2>
						{/* <h2>Interactive services offered Me</h2> */}
						<p>
							I've worked with a wide variety of programming languages.
							Currently I use <b>Javascript </b> for web application. Whenever I
							need the most performance possible I obviously go with <b>C++</b>{" "}
							or <b>Java</b>. If I am working on a prototype or hobby project, I
							tend to lean towards <b>Python.</b>
						</p>
					</div>

					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/1.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Web Development</a>
									</h3>
									<p>
										I put emphasis on responsive presentation layer, as it is very
										important for User Experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/4.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="/blog/tags/system-design">System Design</a>
									</h3>
									<p>
										I build scalable and containerized micro-services while
										implementing CI/CD for better development experience.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">API Development</a>
									</h3>
									<p>
										Developing applications with an API-first approach allows
										for scalable and reusable applications
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/2.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Data Analysis</a>
									</h3>
									<p>
										Including but not limited to Algorithms, Modeling,
										Statistics and Visualization
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/6.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Project Management</a>
									</h3>
									<p>I am quite flexible, however generally follow Scrum and Agile methodology to manage my workflow </p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/5.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Engineering Drawing</a>
									</h3>
									<p>
										I utilize UML Diagrams, Flow-charts, 3D Designs,
										Architectural Sketches to better explain my work
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="services-box">
								{/* <img src={require("../../images/blog-image/5.jpg")} alt="image" /> */}

								<div className="services-content">
									<h3>
										<a href="#">Marketing</a>
									</h3>
									<p>
										Starting from content creations, to targeted advertising.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Services;
