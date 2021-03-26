import React, { Component } from "react";
import axios from "axios";

interface IState {
	github: number;
}

export class Funfacts extends Component<any, IState> {
	constructor(props) {
		super(props);

		this.state = {
			github: 0,
		};
	}

	async componentDidMount() {
		let api_token = "e3dea8b4b7dbf908f92141f43726d8a6bc0f98c0";

		let { data } = await axios.get("https://api.github.com/user", {
			auth: {
				username: "nakzz",
				password: api_token,
			},
		});
		// console.log(data)

		this.setState({ github: data.public_repos });
	}

	render() {
		const { github } = this.state;

		return (
			<section className="funfacts-area ptb-120 bg-38d16a">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<a href="https://github.com/Nakzz/">
									<h3>
										<span className="odometer" data-count={github}>
											{github}
										</span>
									</h3>
									<p>Public Github Projects</p>
								</a>
							</div>
						</div>

						{/* <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="3325">3325</span></h3>
                                <p>Creative Projects</p>
                            </div>
                        </div> */}

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="funfact">
								<h3>
									<span className="odometer" data-count="54380">
										6438
									</span>
								</h3>
								<p>Lines of Code of this application</p>
							</div>
						</div>
						<div className=" container">
							<a href="https://github.com/Nakzz/">
								<div className="col-lg-12 col-md-12 col-sm-12 row justify-content-md-center m-t-40">
									<img src="https://github-readme-stats.vercel.app/api?username=nakzz&count_private=true&show_icons=true&hide_title=true&theme=vue" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Funfacts;
