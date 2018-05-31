var UserProfileView = Backbone.View.extend({
  el: "#content",

  initialize: function (options) {
    self = this;

    if (options.userId) {
      usersFetched.done(function () {
        self.model = users.get(options.userId);
      });
    }
  },

  render: function () {
    if (this.model) {
      var template = _.template($('#profileTemplate').html());

      var html = template(this.model.toJSON());

      this.$el.html(html);

      return this;
    } else {
      var template = _.template($('#profileTemplateEmpty').html());

      var html = template();

      this.$el.html(html);

      return this;
    }
  }
});