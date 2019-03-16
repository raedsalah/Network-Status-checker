$(document).ready(function() {
  //gets the network status from the browser navigator api once page is loaded
  if (navigator.onLine) {
    console.log("online");
    $("#content").html("online <span class='dot online'></span>");
  } else {
    console.log("offline");
    $("#content").html("offline <span class='dot offline'></span>");
  }

  //event listener for changes in the netwrok
  window.addEventListener("offline", function(e) {
    console.log("offline");
    $("#content").html("offline <span class='dot offline'></span>");
  });

  window.addEventListener("online", function(e) {
    console.log("online");
    $("#content").html("online <span class='dot online'></span>");
  });
});
