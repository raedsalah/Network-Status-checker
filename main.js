$(document).ready(function() {
  if (navigator.onLine) {
    console.log("online");
    $("#content").html("online <span class='dot online'></span>");
  } else {
    console.log("offline");
    $("#content").html("offline <span class='dot offline'></span>");
  }
  window.addEventListener("offline", function(e) {
    console.log("offline");
    $("#content").html("offline <span class='dot offline'></span>");
  });

  window.addEventListener("online", function(e) {
    console.log("online");
    $("#content").html("online <span class='dot online'></span>");
  });
});
