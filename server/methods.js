// Meteor.methods({
//   fetchResults: function(tournamentID) {
//     resultsMen.remove({})
//     var self = this;
//     console.log('started http request')
//     var i = 0;
//     while(i<9){
//       var response = HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id='+tournamentID+'&round_number='+i+'&access_token=6fe6daa931')
//       _.each(response.data.objects[0].games, function(item) {
//         console.log(item.team_1.name)
//         if(item.team_2 === null){
//           var doc = {
//             round_number: item.swiss_round.round_number,
//             team_1_name: item.team_1.name,
//             team_1_score: item.team_1_score
//           };
//         }
//         else {
//           var doc = {
//             round_number: item.swiss_round.round_number,
//             team_1_name: item.team_1.name,
//             team_1_score: item.team_1_score,
//             team_2_name: item.team_2.name,
//             team_2_score: item.team_2_score
//           };
//         }
//
//         resultsMen.insert({doc})
//       });
//       i++;
//     }
//
//     console.log('ended http request')
//   }
// });
