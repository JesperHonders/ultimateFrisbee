Template.results.helpers({
  result: function() {
    var pageId= parseInt(this);
    return results.find({"meta.tournamentID": pageId});
  },
});


Template.results.events({
  'click .resultRowShow'(event) {
    $('[data-id="'+this._id+'"]').slideToggle()
      // $('[data-id="'+this._id+'"]').addClass("show");  
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
