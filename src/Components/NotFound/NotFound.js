import React from 'react';
import Routes from '../../Util/Routes';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
	return (
		<section className="notFound__wrapper">
			<h2 className="notFound__subheading">
				Well this is embarrassing&hellip;
			</h2>
			<p className="notFound__bodyText">
				The page you&rsquo;re looking for doesn&rsquo;t exist. Or something.
			</p>
			<p className="notFound__bodyText">
				Maybe you were looking for one of these pages:
			</p>
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
};

export default NotFound;
