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
				description: 'Autokal is the perfect tool for keeping tabs on ongoing tournaments. Users stop by for detailed event ' +
										 'info, links to brackets and other info, viewer counts and stream thumbnails. ' +
										 'Or, if nothing is live, they can always browse replays from prior week\'s events. '
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
		overview:"Popular weekly eSports events publication. Over 1M views in 2017.",
		pages:[
			{
				title:'Overview',
				tags:['design'],
				image:'/images/twi-overview.png',
				description:'Born a marketing and development tool for Autokal, TWI quickly took on a life of its own reaching 1M eyeballs in 2017. ' +
										'Original versions were designed and revised by hand. Current versions are generated automatically by Autokal.'
			},
			{
				title:'TWI & Autokal\'s Development',
				tags:['design'],
				image:'/images/twi-autokal.png',
				description:'Through weekly infographic revisions I experimented with new layouts for Autokal. It allowed me to iterate rapidly as ' +
										'designing a new layout by hand is many times easier than coding one in.'
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
				image:'/images/twi-evolution.png',
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
		overview:"3rd version of Autokal and 2nd React App. First production-quality API and foray into DevOps.",
		pages:[
			{
				title:'Overview',
				tags:['design','react','frontend','backend'],
				image:'/images/ak-v3-board.png',
				description:'I designed and coded in the frontend. I worked with Juan ' +
										'Cancela on the backend (github link above). The app was feature rich, but never attracted many users. We scrapped ' +
										'the frontend and retooled the backend for the newest version of Autokal'
			},
			{
				title:'Organizer Profiles',
				tags:['design','react','frontend'],
				image:'/images/ak-v3-autokal.png',
				description:'Organizers had profile pages that users could subscribe to ' +
										'where they could list all their upcoming and past events, clips/videos they chose to showcase ' +
										'and contact information.'
			},
			{
				title:'Forms',
				tags:['frontend','design','react'],
				image:'/images/ak-v3-event-form.png',
				description:'Event fields like "participants" forced the creation of custom react inputs. ' +
										'These components were generalized into an input library ' +
										'I continued to use on v4'
			}
		]
	},
	{
		title:"Autokal - V2",
		overview:"My second attempt at Autokal. First time using Node & React.",
		tags:['frontend','design','react'],
		pages:[
			{
				title:'Overview',
				tags:['frontend','design','react'],
				image:'/images/ak-v2.png',
				description:'While the frontend code was passable React, the backend was a mess. ' +
										'We suffered from the chicken and the egg problem and a confusing UX/UI ' +
										'that tried to do too much. ' +
										'That said it was a solid learning experience.'
			},
			{
				title:'Mobile - Events',
				tags:['design'],
				image:'/images/ak-v2-mobile-events.png',
				description:'Designs for a mobile app companion to version 2 that was never built'
			},
			{
				title:'Mobile - Friends',
				tags:['design'],
				image:'/images/ak-v2-mobile-friends.png',
				description:'More designs demonstrating how we would implement our "friends" ' +
										'functionality. Users would be able to broadcast which events they were ' +
										'attending to their friends list.'
			}
		]
	},
	{
		title:"Autokal - V1",
		tags:['frontend','design'],
		overview:"The first version of Autokal, and my first solo attempt at building an app.",
		pages:[
			{
				title:'Overview',
				tags:['frontend','design'],
				image:'/images/ak-v1.png',
				description:'My first attempt at a proper javascript frontend using BackboneJS for its router, views and dispatcher. ' +
										'I leaned on Ruby on Rails for the backend - hiding away most of the complexity from my novice mind. ' +
										'I never promoted it as I was not comfortable with its level of quality.'
			},
			{
				title:'Organizers',
				tags:['frontend','design'],
				image:'/images/ak-v1-profiles.png',
				description:'Just some forms for managing a group page'
			}
		]
	},
	{
		title:"PunchMe - Loyalty Rewards Platform",
		overview:"A multi-platform custom loyalty application. Development managed by me.",
		tags:['frontend','design'],
		links:[{
			display_text:'Eric Karbeling', url:'https://www.erickarbeling.com/'
		}],
		pages:[
			{
				title:'Overview',
				tags:['design', 'frontend'],
				image:'/images/punchme-overview.png',
				description:'At PunchMe, I led a team of 8 outsourced developers and an in-house graphic designer. ' +
										'Our product was built using Rails, Java and ObjectiveC backed by a PostgreSQL database. ' +
										'My graphic designer Eric and I split design duties. His portfolio is linked above'
			},
			{
				title:'The Cards',
				tags:['design'],
				image:'/images/punchme-cards.png',
				description:'Users could grab a card at any participating retailer and immediately register it on the tablet app and start ' +
										'earning rewards. Vendors also had their own set of cards users could scan when a tablet was unavailable.'
			},
			{
				title:'Mobile App',
				tags:['design', 'frontend'],
				image:'/images/punchme-ios-events.png',
				description:'Through the phone app, users could check point balances, browse and redeem rewards and locate PunchMe retailers.'
			},
			{
				title:'Tablet App',
				tags:['design', 'frontend'],
				image:'/images/punchme-tablet.png',
				description:'Found on the counters of participating stores, the tablet app gave users the ability ' +
										'to browse and redeem rewards at the register as well as a way to scan and register their cards'
			}
		]
	},

	{
		title:"Pakkd - Facebook Event Aggregator",
		overview:"A Facebook connect app that shows its users a directory of events in their school network",
		tags:['design', 'frontend'],
		links:[
			{ display_text:'Manu\'s LinkedIn', url:'https://www.linkedin.com/in/manu-bhat-7663b23a/'}
		],
		pages:[
			{
				title:'Humble Beginnings',
				tags:['design', 'frontend'],
				image:'/images/pakkd.png',
				description:'The first app I ever worked on. Coded in tandem with my college roommate Manu Bhat. We had a good 50+ ' +
										'regular users who would visit daily for the comprehensive list of college campus events & parties ' +
										'our app would aggregate. Not bad for a school of 10k. Unfortunately, Facebook changes to how they handled networks killed the app.'
			},
		]
	},
]
