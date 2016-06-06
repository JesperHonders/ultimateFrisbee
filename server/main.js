import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  updateMen();
  console.log("Running updateMen")
});

function updateMen() {
  Meteor.setInterval(function(){
    console.log(new Date())
    var self = this;
    var i = 0;
    while(i<6){
      HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id=19752&round_number='+i+'&access_token=6fe6daa931', function(error, response){
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
          var exists = resultsMen.findOne({"meta.gameID": item.id})
          if (exists){
            console.log("Document updated")
            resultsMen.update(
              {"meta.gameID": item.id},
              {doc: doc, meta: meta}
            )
          } else {
            console.log("Document inserted")
            resultsMen.insert({doc, meta})
          }
      });
      });
      i++;
    }
  }, 10000)
}
