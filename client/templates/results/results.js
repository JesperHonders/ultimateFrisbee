Template.results.helpers({
  result: function() {
    var pageId= parseInt(this);
    return results.find({"meta.tournamentID": pageId}, {sort: {"meta.round_number": -1}});
  },
});


Template.results.events({
  'click .resultRow'(event) {
    $('[data-id="'+this._id+'"]').slideToggle()
  }
})

Template.results.rendered = function(){
  console.log(this.data)
}
