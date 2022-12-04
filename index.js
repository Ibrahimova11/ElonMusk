//Elements
let totalMoneyElement = document.querySelector('#totalMoney');
let button_1=document.getElementsByClassName('button_1');
let button_2=document.getElementsByClassName('button_2');
let input=document.getElementsByClassName('input');
let box_card=document.getElementsByClassName('box_card');
const appContainer = document.querySelector('#container');


//Default data

let elonFortune = 187000000000;
let totalPercentage = 100;


let elements = [];


// Events

Container.addEventListener('click', (e) => {
    let element = e.target.parentElement;
  
    if (e.target.classList.contains('button_1')) {
      buyItem(element);
    } else if (e.target.classList.contains('button_2')) {
      sellItem(element);
    }
  });



  function buyItem(element) {
    if (elonFortune - Number(element.dataset.price) >= 0) {
        elonFortune -= Number(element.dataset.price);
        totalPercentage = (elonFortune * 100) / 187000000000;
    
    
        let itemName = element.parentElement.querySelector('#totalMoney').textContent;
    
        
        let button = element.getElementsByClassName('button_1');
        if (Number(amountOfItems.textContent) > 0) {
          button.disabled = false;
        }
    
        updateTotalAndPercentage();

    }
  }



