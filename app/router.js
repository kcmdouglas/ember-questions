import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('new-question');
  this.route('admin');
  this.route('question', {path: '/question/:question_id'});
  this.route('backpacking');
  this.route('camping');
  this.route('hiking');
  this.route('astronomy');
  this.route('plant-identification');
  this.route('bigfoot');
});

export default Router;
