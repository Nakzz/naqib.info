import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import FullOption from "../pie-chart/FullOption.tsx";
import BarSkill from "../home/barSkill";

const dataMock = [
	{ title: "Architecture", value: 20, color: "#6C7549" },
	{ title: "Backend", value: 20, color: "#C23B36" },
	{ title: "Frontend", value: 10, color: "#2D94C2" },
	{ title: "DevOPS", value: 15, color: "#6A2135" },
];

export class Skills extends Component {
	componentDidMount() {
		//TODO: get these from API
	}

	render() {
		return (
			<section className="skill-area m-t-50">
				<div className="skill-image">
					<img
						src={require("../../images/shapes/16.png")}
						className="back-image smaller"
						alt="shape"
					/>
				</div>
				<div className="container">
					<div className="row h-100 m-b-40">
						<div className="col-lg-5 col-md-12">
							<div className="our-skill">
								<div className="section-title">
									<span className="wow fadeInUp">My Skills</span>
									<h2 className="wow fadeInDown">
										I am a creative problem solver
									</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>

								<div className="col-lg-12 col-md-12">
									<BarSkill />
								</div>
							</div>
						</div>

						<div className="col-lg-7 col-md-12 align-items-end">
							<div className="m-t-20">
								<FullOption data={dataMock} />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
