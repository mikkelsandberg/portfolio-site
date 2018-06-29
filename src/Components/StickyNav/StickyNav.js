import React, { Component } from "react";
import "./StickyNav.css";

class StickyNav extends Component {
	constructor() {
		super();

		this.state = {
			isSticky: false
		};
	}

	componentDidMount({ checkScrollTop } = this) {
		checkScrollTop();

		window.addEventListener("scroll", () => checkScrollTop());
	}

	checkScrollTop = ({ scrollTarget } = this.props) => {
		const scrollTargetElem = document.querySelector(scrollTarget) || "";

		if (scrollTargetElem !== "") {
			if (window.scrollY >= scrollTargetElem.offsetHeight) {
				this.setState({ isSticky: true });
			} else {
				this.setState({ isSticky: false });
			}
		}
	};

	render({ checkScrollTop } = this) {
		const { children } = this.props;
		const childrenWithProps = React.Children.map(children, child => {
			return React.cloneElement(child, { isSticky: this.state.isSticky });
		});

		return childrenWithProps;
	}
}

export default StickyNav;
