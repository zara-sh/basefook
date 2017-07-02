$(document).ready(function () {
  
  // this is a very simple check to see if there's a username stored

 if (!localStorage.getItem('username')) {
    // prompt for one from user if not
    window.username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  } else {
    window.username = localStorage.getItem('username');
  }

 $(".topcorner").find("#login").on('click',function(){
  $(this).text("Welcome "+ window.username)});
 
  var $container = $('#newsfeed');

  // this just makes things appear  
  var index = bacefook.newsfeed.length -1;
  while (index >= 0) {
    var post = bacefook.newsfeed[index];
    var $post = $('<div></div>');

   // $post.text(post.text); 

    var $friend = $('<div></div>');

    $friend.addClass('friend');
    //$friend.text(post.friend); 

    $post.append($friend);

    $container.append($post);
    index -= 1;
  }

//list of freinds
document.getElementById("friend 1").innerHTML = friends[0];
document.getElementById("friend 2").innerHTML = friends[1];
document.getElementById("friend 3").innerHTML = friends[2];
document.getElementById("friend 4").innerHTML = friends[3];

var postGenerate=[];

    $("#buttonNewPost").click(function(){
      var img = new Image();
      img.width="300";
      img.height="200";
      img.src = generatePostObj().image;
       postGenerate.push((JSON.stringify
            ( generatePostObj().friend  + 
        ":" + generatePostObj().text    + 
        " " + generatePostObj().feeling +  
        " ;" +generatePostObj().timestamp)),
           img )
      $("#postGn").html( postGenerate);
      });
});


