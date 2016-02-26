import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  validInput: false,
  currentContent: "Press enter when adding content to update preview.",

  actions: {
    showNewCommentForm() {
      this.set('addNewComment', true);
    },

    hideNewCommentForm() {
      this.set('author', undefined);
      this.set('content', undefined);
      this.set('addNewComment', false);
    },

    updateCurrentContent() {
      this.set('currentContent', this.get('content'));
    },

    checkValidity() {
      var author = this.get('author');
      var content = this.get('content');
      if (author !== undefined && content !== undefined) {
        if (author.length >= 4 && content.length >= 9 && content.length < 101) {
          this.set('validInput', true);
        } else {
          this.set('validInput', false);
        }
      }
    },

    saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        timestamp: Date.now(),
        edit_timestamp: null,
        question: this.get('question')
      };
      this.set('author', undefined);
      this.set('content', undefined);
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
