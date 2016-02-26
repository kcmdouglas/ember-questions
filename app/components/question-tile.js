import Ember from 'ember';

export default Ember.Component.extend({
  transitionTo(route) {
     this.sendAction("transitionTo", route);
   },
});
