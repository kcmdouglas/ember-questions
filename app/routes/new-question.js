import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    savePost(params) {
      var newPost = this.store.createRecord('question', params);
      newPost.save();
      this.transitionTo('index');
    },
  }
});
