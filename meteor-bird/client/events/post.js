Template.post.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var textarea = template.find('textarea');
    Posts.publish(textarea.value);
    textarea.value = '';
  }
});
