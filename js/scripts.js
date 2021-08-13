$(document).ready(function() {
  $("#info").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#inputAge").val());
    const zip = parseInt($("input#inputZip").val());
    const sport = parseInt($("#inputSport").val());
    const subject = parseInt($("#inputSubject").val());
    const expirience = parseInt($("input#inputExpirience"))

    if (age >= 80 && zip >= 90000 && sport === 1 &&  subject === 1 ){
      $("span#result").text("Swift")
    } else if (age < 60 && zip >= 70000 && sport === 2 &&  subject === 2 ){
      $("span#result").text("C#")
    } else if (age < 50 && zip >= 60000 && sport === 3 &&  subject === 3 ){
      $("span#result").text("Ruby")
    } else if (age < 40 && zip >= 50000 && sport === 4 &&  subject === 4 ){
      $("span#result").text("Go")
    } else if (age < 30 && zip >= 40000 ){
      $("span#result").text("Python")
    } else if (age < 20 && zip >= 30000 ){
      $("span#result").text("Rust")
    } else {
      $("span#result").text("Javascript")
    }
  });
});