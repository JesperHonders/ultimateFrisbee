Meteor.methods({
  addTournament: function(id, name){
    tournaments.insert({tournamentID: id, name: name})
    console.log('added: '+name+" with id: "+id)
  },
  removeTournament: function(id){
    tournaments.remove({_id: id})
  }
});
