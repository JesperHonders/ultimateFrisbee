import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // runs polling of api
  Meteor.call("updateResults")
  Accounts.createUser({
      email: "admin@windmill.com",
      password: "test1234"
  });
});
