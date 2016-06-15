Template.results.helpers({
  results: function() {
    var pageId= parseInt(this);
    var games = results.find({"meta.tournamentID": pageId}).fetch();
    var rounds = _.uniq(_.map(games, function(game){
      return game.meta.round_number
    }));
    var gamesByRound = _.map(rounds, function(round){
      var roundGames = games.filter(function(game){
        return game.meta.round_number === round
      })
      return {roundNumber: roundGames[0].meta.round_number, games: roundGames}
    })

    return _.sortBy(gamesByRound, function(round){
      return round.roundNumber;
    }).reverse();
  },
});


Template.results.events({
  'click .resultRow'(event) {
    $('[data-id="'+this._id+'"]').slideToggle()
  },

  'click .team-1-score-plus' (event) {
    console.log(this.doc.team_1_score);
    results.update(
      {_id: this._id},
      {$set: {"doc.team_1_score": this.doc.team_1_score + 1}}
    )
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 4d7da879a1'},data: { "game_id": this.meta.gameID,"team_1_score": this.doc.team_1_score + 1,"team_2_score": this.doc.team_2_score,"is_final": "True"}
    }, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
    });
  },
  'click .team-1-score-min' (event) {
    console.log(this.doc.team_1_score);
    results.update(
      {_id: this._id},
      {$set: {"doc.team_1_score": this.doc.team_1_score - 1}}
    )
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 4d7da879a1'},data: { "game_id": this.meta.gameID,"team_1_score": this.doc.team_1_score - 1,"team_2_score": this.doc.team_2_score,"is_final": "True"}
    }, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
    });
  },
  'click .team-2-score-plus' (event) {
    console.log(this.doc.team_1_score);
    results.update(
      {_id: this._id},
      {$set: {"doc.team_2_score": this.doc.team_2_score + 1}}
    )
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 4d7da879a1'},data: { "game_id": this.meta.gameID,"team_1_score": this.doc.team_1_score,"team_2_score": this.doc.team_2_score + 1,"is_final": "True"}
    }, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
    });
  },
  'click .team-2-score-min' (event) {
    console.log(this.doc.team_1_score);
    results.update(
      {_id: this._id},
      {$set: {"doc.team_2_score": this.doc.team_2_score - 1}}
    )
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 4d7da879a1'},data: { "game_id": this.meta.gameID,"team_1_score": this.doc.team_1_score,"team_2_score": this.doc.team_2_score -1,"is_final": "True"}
    }, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
    });
  }
})

Template.results.rendered = function(){
  console.log(this.data)
}
