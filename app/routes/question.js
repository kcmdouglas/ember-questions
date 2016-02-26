import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id)
    });
  },

  actions: {

    transitionTo(route) {
      this.transitionTo(route);
    },

    saveComment(params) {
      var route = this;
      var newComment = this.store.createRecord('comment', params);
      var question = params.question;
      newComment.save().then(function() {
        return question.save().then(function() {
          route.refresh();
        });
      });
    },

    editComment(comment, params) {
      var route = this;
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save().then(function() {
        route.refresh();
      });
    },

    destroyComment(comment) {
      var route = this;
      comment.destroyRecord().then(function() {
        route.refresh();
      });
    }
  }
});
