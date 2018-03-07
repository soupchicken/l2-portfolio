export default [
	{
		title:"Autokal - eSports simplified",
		overview:"\"eSports\" events app. Helps its users keep tabs on what's happening in their favorite games.",
		tags:['design','frontend','react','backend','mobile'],
		links:[
			{ display_text:'Demo' , url:'https://demo.autokal.com/' }
		],
		pages:[
			{
				title:'Overview',
				tags:['design','frontend','react','backend','mobile'],
				image:'/images/ak-overview.png',
				description:'Autokal pulls in ~2k users weekly ' +
										'with detailed event information and a directory of past event replays. Autokal covers 7 games and counting. ' +
										'New version currently under development'
			},
			{
				title:'On Desktop',
				tags:['design','frontend','react'],
				image:'/images/ak-desktop.png',
				description: 'Detailed event info, links, viewer counts and stream thumbnails make the desktop app the perfect' +
										' tool for keeping tabs on ongoing tournaments. ' +
										'Or, if nothing is live, browse replays from prior week\'s events. '
			},
			{
				title:'Mobile - Events',
				tags:['design','frontend','react','mobile'],
				image:'/images/ak-mobile-events.png',
				description:'Not at your computer? Browse events through our mobile site.'
			},
			{
				title:'Mobile - VODs',
				tags:['design','frontend','react','mobile'],
				image:'/images/ak-mobile-vods.png',
				description:'Miss last week\'s events? Check out the most watched sets or experience the top 8 the way it was ' +
										'meant to be watched, chronologically. Our spoiler tags' +
										' keep important results hidden.'
			},
			{
				title:'Forms',
				tags:['design','frontend','react'],
				image:'/images/ak-forms.png',
				description:'Built with my own personal library of custom react inputs, these forms make it possible to ' +
										'easily maintain events on Autokal.'
			},
			{
				title:'Backend',
				tags:['backend'],
				image:'/images/backend-devops.png',
				description:'Autokal is deployed on AWS. ' +
										'There\'s a webapp, an API gateway for authentication, the API itself and an image-processing ' +
										'worker for cutting up and uploading images to S3. ' +
										'Each app is built on nodeJS. API uses HAL format. PostgreSQL database.'
			},
		]
	},
	{
		title:'"This Weekend In" - Infographic Series',
		tags:['design'],
		overview:"Popular weekly eSports events newsletter. Over 1M views in 2017.",
		pages:[
			{
				title:'Overview',
				tags:['design'],
				image:'/images/twi-overview.png',
				description:'Born a marketing and development tool for Autokal, TWI quickly took on a life of its own reaching 1M eyeballs in 2017. ' +
										'Original versions were designed and revised by hand. Current versions are generated automatically by Autokal.'
			},
			{
				title:'TWI & Autokal',
				tags:['design'],
				image:'/images/twi-melee.png',
				description:'TWI was where I experimented with new layouts for Autokal. It allowed me to iterate rapidly as ' +
										'designing a new layout by hand is many times easier than coding one in. Also, our newsletter audiences ' +
										'were regularly in the 10s of thousands - a good sample size. '
			},
			{
				title:'Sample Infographic',
				tags:['design'],
				image:'/images/twi-example.png',
				description:'An example of the most recent versions of the infographics. Essentially a slightly modified screenshot of Autokal for ' +
										'the given game.'
			},
			{
				title:'Design Evolution',
				tags:['design'],
				image:'/images/twi-melee.png',
				description:'I tightened up the design over time as I noticed earlier versions were too large for some screens. ' +
										'It also made it easier to write the software templates that would eventually become the current version of Autokal.'
			},
			{
				title:'Other games',
				tags:['design'],
				image:'/images/twi-other-games.png',
				description:'We\'ve already published infographics for Starcraft and CSGO. While they were received ' +
										'well, it was too much effort to do them every week without templates. ' +
										'We will add these games and more once Autokal returns.'
			}
		]
	},
	{
		title:"Miscellaneous",
		overview:"Assorted work",
		tags:['design','react','frontend'],
		links:[
			{ display_text:'Portfolio Code', url:'https://github.com/soupchicken/l2-portfolio' },
			{ display_text:'Kiiyo Soundcloud', url:'https://soundcloud.com/kiiyomusic' }
		],
		pages:[
			{
				title:'Portfolio Site',
				tags:['design','react','frontend'],
				image:'/images/portfolio.png',
				description:'Look familiar? Node & React. Check out the repo link above if you\'re curious.'
			},
			{
				title:'Kiiyo Logo Design',
				tags:['design'],
				image:'/images/kiiyo-logo.png',
				description:'Logo for LA electronic artist Kiiyo. Soundcloud link above.'
			},
			{
				title:'Intergalactic EP Cover',
				tags:['design'],
				image:'/images/intergalactic.png',
				description:'Album art for Kiiyo\'s first release. Keywords: space-y, tribal.'
			}
		]
	},
	{
		title:"Autokal - V3",
		tags:['design','react','frontend','backend'],
		links:[
			{ display_text:'Juan\'s Github', url:'https://github.com/juancancela' }
		],
		overview:"The third version of Autokal. April 2016 - March 2017",
		pages:[
			{
				title:'Overview',
				tags:['design','react','frontend','backend'],
				image:'/images/ak-v3-autokal.png',
				description:'My second React app and first foray into building a proper API. Frontend was all me, worked with a Juan ' +
										'Cancela on the backend (github link above). It was feature rich, but never attracted many users before we scrapped it.'
			},
			{
				title:'Organizer Profiles',
				tags:['design','react','frontend'],
				image:'/images/ak-v3-autokal.png',
				description:'Organizers had profile pages that users could subscribe to ' +
										'where they could list all their upcoming and past events as well as whatever media they chose to showcase.'
			},
			{
				title:'Backend & DevOps',
				tags:['backend'],
				image:'/images/ak-v3-early.png',
				description:'V3 was my first app deployed onto AWS. And my first experience developing a proper self-documenting HAL REST API. ' +
										'Like V2, I used NodeJS to serve the app. However, I did change from from MongoDB to PostgreSQL for obvious reasons ' +
										'(i.e. MongoDB is a mess).'
			}
		]
	},
	{
		title:"Autokal - V2",
		overview:"History of the Autokal project",
		pages:[
			{
				title:'Overview',
				image:'/images/ak-v2.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				title:'Mobile Designs',
				image:'/images/ak-v2-mobile-events.png',
				description:'Designs for a mobile app companion to version 2 that was never built'
			}
		]
	},
	{
		title:"Autokal - V1",
		overview:"History of the Autokal project",
		pages:[
			{
				id:15,
				title:'Overview',
				image:'/images/ak-v1.png',
				description:'My first real attempt at building Autokal. Never even saw a user as I scrapped it in dissatisfaction'
			},
			{
				id:15,
				title:'V1 - Takeaways',
				image:'/images/ak-v1-profiles.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			}
		]
	},
	{
		title:"PunchMe",
		overview:"Product Manager @ Loyalty Rewards Platform Startup",
		pages:[
			{
				title:'Overview',
				image:'/images/punchme-ios-events.png',
				description:'I was the product manager of a multi-platform loyalty application. ' +
										'I led a team of 8 outsourced developers and a single in-house graphic designer. ' +
										'Built using Rails, Java and ObjectiveC backed by a PostgreSQL database.'
			},
			{
				title:'The Cards',
				image:'/images/punchme-ios-events.png',
				description:'Users could grab a card at any participating retailer and immediately register it on the tablet app and start' +
										'earning rewards.'
			},
			{
				title:'Mobile App',
				image:'/images/punchme-ios-events.png',
				description:'Through the phone app, users could check point balances, browse and redeem rewards and locate PunchMe retailers.'
			},
			{
				title:'Tablet App',
				image:'/images/punchme-tablet.png',
				description:'Found on the counters of participating stores, the tablet app gave users the ability ' +
										'to browse and redeem rewards at the register as well as a way to scan and register their cards'
			}
		]
	},

	{
		title:"Pakkd",
		overview:"A Facebook app that shows its users a directory of events in their school network",
		pages:[
			{
				title:'Humble Beginnings',
				image:'/images/pakkd.png',
				description:'An early screenshot of the first app I ever made. Ugly but effective. We had quite a few ' +
										'regular users who would visit daily for the comprehensive list of college campus events & parties ' +
										'our app would aggregate'
			},
		]
	},
]
