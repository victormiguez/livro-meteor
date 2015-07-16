Template.post.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var textarea = template.find('textarea');
    var name = Meteor.user().profile.name;
    Posts.publish(textarea.value, name);
    textarea.value = '';
  }
});
