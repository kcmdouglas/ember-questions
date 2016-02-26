import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,

  actions: {
    showEditQuestionForm() {
      this.set('editQuestionForm', true);
    },

    hideEditQuestionForm() {
      this.set('author', undefined);
      this.set('content', undefined);
      this.set('editQuestionForm', false);
    },

    transitionTo(route) {
       this.sendAction("transitionTo", route);
     },

    goToQuestion(question) {
      this.sendAction("goToQuestion", question.id);
    },

    editQuestion(question) {
     this.sendAction("editQuestion", question);
    },

   deleteQuestion(question) {
     this.sendAction("deleteQuestion", question);
   },

  }
});
