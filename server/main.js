import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  updateResults();
});

function updateResults() {
  Meteor.setInterval(function(){
    var allTournaments = tournaments.find({}).fetch();
    _.each(allTournaments, function(tournament){
      console.log('running'+ tournament.name)
      var self = this;
      var i = 1;
      HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournament.tournamentId+'&access_token=eb05d96dbe', function(error, response){
        var roundCount = response.data.meta.total_count;
        console.log(roundCount);
        while(i<=roundCount){
          console.log(i)
          HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournament.tournamentId+'&round_number='+i+'&access_token=6fe6daa931', function(error, response){
            if(response.data === null){
              console.log("Error in database!")
            }
            _.each(response.data.objects[0].games, function(item) {
              if(item.team_2 === null){
                var doc = {
                  team_1_name: item.team_1.name,
                  team_1_score: item.team_1_score
                };
              }
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
              var exists = results.findOne({"meta.gameID": item.id})
              if (exists){
                console.log("Document updated")
                results.update(
                  {"meta.gameID": item.id},
                  {doc: doc, meta: meta}
                )
              } else {
                console.log("Document inserted")
                results.insert({doc, meta})
              }
          });
          });
          i++;
        }
      })
      });

  }, 60000)
}
