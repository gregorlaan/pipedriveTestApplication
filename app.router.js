var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'viewHomepage',
		'users': 'viewUsers',
		'user/:userId': 'viewUserById',
		'*error': 'viewError'
	},

	viewUsers: function () {
		var userProfileView = new UserProfileView({
		});

		userProfileView.render();

		var usersView = new UsersView({
			model: users
		});

		usersView.render();
	},

	viewUserById: function (userId) {

		var userProfileView = new UserProfileView({
			userId: userId
		});

		userProfileView.render();

		var usersView = new UsersView({
			model: users
		});

		usersView.render();

		var dealsView = new DealsView({
			model: deals,
			userId: userId
		});

		dealsView.render();
	},

	viewHomepage: function () {
		var homepageView = new HomepageView({
			el: '#content'
		});

		homepageView.render();
	},

	viewError: function () {
		var errorpageView = new ErrorpageView({
			el: '#content'
		});

		errorpageView.render();
	}

});

var router = new AppRouter();

Backbone.history.start();