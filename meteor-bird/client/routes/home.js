Router.route('/', function() {
  this.render('home', {
    data: function() {
      return {
        posts: Posts.list(Meteor.userId())
      }
    }
  })
}, {name: 'home'});
