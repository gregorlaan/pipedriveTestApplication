var UserView = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item list-group-item-action',

  events: {
    'click': 'onUserSelect'
  },

  onUserSelect: function (e) {
    router.navigate('#user/' + this.model.id, { trigger: true });
  },

  render: function () {
    this.$el.html(this.model.get('name'));
    this.$el.attr('id', this.model.id);
    return this;
  }
});