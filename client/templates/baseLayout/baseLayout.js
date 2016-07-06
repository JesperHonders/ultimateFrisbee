Template.baseLayout.helpers({
  tournament: function() {
    return tournaments.find({});
  },
  hasClass: function(el, cls){}
});

Template.baseLayout.events({
  'click .menuAnchor' (event){
    var pageName = event.toElement.text;
    $("#pageName")[0].innerText = pageName;
    document.getElementById('CanvasMenu').className = '';
    document.getElementById('contentWrapper').className = '';
    document.getElementById('sb-toggle-left').className = '';
  },
  'click #sb-toggle-left' (event){
    var el = toggleButton = document.getElementById('sb-toggle-left');
    var cls = 'active';
    var hasClass = el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    if (hasClass) {
      // element is active
      el.className = '';
      document.getElementById('CanvasMenu').className = ''
    } else {
      // element is not active
      el.className += 'active';
      document.getElementById('CanvasMenu').className = 'active'
      document.getElementById('CanvasMenu').style.transform = ''
    }
  },
  'click #sb-toggle-right' (event){
    var el = toggleButton = document.getElementById('sb-toggle-left');
    var cls = 'active';
    var hasClass = el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    if (hasClass) {
      // element is active
      el.className = '';
      document.getElementById('CanvasMenu').className = ''
    } else {
      // element is not active
      el.className += 'active';
      document.getElementById('CanvasMenu').className = 'active'
      document.getElementById('CanvasMenu').style.transform = ''
    }
  }
})

Template.baseLayout.rendered = function() {
  Meteor.subscribe('tournaments');
}
