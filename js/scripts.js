//Back End
function Pizza (name, size, sauce, topping) {
  this.name = name;
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.pizzaPricer = function(name, size, sauce, topping) {
  var price = 0;
  if (this.size === 1) {
    price += 10;
  } else if (this.size === 2) {
    price += 12;
  } else if (this.size === 3){
    price += 14;
  } else if (this.size === 4) {
    price += 16;
  }
  if (sauce === 1) {
    price += 0;
  } else if (this.sauce === 2) {
    price +=2.5;
  } else if (this.sauce === 3) {
    price += 2.5;
  } else if (this.sauce === 4) {
    price += 1.5;
  }
  var price = price += this.topping;
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
  $("#addpizza-button").click(function(){
    $("ul#additionalpizzas").append("<li><span class="another-pizza"></span")
  });
  $("#reset-button").click(function() {
    $("#price-output").text("0.00");
  });
});
