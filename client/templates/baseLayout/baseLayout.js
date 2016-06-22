Template.baseLayout.helpers({
  tournament: function() {
    return tournaments.find({});
  },
});

Template.baseLayout.events({
  'click a' (event){
    $("#sb-site").css("transform", "translate(0px)");
    $(".sb-slidebar").removeClass("sb-active");
  }
})

Template.baseLayout.rendered = function() {
  Meteor.subscribe('tournaments')
  $.slidebars();
}
