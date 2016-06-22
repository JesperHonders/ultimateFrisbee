Meteor.publish('tournaments', function tournamentPublication() {
   return tournaments.find();
 });

 Meteor.publish('results', function resultsPublication() {
    return results.find({});
  });
