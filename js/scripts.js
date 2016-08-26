//Back End
function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPricer = function(size, topping){
  var price = 10;
  if (size === NaN) {
    alert("Please Choose a Pizza Size");
  } else if (size === 2) {
    price +=2;
  } else if (size === 3){
    price += 4;
  } else if (size === 4) {
    price += 6;
  }
  if (topping === "1") {
    price += 1;
  } else if (topping === "2") {
    price +=2;
  } else if (topping === "3") {
    price += 1.50;
  } else if (topping === "4") {
    price += 0.5;
  }
  return parseFloat(price).toFixed(2);
}

//Front End
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    var toppingInput = $("input:radio[name=topping]:checked").val();
    var thePizza = new Pizza(sizeInput, toppingInput);
    var finalPrice = thePizza.pizzaPricer(sizeInput, toppingInput);
    $("#price-output").text(finalPrice);
    $("#display-output").show();

  });
});
