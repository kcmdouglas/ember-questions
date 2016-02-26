import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    transitionTo(route) {
       this.sendAction("transitionTo", route);
     },
     goToQuestion(question) {
      console.log(question);
      this.sendAction("goToQuestion", question.id);
    },
  }
});
