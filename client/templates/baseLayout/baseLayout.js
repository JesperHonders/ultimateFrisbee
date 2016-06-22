Template.baseLayout.helpers({
  tournament: function() {
    return tournaments.find({});
  },
});

Template.baseLayout.events({
  'click .menuAnchor' (event){
    $("#sb-site").css("transform", "translate(0px)");
    $(".sb-slidebar").removeClass("sb-active");
    var pageName = event.toElement.text;
    $("#pageName")[0].innerText = pageName;
  },
})

Template.baseLayout.rendered = function() {
  Meteor.subscribe('tournaments')
  $.slidebars();
}
