var DealsView = Backbone.View.extend({

  initialize: function(options) {
    var currentUserDeals = deals.where({
      ownerId: Number(options.userId)
    });

    this.model = currentUserDeals;
   },

  template: _.template([
		'<% _.each(items, function (item) { %>',		
		'<%= itemTemplate(item.toJSON()) %>',    
		'<% }); %>',
  ].join('')),
  
  itemTemplate: _.template(
    '<div class="list-group-item d-flex justify-content-between align-items-center"><%= title %><span class="badge badge-primary badge-pill"><%= value %> <%= currency %></span></div>'
  ),

  el: '#deals',

  tagName: 'ul',

  className: 'list-group',

  render: function () {
    console.log('this.model');
    console.log(this.model);
    var self = this;
    var html = this.template ({
      items: this.model,
      itemTemplate: this.itemTemplate
    });
    this.$el.append(html);
  }
});