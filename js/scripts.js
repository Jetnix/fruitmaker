$(document).ready(function() {
  $("form#option1").submit(function(event) {
  var shape = $("input:radio[name=shape]:checked").val();
  var color = $("input:radio[name=color]:checked").val();

  if (shape === "round" && color === "yellow") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".roundyellow").show();
  }
  else if (shape === "round" && color === "red") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".roundred").show();
  }
  else if (shape === "round" && color === "blue") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".roundblue").show();
  }
  else if (shape === "long" && color === "yellow") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".longyellow").show();
  }
  else if (shape === "long" && color === "red") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".longred").show();
  }
  else if (shape === "long" && color === "blue") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".longblue").show();
  }
  else if (shape === "oval" && color === "yellow") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".ovalyellow").show();
  }
  else if (shape === "oval" && color === "red") {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".ovalred").show();
  }
  else {
    console.log(shape, color);
    $("#newfruit").hide();
    $("#option1").hide();
    $(".ovalblue").show();
  }
  event.preventDefault();
  });
});
