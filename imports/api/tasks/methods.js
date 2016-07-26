import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tasks } from './tasks.js';

Meteor.methods({

  'tasks.insert'(text) {
    check(text, String);

    Tasks.insert({ text: text });
  },

  'tasks.remove'(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },

  'tasks.setChecked'(taskId, setChecked) {
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },

});
