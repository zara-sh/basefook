$(document).ready(function () {
  
  // this is a very simple check to see if there's a username stored
  if (!localStorage.getItem('username')) {
    // prompt for one from user if not
    window.username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  } else {
    window.username = localStorage.getItem('username');
  }

  var $container = $('#newsfeed');

  // this just makes things appear  
  var index = bacefook.newsfeed.length -1;
  while (index >= 0) {
    var post = bacefook.newsfeed[index];
    var $post = $('<div></div>');

    $post.text(post.text);

    var $friend = $('<div></div>');

    $friend.addClass('friend');
    $friend.text(post.friend);

    $post.append($friend);

    $container.append($post);
    index -= 1;
  }
});