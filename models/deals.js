var APIToken = 'a0c3b357aab590e09332efbf8182da9247de7c4a';

var Deals = Backbone.Collection.extend({
  url: 'https://api.pipedrive.com/v1/deals?status=all_not_deleted&start=0&api_token=' + APIToken,

  model: Deal,

  parse: function (response) {
    var self = this;
    console.log(response);
    _.each(response.data, function (item) {
      var deal = new self.model();
      deal.set('id', item.id);
      deal.set('ownerId', item.user_id.id);
      deal.set('title', item.title);
      deal.set('value', item.value);
      deal.set('currency', item.currency);
      deal.set('clientName', item.person_name);
      self.push(deal);
    });
    console.log(this.models);
    return this.models;
  }
});