import React, { Component } from 'react';
import Routes from '../../Util/Routes';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
	render() {
		return (
			<section className="notFound__wrapper">
				<h2>Well this is embarrassing...</h2>
				<p>
					The page you&rsquo;re looking for doesn&rsquo;t exist. Or something.
				</p>
				<p>Maybe you were looking for one of these pages:</p>
				<ul className="notFound__links">
					{Routes.map((route, key = 0) => {
						return (
							<li key={key++} className="notFound__links__item">
								<NavLink
									exact
									to={route.path}
									className="notFound__links__item__link"
								>
									{route.name}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</section>
		);
	}
}

export default NotFound;
