Template.account.events({
	'click .logout': ()=> {
		Meteor.logout();
	}
});