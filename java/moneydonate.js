
// noakhali-section
document.getElementById('btn-first-money').addEventListener('click',function(){

    const addMoney = getInputFieldElementById('add-money-number');

    if(isNaN(addMoney) || addMoney < 0){
        alert('invalid input number');
        return;
    }

    const currentBalance = getTextFieldElementById('current-balance');

    const newBalance = currentBalance - addMoney;

    document.getElementById('current-balance').innerText = newBalance

    document.getElementById('new-balance').innerText = addMoney;

});


// feni-section
document.getElementById('btn-second-money').addEventListener('click',function(){

    const secondMoney = getInputFieldElementById('input-add-money');

    if(isNaN(secondMoney) || secondMoney < 0){
        alert('invalid input number');
        return;
    }

    const currentBalance = getTextFieldElementById('current-balance');

    const newBalance = currentBalance - secondMoney;

    document.getElementById('current-balance').innerText = newBalance;

    document.getElementById('second-balance').innerText = secondMoney;

});


// quota-section
document.getElementById('btn-third-money').addEventListener('click',function(){

    const thirdMoney = getInputFieldElementById('input-third-addmoney-number');

    if(isNaN(thirdMoney) || thirdMoney < 0){
        alert('invalid input number');
        return;
    }

    const currentBalance = getTextFieldElementById('current-balance');

    const newBalance = currentBalance - thirdMoney;

    document.getElementById('current-balance').innerText = newBalance;

    document.getElementById('update-balance').innerText = thirdMoney;

});
