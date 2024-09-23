
function getInputFieldElementById(id){

    const addNumber = document.getElementById(id).value;

    const newNumber = parseFloat(addNumber);

    return newNumber;

};


function getTextFieldElementById(id){

    const currentNumber = document.getElementById(id).innerText;

    const newCurrent = parseFloat(currentNumber);

    return newCurrent;

};