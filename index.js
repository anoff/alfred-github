import alfy from 'alfy';

(async () => {
	const data = await alfy.fetch('https://api.github.com/search/repositories', {
		query: {
			q: alfy.input,
		},
		maxAge: 10 * 60 * 1000,
	});

	const items = data.items
		.map(elm => ({
			title: elm.full_name,
			subtitle: elm.description,
			arg: elm.html_url,
			mods: {
				cmd: {
					arg: elm.html_url,
					subtitle: `Star: ${elm.stargazers_count}  Fork: ${elm.forks_count}`,
				},
			},
		}));
	alfy.output(items);
})();
