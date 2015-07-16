Router.route('/user/:_id', function() {
  this.render('user', {
    data: function() {
      var _id = this.params._id;
      var isFollowing = Friendships.isFollowing(_id);
      Session.set('currentUserId', _id);
      Session.set('isFollowing', isFollowing);

      return {
        user: Meteor.users.findOne({_id: _id}),
        posts: Posts.list(_id)
      }
    }
  });
}, {name: 'user'});
