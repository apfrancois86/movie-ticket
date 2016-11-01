// business logic
function Ticket(age, time, movieName) {
  this.age = age;
  this.time = time;
  this.movieName = movieName;
}

// Tickect
var pricePaid = function(age, time, movieName) {
  var price = 10;

  if((age === "child" || age === "senior") && (time === "10am" || time === "2pm")) {
    price -= 5;
  } else if((age === "child" || age === "senior") && (time === "6pm" || time === "8pm")) {
    price -= 2;
  } else if( age === "adult" && (time === "10am" || time === "2pm")) {
    price -= 3;
  } else {
    price;
  } return price;

}



// user interface logic
$(document).ready(function() {
  $("form#movieTicket").submit(function(event){
    event.preventDefault();

    var checkedAge = $('input:radio[name=age]:checked').val();
    var checkedMovies = $('input:radio[name=movies]:checked').val();
    var checkedTime = $('input:radio[name=time]:checked').val();

    var newTicket = new Ticket(checkedAge, checkedTime, checkedMovies);
    var newPricePaid = pricePaid(checkedAge, checkedTime, checkedMovies);

    if(checkedAge === "child" && (checkedMovies==="Ouiji: Origin of Evil" || checkedMovies ==="The Accountant")) {
      return alert("You are not old enough! Please select another movie.");

    } else {
      $(".receipt").show();
      $("#movieTicket").hide();
      $("#output ul").append("<li>"+ "Your age category is:  " + newTicket.age+ "</li>" + "<li>"+ "You purchase a ticket to: " + newTicket.movieName + "</li>" + "<li>"+ "Movie time: " + newTicket.time + "</li>" + "<li>"+ "Your total cost is:  $" + newPricePaid + "</li>");
    }

  });
});


// Ticket.prototype.calculatePrice = function() {
//   this.ticketPrice = 10.00;
//   if (this.time !== "checked" && this.age !== "checked" && this.movieName !== "checked") {
//     if (this.time === "matinee") {
//       this.ticketPrice -= 2.00;
//     };
//     if (this.age !== "senior" || this.age === "child") {
//       this.ticketPrice -= 1.00;
//     }
//     return this.ticketPrice;
//   }
// else{
//   alert("Please select all fields.")
//   return "";
// };
//
// };
