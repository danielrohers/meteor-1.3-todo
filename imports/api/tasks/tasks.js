import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Tasks = new Mongo.Collection('tasks');

const Schema = new SimpleSchema({
  text: {
    type: String
  },
  checked: {
    type: Boolean,
    defaultValue: false
  },
  createdAt: {
    type: Date,
    defaultValue: new Date()
  }
});

Tasks.attachSchema(Schema);
