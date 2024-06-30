/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = 0;
let num2 = 0;
let answer;
let operatorAdded = true; 
let operator;
/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(btn=> {
  btn.addEventListener('click',calculatorDisplay);
});

/*-------------------------------- Functions --------------------------------*/

function calculatorDisplay(btnSelected) {
  let displayVal = btnSelected.target;
  display.append(displayVal.textContent);
  if (displayVal.className === 'button number') {
    if (operatorAdded) {
      num1 += displayVal.textContent;
    }
    else {
      num2 += displayVal.textContent;
    }
  }
  else if (displayVal.className === 'button operator') {
    operatorAdded = false;
    operator = displayVal.textContent;
  }
  else if (displayVal.className === 'button equals') {

    if (operator === '/') {
      answer = num1/num2
    }
    else if (operator === '*') {
      answer = num1*num2;
    }
    else if (operator === '-') {
      answer = num1-num2;
    }
    else if (operator === '+') {
      answer = num1+num2;
    }
    display.innerHTML='';
    display.append(answer);
    num1 = answer;
  }
  if (displayVal.textContent === 'C'){
    init();
  }
}

function init() {
  num1 = 0;
  num2 = 0;
  operator = null;
  operatorAdded = true;
  display.textContent = '';
}