Router.configure({
    layoutTemplate: 'baseLayout'
});

Router.map(function(){
  this.route('home',{path: '/'})
  this.route('results',{
    path: '/results/:id/live',
    data: function(){
      return {id: this.params.id}
    }
  }),
  this.route('finished',{
    path: '/results/:id/finished',
    data: function(){
      return {id: this.params.id}
    }
  }),
  this.route('upcomming',{
    path: '/results/:id/upcomming',
    data: function(){
      return {id: this.params.id}
    }
  }),
  this.route('game',{
    path: '/game/:id/',
    data: function(){
      return this.params.id
    }
  })
  this.route('settings', {path: 'settings'})
  this.route('fieldplan',{path: 'fieldplan'})
  this.route('account', {path: 'account'})
})
