import React, { Component } from "react";

class WorkHeader extends Component {
	goBack = e => {
		e.preventDefault();

		window.history.back();
	};

	render() {
		const { workLabel, workTitle } = this.props;

		return (
			<header>
				<nav>
					<a href="/" onClick={this.goBack}>
						Back to home
					</a>
				</nav>
				<h2>{workLabel}</h2>
				<h1>{workTitle}</h1>
			</header>
		);
	}
}

export default WorkHeader;
