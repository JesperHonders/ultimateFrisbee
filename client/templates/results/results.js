Template.results.helpers({
  results: function() {
    var pageId= parseInt(this.id);
    var today = new Date();
    var dd = today.getDate();
    var mm = ('0' + (today.getMonth()+1)).slice(-2) // January = +1 .slice(-2) checks if there are 2 numbers if not add a 0
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if (this.mode === "finished") {
      $(".mode-toggler").each(function(){
        $(this).removeClass("active");
      })
      $("#finished").addClass("active");
      var games = results.find({"meta.tournamentID": pageId, "meta.winner": {$ne:null}}, {sort: {"meta.field": 1}}).fetch();
    } else if (this.mode === "live") {
      var games = results.find({"meta.tournamentID": pageId, "time.startDate": yyyy+"-"+mm+"-"+dd, "meta.winner": null, "time.startHour": {$gte: hour, $lte: hour+1}}, {sort: {"meta.field": 1}}).fetch();
    } else if (this.mode === "upcomming") {
      $(".mode-toggler").each(function(){
        $(this).removeClass("active");
      })
      $("#upcomming").addClass("active");
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
  },
  templateGestures: {
    'swipeleft .resultRowShow': function (event, templateInstance) {
      $('[data-id="'+this._id+'"]').slideToggle();
      $('[data-id="'+this._id+'"]').closest("li").toggleClass("show");
    }
  }
});


Template.results.events({
  'click .mode-toggler' (event) {
    $(".mode-toggler").each(function(){
      $(this).removeClass("active");
    })
    $(event.toElement).addClass("active");
  },
  'click .close-hidden-row'(event) {
    $('[data-id="'+this._id+'"]').closest("li").toggleClass("show");
    $('[data-id="'+this._id+'"]').slideToggle();
  },
  'click .submit-score'(event) {
    var gameID = this.meta.gameID;
    noty({
      text: 'Are you sure you want to end this game?',
      type: 'confirm',
      buttons: [
           {
               addClass: 'btn btn-primary', text: 'Yes', onClick: function ($noty) {
                   $noty.close();
                   Meteor.call("finalizeScore", gameID)
                   noty({ text: 'Score send', type: 'success' });
               }
           },
           {
               addClass: 'btn btn-danger', text: 'No', onClick: function ($noty) {
                   $noty.close();
               }
           }
        ]
    })
  },

  'click .team-1-score-plus' (event) {
    console.log(this.doc.team_1_score+1);
    var id = this._id;
    var team = "team_1"
    var score = this.doc.team_1_score+1;
    Meteor.call('editScoreField1', score, id)
  },
  'click .team-1-score-min' (event) {
    console.log(this.doc.team_1_score-1);
    var id = this._id;
    var team = "team_1"
    var score = this.doc.team_1_score-1;
    Meteor.call('editScoreField1', score, id)
  },
  'click .team-2-score-plus' (event) {
    console.log(this.doc.team_2_score+1);
    var id = this._id;
    var score = this.doc.team_2_score+1;
    Meteor.call('editScoreField2', score, id)
  },
  'click .team-2-score-min' (event) {
    console.log(this.doc.team_2_score-1);
    var id = this._id;
    var score = this.doc.team_2_score-1;
    Meteor.call('editScoreField2', score, id)
  },
  'change .picker-1' (event) {
    var id= this._id;
    var color = event.target.value;
    Meteor.call("colorShirt1",id,color)
  },
  'change .picker-2' (event) {
    var id= this._id;
    var color = event.target.value;
    Meteor.call("colorShirt2",id,color)
  }
})

Template.results.rendered = function() {
  console.log(this.data.id)
  Meteor.subscribe('results')
}
