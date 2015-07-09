Template.post.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var textarea = template.find('textarea');

    Posts.insert({message: textarea.value});

    textarea.value = '';
  }
});
