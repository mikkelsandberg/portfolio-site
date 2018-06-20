import React, { Component } from "react";
import { Link } from "react-router-dom";

class WorkHeader extends Component {
	render() {
		const { workLabel, workTitle } = this.props;

		return (
			<header>
				<nav>
					<Link to="/my-work">Back to my work</Link>
				</nav>
				<h2>{workLabel}</h2>
				<h1>{workTitle}</h1>
			</header>
		);
	}
}

export default WorkHeader;
