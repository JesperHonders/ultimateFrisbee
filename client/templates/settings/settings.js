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
    noty({text: 'Succesfully added tournament'})
  },
  'click .deleteButton' (event) {
    var id = this._id;
    var r = confirm("Are you sure you want to delete: "+this.name)
    if(r === true){
      Meteor.call('removeTournament', id)
      noty({text: 'Succesfully removed tournament'})
    }
  }
})
