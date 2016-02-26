import Ember from 'ember';

export default Ember.Component.extend({
  showEditCommentForm: false,
  validInput: false,

  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },

    displayEditCommentForm()  {
      this.set('showEditCommentForm', true);
    },

    hideEditCommentForm()  {
      this.set('showEditCommentForm', false);
    },

    checkValidity() {
      var content = this.get('content');
      if (content !== undefined) {
        if (content.length >= 9 && content.length < 101) {
          this.set('validInput', true);
        } else {
          this.set('validInput', false);
        }
      }
    },

    editComment(comment) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        edit_timestamp: Date.now(),
        question: this.get('question')
      };
      this.set('showEditCommentForm', false);
      this.sendAction('editComment', comment, params);
    }
  }
});
