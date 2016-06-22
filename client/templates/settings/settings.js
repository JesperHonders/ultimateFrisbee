Template.settings.helpers({
  tournaments: function() {
    return tournaments.find({});
  },
});


Template.settings.events({
  'click #formSubmit' (event) {
    event.preventDefault();
    var name = $('#formTournamentName').val();
    var tourId = $('#formTournamentId').val();
    var id = parseInt(tourId);
    console.log(id);
    Meteor.call('addTournament', id, name )
    noty({text: 'Succesfully added tournament', type: 'success'})
  },
  'click .deleteButton' (event) {
    var id = this._id;
    noty({
      text: 'Are you sure you want to delete: '+this.name,
      type: 'confirm',
      buttons: [
           {
               addClass: 'btn btn-primary', text: 'Yes', onClick: function ($noty) {
                   $noty.close();
                   Meteor.call('removeTournament', id)
                   noty({ text: 'Tournament removed', type: 'success' });
               }
           },
           {
               addClass: 'btn btn-danger', text: 'No', onClick: function ($noty) {
                   $noty.close();
               }
           }
        ]
    })
    return false;
  }
})
