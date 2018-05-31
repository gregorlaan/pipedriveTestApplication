var APIToken = 'a0c3b357aab590e09332efbf8182da9247de7c4a';

var Users = Backbone.Collection.extend({
  url: 'https://api.pipedrive.com/v1/users?api_token=' + APIToken,

  model: User,

  parse: function (response) {
    var self = this;
    console.log(response);
    _.each(response.data, function (item) {
      var user = new self.model();
      user.set('id', item.id);
      user.set('name', item.name);
      user.set('email', item.email);
      user.set('phone', item.phone);
      user.set('added', item.created);
      self.push(user);
    });
    console.log(this.models);    
    return this.models;
  }
});