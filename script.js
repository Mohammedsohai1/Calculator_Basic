// calculator.js

let currentdisplay = '';

function clearDisplay() {
    currentdisplay = '0';
    document.querySelector('.display').innerHTML = currentdisplay;
}

function addToDisplay(value) {
    if(currentdisplay=='0'){
        currentdisplay=''
        currentdisplay += value;
    document.querySelector('.display').innerHTML= currentdisplay;
    }else{
    currentdisplay += value;
    document.querySelector('.display').innerHTML= currentdisplay;
    }
}

function calculateResult() {
    try {
        // if(currentdisplay==''){
        //     document.querySelector('.display').innerHTML = '0';
        // }
        currentdisplay = eval(currentdisplay);
        document.querySelector('.display').innerHTML = currentdisplay;
    } catch (error) {
        document.querySelector('.display').innerHTML = 'Error';
    }
}

function deleteLastDigit() {
    if(currentdisplay==''){
        currentdisplay='0'
    }
    currentdisplay = currentdisplay.slice(0, -1); // Remove the last character
    document.querySelector('.display').innerHTML= currentdisplay;
  }
  
// Add event listeners to buttons
document.querySelector('#btn_reset').addEventListener('click', clearDisplay);
document.querySelector('#btn1').addEventListener('click', () => addToDisplay('1'));
document.querySelector('#btn2').addEventListener('click', () => addToDisplay('2'));
document.querySelector('#btn_plus').addEventListener('click', () => addToDisplay('+'));
document.querySelector('#btn3').addEventListener('click', () => addToDisplay('3'));
document.querySelector('#btn4').addEventListener('click', () => addToDisplay('4'));
document.querySelector('#btn_minus').addEventListener('click', () => addToDisplay('-'));
document.querySelector('#btn5').addEventListener('click', () => addToDisplay('5'));
document.querySelector('#btn6').addEventListener('click', () => addToDisplay('6'));
document.querySelector('#btn_into').addEventListener('click', () => addToDisplay('*'));
document.querySelector('#btn7').addEventListener('click', () => addToDisplay('7'));
document.querySelector('#btn8').addEventListener('click', () => addToDisplay('8'));
document.querySelector('#btn_by').addEventListener('click', () => addToDisplay('/'));
document.querySelector('#btn_equalsto').addEventListener('click', calculateResult);
document.querySelector('#btn9').addEventListener('click', () => addToDisplay('9'));
document.querySelector('#btn0').addEventListener('click', () => addToDisplay('0'));
document.querySelector('#btn_dot').addEventListener('click', () => addToDisplay('.'));
document.querySelector('#btn_del').addEventListener('click', deleteLastDigit);

