$(document).ready(function() {
  $("#info").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#inputAge").val());
    const zip = parseInt($("input#inputZip").val());
    const sport = parseInt($("input#inputSport").val());

    if ((age + zip) >= 90000){
      $("span#result").text("Javascript")
    } else if ((age + zip) > 80000) {
      $("span#result").text("Python")
    } else if ((age + zip) >= 40000) {
      $("span#result").text("C++")
    } else if ((age + zip) < 40000) {
      $("span#result").text("Ruby")
    }
  })
})