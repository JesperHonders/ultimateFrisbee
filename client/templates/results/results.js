Template.results.helpers({
  results: function() {
    var pageId= parseInt(this.id);
    var today = new Date();
    var dd = ('0' + (today.getDate())).slice(-2);
    var mm = ('0' + (today.getMonth()+1)).slice(-2) // January = +1 .slice(-2) checks if there are 2 numbers if not add a 0
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var games = results.find({"meta.tournamentID": pageId, "time.startDate": yyyy+"-"+mm+"-"+dd, "meta.winner": null, "time.startHour": {$gte: hour, $lte: hour+2}}, {sort: {"meta.field": 1}}).fetch();
    amountOfGames = results.find({"meta.tournamentID": pageId, "time.startDate": yyyy+"-"+mm+"-"+dd, "meta.winner": null, "time.startHour": {$gte: hour, $lte: hour+2}}, {sort: {"meta.field": 1}}).count();
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
    'tap .resultRowShow':function (event, templateInstance) {
      $('.hiddenRow').hide();
      $('.resultRowShow').show();
      $('[data-id="'+this._id+'"]').slideToggle();
      $('[data-id="'+this._id+'"]').closest("li").toggleClass("show");
    }
  }
});


Template.results.events({
  'click .team-1-score-plus': function (event) {
    alert('click');
  },
  'click .close-hidden-row':function (event) {
    $('[data-id="'+this._id+'"]').closest("li").toggleClass("show");
    $('[data-id="'+this._id+'"]').slideToggle();
  },
  'click .submit-score':function (event) {
    var gameID = this.meta.gameID;
    var id = this._id;
    noty({
      text: 'Are you sure you want to end this game?',
      type: 'confirm',
      buttons: [
           {
               addClass: 'btn btn-primary', text: 'Yes', onClick: function ($noty) {
                   $noty.close();
                   Meteor.call("finalizeScore", gameID)
                   Meteor.call("endGame", id)
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

  'click .team-1-score-plus':function (event) {
    var id = this._id;
    var team = "team_1"
    var score = this.doc.team_1_score+1;
    Meteor.call('editScoreField1', score, id)
  },
  'click .team-1-score-min':function (event) {
    var id = this._id;
    var team = "team_1"
    var score = this.doc.team_1_score-1;
    Meteor.call('editScoreField1', score, id)
  },
  'click .team-2-score-plus':function (event) {
    var id = this._id;
    var score = this.doc.team_2_score+1;
    Meteor.call('editScoreField2', score, id)
  },
  'click .team-2-score-min':function (event) {
    var id = this._id;
    var score = this.doc.team_2_score-1;
    Meteor.call('editScoreField2', score, id)
  },
  'change .picker-1':function (event) {
    var id= this._id;
    var color = event.target.value;
    Meteor.call("colorShirt1",id,color)
  },
  'change .picker-2':function (event) {
    var id= this._id;
    var color = event.target.value;
    Meteor.call("colorShirt2",id,color)
  }
})

Template.results.rendered = function() {
  Meteor.subscribe('results')
  if (amountOfGames === 0){
    document.getElementById('nothingFound').className = '';
  }
  stickyHeaders.load($('.round-heading'));
}
