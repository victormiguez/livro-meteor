Template.timeline.helpers({
	posts: function() {
    return Posts.list(Meteor.userId());
  }
});
