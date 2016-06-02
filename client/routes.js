Router.configure({
    layoutTemplate: 'baseLayout'
});

Router.map(function(){
  this.route('home',{path: '/'})
  this.route('results',{
    path: '/results/:id',
    data: function(){
      return this.params.id
    }
  })
})
