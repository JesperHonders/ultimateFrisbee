import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // runs polling of api
  updateResults();
});

// Function that polls the server and writes back the response in a server-side mongo Collection for futher use
function updateResults() {
  // wrapping the code in an interval
  Meteor.setInterval(function(){
    // Fetching all the tournaments that the code has to itterate over.
    var allTournaments = tournaments.find({}).fetch();
    // Running the code for each tournament
    _.each(allTournaments, function(tournament){
      console.log('running: '+ tournament.name)
      // this = current tournament
      var self = this;
      var i = 1;
      // Firring first api call to get ammount of rounds in current tournament
      HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournament.tournamentId+'&fields=%5Bforced_byes%5D&limit=1&access_token=eb05d96dbe', function(error, response){
        roundCount = response.data.meta.total_count;
        console.log(tournament.name+" Has: "+roundCount+" rounds.");
        // looping for each round
        while(i<=roundCount){
          // fires async http request that requests every round in the tournament
          HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournament.tournamentId+'&round_number='+i+'&access_token=6fe6daa931', function(error, response){
            // Checks if round is empty
            if(response.data.meta.total_count === 0){
              console.log("Lege swiss round !!!!! <---- fout in de api")
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
                      team_2_score: item.team_2_score
                    };
                  }
                  var meta = {
                    round_number: item.swiss_round.round_number,
                    gameID: item.id,
                    tournamentID: item.tournament_id,
                    winner: item.winner,
                    field: item.game_site.name
                  }
                  // if checks if the game allready exists
                  var exists = results.findOne({"meta.gameID": item.id})
                  // if it exists update instead of inserting
                  if (exists){
                    console.log("Document updated")
                    results.update(
                      {"meta.gameID": item.id},
                      {doc: doc, meta: meta}
                    )
                    // else insert the document in the local mongoDB
                  } else {
                    console.log("Document inserted")
                    results.insert({doc, meta})
                  }
              });
            }
          });
          i++;
        }
      })
    });
  }, 600000) // ammount of mili seconds the function runs again
}
