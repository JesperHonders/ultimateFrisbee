Template.results.helpers({
  result: function() {
    return resultsMen.find({}, {sort: {"meta.round_number": -1}});
  },
});

Template.results.rendered = function(){
}
