import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category', {reload: true});
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
