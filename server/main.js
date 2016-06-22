import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // runs polling of api
  Meteor.call("updateResults")
});
