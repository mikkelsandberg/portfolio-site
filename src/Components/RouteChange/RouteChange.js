import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RouteChange extends Component {
	componentDidMount() {
		this.routeChanged();
	}

	componentDidUpdate(prevProps) {
		let { pathname } = this.props.location;

		return prevProps.location.pathname === pathname
			? null
			: this.routeChanged();
	}

	routeChanged = () => {
		return this.props.action();
	};

	render() {
		return null;
	}
}

export default withRouter(RouteChange);
