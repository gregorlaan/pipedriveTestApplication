var Deal = Backbone.Model.extend({
  defaults: {
    id: '',
    title: '',
    value: '',
    clientName: '',
    ownerId: '',
    currency: ''
  }
});