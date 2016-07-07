Router.configure({
    layoutTemplate: 'baseLayout',
    loadingTemplate: 'loading'
});

Router.map(function(){
  this.route('home',{path: '/'})
  this.route('results',{
    path: '/results/:id/live',
    waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("results");
    },
    data: function(){
      return {id: this.params.id}
    }
  }),
  this.route('finished',{
    path: '/results/:id/finished',
    waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("results");
    },
    data: function(){
      return {id: this.params.id}
    }
  }),
  this.route('upcomming',{
    path: '/results/:id/upcomming',
    waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("results");
    },
    data: function(){
      return {id: this.params.id}
    }
  }),
  this.route('settings', {path: 'settings'})
  this.route('fieldplan',{path: 'fieldplan'})
  this.route('account', {path: 'account'})
})
