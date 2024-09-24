
// noakhali-section
document.getElementById('btn-first-money').addEventListener('click',function(){

    const addMoney = getInputFieldElementById('add-money-number');

    if(isNaN(addMoney) || addMoney < 0){
    
        alert('invalid input number');

        return;

    }

    const currentBalance = getTextFieldElementById('current-balance');

    const newBalance = currentBalance - addMoney;

    document.getElementById('current-balance').innerText = newBalance.toFixed(2);

    document.getElementById('new-balance').innerText = addMoney.toFixed(2);

    const div = document.createElement('div');
    div.classList.add('border','p-5','rounded-xl');
    div.innerHTML = `

        <div class="space-y-3">
            <h1 class="font-bold">${addMoney.toFixed(2)} Taka is Donated for famine-2024 at noakhali, Bangladesh</h1>
        <p id="show-date-time" class="text-gray-500">
            Date: ${Date()}</p>
        </div>

    `
    console.log(div);

    document.getElementById('history-content').appendChild(div);

    const showModal = showModal();

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

    document.getElementById('current-balance').innerText = newBalance.toFixed(2);

    document.getElementById('second-balance').innerText = secondMoney.toFixed(2);

    const div = document.createElement('div');
    div.classList.add('border','p-5','rounded-xl');
    div.innerHTML = `

        <div class="space-y-3">
            <h1 class="font-bold">${secondMoney.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
        <p id="show-date-time" class="text-gray-500">
            Date: ${Date()}</p>
        </div>

    `
    console.log(div);

    document.getElementById('history-content').appendChild(div);

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

    document.getElementById('current-balance').innerText = newBalance.toFixed(2);

    document.getElementById('update-balance').innerText = thirdMoney.toFixed(2);

    const div = document.createElement('div');
    div.classList.add('border','p-5','rounded-xl');
    div.innerHTML = `

        <div class="space-y-3">
            <h1 class="font-bold">${thirdMoney.toFixed(2)} Taka is Donated for famine-2024 at quota, Bangladesh</h1>
        <p id="show-date-time" class="text-gray-500">
            Date: ${Date()}</p>
        </div>

    `
    console.log(div);

    document.getElementById('history-content').appendChild(div);

});
