Router.configure({
    layoutTemplate: 'baseLayout'
});

Router.map(function(){
  this.route('home',{path: '/'})
  this.route('results',{
    path: '/results/:id/:mode',
    data: function(){
      return {id: this.params.id, mode: this.params.mode}
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
