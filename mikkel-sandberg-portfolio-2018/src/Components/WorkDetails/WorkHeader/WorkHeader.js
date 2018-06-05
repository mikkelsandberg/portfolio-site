import React, { Component } from 'react';

class WorkHeader extends Component {
	render() {
		const { goBack, workLabel, workTitle } = this.props;

		return (
			<header>
				<nav>
					<a href="/" onClick={goBack}>
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
