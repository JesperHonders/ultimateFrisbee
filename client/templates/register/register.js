Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;

        Meteor.call("createScoreKeeper", emailVar, passwordVar);

        noty({ text: 'Account created', type: 'success' });

        event.target.registerEmail.value = '';
        event.target.registerPassword.value = '';
    }
});
