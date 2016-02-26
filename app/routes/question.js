import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  
  actions: {
    saveComment(params) {
      var route = this;
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      newComment.save().then(function() {
        return post.save().then(function() {
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
      })
    },

    destroyComment(comment) {
      var route = this;
      comment.destroyRecord().then(function() {
        route.refresh();
      });
    }
  }
});
