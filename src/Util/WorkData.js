const WorkData = [
	{
		id: `tabletop-town`,
		workLabel: `Tabletop Town`,
		workTitle: `Mobile App Development`,
		tags: [`Development`],
		skills: [`Flutter`, `Firebase`, `Google Cloud Functions`],
		summary: `Developing an Android and iOS app that would allow users to play tabletop games over chat.`,
		description: `Tabletop Town is an Android and iOS application created by <a href="http://www.peterfreeby.com" target="_blank" rel="noopener noreferrer">Peter Freeby</a> and me. It is, at its core, an instant messaging application that facilitates playing tabletop games in a more asyncronous fashion. Initially, we are including support for D&D 5th Edition, but we hope to expand to other game systems and create the ability for users to make their own game systems in the app. It uses Flutter for the UI, Firebase for user authentication and database services, and Google Cloud Functions to provide data to Algolia's Search API to do things like search for other users in the app.`,
		images: [
			{
				subTitle: `Login screen`,
				thumbnail: `images/tabletop-town/ttt-login-screen-thumbnail.jpg`,
				fullSize: `images/tabletop-town/ttt-login-screen-full-size.jpg`,
				caption: `The screen that provides the user with a way to sign up or log in.`,
			},
			{
				subTitle: `Chat screen`,
				thumbnail: `images/tabletop-town/ttt-chat-screen-thumbnail.jpg`,
				fullSize: `images/tabletop-town/ttt-chat-screen-full-size.jpg`,
				caption: `Users can view the conversation and interact with other players here.`,
			},
			{
				subTitle: `Die roll creation screen`,
				thumbnail: `images/tabletop-town/ttt-roll-selection-screen-thumbnail.jpg`,
				fullSize: `images/tabletop-town/ttt-roll-selection-screen-full-size.jpg`,
				caption: `Users can view the conversation and interact with other players here.`,
			},
		],
		links: [
			{
				title: `App info`,
				url: `https://github.com/mikkelsandberg/tabletoptown-info`,
			},
		],
	},
	{
		id: `corelogic-site-migration`,
		workLabel: `CoreLogic`,
		workTitle: `Site migration`,
		tags: [`Development`],
		skills: [`Bootstrap`, `HTML`, `CSS`],
		summary: `Moving Corelogic&rsquo;s site content into a new version of their CMS.`,
		description: `CoreLogic went through a full site rebrand and was migrating their site into a new version of their CMS. My job was to take the content from the old site and put it into templates in the new system. I also added custom styling as needed using the Bootstrap library, and I helped develop UI standards for the main contact banner that displays on many pages across the site.`,
		images: [
			{
				subTitle: `Rebranded page`,
				thumbnail: `images/core-logic/multi-closing-new-thumbnail.jpg`,
				fullSize: `images/core-logic/multi-closing-new-full-size.jpg`,
				caption: `The final page after migrating the content into the new CMS and new template.`,
			},
			{
				subTitle: `Previous overview tab`,
				thumbnail: `images/core-logic/multi-closing-tab1-thumbnail.jpg`,
				fullSize: `images/core-logic/multi-closing-tab1-full-size.jpg`,
				caption: `The old page used a tabbed navigation to separate the content.`,
			},
			{
				subTitle: `Previous product details tab`,
				thumbnail: `images/core-logic/multi-closing-tab2-thumbnail.jpg`,
				fullSize: `images/core-logic/multi-closing-tab2-full-size.jpg`,
				caption: `The old page used a tabbed navigation to separate the content.`,
			},
			{
				subTitle: `Previous contact tab`,
				thumbnail: `images/core-logic/multi-closing-tab3-thumbnail.jpg`,
				fullSize: `images/core-logic/multi-closing-tab3-full-size.jpg`,
				caption: `The old page used a tabbed navigation to separate the content.`,
			},
		],
		links: [
			{
				title: `Live site`,
				url: `https://www.corelogic.com`,
			},
		],
	},
	{
		id: `experts-exchange-profile-page-redesign`,
		workLabel: `Experts Exchange`,
		workTitle: `Profile page redesign`,
		tags: [`Design`, `Development`],
		skills: [`HTML`, `CSS`, `JavaScript`],
		summary: `Revamping the user profile page on Experts Exchange.`,
		description: `This is the new profile page that I built with my colleagues. Our goal was to have an initial &ldquo;business card&rdquo; view that would display information about the user&rsquo;s areas of expertise and skills. Farther down in the overview section, the user can give information on their background (work history, education, and biography) to serve as a r&eacute;sum&eacute;. There are four other sections that asynchronously load in, which are: the user&rsquo;s recent contributions on the site, certifications earned, ratings from Live or Gigs interactions, and endorsements that the user has given or received. On the right side, one can see the overall &ldquo;level&rdquo; of that user, see if the user has a &ldquo;verified&rdquo; account, and one can share the profile on social media. The profile owner also has a &ldquo;preview&rdquo; button. My role in this project was to create the HTML, CSS, and JS for more advanced user interactions &mdash; beyond what pure HTML and CSS can provide.`,
		images: [
			{
				subTitle: `Profile page redesign`,
				thumbnail: `images/ee/ee-profile-page-thumbnail.jpg`,
				fullSize: `images/ee/ee-profile-page-full-size.jpg`,
				caption: `The new profile page that my team and I designed and built.`,
			},
		],
		links: [
			{
				title: `Live site`,
				url: `https://www.experts-exchange.com/members/MikkelSandberg.html`,
			},
		],
	},
	{
		id: `experts-exchange-live-product-redesign`,
		workLabel: `Experts Exchange`,
		workTitle: `Live product redesign`,
		tags: [`Design`, `Development`],
		skills: [`HTML`, `CSS`],
		summary: `Giving Experts Exchange&rsquo;s Live product a UX facelift by simpifying the interface and creating a new flow.`,
		description: `The Live product allows clients to connect with consultants in a one-on-one conversation to get help with coding problems. The problem we were facing was that clients didn&rsquo;t know how to get started with the product. Previously, we showed a list of all available consultants and allowed clients to connect with anyone they chose, so the requests were not always a good fit and both sides got frustrated. To solve this problem, we streamlined the whole process by making the help request form front and center for the client. We also gave consultants the ability to specify which topics they were willing to help in. My role in this project was to mock up the initial designs in Photoshop for the help request page that lists the consultants available for a given request, and then to code all of the CSS to pull it off. I also provided new HTML structure when the need arose to work beyond what was already in place.`,
		images: [
			{
				subTitle: `Main dashboard`,
				thumbnail: `images/ee/ee-live-logged-in-thumbnail.jpg`,
				fullSize: `images/ee/ee-live-logged-in-full-size.jpg`,
				caption: `The revamped interface for the Live product.`,
			},
			{
				subTitle: `Help request interface`,
				thumbnail: `images/ee/ee-live-help-request-thumbnail.jpg`,
				fullSize: `images/ee/ee-live-help-request-full-size.jpg`,
				caption: `The improved interface for finding consultants.`,
			},
		],
		links: [
			{
				title: `Live site`,
				url: `https://www.experts-exchange.com/live`,
			},
		],
	},
	{
		id: `experts-exchange-live-landing-page`,
		workLabel: `Experts Exchange`,
		workTitle: `Live landing page`,
		tags: [`Development`],
		skills: [`HTML`, `CSS`],
		summary: `Creating a marketing-oriented landing page for logged out users to see the value of Experts Exchange&rsquo;s Live product.`,
		description: `This is the Live product&rsquo;s logged out view. The purpose of this page was to show the viewer why Live is valuable, how it works, and what users like about it &mdash; all in a well-designed and easy to use interface. I took the mockup provided by our UI team and created all the HTML and CSS needed to bring the page to life.`,
		images: [
			{
				subTitle: `Informational landing page`,
				thumbnail: `images/ee/ee-live-logged-out-thumbnail.jpg`,
				fullSize: `images/ee/ee-live-logged-out-full-size.jpg`,
				caption: `The logged out marketing page for the Live product.`,
			},
		],
		links: [
			{
				title: `Live site`,
				url: `https://www.experts-exchange.com/live`,
			},
		],
	},
	{
		id: `udemy-web-dev-course`,
		workLabel: `Udemy Web Dev Course`,
		workTitle: `Face detect app`,
		tags: [`Development`],
		skills: [
			`React`,
			`JavaScript`,
			`AJAX`,
			`Clarifai API`,
			`CSS`,
			`Express.js`,
			`PostgreSQL`,
		],
		summary: `Building an app that lets users see if a provided picture has a detectable face in it.`,
		description: `This was the final project for the Complete Web Developer in 2018 course on Udemy. I started by creating a static front end in React and added most of the styling with the Tachyons library and some custom CSS. Then, I built out the backend API using Express.js and tested the endpoints with Postman. After that, I structured the database using PostgreSQL and used knex.js to do SQL queries. Finally, I deployed the application to Heroku.`,
		images: [
			{
				subTitle: `Login view`,
				thumbnail: `images/face-detect/face-detect-login-thumbnail.jpg`,
				fullSize: `images/face-detect/face-detect-login-full-size.jpg`,
				caption: `The logged out view for the face detect app.`,
			},
			{
				subTitle: `Home view`,
				thumbnail: `images/face-detect/face-detect-home-thumbnail.jpg`,
				fullSize: `images/face-detect/face-detect-home-full-size.jpg`,
				caption: `The home page for the face detect app.`,
			},
		],
		links: [
			{
				title: `Front end repository`,
				url: `https://github.com/mikkelsandberg/face-detect-front-end`,
			},
			{
				title: `Back end repository`,
				url: `https://github.com/mikkelsandberg/face-detect-api`,
			},
			{
				title: `Live site`,
				url: `https://face-detect-mikkel.herokuapp.com`,
			},
		],
	},
	{
		id: `codecademy-intensive-jammming`,
		workLabel: `Codecademy Intensive`,
		workTitle: `Jammming`,
		tags: [`Design`, `Development`],
		skills: [`React`, `JavaScript`, `AJAX`, `Spotify API`, `CSS`],
		summary: `Creating an app that allows users to build custom playlists with content from Spotify.`,
		description: `This was the final project for the Build Front End Web Applications from Scratch course on Codecademy. I bootstrapped the application using Create React App and built components using ES6 class structure. Then, I integrated with the Spotify API to allow users to login to their account, search for content on Spotify, build a playlist, and save the playlist to their profile.`,
		images: [
			{
				subTitle: `Search results view`,
				thumbnail: `images/jammming/jammming-search-results-thumbnail.jpg`,
				fullSize: `images/jammming/jammming-search-results-full-size.jpg`,
				caption: `The search results view for the Jammming app.`,
			},
			{
				subTitle: `Playlist view`,
				thumbnail: `images/jammming/jammming-playlist-thumbnail.jpg`,
				fullSize: `images/jammming/jammming-playlist-full-size.jpg`,
				caption: `The playlist view for the Jammming app.`,
			},
		],
		links: [
			{
				title: `Repository`,
				url: `https://github.com/mikkelsandberg/codecademy-intensive-jammming`,
			},
			{
				title: `Live site`,
				url: `http://msandberg-jammming.surge.sh`,
			},
		],
	},
	{
		id: `apc-entertainment-website-design-and-development`,
		workLabel: `APC Entertainment`,
		workTitle: `Website design and development`,
		tags: [`Design`, `Development`],
		skills: [
			`HTML`,
			`Sass`,
			`JavaScript`,
			`jQuery`,
			`Illustrator`,
			`Photoshop`,
		],
		summary: `Making a new website for a business owner to allow them to acquire more customers.`,
		description: `This is a website that I designed and coded for an acquaintance. The client was a DJ and needed a site that would showcase the services he provided, allow potential customers to get a price quote through an interactive &ldquo;quote calculator,&rdquo; provide a way for users to book an event, display a media gallery, and have a contact form for general inquiries.`,
		images: [
			{
				subTitle: `Splash screen`,
				thumbnail: `images/apc-entertainment/1-splashscreen-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/1-splashscreen-full-size.jpg`,
				caption: `The splash screen for APC Entertainment.`,
			},
			{
				subTitle: `Booking section`,
				thumbnail: `images/apc-entertainment/2-booking-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/2-booking-full-size.jpg`,
				caption: `The booking section for APC Entertainment.`,
			},
			{
				subTitle: `Services section`,
				thumbnail: `images/apc-entertainment/3-services-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/3-services-full-size.jpg`,
				caption: `The services section for APC Entertainment.`,
			},
			{
				subTitle: `Testimonial section`,
				thumbnail: `images/apc-entertainment/4-testimonial-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/4-testimonial-full-size.jpg`,
				caption: `The testimonial section for APC Entertainment.`,
			},
			{
				subTitle: `Pricing section`,
				thumbnail: `images/apc-entertainment/5-pricing-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/5-pricing-full-size.jpg`,
				caption: `The pricing section for APC Entertainment.`,
			},
			{
				subTitle: `Media section`,
				thumbnail: `images/apc-entertainment/6-media-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/6-media-full-size.jpg`,
				caption: `The media section for APC Entertainment.`,
			},
			{
				subTitle: `Contact section`,
				thumbnail: `images/apc-entertainment/7-contact-thumbnail.jpg`,
				fullSize: `images/apc-entertainment/7-contact-full-size.jpg`,
				caption: `The contact section for APC Entertainment.`,
			},
		],
		links: [
			{
				title: `Repository`,
				url: `https://github.com/mikkelsandberg/apc-entertainment-dev`,
			},
			{
				title: `Live site`,
				url: `http://apcentertainment.net`,
			},
		],
	},
	{
		id: `friend-quest-podcast-production`,
		workLabel: `Friend Quest`,
		workTitle: `Podcast production`,
		tags: [`Podcast production`, `Video production`],
		skills: [`Audition`, `Premiere`],
		summary: `Producing a podcast where my friends and I collaborate to tell interesting stories with great characters.`,
		description: `Friend Quest is a podcast that I do with my friends where we play tabletop role playing games. We each record our audio separately and then I edit all of the tracks in Audition to get the final cut. Then, I add the intro and outro music, record voiceovers for the intro and outro, and add some basic EQ and noise filtering. Finally, I export the final audio and bring it into Premiere to create a video version of the episode as well. The cover artwork was done by <a href="http://www.peterfreeby.com" target="_blank" rel="noopener noreferrer">Peter Freeby</a>.`,
		images: [
			{
				subTitle: `Cover artwork`,
				thumbnail: `images/friend-quest/friend-quest-artwork-thumbnail.jpg`,
				fullSize: `images/friend-quest/friend-quest-artwork-full-size.jpg`,
				caption: `The cover artwork for Friend Quest.`,
			},
		],
		links: [
			{
				title: `Podcast website`,
				url: `https://anchor.fm/friend-quest`,
			},
			{
				title: `Friend Quest Twitter`,
				url: `https://twitter.com/friendquestpod`,
			},
		],
	},
	{
		id: `class-project-a-rude-awakening`,
		workLabel: `Short film`,
		workTitle: `A Rude Awakening`,
		tags: [`Animation`, `Video production`],
		skills: [`Maya`, `Premiere`],
		summary: `Modeling and animating a short film about a creature waking up for the first time.`,
		description: `This was the final project for an animation course that I took. I used Maya to model the characters and scene, rig them, animate them, light the scene, and render the final frames. Then, I took the frames into Premiere to assemble the video, add music and sound effects, add title screens, and export the final video. You can see some of the other 3D work I&rsquo;ve done in my <a href="https://vimeo.com/95346384" target="_blank" rel="noopener noreferrer">demo reel</a>.`,
		images: [
			{
				subTitle: `A challenger appears`,
				thumbnail: `images/class-projects/a-rude-awakening-thumbnail.jpg`,
				fullSize: `images/class-projects/a-rude-awakening-full-size.jpg`,
				caption: `A frame grab from the final render.`,
			},
		],
		links: [
			{
				title: `Vimeo link`,
				url: `https://vimeo.com/113687379`,
			},
		],
	},
	{
		id: `class-project-memories-of-mississippi`,
		workLabel: `Short film`,
		workTitle: `Memories of Mississippi`,
		tags: [`Video production`],
		skills: [`Final Cut`, `Lighting`, `Audio engineering`, `Sound Editing`],
		summary: `Producing a video of an interview I did of my dad recounting his memories of a summer in Mississippi.`,
		description: `This was a project for a video production course that I took. The assignment was to interview someone and produce a video for it; including shooting the video, lighting, sound recording, and editing it all together. I used Final Cut to edit the final version.`,
		images: [
			{
				subTitle: `Interviewing my dad`,
				thumbnail: `images/class-projects/memories-of-mississippi-thumbnail.jpg`,
				fullSize: `images/class-projects/memories-of-mississippi-full-size.jpg`,
				caption: `A frame grab from the final video.`,
			},
		],
		links: [
			{
				title: `Vimeo link`,
				url: `https://vimeo.com/128216025`,
			},
		],
	},
];

export default WorkData;
