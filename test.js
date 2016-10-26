import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('node');

	t.deepEqual(result[0],
		{
			title: 'nodejs/node',
			subtitle: 'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
			arg: 'https://github.com/nodejs/node'
		}
	);
});
