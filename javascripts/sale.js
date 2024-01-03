let selectedProduct = "",number  = "",price = "";
let purchase = {
    selectedProduct: selectedProduct,
    number: number,
    price: price
  };
const priceElement = document.getElementById("product");
const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = []; //add to
  
function add() {
    // Récupérer les valeurs sélectionnées
    const selectedProduct = productElement.options[productElement.selectedIndex].text;
    const price = priceElement.value;
    const number = numberElement.value;
    let purchase = {
      selectedProduct: selectedProduct,
      number: parseInt(number),
      price: parseInt(price),
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

    
  
    window.alert(`${display()}\n\n Le sous-total est : ${subtotal()}yens`);
    
    productElement.value = "";
    numberElement.value = "";
    priceElement.value = "";
  }

function display() {
    
    return purchases.map(purchase => {
      return `${purchase.selectedProduct} : ${purchase.number} item${purchase.number>1? "s":" " }`
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
    window.alert(`${display()}\n\nsubtotalIs ${sum}Yens, shipping cost is ${postage} Yen. The total is${sum + postage}Yen.`);
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

