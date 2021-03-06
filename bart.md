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

Open your terminal and paste in the following:
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

Hit the "Return" key and now typ in:
```
	meteor
```

Now the app will be active on your localhost. The terminal will tell you which port to use.

## Minor courses implementation

### Web App From Scratch

* Connecting to the Windmill API and get and manipulate data from this API.
* Templating
* Routing
* Use of Underscore js
* Use of other Micro libraries like HTTP
* Advanced server polling

### CSS To The Rescue

* Responsive design (mobile first)
* Flexbox
* CSS prefixes to ensure the product works on all browsers.
* The use of special selectors like selector[type="submit"].
* Use of animations @keyframes
* Use of translations (GPU boosted)
* Several "Hacks" as described from the book css secrets ("Lea Verou")

### Real Time Web

* The app is made in Meteor
* All the scores are real time (As far as real time is possible -"Harm")
* To fasten the app we used our own server to request all the changes from the api. so we don't have to deal with the slow server from leaguevine
* Did research on iron:Router Routing, made changes that will improve the app on UX.
* Smart usage of mongoDB
* Use of pubsub

### Performance Matters

* Uses a second server to function like a hatch that will give all the scores, so we don't have to use the API everytime we request the scores. This will increase the speed of the load time.
* Drasticly improved server communication between our own and the API.

## Workflow

We worked in on this application as a duo, Jesper (Lead programming) Bart (Lead Design/Css). Notice the lead there?
Thats because we worked together on both of those things, only Jesper had the final say about programming and Bart about design.

Every day we had contact over skype and talked about the changes we made and thought were necessary, these changes were described on our Trello, and assigned to each member.

## Future feature wishlist

* an team page where you can track the process of a individual team
* Build in ranking in the results page, so you can see what the ranking is of a team.
* Final score button based on game time.
* Timer in live page, so you can see how long the game is running

## My contribution

### Reflection

My tasks and main responsability was Design, Concept, UX & Front-end development. These are familiar roles for me and I like to iterate trough how things work and they should work. We started off with a bit of a rough start. We had our meeting with Christian, not yet knowing we were going to work as a team, which was decided later that week. When we all decided we would work on teams we made a clear ceperation of roles: Jesper would mainly focus the back-end en I would mainly focus the design. This worked out pretty good.

I found that it's really hard to work with another developer when it comes to code. Especially when you work together on a project like this it was really hard to be very organized and structured. For example when Jesper added a functionality he mostly would have to write some HTML to connect this functionality to. Sometimes I thought: "Hmm that code could be written better", then I would change it and the functionality would broke done because it was written for this other HTML code which I replaced. After a while I gave up on this and just try to work arround it. Although I mainly wrote all the CSS Jesper also contributed a bit to that and again I learned that it's get messy when 2 developers write (basically) their own CSS codes in eachothers files. The structure quickly fails and sometimes double selectors occure. 

I think this is a learning point for a next project where I want to make sure there are very clear agreement on how to structure the code and when someone adds code, where this code will be added. With back-end this can be more controlled by the back-ender. For HTML & CSS it's pretty much putting your hands together and pray to god.

The collaboration with Jesper went really good. We had different tools we relied upon. We used Trello for all our tasks and this worked really good. We could both add tasks and assign one of us or both of us to this task. We also used alot of Skype. We could talk thing over concering the project or share screen to show what goes wrong or what must be fixed etc. 

The use of Github was a gift from the great developing god. It worked really well for us and it made sure our pieces of code would collapse into the project we have today. 

# My tasks per week


## Week 1

* Thinking out the first concept.
* Schetch out the concept.
* API research
* Present the concept to the client.

## Week 2

* Iterate on the concept based on our first meeting.
* Creating new sketches.
* Create a paper prototype.
* Visit Windmill 2016 (03-06-16).

## Week 3

* Concept iteration on basis of feedback visit Windmill
* Removed the original detail page and put the detail page inside the result list page.
* Setup of the pages with HTML.
* First styling with CSS.

## Week 4

* Again little imporvements were made to the concept and design.
* I worked really hard on all the pages, when the functionality was setup I created the HTML and CSS needed to look like it does today.

## Week 5

* Bug fixing.
* Created the shirt colors front-end.
* I worked really hard on all the pages, when the functionality was setup I created the HTML and CSS needed to look like it does tod

## Week 6

* After meetings with Koop, Joost and Harm we decided to have some major and minor changes.
* Redesign. 

## Week 7

* Created the sticky header so Jesper could implement this easy in Meteor.
* Made the app desktop ready.
* Added the redesign in code.
* UX fixes.
* Improved the settings page.
* Improved the account page.
* Improved the navigation.


## How does it work

In the meteor methods file we have the following functions:

**AddTournament.**

AddTournament is used to add a tournament to the tournament collection. This collection is used to poll tournaments from the leaguevine API

