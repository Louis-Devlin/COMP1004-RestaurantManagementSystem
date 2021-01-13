$(document).ready(function () {
  $("#map").click(function () {
    $("#page-content-wrapper").load("map.html");
  });
});

$(document).ready(function () {
  $("#treasure").click(function () {
    $("#page-content-wrapper").load("treasure.html");
  });
});

$(document).ready(function () {
  $("#data").click(function () {
    $("#page-content-wrapper").load("data.html");
  });
});

$(document).ready(function () {
  $("#index").click(function () {
    $("#page-content-wrapper").load("indexPanel.html");
  });
});
