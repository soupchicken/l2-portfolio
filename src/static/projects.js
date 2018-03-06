export default [
	{
		id:1,
		title:"Autokal - eSports simplified",
		overview:"eSports events directory, VOD repository, and community site.",
		tags:['design','frontend','react','backend','devops','mobile'],
		links:[
			{ display_text:'Demo' , url:'https://demo.autokal.com/' }
		],
		pages:[
			{
				title:'Overview',
				tags:['design','frontend','react','backend','devops','mobile'],
				image:'/images/ak-overview.png',
				description:'Covering 7 games and counting, Autokal helps its ~2k weekly users quickly find out what\'s happening in their favorite eSport ' +
										'with detailed event information and a directory of past event VODs.'
			},
			{
				title:'Desktop App',
				tags:['design','frontend','react'],
				image:'/images/ak-desktop.png',
				description:'Each event includes links to brackets, registration, etc. Users can also access past VODs on the right hand side.' +
										' Viewer counts and thumbnails of live events are pulled from Twitch.'
			},
			{
				title:'Mobile - Events',
				tags:['design','frontend','react','mobile'],
				image:'/images/ak-mobile-events.png',
				description:'Users can quickly browse events on their phone through our mobile site'
			},
			{
				title:'Mobile - VODs',
				tags:['design','frontend','react','mobile'],
				image:'/images/ak-mobile-vods.png',
				description:'The mobile site also provides easy access to event VODs'
			},
			{
				title:'Forms',
				tags:['design','frontend','react'],
				image:'/images/ak-forms.png',
				description:'Built using my own personal library of custom react input polyfills.'
			},
			{
				title:'Backend & DevOps',
				tags:['backend','devops'],
				image:'/images/backend-devops.png',
				description:'Autokal is deployed on AWS and consists of four different programs: ' +
				'The webapp frontend, an API gateway for authentication, the API itself and an image-processing server for cutting up and uploading images to S3. ' +
				'API uses HAL format. PostgreSQL materialized views are used extensively. Mocha for testing.'
			},
		]
	},
	{
		id:5,
		title:'"This Weekend In X" - Event Infographic Series',
		tags:['design','frontend'],
		overview:"Weekly eSports events newsletter. Over 1M views in 2017.",
		year:2017,
		pages:[
			{
				title:'Overview',
				tags:['design','frontend'],
				image:'/images/twi-overview.png',
				description:''
			},
			{
				title:'TWI & Autokal',
				tags:['design','frontend'],
				image:'/images/twi-melee.png',
				description:'I created software templates to automate generation of the infographic, saving 2+ days weekly.'
			},
			{
				title:'Sample Infographic',
				tags:['design'],
				image:'/images/twi-smash.png',
				description:'Thanks to templating, we were able to quickly churn out content for other fighting game communities, namely: SFV, Tekken 7, Guilty Gear and Injustice 2.'
			},
			{
				title:'Design Evolution',
				tags:['design'],
				image:'/images/twi-melee.png',
				description:'I created software templates to automate generation of the infographic, saving 2+ days weekly.'
			},
			{
				title:'Discontinued Games',
				tags:['design'],
				image:'/images/twi-other-games.png',
				description:'The mobile site version of the webapp'
			},
			{
				title:'1st Edition',
				tags:['design'],
				image:'/images/twi-pm-first.png',
				description:'In order'
			},
		]
	},
	{
		id:3,
		title:"Miscellaneous",
		overview:"Assorted work",
		tags:['design','react','frontend'],
		links:[
			{ display_text:'Portfolio Code', url:'https://github.com/soupchicken/l2-portfolio' },
			{ display_text:'Kiiyo Soundcloud', url:'https://soundcloud.com/kiiyomusic' }
		],
		year:2018,
		pages:[
			{
				id:9,
				title:'Portfolio',
				tags:['design','react','frontend'],
				image:'/images/intergalactic-text.png',
				description:'Logo & Album art for LA electronic artist Kiiyo. Inspired by the symmetry of Mayan stone carvings.'
			},
			{
				id:9,
				title:'Portfolio',
				tags:['design'],
				image:'/images/intergalactic-text.png',
				description:'Logo & Album art for LA electronic artist Kiiyo. Inspired by the symmetry of Mayan stone carvings.'
			},
			{
				id:9,
				title:'Kiiyo Logo Design',
				tags:['design'],
				image:'/images/kiiyo-logo.png',
				description:'Logo & Album art for LA electronic artist Kiiyo. Inspired by the symmetry of Mayan stone carvings.'
			},
			{
				id:10,
				title:'Intergalactic EP Cover',
				tags:['design'],
				image:'/images/intergalactic.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			}
		]
	},
	{
		id:4,
		title:"Autokal - V3",
		overview:"History of the Autokal project",
		year:2018,
		pages:[
			{
				id:12,
				title:'V3 - Overview',
				image:'/images/ak-v3-autokal.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:12,
				title:'V3 - Takeaways',
				image:'/images/ak-v3-autokal.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:12,
				title:'V3 - Channels',
				image:'/images/ak-v3-autokal.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:12,
				title:'V3 - Alpha',
				image:'/images/ak-v3-early.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:12,
				title:'V2 - Overview',
				image:'/images/ak-v2.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			}
		]
	},
	{
		id:4,
		title:"Autokal - V2",
		overview:"History of the Autokal project",
		year:2018,
		pages:[
			{
				id:12,
				title:'V2 - Overview',
				image:'/images/ak-v2.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:12,
				title:'V2 - Takeaways',
				image:'/images/ak-v2.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:13,
				title:'V2 - Mobile Designs',
				image:'/images/ak-v2-mobile-events.png',
				description:'Designs for a mobile app companion to version 2 that was never built'
			},
			{
				id:14,
				title:'V2 - Backend',
				image:'/images/ak-v2.png',
				description:'First react app - took about six months. UX ended up confusing, tried fitting in too much functionality on the top level. Worthwhile learning experience'
			}
		]
	},
	{
		id:4,
		title:"Autokal - V1",
		overview:"History of the Autokal project",
		year:2018,
		pages:[
			{
				id:15,
				title:'V1 - Overview',
				image:'/images/ak-v1.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			},
			{
				id:15,
				title:'V1 - Takeaways',
				image:'/images/ak-v1.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			}
		]
	},
	{
		id:5,
		title:"PunchMe",
		overview:"Product Manager @ Loyalty Rewards Platform startup",
		year:2018,
		pages:[
			{
				id:16,
				title:'Mobile (iOS) - Events',
				image:'/images/punchme-ios-events.png',
				description:'Inspired by the symmetry of Mayan stone carvings.'
			},
			{
				id:17,
				title:'Tablet App',
				image:'/images/punchme-tablet.png',
				description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			}
		]
	},
	{
		id:6,
		title:"Pakkd",
		overview:"A Facebook app that prepares a directory of events in your network",
		year:2011,
		pages:[
			{
				id:18,
				title:'Humble Beginnings',
				image:'/images/pakkd.png',
				description:'Inspired by the symmetry of Mayan stone carvings.'
			},
			// {
			// 	id:19,
			// 	title:'ALBUM ART',
			// 	image:'/images/intergalactic.jpg',
			// 	description:'Album art for Kiiyo\'s first release. Hand-designed font.'
			// }
		]
	},
	// {
	// 	id:2,
	// 	title:"Autokal V3",
	// 	description:"This is the newest version of Autokal. Fresh off the lessons learned from This Weekend in",
	// 	year:2017,
	// 	pages:[
	// 		{
	// 			id:3,
	// 			title:'Overview',
	// 			image:'/images/twi-sfv.png',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		},
	// 		{
	// 			id:4,
	// 			title:'This is great',
	// 			image:'/images/twi-csgo.png',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		},
	// 		{
	// 			id:5,
	// 			title:'Thgreat',
	// 			image:'/images/intergalactic.jpg',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		},
	// 		{
	// 			id:6,
	// 			title:'Tht',
	// 			image:'/images/intergalactic.jpg',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		}
	// 	]
	// },
	// {
	// 	id:3,
	// 	title:"Autokal V3",
	// 	description:"This is the newest version of Autokal. Fresh off the lessons learned from This Weekend in",
	// 	year:2017,
	// 	pages:[
	// 		{
	// 			id:7,
	// 			title:'Overview',
	// 			image:'/images/twi-sfv.png',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		},
	// 		{
	// 			id:8,
	// 			title:'This is great',
	// 			image:'/images/twi-csgo.png',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		},
	// 		{
	// 			id:9,
	// 			title:'Thgreat',
	// 			image:'/images/intergalactic.jpg',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		},
	// 		{
	// 			id:10,
	// 			title:'Tht',
	// 			image:'/images/intergalactic.jpg',
	// 			description:'THIS IS A DESCRIPTION OF A PAGE'
	// 		}
	// 	]
	// },
]
