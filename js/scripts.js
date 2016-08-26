//Back End
function Pizza (size, sauce, topping) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.pizzaPricer = function(size, sauce, topping) {
  var price = 0;
  if (size === 1) {
    price += 10;
  } else if (size === 2) {
    price += 12;
  } else if (size === 3){
    price += 14;
  } else if (size === 4) {
    price += 16;
  }
  if (sauce === 1) {
    price += 0;
  } else if (sauce === 2) {
    price +=2.5;
  } else if (sauce === 3) {
    price += 2.5;
  } else if (sauce === 4) {
    price += 1.5;
  }
  var price = price += topping;
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
    var thePizza = new Pizza(sizeInput, sauceInput, toppingSum);
    var finalPrice = thePizza.pizzaPricer(sizeInput, sauceInput, toppingSum);
    $("#price-output").text(finalPrice);
    $("#display-output").show();

  });
});
