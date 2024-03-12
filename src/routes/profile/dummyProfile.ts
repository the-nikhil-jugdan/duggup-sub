const profile = {
	name: 'Krishna Kiran',
	profileImage: '/assets/krishna.png',
	about: {
		bio: 'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
		company: 'Duggup',
		position: 'Co-Founder and CEO'
	},
	history: [
		{
			id: 1,
			since: 'Dec 2023',
			type: 'articles',
			articles: [
				{
					banner: '/assets/steve-jobs.png',
					heading: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					banner: '/assets/man.png',
					heading: 'Most people don\'t have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.'
				}
			]
		},
		{
			id: 2,
			since: 'Dec 2023',
			type: 'job_update',
			company: {
				name: 'Duggup',
				location: 'San Francisco Bay Area',
				joinedAt: 'Nov 2023',
				position: 'Co-Founder and CEO',
				time: 'Full-time · Remote'
			}
		},
		{
			id: 3,
			since: 'Dec 2023',
			type: 'articles',
			articles: [
				{
					banner: '/assets/desk.png',
					heading: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					banner: '/assets/map.png',
					heading: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		},
		{
			id: 4,
			since: 'Dec 2023',
			type: 'job_update',
			company: {
				name: 'Betterup',
				location: 'San Francisco Bay Area',
				joinedAt: 'Nov 2023',
				position: 'VP Engineering',
				time: 'Full-time'
			}
		}
	]
};
export default profile;