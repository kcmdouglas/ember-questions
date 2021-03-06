import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question', {reload: true})
      .then(function(questions) {
        return questions.sortBy('timestamp').reverse();
      });
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    goToQuestion(questionID) {
      this.transitionTo('question', questionID);
    },

    editQuestion(question, params) {
      var route = this;
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save().then(function() {
        route.refresh();
      });
    },

    deleteQuestion(question) {
      var route = this;
      var comment_deletions = question.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return question.destroyRecord().then(function() {
          route.refresh();
        });
      });
    }
  }
});
