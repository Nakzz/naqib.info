import React, { Component } from "react";

export class About extends Component {
	render() {
		return (
			<section className="cta-about">
				<div className="container p-0">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="cta-about-image">
								<img
									src={require("../../images/blog-home-image/About-NY.jpg")}
									alt="cta-image"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="cta-about-content ptb-120">
								<div className="section-title">
									<span className="wow fadeInUp">About me</span>
									<h2 className="wow fadeInDown">Ajmain Naqib</h2>
									<h5>
										<i>From the city that never sleeps</i>
									</h5>
								</div>
								<p>
									I am currently pursuing a <b>B.S. degree</b> in{" "}
									<b>Applied Computer Science</b> with a focus on{" "}
									<b>Entrepreneurship</b> and <b>Product Development</b> at
									University of Wisconsin- Madison. I am originally from
									Bangladesh, but now I call New York my home. I am currently
									situated in Madison, Wisconsin.{" "}
								</p>
								{/* TODO: get from CMS API */}
								<p>
									I started my college career with a Full-Tuition Leadership and
									Merit-based Scholarship from the POSSE Foundation with the
									hopes of solving real-world problems with technology. Along
									the way, I found my passion for Entrepreneurship and Product
									Development as I started working with local startup companies,
									and eventually founded my own company - Breezy Systems LLC.
								</p>
								<p>
									Since beginning my journey as a freelance designer nearly 10
									years ago, I've done remote work for agencies, consulted for
									startups, and collaborated with talented people to create
									digital products for both business and consumer use. I'm
									quietly confident, naturally curious, and perpetually working
									on improving my chops, one at a time.
								</p>
								<p>
									Although roles like Software Engineering, Product Development,
									and Management are currently fulfilling the scope of my career
									interests, I am a curious soul always ready to learn more. I
									am interested in exploring the automation technology, fin-tech
									and space exploration industry.
								</p>

								<p>
									Outside of school, work, and extracurricular, I am
									enthusiastic about keeping up with emerging technologies and
									financial market trends. This interest expanded my network to
									connect with different industry professionals. During my spare
									time, I enjoy boxing, hiking, and tinkering with fun IoT and
									machine learning projects.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