``` javascript
addTournament: function(id, name){
	// adds the tournament id in our local database, we use that for polling the server
	tournaments.insert({tournamentID: id, name: name})
	// Syncs the score with the database, if the tournament isn't in our own database its inserts the new scores.
	Meteor.call("updateResults");
},
```

**RemoveTournament.**

Remove tournament is used to remove a tournament from the tournament collection. This collection is used to poll tournaments from the leaguevine API.

``` javascript
removeTournament: function(id){
	// removes the tournament from the tournament database
	tournaments.remove({_id: id})
},
```

**editScoreField (1 & 2)**

Edit score field is used to edit the score in the Results collection. with the use of scorerunning variable its possible to check if someone has requested the function multiple times in 1 second. If so only update 1 time.

``` javascript
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
```

**Endgame**

The Endgame function is used to set a winner ("Not the actual winner that is set when the server polls for the most recent scores"). But this is used to remove the game from the live section.

``` javascript
endGame: function(id){
	// sets the winner for now, this changes when the server polls, but needs a winner otherwise its still live.
	results.update(
		{_id: id},
		{$set: {"meta.winner": "set"}}
	)
},
```

**Color shirt.**

The color shirt function is used to add a color field to the results.doc collection. this is used to display the team color on the application.

``` javascript
colorShirt1: function(id, color){
	// Updates the field shirt color, if it doesn't exists adds it
	results.update(
		{_id: id},
		{$set: {"doc.team_1_color": color}}
	)
},
```

**finalizeScore.**

Finalize Score is used to send the score to the leaguevine API. When used sends the final score of the game to the API. A winner will be set by the API

``` javascript
finalizeScore: function(gameID){
	// sends the game to the api
	var game = results.findOne({"meta.gameID": gameID});
	HTTP.post('https://api.leaguevine.com/v1/game_scores/', {headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'bearer 7d1ed8932f'},data: { "game_id": gameID,"team_1_score": game.doc.team_1_score,"team_2_score": game.doc.team_2_score,"is_final": "True"}
	}, function( error, response ) {
		console.log(error, response);
	});
},
```

**createScoreKeeper.**

createScoreKeeper is used to create a user in the users collection of meteor. Without this function it isn't possible to add new score keepers of the back end of the app. (Settings page)

``` javascript
createScoreKeeper: function(emailVar, passwordVar){
	// adds an account in the database
	Accounts.createUser({
			email: emailVar,
			password: passwordVar
	});
},
```

**updateResults**

UpdateResults gets all the data from the server regarding to everything that is in the tournaments collection. it checks how many rounds there are in the tournaments and will send async calls of all the routes. Inside these calls it will write all new changes or updates into the results collection.
This code has several versions, and has gone trough sever iterations to make it faster.

``` javascript
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
```

To in the results pages we have the following functions

**Variable Declartions**

These veriables we need to query inside the results collection. almost all these vars are made to get the current time.

``` javascript
var pageId= parseInt(this.id);
var today = new Date();
var dd = ('0' + (today.getDate())).slice(-2);
var mm = ('0' + (today.getMonth()+1)).slice(-2) // January = +1 .slice(-2) checks if there are 2 numbers if not add a 0
var yyyy = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
var games = results.find({"meta.tournamentID": pageId, "time.startDate": yyyy+"-"+mm+"-"+dd, "meta.winner": null, "time.startHour": {$gte: hour, $lte: hour+2}}, {sort: {"meta.field": 1}}).fetch();
```

**Getting unique round numbers**

The following code is used to get the the amount of roundnumbers inside the tournament/mode.
This code checks all the games and gets the round_numbers this will output an array of all the round numbers like [1,2,3,4,5,6,7,8]

``` javascript
var rounds = _.uniq(_.map(games, function(game){
	return game.meta.round_number
}));
```

**Rewriting Results object**

In this code we rewrite the results objects to several objects as long as the unique numbers, within these objects are the games within these rounds.

``` javascript
var gamesByRound = _.map(rounds, function(round){
	var roundGames = games.filter(function(game){
		return game.meta.round_number === round
	})
	return {roundNumber: roundGames[0].meta.round_number, games: roundGames}
})
```
**Sorting the games**

In the next code we will sort the games by there round number so its easier to display them on the front-end side.

``` javascript
return _.sortBy(gamesByRound, function(round){
	return round.roundNumber;
}).reverse();
},
```


## Week 1

The first week we studied the API and tested what we could get out of it, Also we brainstormed and thought about the app how its going to work. We sketched alot of ideas out on paper. Sketches and drawings helped to form the basics of our idea.

On Friday we presented these sketches to the client.

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

##Week 6

This week we revamped our idea of the app. During our meeting with Harm and Koop we got some idea's that would benefit the app. This week was mostly spent rethinking and sketching our new ideas

##Week 7

This week we totally went for it, we created several new features and revised those that needed a little attention.

Also I fixed the event listener bug what was driving me crazy.

We added feedback on pages who were empty
Added a loader page for better feedback
Account creation to let only the ScoreKeepers create accounts.
Made the score only updatable every second so when people press the button on the same time the app doesn't register +10 score.