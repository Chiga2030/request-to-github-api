url = 'https://api.github.com/users/chiga2030';

const getUsernameFromUrl = (url) => {
	const parser = document.createElement('a');
	parser.href = 'https://api.github.com/users/chiga2030';
	const username = parser.pathname.split('/users/').filter((arr) => !!arr).toString();
	return username;
}

const username = getUsernameFromUrl(url);

