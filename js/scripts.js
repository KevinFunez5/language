$(document).ready(function() {
  $("#info").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#inputAge").val());
    const zip = parseInt($("input#inputZip").val());
    const sport = parseInt($("input#inputSport").val());

    if ((age + zip) && () >= 100){
      $("span#result").text("Works")
    }
  })
})