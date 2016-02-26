import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,

  actions: {
    showNewCommentForm() {
      this.set('addNewComment', true);
    },

    hideNewCommentForm() {
      this.set('author', undefined);
      this.set('content', undefined);
      this.set('addNewComment', false);
    },

    // updateCurrentContent() {
    //   this.set('currentContent', this.get('content'));
    // },

    saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        timestamp: Date.now(),
        edit_timestamp: null,
        post: this.get('post')
      };
      this.set('author', undefined);
      this.set('content', undefined);
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
