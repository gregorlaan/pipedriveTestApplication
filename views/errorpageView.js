var ErrorpageView = Backbone.View.extend({
  render: function () {
    var template = _.template($('#errorpageTemplate').html());

    var html = template();

    this.$el.html(html);

    return this;
  }
});