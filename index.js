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
			arg: elm.html_url
		}));
	alfy.output(items);
});
