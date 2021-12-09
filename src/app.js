var initialPrice = document.querySelector("#initial-price"); //further store in variable a
var quantityOfStocks = document.querySelector("#quantity-of-stock"); //further store in variable b
var currentPrice = document.querySelector("#current-price"); //further store in variable c
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");

function calculateStockValue() {
    var a = parseInt(initialPrice.value);
    var b = parseInt(quantityOfStocks.value);
    var c = parseInt(currentPrice.value);

    var totalStockPurchasePrice = a * b;
    var newStockPrice = b * c;
    var profitOrLose = (newStockPrice - totalStockPurchasePrice);
    var profitOrLosePercent = ((((b * c) / (a * b)) - 1) * 100);
    if (profitOrLose > 0) {
        output.innerText = "Hey, the profit is " + profitOrLose + " and the percent is " + profitOrLosePercent.toFixed(2) + "%";
        document.querySelector("body").style.backgroundColor = "#b8ffd9";
    } else if (profitOrLose < 0) {
        output.innerText = "Ops, the loss is " + profitOrLose + " and the percent is " + profitOrLosePercent.toFixed(2) + "%";
        document.querySelector("body").style.backgroundColor = "#ffb8ba";

    } else if (profitOrLose === 0) {
        output.innerText = "No pain --- No gain";

    }
}

calculateBtn.addEventListener("click", calculateStockValue)
