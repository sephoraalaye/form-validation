console.log("Start processing");
setTimeout(function() {
  setTimeout(function() {
    setTimeout(function() {
      setTimeout(function() {
            console.log("End of process");
          }, 1000);
        console.log("Three seconds have passed.");
      }, 1000);
    console.log("Two seconds have passed.");
  }, 1000);
  console.log("One second has passed.");
}, 1000);

let price = "",number = "";
let purchase = {
    price: price,
    number: number,
  };
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = []; //add to
  
function add() {
    const price = priceElement.value;
    const number = numberElement.value;
    let purchase = {
      price: parseInt(price),
      number: parseInt(number),
    };
  
    let newPurchase = true; //--1
  
    purchases.forEach((item) => {  //--2
      if(item.price === purchase.price) {
        newPurchase = false;
      }
    })
  
    if(purchases.length < 1 || newPurchase) { //--3
      purchases.push(purchase);
    } else {
      for(let i = 0; i < purchases.length; i++) {
        if(purchases[i].price === purchase.price) {
          purchases[i].number += purchase.number;
        }
      }
    }

    
  
    window.alert(`${display()}\n${subtotal()}yen`);
    priceElement.value = "";
    numberElement.value = "";
  }

function display() {
    return purchases.map(purchase => {
      return `${purchase.price}${purchase.number}`
    }).join("\n");
  };
  
  function subtotal() {
    return purchases.reduce((prev, purchase) => {
      return prev + purchase.price * purchase.number 
    }, 0);
  }

  function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`subtotalIs${sum}Yen, shipping cost is${postage}Yen. The total is${sum + postage}Yen.`);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
  }

  function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum < 2000){
     return 500;
    } else {
     return 250;
    }
  }

