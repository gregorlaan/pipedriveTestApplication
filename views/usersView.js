var UsersView = Backbone.View.extend({
  el: '#users',

  tagName: 'ul',

  className: 'list-group',

  render: function () {
    var self = this;
    this.model.each(function (user) {
      var userView = new UserView({
        model: user
      });
      console.log('userView');
      console.log(userView);
      self.$el.append(userView.render().$el);
    });
  }
});