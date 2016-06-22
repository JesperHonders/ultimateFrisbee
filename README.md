# UltimateFrisbee Windmill Application

## Week 1

In the first week of the project we tried to poll data directly of the Leaguevine API, this approach had several problems.

1. Data is not realtime
2. Api is slow (Takes about 30 seconds to get all the data)
3. Request was blocking so the app stopped working when the api call was in progress

the code we used: 

```javascript
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  updateMen();
  console.log("Running updateMen")
});

function updateMen() {
  // Meteor.setInterval(function(){
    console.log(new Date())
    var self = this;
    console.log('started http request')
    var i = 0;
    while(i<6){
      var response = HTTP.get('https://api.leaguevine.com/v1/swiss_rounds/?tournament_id=19752&round_number='+i+'&access_token=6fe6daa931');
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
          winner: item.winner
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
      i++;
    }
    console.log('ended http request')
    console.log(new Date())
  // }, 60000)
}
```

Several things went wrong when using this code. We trusted the api that the round number would follow each other up.
This clearly wasn't the case. When a round was missing the whole code would just explode and the app would go offline.
At least the data was stored in a local database based on MONGODB

The HTML we used to display the data is shown below

```
<template name="results">
  <h1>results page: men</h1>
  <h2>Results refresh every minute</h2>
  <table>
    {{#each result}}
    <tr>
      <td>{{doc.team_1_name}}</td>
      <td>{{doc.team_1_score}}</td>
      <td>{{doc.team_2_score}}</td>
      <td>{{doc.team_2_name}}</td>
    </tr>
    {{/each}}
  </table>
</template>
```

##Week 2

In week 2 we tried to enhance the server polling, we did that in several ways.


1. we made the api request non blocking. This allowed us to poll to the server more often. We changed the intevall from 60 Seconds to 10.
```javascript
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
```
Still we had a problem with making the data realtime, as this would just poll the server every 10 seconds, and the majority of the requests
failed by time out. Basicly we were bombing the api with continious large requests.
