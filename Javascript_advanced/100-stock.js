const stock = {
  macbook: 2,
  iphone: 4
}

function processPayment(itemName) {
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);

}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {

  console.log(`Verifying the stock of ${itemName}`);
  (itemName in stock && stock[itemName] > 0)
    ? callbackPayment(itemName)
    : callbackError(itemName)
}

const userChoice = prompt("Please enter the item you would like to purchase (Macbook, iPhone)").toLowerCase();
processOrder(userChoice, processPayment, processError);
