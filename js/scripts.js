//Back End
function Pizza (size, sauce, topping) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.pizzaPricer = function(size, sauce, topping){
  var price = 0;
  if (size === NaN) {
    alert("Please Choose a Pizza Size");
  } else if (size === 2) {
    price +=12;
  } else if (size === 3){
    price += 14;
  } else if (size === 4) {
    price += 16;
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
    var sauceInput = parseInt($("input:radio[name=sauce]:checked").val());
    var toppingSum = 0;
    $("input:checkbox:checked").each(function(){
      toppingSum += parseInt($(this).val());
    });
    var thePizza = new Pizza(sizeInput, toppingSum);
    var finalPrice = thePizza.pizzaPricer(sizeInput, sauceInput, toppingSum);
    $("#price-output").text(finalPrice);
    $("#display-output").show();

  });
});
