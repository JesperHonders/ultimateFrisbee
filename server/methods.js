score1running = false;
score2running = false;

Meteor.methods({
  addTournament: function(id, name){
    // adds the tournament id in our local database, we use that for polling the server
    tournaments.insert({tournamentID: id, name: name})
    // Syncs the score with the database, if the tournament isn't in our own database its inserts the new scores.
    Meteor.call("updateResults");
  },
  removeTournament: function(id){
    // removes the tournament from the tournament database
    tournaments.remove({_id: id})
  },
  editScoreField1: function(score, id){
    // checks if someone else has pressed the button in 1 second
    if (score1running) return;
    // if not set that we pressed the button
    score1running = true;
    // update the results
    results.update(
      {_id: id},
      {$set: {"doc.team_1_score": score}}
    )
    // after one second clear the pressed stage
    setTimeout(function(){ score1running = false;}, 1000);
  },
  editScoreField2: function(score, id){
    // checks if someone else has pressed the button in 1 second
    if (score2running) return;
    // if not set that we pressed the button
    score2running = true;
    // update the results
    results.update(
      {_id: id},
      {$set: {"doc.team_2_score": score}}
    )
    // after one second clear the pressed stage
    setTimeout(function(){ score2running = false;}, 1000);
  },

  endGame: function(id){
    // sets the winner for now, this changes when the server polls, but needs a winner otherwise its still live.
    results.update(
      {_id: id},
      {$set: {"meta.winner": "set"}}
    )
  },

  colorShirt1: function(id, color){
    // Updates the field shirt color, if it doesn't exists adds it
    results.update(
      {_id: id},
      {$set: {"doc.team_1_color": color}}
    )
  },

  colorShirt2: function(id, color){
      // Updates the field shirt color, if it doesn't exists adds it
    results.update(
      {_id: id},
      {$set: {"doc.team_2_color": color}}
    )
  },

  finalizeScore: function(gameID){
    // sends the game to the api
    var game = results.findOne({"meta.gameID": gameID});
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 7d1ed8932f'},data: { "game_id": gameID,"team_1_score": game.doc.team_1_score,"team_2_score": game.doc.team_2_score,"is_final": "True"}
    }, function( error, response ) {
      console.log(error, response);
    });
  },

  createScoreKeeper: function(emailVar, passwordVar){
    // adds an account in the database
    Accounts.createUser({
        email: emailVar,
        password: passwordVar
    });
  },

  updateResults: function(){
    // wrapping the code in an interval
    // Meteor.setInterval(function(){
      // Fetching all the tournaments that the code has to itterate over.
      var allTournaments = tournaments.find({}).fetch();
      // Running the code for each tournament
      _.each(allTournaments, function(tournament){
        // this = current tournament
        var self = this;
        var i = 1;
        // Firring first api call to get ammount of rounds in current tournament
        HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournament.tournamentID+'&fields=%5Bforced_byes%5D&limit=1&access_token=eb05d96dbe', function(error, response){
          roundCount = response.data.meta.total_count;
          // looping for each round
          while(i<=roundCount){
            // fires async http request that requests every round in the tournament
            HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournament.tournamentID+'&round_number='+i+'&access_token=6fe6daa931', function(error, response){
              // Checks if round is empty
              if(response.data.meta.total_count === 0){
                return
              }
              else{
                  _.each(response.data.objects[0].games, function(item) {
                    // checks if game has an opponent otherwise don't write team 2
                    if(item.team_2 === null){
                      var doc = {
                        team_1_name: item.team_1.name,
                        team_1_score: item.team_1_score
                      };
                    }
                    // if game has opponent write both teams
                    else {
                      var doc = {
                        team_1_name: item.team_1.name,
                        team_1_score: item.team_1_score,
                        team_2_name: item.team_2.name,
                        team_2_score: item.team_2_score,
                      };
                    }
                    var meta = {
                      round_number: item.swiss_round.round_number,
                      gameID: item.id,
                      tournamentID: item.tournament_id,
                      winner: item.winner,
                      startTime: item.start_time,
                      field: item.game_site.name
                    }
                    var time = {
                      startDate: item.start_time.substring(0,10),
                      startHour: parseInt(item.start_time.substring(11,13)),
                      startMinute: parseInt(item.start_time.substring(14,16))
                    }
                    // if checks if the game allready exists
                    var exists = results.findOne({"meta.gameID": item.id})
                    // if it exists update instead of inserting
                    if (exists){
                      results.update(
                        {"meta.gameID": item.id},
                        {doc: doc, meta: meta, time: time}
                      )
                      // else insert the document in the local mongoDB
                    } else {
                      results.insert({doc, meta, time})
                    }
                });
              }
            });
            i++;
          }
        })
      });
    // }, 600000) // ammount of mili seconds the function runs again
  }
});
