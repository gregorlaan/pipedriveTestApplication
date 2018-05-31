var users = new Users();

var usersFetched = users.fetch({
  success: function () {
    console.log('Users successfully retrieved.');
  }, error: function () {
    console.log('Error while retrieving users.')
  }
});

var deals = new Deals();

var dealsFetched = deals.fetch({
  success: function () {
    console.log('Deals successfully retrieved.');
  }, error: function () {
    console.log('Error while retrieving deals.')
  }
});