Template.game.helpers({
  result: function() {
    var pageId= parseInt(this);
    return results.findOne({"meta.gameID": pageId});
  },
});
