var HomepageView = Backbone.View.extend({
  render: function () {
    var template = _.template($('#homepageTemplate').html());

    var html = template();

    this.$el.html(html);

    return this;
  }
});