
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


function getAllDonationHistoryById(id){

    document.getElementById('all-donation-container').classList.add('hidden');

    document.getElementById('history-content').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

    return;

};


function showModal(){

    document.getElementById('btn-first-money').classList.add('modal-show-click');

};