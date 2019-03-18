$(document).ready(function() {
  //gets the network status from the browser navigator api once page is loaded
  if (navigator.onLine) {
    console.log("online");
    $("#netchk").removeClass("offline");
    $("#netchk").addClass("online");
  } else {
    console.log("offline");
    $("#netchk").removeClass("online");
    $("#netchk").addClass("offline");
  }

  //event listener for changes in the netwrok
  window.addEventListener("offline", function(e) {
    $("#netchk").removeClass("online");
    $("#netchk").addClass("offline");
  });

  window.addEventListener("online", function(e) {
    $("#netchk").removeClass("offline");
    $("#netchk").addClass("online");
  });
});
