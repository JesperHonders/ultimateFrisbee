Meteor.methods({
  addTournament: function(id, name){
    tournaments.insert({tournamentID: id, name: name})
    console.log('added: '+name+" with id: "+id)
  },
  removeTournament: function(id){
    tournaments.remove({_id: id})
  },
  editScoreField1: function(score, id){
    results.update(
      {_id: id},
      {$set: {"doc.team_1_score": score}}
    )
  },
  editScoreField2: function(score, id){
    results.update(
      {_id: id},
      {$set: {"doc.team_2_score": score}}
    )
  },

  finalizeScore: function(gameID){
    var game = results.findOne({"meta.gameID": gameID});
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer e800ef7f9c'},data: { "game_id": gameID,"team_1_score": game.doc.team_1_score,"team_2_score": game.doc.team_2_score,"is_final": "True"}
    }, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
    });
  }
});
