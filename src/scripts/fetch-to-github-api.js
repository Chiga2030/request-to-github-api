const userData = {
	url: 'https://api.github.com/users/chiga2030',

	username: function() {
		const parser = document.createElement('a');
		parser.href = this.url;
		const username = parser.pathname.split('/users/').filter((arr) => !!arr).toString();
		return username;
	},

	parseUserData: function() {
		fetch(this.url)
			.then(response => response.json())
			.then(data => {
				this.avatarUrl = data.avatar_url;
				this.name = data.name;
				this.bio = data.bio;
				this.htmlUrl = data.html_url;
			})
			.then(test => new Promise(resolve) => {
				
			})
	},
}



//fetchToGithub(userData.url)

userData.parseUserData()

//userData.getUsername();