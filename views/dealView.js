var DealView = Backbone.View.extend({
	tagName: 'li',

	className: 'list-group-item',

	render: function () {
		this.$el.html(this.model.get('title') + this.model.get('clientName'));
		return this;
	}
});