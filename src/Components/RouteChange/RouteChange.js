import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RouteChange extends Component {
	componentDidMount() {
		this.scrollToTop();
	}

	componentDidUpdate(prevProps) {
		let { pathname } = this.props.location;

		return prevProps.location.pathname === pathname ? null : this.scrollToTop();
	}

	scrollToTop = () => {
		return window.scroll({ top: 0 });
	};

	render() {
		return null;
	}
}

export default withRouter(RouteChange);
