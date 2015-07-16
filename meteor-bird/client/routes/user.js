Router.route('/user/:_id', function() {
  this.render('user', {
    data: function() {
      var userId = this.params._id;
      return {
        user: Meteor.users.findOne({_id: userId}),
        posts: Posts.list(userId)
      }
    }
  });
});
