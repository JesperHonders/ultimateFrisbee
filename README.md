# UltimateFrisbee Windmill Application

![The app in grayscale](public/img/windmill-logo.png)

### Contributors

* [Jesper Honders](https://github.com/JesperHonders)
* [Bart Beemster](https://github.com/beemstb002)

### Client

* Christian Shaffner

## About Windmill

Windmill is the biggest Ultimate Firsbee tournament in the Neterlands. There are three different divisions: Open (male division), Mixed division and a Women division. The tournaments takes a full weekend late in spring. 

[![Ultimate Frisbee](https://img.youtube.com/vi/HhUays2ehyI/0.jpg)](https://www.youtube.com/watch?v=HhUays2ehyI)

## The Problem

Windmill uses an app to keep scores. The problem with this app is that its not user friendly, its slow, not safe and works like shit. The idea of having an app to keep the scores of all matches and to show who is playing who now and next round and where is very appealing to the Windmill organization. That's why they want an app which does all the old app does, but better. The app also has to be user friendly and have a good UI.

### Must have

- [x] An interactive app which can be used by players and viewers to gain information about matches.
- [x] A good and clear user interface.
- [x] Teams can see where they have to play their next game.
- [x] All matches can be view on the app with certain match details like the score.
- [x] All viewers can add points to a match when a team scores.
- [x] The score system is controlled and not anyone can submit a(n untrue) score.
- [x] The app must have a view of the field plan.
- [x] It would be fun to do something with the color of shirts.

## The Solution

For this project we created an interactive app for the Windmill Tournament. This app satisfies every need of the client and more. We added extra functionalities to ensure the product is really top notch and ready to use for the next Windmill season. The app can be viewed [here](http://37.139.2.107).

### Installation

To install the application you first need to install Meteor. Meteor is a cohesive development platform, a collection of libraries and packages that are bound together in a tidy way to make web development easier. 

If you're a Windows user you can simply go to this link and download the file. Just simply follow the steps during installation, it's pretty  basic. If your a Mac or Linux user were going to play with the command line.

Open your terminal and paste is the following:
```
	curl https://install.meteor.com/ | sh
```

This command will:
1. Connect to "install.meteor.com".
2. Download the latest version of Meteor.
3. Install that version of Meteor.

If the terminal asks for your password, just type it in and tap the "Return" key. Keep your terminal open.

Once we've installed Meteor we can now download the app from this Github page. Just click the green "Clone or download" button in top of this page and then click "Download ZIP". Go back to your terminal and type in cd and drag the folder from your downloads folder to the terminal. It should look something like this:
	cd /Applications/MAMP/htdocs/ultimateFrisbee

Hit the "Return" key and now typ it:
```
	meteor
```

Now the app will be active on your localhost. The terminal will tell you which port to use.

## Minor courses implementation

### Web App From Scratch 

* Connecting to the Windmill API and get and manipulate data from this API.
* Templating
* Routing

### CSS To The Rescue

* Responsive design (mobile first)
* Flexbox
* CSS prefixes to ensure the product works on all browsers.
* The use of special selectors like selector[type="submit"].

### Real Time Web

* De app is gemaakt met Meteor.
* De scores zijn real-time.
* Om de app te versnellen hebben we een eigen database die aan de achterkant data opvraagt en doorstuurt naar de API.

## Workflow

We worked in on this application as a duo, Jesper (Lead programming) Bart (Lead Design/Css). Notice the lead there? 
Thats because we worked together on both of those things, only Jesper had the final say about programming and Bart about design. 

Every day we had contact over skype and talked about the changes we made and tought were necessary, these changes were described on our Trello, and assigned to each member.

## Week 1

The first week we studied the API and tested what we could get out of it, Also we brainstormed and tought about the app how its going to work. We sketched alot of ideas out on paper. Sketches and drawings helped to form the basics of our idea.

On Friday we presented these skethces to the client.

See our process book for drawings and sketches.

## Week 2

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

```html
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

We also went futher on our concept based on the feedback we got from the client in Week 1. After some iterations on the concept we've created a paper prototype using Invision. This was to be the sketal of our app.

##Week 3

In week 2 we tried to enhance the server polling, we did that in several ways.


we made the api request non blocking. This allowed us to poll to the server more often. We changed the intevall from 60 Seconds to 10.
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
failed by time out. Basicly we were bombing the api with continious large requests. We had to solve this problem quick otherwise
the app would be useless.

And we didn't knew how much rounds there were inside 

Then we decided to use filters to just get what we need from the api, this drasticly improved polling time. We filtered the api request for the round numbers on forced bytes, this made the api request almost instant.

We were continiously changing how the app should work and iterate troughout the entire first 4 weeks. Based on some talks we've had with players we decided to get rid of the seperate detail page and instead build in a detail page in the results list itself. So the detail page and list would be in one page. This was the biggest change this week.

## Week 4

Displayed the rounds according to round numbers. This was a pain in the ass to do. as seen by the code below we heavily used underscore to archieve this.
This ammount of data manipulation makes the app a little bit slower.

```javascript
var games = results.find({"meta.tournamentID": pageId, "time.startHour": {$ne: hour}, "doc.team_1_score": 0, "doc.team_2_score": 0 }, {sort: {"meta.field": 1}}).fetch()
    }
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
    ```
    
    in this week we also fixed the scorekeeping functionality, wich uses a http request wich works like the following:
    
    ```javascript
    HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 4d7da879a1'},data: { "game_id": this.meta.gameID,"team_1_score": this.doc.team_1_score + 1,"team_2_score": this.doc.team_2_score,"is_final": "True"}
 +    }, function( error, response ) {
 +      if ( error ) {
 +        console.log( error );
 +      } else {
 +        console.log( response );
 +      }
 +    });
```
    
also we changed the way how we display data: 
    
```html
    <template name="results">
  <ul class="results">
    {{#each results}}
      <div class="round-block">

        <section class="round-heading">
          <h2>Round {{roundNumber}}</h2>
        </section>
        
        {{#each games}}
          <li class="resultRow">

              <div class="resultRowShow">
                <table>
                  <tbody>
                      <tr>

                        <td class="team-name col-md-4 col-sm-4 col-xs-4 text-right">
                            {{doc.team_1_name}}
                        </td>

                        <td class="col-md-1 col-sm-1 col-xs-1 text-center">
                            <i class="icon-tshirt"></i>
                        </td>

                        <td class="col-md-2 col-sm-2 col-xs-2 text-center">
                            <p class="field">{{meta.field}}</p><br>
                            <p class="score-time">{{doc.team_1_score}} - {{doc.team_2_score}}</p>
                        </td>

                        <td class="col-md-1 col-sm-1 col-xs-1 text-center">
                            <i class="icon-tshirt"></i>
                        </td>

                        <td class="team-name col-md-4 col-sm-4 col-xs-4 text-left">
                            {{doc.team_2_name}}
                        </td>

                      </tr>
                  </tbody>
                </table>
              </div>

              <div data-id="{{_id}}" class="hiddenRow">
                <div class="meta-data-row">

                  <i class="close-hidden-row fa fa-times" aria-hidden="true"></i>

                  <div class="col-md-12 col-xs-12 text-center">
                      <p class="hidden-field">{{meta.field}}</p><br>
                      <p class="hidden-time">16:00</p>
                  </div>

                  <div class="col-md-6 col-xs-6 text-center">
                      <i class="icon-tshirt"></i>
                      <h2>{{doc.team_1_name}}</h2>
                  </div>

                  <div class="col-md-6 col-xs-6 text-center">
                      <i class="icon-tshirt"></i>
                      <h2>{{doc.team_2_name}}</h2>
                  </div>

                  <div class="col-md-12 col-xs-12">
                      <div class="col-md-6 col-xs-6 text-center">
                          <p><button class="button btn-secondary team-1-score-min">-</button> <span>{{doc.team_1_score}}</span> <button class="button team-1-score-plus">+</button></p>
                      </div>

                      <div class="col-md-6 col-xs-6 text-center">
                          <p><button class="button btn-secondary team-2-score-min">-</button> <span>{{doc.team_2_score}}</span> <button class="button team-2-score-plus">+</button></p>
                      </div>
                  </div>

                  

                </div>
              </div>
          </li>
        {{/each}}

      </div>
    {{/each}}
  </ul>
</template>
```

##Week 5

The final week of the project. This week we added a few extras like shirt color changes, confirmations and several UI/UX improvements.

The shirt color is done by using an select html element that writes on change to our mobgodb. It adds an extra set of fields that hold hex color codes.

The confirmations are done by a jquery plugin called noty. Using noty its really easy to notify the user about changes with the use of a small library.




