import React, { Component } from "react";
import { connect } from "react-redux";
import {
	CSSTransition,
	TransitionGroup,
	Transition,
} from "react-transition-group";

import FullOption from "../pie-chart/FullOption";
import BarSkill from "../home/barSkill";
import { setSubSkills } from "../../store/actions/skillAction";

const dataMock = [
	{ title: "Architecture", value: 20, color: "#6C7549" },
	{ title: "Backend", value: 20, color: "#C23B36" },
	{ title: "Frontend", value: 10, color: "#2D94C2" },
	{ title: "DevOPS", value: 15, color: "#6A2135" },
];

interface IProps {
	data: ISkills[];
	setSubSkills: any;
	skillPicked: number;
}

interface ISkills {
	title: string;
	value: string;
	color: string;
	heading: string;
	body: string;
	subSkills: ISubSkills[];
}

interface ISubSkills {
	name: string;
	level: string;
}

export class Skills extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	dispatchSubSkills(allSkills) {
		let subSkill = [];

		allSkills.forEach((e: ISkills, index: number) => {
			// console.log(e)
			if (e)
				e.subSkills.forEach((elem: ISubSkills) => {
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
		const { data, skillPicked } = this.props;

		this.dispatchSubSkills(this.props.data);

		console.log(data);
		if (data) {

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
								<TransitionGroup className="section-title">
									<span className="wow fadeInUp">My Skills</span>

									<CSSTransition
										key={skillPicked}
										timeout={500}
										classNames="item"
									>
										<div>
											<h2 className="wow fadeInDown">
												{data.length > 0 && data[skillPicked]
													? data[skillPicked].heading
													: ""}
											</h2>
											<p>
												{data.length > 0 && data[skillPicked] ? (
													<div
														dangerouslySetInnerHTML={{
															__html: data[skillPicked].body,
														}}
													></div>
												) : (
													""
												)}
											</p>
										</div>
									</CSSTransition>
								</TransitionGroup>

								<div className="col-lg-12 col-md-12">
									<BarSkill />
								</div>
							</div>
						</div>

						<div className="col-lg-7 col-md-12 align-items-end">
							<div className="m-t-20">
								{/* <FullOption data={dataMock} /> */}
								<FullOption data={data} />
							</div>
						</div>
					</div>
				</div>
			</section>
		);}else
		return null
	}
}

const mapStateToProps = (state) => ({
	skillPicked: state.skillReducer.skillPicked,
});

export default connect(mapStateToProps, { setSubSkills })(Skills);
