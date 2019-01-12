export default [
	{
		title:"SpiritOS - A Better Way to be Together",
		overview:"A DAO platform that empowers communities with blockchain-enabled tools that help them to harness and focus their collective power to create new and improved ways of being together",
		tags:['design','frontend','react','blockchain'],
		links:[
			{ display_text:'Whitepaper Part I', url:'/images/spiritos-whitepaper-part1.pdf' }
		],
		pages:[
			{
				title:'Overview',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-cover.png',
				description:'SpiritOS is a platform for creating and managing community-centric DAOs and an operating system for the applications that power them'
			},
			{
				title:'LOVE',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-love.png',
				description:'SpiritOS is powered by LOVE, a cryptocurrency that re-aligns the incentives that guide our behavior to be more in line with what we really need as a people'
			},
			{
				title:'Governance',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-governance.png',
				description:'Communities on SpiritOS have complete control over what they do together'
			},
			{
				title:'Tools',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-tools.png',
				description:'SpiritOS augments the software patterns you\'re familiar with smart contracts that incentivize community action'
			},
			{
				title:'Heroes',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-heroes.png',
				description:'SpiritOS makes it easy to identify and support those who add value to your community'
			},
			{
				title:'Projects',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-projects.png',
				description:'Smart contracts make it possible for us to create, own and manage assets as a collective'
			},
			{
				title:'Roadmap',
				tags:['design','frontend','react','blockchain'],
				image:'/images/spiritos-roadmap.png',
				description:'SpiritOS will be developed in tandem with the communities we work with in 2019'
			}
		]
	},
	{
		title:"Autokal - eSports simplified",
		overview:"An eSports events app. Helped its users keep tabs on what's happening in their favorite games.",
		tags:['design','frontend','react','backend','mobile'],
		links:[],
		pages:[
			{
				title:'Overview',
				tags:['design','frontend','react','backend','mobile'],
				image:'/images/ak-overview.png',
				description:'At its peak, Autokal pulled in ~2k users weekly ' +
										'with detailed event information and a directory of past event replays. Autokal covered 7 games before being discontinued in 2018.'
			},
			{
				title:'On Desktop',
				tags:['design','frontend','react'],
				image:'/images/ak-desktop.png',
				description: 'Autokal was the perfect tool for keeping tabs on ongoing tournaments. Users stopped by for detailed event ' +
										 'info, links to brackets and other info, viewer counts and stream thumbnails. ' +
										 'Or, if nothing was live, they could always browse replays from prior week\'s events. '
			},
			{
				title:'Mobile - Events',
				tags:['design','frontend','react','mobile'],
				image:'/images/ak-mobile-events.png',
				description:'Not at your computer? Users could browse events through our mobile site.'
			},
			{
				title:'Mobile - VODs',
				tags:['design','frontend','react','mobile'],
				image:'/images/ak-mobile-vods.png',
				description:'Missed last week\'s events? Users could use our VOD section to check out the most watched sets or experience the tournament the way it was ' +
										'meant to be watched, chronologically. Our spoiler tags' +
										' kept important results hidden.'
			},
			{
				title:'Forms',
				tags:['design','frontend','react'],
				image:'/images/ak-forms.png',
				description:'Built with my own personal library of custom react inputs, these forms made it possible to ' +
										'easily maintain events on Autokal.'
			},
			{
				title:'Backend',
				tags:['backend'],
				image:'/images/backend-devops.png',
				description:'Autokal was deployed on AWS. ' +
										'It consisted of a webapp, an API gateway for authentication, the API itself and an image-processing ' +
										'worker for cutting up and uploading images to S3. ' +
										'Each app was built with nodeJS. API uses HAL format. PostgreSQL database.'
			},
		]
	},
	{
		title:"PunchMe - Customer Loyalty Rewards Platform",
		overview:"A multi-platform customer loyalty application. I was the product manager.",
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
				'Our graphic designer Eric and I split design duties. His portfolio is linked above'
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
				description:'We also branched out to a couple of other games, publishing infographics for Starcraft and CSGO - though these series were short-lived despite positive reception'
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
				description:'I designed and developed the frontend solo, and hired talented developer Juan ' +
				'Cancela to help with the backend (github link above).'
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
		title:"Miscellaneous",
		overview:"Assorted work",
		tags:['design','react','frontend'],
		links:[
			{ display_text:'Portfolio Code', url:'https://github.com/soupchicken/l2-portfolio' }
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
		title:"Autokal - V2",
		overview:"My second attempt at Autokal. First time using Node & React.",
		tags:['frontend','design','react'],
		pages:[
			{
				title:'Overview',
				tags:['frontend','design','react'],
				image:'/images/ak-v2.png',
				description:'Another attempt at creating a subscription-based event service. ' +
										'A solid learning experience.'
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
				description:'Assorted designs demonstrating how we would implement our "friends" ' +
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
				description:'My first attempt at a proper javascript frontend using BackboneJS for its router, views and dispatcher and Ruby on Rails for the backend. '
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
		title:"Pakkd - Facebook Event Aggregator",
		overview:"A Facebook connect app that shoed its users a directory of events in their school network",
		tags:['design', 'frontend'],
		links:[
			{ display_text:'Manu\'s LinkedIn', url:'https://www.linkedin.com/in/manu-bhat-7663b23a/'}
		],
		pages:[
			{
				title:'Humble Beginnings',
				tags:['design', 'frontend'],
				image:'/images/pakkd.png',
				description:'The first app I ever worked on. Coded in tandem with my college roommate Manu Bhat. At its peak we had a 100+ ' +
										'regular users who would visit daily for the comprehensive list of college campus events & parties.'
			},
		]
	},
]
