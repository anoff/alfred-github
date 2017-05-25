'use strict';
const alfy = require('alfy');

alfy.fetch('https://api.github.com/search/repositories', {
	query: {
		q: alfy.input
	},
	maxAge: 10 * 60 * 1000
}).then(data => {
	const items = data.items
		.map(elm => ({
			title: elm.full_name,
			subtitle: elm.description,
			arg: elm.html_url,
			mods: {
				cmd: {
					arg: elm.html_url,
					subtitle: `Watch: ${elm.stargazers_count}  Star: ${elm.watchers_count}  Fork: ${elm.forks_count}`
				}
			}
		}));
	alfy.output(items);
});
