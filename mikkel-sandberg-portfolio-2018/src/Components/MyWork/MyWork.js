import React from 'react';
import './MyWork.css';

class MyWork extends React.Component {
	handleFilterClick(e) {
		const filters = document.querySelectorAll('#myWorkWrapper nav ul li');

		filters.forEach(item => {
			item.classList = '';
		});

		e.target.classList = 'active';
	}

	render() {
		return (
			<div id="myWorkWrapper">
				<header>
					<h2>My work</h2>
				</header>
				<nav>
					<ul>
						<li onClick={this.handleFilterClick} className="active">Show all</li>
						<li onClick={this.handleFilterClick}>Web development</li>
						<li onClick={this.handleFilterClick}>Design</li>
						<li onClick={this.handleFilterClick}>Podcast Production</li>
						<li onClick={this.handleFilterClick}>Video production</li>
						<li onClick={this.handleFilterClick}>Animation</li>
					</ul>
				</nav>
				<section id="workItems">
					<div id="coreLogicSiteMigration" className="workItem">
						<header>
							<h4>CoreLogic</h4>
							<h3>Site migration</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="expertsExchangeProfileRedesign" className="workItem">
						<header>
							<h4>Experts Exchange</h4>
							<h3>Profile page redesign</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Design</li>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="expertsExchangeLiveRedesign" className="workItem">
						<header>
							<h4>Experts Exchange</h4>
							<h3>Live product redesign</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Design</li>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="expertsExchangeLiveLanding" className="workItem">
						<header>
							<h4>Experts Exchange</h4>
							<h3>Live landing page</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="codecademyJammming" className="workItem">
						<header>
							<h4>Codecademy Intensive</h4>
							<h3>Jammming</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Design</li>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="codecademyRavenous" className="workItem">
						<header>
							<h4>Codecademy Intensive</h4>
							<h3>Ravenous</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="apcWebsite" className="workItem">
						<header>
							<h4>APC Entertainment</h4>
							<h3>Website Design and Development</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Design</li>
								<li>Web development</li>
							</ul>
						</footer>
					</div>
					<div id="friendQuest" className="workItem">
						<header>
							<h4>Friend Quest</h4>
							<h3>Podcast Production</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Podcast Production</li>
								<li>Video Production</li>
							</ul>
						</footer>
					</div>
					<div id="rudeAwakening" className="workItem">
						<header>
							<h4>Class project</h4>
							<h3>A Rude Awakening</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Animation</li>
								<li>Video Production</li>
							</ul>
						</footer>
					</div>
					<div id="mississippiVideo" className="workItem">
						<header>
							<h4>Class project</h4>
							<h3>Memories of Mississippi</h3>
						</header>
						<footer className="tags">
							<ul>
								<li>Video Production</li>
							</ul>
						</footer>
					</div>
				</section>
			</div>
		);
	}
}

export default MyWork;