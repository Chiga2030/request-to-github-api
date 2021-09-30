const preloaders = document.querySelectorAll('.preloader');
const elAvatar = document.querySelector('.profile__avatar');
const elName = document.querySelector('.profile__username');
const elBio = document.querySelector('.profile__bio');
const elProfileLink = document.querySelector('.profile__link-to-profile');
const log = console.log;
const username = parseInt(new URLSearchParams(window.location.search).get("username"));

const hidePreloader = (preloaders) => {
	for (let node of preloaders) {
		node.classList.remove('preloader');
	}
}

const getDate = new Promise(resolve => {
	setTimeout(() => resolve(new Date), 2000);
});

const printDate = date => {
	const elDate = document.createElement('p');
	elDate.innerText = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.toLocaleTimeString()}`;
	document.body.prepend(elDate);
}

const getUserData = () => {
	const url = `https://api.github.com/users/${username}`;
	fetch(url)
		.then(response => {
			if(response.ok) return response.json();
			else if(response.status == 404)  throw new Error(`Ошибка: пользователь с ником ${username} не найден`);
		})
		.then(data => {
			hidePreloader(preloaders);
			elAvatar.src = data.avatar_url;
			elName.innerText = data.name;
			elBio.innerText = data.bio;
			elProfileLink.innerText = data.html_url;
			elProfileLink.href = data.html_url;
		})
		.catch(e => alert(e.message))
};

Promise.all([getDate, getUserData])
	.then(([date, userData]) => {
		printDate(date);
		userData();
	})
