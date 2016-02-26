import Ember from 'ember';

export default Ember.Component.extend({
  sortedProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('question.comments', 'sortedProperties'),

  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },

    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    }
  }

});
