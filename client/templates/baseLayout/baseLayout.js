Template.baseLayout.helpers({
  tournament: function() {
    return tournaments.find({});
  },
});

Template.baseLayout.rendered = function() {
  $.slidebars();
}
