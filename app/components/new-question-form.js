import Ember from 'ember';

export default Ember.Component.extend({
  transitionTo(route) {
     this.sendAction("transitionTo", route);
   },

  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author'),
        timestamp: Date.now(),
        question: this.get('question'),
        content: this.get('content'),
        edited_timestamp: null,
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
