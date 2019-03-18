$(document).ready(function() {
  //gets the network status from the browser navigator api once page is loaded
  if (navigator.onLine) {
    console.log("online");
    $("#netchk").html("online");
    $(".dot").removeClass("offline");
    $(".dot").addClass("online");
  } else {
    console.log("offline");
    $("#netchk").html("offline");
    $(".dot").removeClass("online");
    $(".dot").addClass("offline");
  }

  //event listener for changes in the netwrok
  window.addEventListener("offline", function(e) {
    $("#netchk").html("offline");
    $(".dot").removeClass("online");
    $(".dot").addClass("offline");
  });

  window.addEventListener("online", function(e) {
    console.log("online");
    $("#netchk").html("online");
    $(".dot").removeClass("offline");
    $(".dot").addClass("online");
  });
});

var findIP = new Promise(r => {
  var w = window,
    a = new (w.RTCPeerConnection ||
      w.mozRTCPeerConnection ||
      w.webkitRTCPeerConnection)({ iceServers: [] }),
    b = () => {};
  a.createDataChannel("");
  a.createOffer(c => a.setLocalDescription(c, b, b), b);
  a.onicecandidate = c => {
    try {
      c.candidate.candidate
        .match(
          /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g
        )
        .forEach(r);
    } catch (e) {}
  };
});
findIP
  .then(ip => $("#ipchk").html("your ip: " + ip))
  .catch(e => console.error(e));
