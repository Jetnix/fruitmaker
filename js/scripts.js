$(document).ready(function() {
  $("form#option").submit(function(event) {
  var make = $("input:radio[name=make]:checked").val();
  var model = $("input:radio[name=model]:checked").val();
  var color = $("input:radio[name=color]:checked").val();

  if (make === "bmw" && model === "coupe" && color === "green") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".bmwcoupegrn").show();
  }
  else if (make === "bmw" && model === "coupe" && color === "red") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".bmwcoupered").show();
  }
  else if (make === "bmw" && model === "coupe" && color === "blue") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".bmwcoupeblue").show();
  }
  else if (make === "ferrari" && model === "coupe" && color === "green") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".ferraricoupegrn").show();
  }
  else if (make === "ferrari" && model === "coupe" && color === "red") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".ferraricoupered").show();
  }
  else if (make === "ferrari" && model === "coupe" && color === "blue") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".ferraricoupeblue").show();
  }
  else if (make === "honda" && model === "coupe" && color === "green") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".hondacoupegreen").show();
  }
  else if (make === "honda" && model === "coupe" && color === "red") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".hondacoupered").show();
  }
  else {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".hondacoupeblue").show();
  }
  event.preventDefault();
  });
});
