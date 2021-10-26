import test from 'ava';
import alfyTest from 'alfy-test';

test('default', async t => {
	const alfy = alfyTest();
	const result = await alfy('node');
	delete result[0].mods;

	t.deepEqual(result[0],
		{
			title: 'nodejs/node',
			subtitle: 'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
			arg: 'https://github.com/nodejs/node',
		},
	);
});
