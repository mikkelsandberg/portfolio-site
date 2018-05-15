import React from 'react';
import './MyWork.css';
import Filters from '../../Util/Filters';

class MyWork extends React.Component {
	render() {
		return (
			<div id="myWorkWrapper">
				<header>
					<h2>My work</h2>
				</header>
				<nav>
					<ul>
						{Filters.map(filter => {
							return (
								<li
									key={filter.id}
									onClick={this.props.handleFilterClick}
									className={`${filter.id === 0 ? 'active ' : ''}filterTab_${filter.color}Color`}
								>
									{filter.name}
								</li>
							);
						})}
					</ul>
				</nav>
				<section id="workItems">
					{this.props.workData.map(item => {
						return (
							<div
								key={item.id}
								id={`${item.workLabel.toLowerCase().replace(/\s/g, '-')}-${item.workTitle
									.toLowerCase()
									.replace(/\s/g, '-')}`}
								className="workItem"
							>
								<p className="workLabel">{item.workLabel}</p>
								<header>
									<h3>{item.workTitle}</h3>
								</header>
								<footer className="tags">
									<ul>
										{item.tags.map((tag, key = 0) => {
											return (
												<li key={key++}>
													<span className="tagPoint" />
													<span className="tagHole" />
													{tag}
												</li>
											);
										})}
									</ul>
								</footer>
							</div>
						);
					})}
				</section>
			</div>
		);
	}
}

export default MyWork;
