import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  timestamp: DS.attr(),
  main_question: DS.attr(),
  content: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  edited_timestamp: DS.attr(),
});
