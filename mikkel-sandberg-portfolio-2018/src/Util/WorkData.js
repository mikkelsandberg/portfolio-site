const WorkData = [
	{
		id: 'corelogic-site-migration',
		workLabel: 'CoreLogic',
		workTitle: 'Site migration',
		tags: ['Web development'],
		skills: ['Bootstrap', 'HTML', 'CSS'],
		description: `CoreLogic went through a full site rebrand and was migrating their site into a new version of their CMS. My job was to take the content from the old site and put it into templates in the new system. I also added custom styling as needed using the Bootstrap library, and I helped develop UI standards for the main contact banner that displays on many pages across the site.`,
		images: [
			{
				subTitle: 'Rebranded page',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/core-logic/multi-closing-new.png',
				caption: 'The final page after migrating the content into the new CMS and new template.'
			},
			{
				subTitle: 'Previous overview tab',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/core-logic/multi-closing-tab1-old.png',
				caption: 'The old page used a tabbed navigation to separate the content.'
			},
			{
				subTitle: 'Previous product details tab',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/core-logic/multi-closing-tab2-old.png',
				caption: 'The old page used a tabbed navigation to separate the content.'
			},
			{
				subTitle: 'Previous contact tab',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/core-logic/multi-closing-tab3-old.png',
				caption: 'The old page used a tabbed navigation to separate the content.'
			}
		],
		links: [
			{
				title: 'Live site',
				url: 'https://www.corelogic.com'
			}
		]
	},
	{
		id: 'experts-exchange-profile-page-redesign',
		workLabel: 'Experts Exchange',
		workTitle: 'Profile page redesign',
		tags: ['Design', 'Web development'],
		skills: ['HTML', 'CSS', 'JavaScript'],
		description: `This is the new profile page that I built with my colleagues. Our goal was to have an initial “business card” view that would display information about the user’s areas of expertise and skills. Farther down in the overview section, the user can give information on their background (work history, education, and biography) to serve as a résumé. There are four other sections that asynchronously load in, which are: the user’s recent contributions on the site, certifications earned, ratings from Live or Gigs interactions, and endorsements that the user has given or received. On the right side, one can see the overall “level” of that user, see if the user has a “verified” account, and one can share the profile on social media. The profile owner also has a “preview” button. My role in this project was to create the HTML, CSS, and JS for more advanced user interactions — beyond what pure HTML and CSS can provide.`,
		images: [
			{
				subTitle: 'Profile page redesign',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/ee/ee-profile-page.jpg',
				caption: 'The new profile page that my team and I designed and built.'
			}
		],
		links: [
			{
				title: 'Live site',
				url: 'https://www.experts-exchange.com/members/MikkelSandberg.html'
			}
		]
	},
	{
		id: 'experts-exchange-live-product-redesign',
		workLabel: 'Experts Exchange',
		workTitle: 'Live product redesign',
		tags: ['Design', 'Web development'],
		skills: ['HTML', 'CSS'],
		description: `The Live product allows clients to connect with consultants in a one-on-one conversation to get help with coding problems. The problem we were facing was that clients didn’t know how to get started with the product. Previously, we showed a list of all available consultants and allowed clients to connect with anyone they chose, so the requests were not always a good fit and both sides got frustrated. To solve this problem, we streamlined the whole process by making the help request form front and center for the client. We also gave consultants the ability to specify which topics they were willing to help in. My role in this project was to mock up the initial designs in Photoshop for the help request page that lists the consultants available for a given request, and then to code all of the CSS to pull it off. I also provided new HTML structure when the need arose to work beyond what was already in place.`,
		images: [
			{
				subTitle: 'Main dashboard',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/ee/ee-live-landing-logged-in.jpg',
				caption: 'The revamped interface for the Live product.'
			},
			{
				subTitle: 'Help request interface',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/ee/ee-live-help-request.jpg',
				caption: 'The improved interface for finding consultants.'
			}
		],
		links: [
			{
				title: 'Live site',
				url: 'https://www.experts-exchange.com/live'
			}
		]
	},
	{
		id: 'experts-exchange-live-landing-page',
		workLabel: 'Experts Exchange',
		workTitle: 'Live landing page',
		tags: ['Web development'],
		skills: ['HTML', 'CSS'],
		description: `This is the Live product’s logged out view. The purpose of this page was to show the viewer why Live is valuable, how it works, and what users like about it — all in a well-designed and easy to use interface. I took the mockup provided by our UI team and created all the HTML and CSS needed to bring the page to life.`,
		images: [
			{
				subTitle: 'Informational landing page',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/ee/ee-live-landing-logged-out.jpg',
				caption: 'The logged out marketing page for the Live product.'
			}
		],
		links: [
			{
				title: 'Live site',
				url: 'https://www.experts-exchange.com/live'
			}
		]
	},
	{
		id: 'udemy-complete-web-developer-in-2018-face-detect-app',
		workLabel: 'Udemy: Complete Web Developer in 2018',
		workTitle: 'Face detect app',
		tags: ['Web development'],
		skills: ['React', 'JavaScript', 'AJAX', 'Clarifai API', 'CSS', 'Express.js', 'PostgreSQL'],
		description: `This was the final project for the Complete Web Developer in 2018 course on Udemy. I started by creating a static front end in React and added most of the styling with the Tachyons library and some custom CSS. Then, I built out the backend API using Express.js and tested the endpoints with Postman. After that, I structured the database using PostgreSQL and used knex.js to do SQL queries. Finally, I deployed the application to Heroku.`,
		images: [
			{
				subTitle: 'Login view',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/face-detect/face-detect-login.png',
				caption: 'The logged out view for the face detect app.'
			},
			{
				subTitle: 'Home view',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/face-detect/face-detect-home.png',
				caption: 'The home page for the face detect app.'
			}
		],
		links: [
			{
				title: 'Front end repository',
				url: 'https://github.com/MikkelSandbag/face-detect-front-end'
			},
			{
				title: 'Back end repository',
				url: 'https://github.com/MikkelSandbag/face-detect-api'
			},
			{
				title: 'Live site',
				url: 'https://face-detect-mikkel.herokuapp.com'
			}
		]
	},
	{
		id: 'codecademy-intensive-jammming',
		workLabel: 'Codecademy Intensive',
		workTitle: 'Jammming',
		tags: ['Design', 'Web development'],
		skills: ['React', 'JavaScript', 'AJAX', 'Spotify API', 'CSS'],
		description: `This was the final project for the Build Front End Web Applications from Scratch course on Codecademy. I Bootstrapped the application using Create React App and built components using ES6 class structure. Then, I integrated with the Spotify API to allow users to login to their account, search for content on Spotify, build a playlist, and save the playlist to their profile.`,
		images: [
			{
				subTitle: 'Search results view',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/jammming/jammming-search-results.png',
				caption: 'The search results view for the Jammming app.'
			},
			{
				subTitle: 'Playlist view',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/jammming/jammming-playlist.png',
				caption: 'The playlist view for the Jammming app.'
			}
		],
		links: [
			{
				title: 'Repository',
				url: 'https://github.com/MikkelSandbag/codecademy-intensive-jammming'
			},
			{
				title: 'Live site',
				url: 'http://msandberg-jammming.surge.sh'
			}
		]
	},
	{
		id: 'apc-entertainment-website-design-and-development',
		workLabel: 'APC Entertainment',
		workTitle: 'Website design and development',
		tags: ['Design', 'Web development'],
		skills: ['HTML', 'Sass', 'JavaScript', 'jQuery', 'Illustrator', 'Photoshop'],
		description: `This is a website that I designed and coded for an acquaintance. The client was a DJ and needed a site that would showcase the services he provided, allow potential customers to get a price quote through an interactive “quote calculator,” provide a way for users to book an event, display a media gallery, and have a contact form for general inquiries.`,
		images: [
			{
				subTitle: 'Splash screen',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/1-splashpage.png',
				caption: 'The splash screen for APC Entertainment.'
			},
			{
				subTitle: 'Booking section',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/2-booking.png',
				caption: 'The booking section for APC Entertainment.'
			},
			{
				subTitle: 'Services section',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/3-services.png',
				caption: 'The services section for APC Entertainment.'
			},
			{
				subTitle: 'Testimonial section',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/4-testimonial.png',
				caption: 'The testimonial section for APC Entertainment.'
			},
			{
				subTitle: 'Pricing section',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/5-pricing.png',
				caption: 'The pricing section for APC Entertainment.'
			},
			{
				subTitle: 'Media section',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/6-media.png',
				caption: 'The media section for APC Entertainment.'
			},
			{
				subTitle: 'Contact section',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/apc-entertainment/7-contact.png',
				caption: 'The contact section for APC Entertainment.'
			}
		],
		links: [
			{
				title: 'Repository',
				url: 'https://github.com/MikkelSandbag/apc-entertainment-dev'
			},
			{
				title: 'Live site',
				url: 'http://apcentertainment.net'
			}
		]
	},
	{
		id: 'friend-quest-podcast-production',
		workLabel: 'Friend Quest',
		workTitle: 'Podcast production',
		tags: ['Podcast production', 'Video production'],
		skills: ['Audition', 'Premiere'],
		description: `Friend Quest is a podcast that I do with my friends where we play tabletop role playing games. We each record our audio separately and then I edit all of the tracks in Audition to get the final cut. Then, I add the intro and outro music, record voiceovers for the intro and outro, and add some basic EQ and noise filtering. Finally, I export the final audio and bring it into Premiere to create a video version of the episode as well. The cover artwork was done by Peter Freeby (link to site below).`,
		images: [
			{
				subTitle: 'Cover artwork',
				url: 'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/friend-quest/friend-quest-artwork.png',
				caption: 'The cover artwork for Friend Quest.'
			}
		],
		links: [
			{
				title: 'Podcast website',
				url: 'http://friendquestpodcast.com'
			},
			{
				title: 'Friend Quest Twitter',
				url: 'https://twitter.com/friendquestpod'
			},
			{
				title: "Peter Freeby's website",
				url: 'http://www.peterfreeby.com'
			}
		]
	},
	{
		id: 'class-project-a-rude-awakening',
		workLabel: 'Class project',
		workTitle: 'A Rude Awakening',
		tags: ['Animation', 'Video production'],
		skills: ['Maya', 'Premiere'],
		description: `This was the final project for an animation class that I took in college. I used Maya to model the characters and scene, rig them, animate them, light the scene, and render the final frames. Then, I took the frames into Premiere to assemble the video, add music and sound effects, add title screens, and export the final video. You can see some of the other 3D work I've done in my demo reel below.`,
		images: [
			{
				subTitle: 'A challenger appears',
				url:
					'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/class-projects/a-rude-awakening-screenshot.png',
				caption: 'A frame grab from the final render.'
			}
		],
		links: [
			{
				title: 'Vimeo link',
				url: 'https://vimeo.com/113687379'
			},
			{
				title: '3D demo reel',
				url: 'https://vimeo.com/95346384'
			}
		]
	},
	{
		id: 'class-project-memories-of-mississippi',
		workLabel: 'Class project',
		workTitle: 'Memories of Mississippi',
		tags: ['Video production'],
		skills: ['Final Cut', 'Lighting', 'Audio engineering', 'Sound Editing'],
		description: `This was a project for a video production class I took in college. The assignment was to interview someone and produce a video for it; everything from shooting the video, lighting, sound recording, and editing it all together. I used Final Cut to edit the final version.`,
		images: [
			{
				subTitle: 'Interviewing my dad',
				url:
					'https://s3-us-west-1.amazonaws.com/msandberg-portfolio-2018/class-projects/memories-of-mississippi-screenshot.png',
				caption: 'A frame grab from the final video.'
			}
		],
		links: [
			{
				title: 'Vimeo link',
				url: 'https://vimeo.com/128216025'
			}
		]
	}
];

export default WorkData;
