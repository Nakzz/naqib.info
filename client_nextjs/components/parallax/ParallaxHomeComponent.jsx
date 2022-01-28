import React, { Component } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import TypedReact from "../home/typedReact";
import Link from "next/link";

export default class ParallaxHomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.scene = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {relativeInput: true});
	}
	componentWillUnmount() {
		this.parallax.disable();
	}
	render() {
		return (
			<div className="parallax_banner" ref={(el) => (this.scene = el)}>


				
			</div>
		);
	}
}
