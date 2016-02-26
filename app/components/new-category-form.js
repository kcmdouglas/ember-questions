import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('category', {reload: true})
  },

  transitionTo(route) {
     this.sendAction("transitionTo", route);
   },

  actions: {
    saveCategory() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('saveCategory', params);
      this.set('name', undefined);
    }
  }
});
