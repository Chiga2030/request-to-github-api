const preloaders = document.querySelectorAll('.preloader');
const elAvatar = document.querySelector('.profile__avatar');
const elName = document.querySelector('.profile__username');
const elBio = document.querySelector('.profile__bio');
const elProfileLink = document.querySelector('.profile__link-to-profile');
const username = new URLSearchParams(window.location.search).get("username");

const hidePreloader = (preloaders) => {
	for (let node of preloaders) {
		node.classList.remove('preloader');
	}
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

setTimeout(() => getUserData(), 1000); // enjoy preloader
