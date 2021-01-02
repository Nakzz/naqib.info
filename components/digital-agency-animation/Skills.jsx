import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import FullOption from "../pie-chart/FullOption.tsx";
import BarSkill from "../home/barSkill";
import { setSubSkills } from "../../store/actions/skillAction";
import { connect } from "react-redux";

const dataMock = [
	{ title: "Architecture", value: 20, color: "#6C7549" },
	{ title: "Backend", value: 20, color: "#C23B36" },
	{ title: "Frontend", value: 10, color: "#2D94C2" },
	{ title: "DevOPS", value: 15, color: "#6A2135" },
];

export class Skills extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		//TODO: get these from API
	}

	dispatchSubskills(allSkills) {
		let subSkill = [];

		allSkills.forEach((e, index) => {
			// console.log(e)
			if (e)
				e.subSkills.forEach((elem) => {
					subSkill.push({
						id: index,
						title: elem.name,
						val: elem.level,
					});
				});
		});

		console.log(subSkill);
		this.props.setSubSkills(subSkill);
	}

	render() {
		// console.log(this.props)
		this.dispatchSubskills(this.props.data);

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
								{/* <FullOption data={dataMock} /> */}
								<FullOption data={this.props.data} />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

// export default Skills;


export default connect(null,{ setSubSkills })(Skills);
