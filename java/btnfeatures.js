// donation-part
document.getElementById('donation-part').addEventListener('click',function(){

    getAllDonationHistoryById('all-donation-container');

    const donatTab = document.getElementById('donation-part').classList.add('bg-arrow');

    const historyTab = document.getElementById('history-part').classList.remove('bg-arrow');

});


// history-part
document.getElementById('history-part').addEventListener('click',function(){

    getAllDonationHistoryById('history-content');

    const historyTab = document.getElementById('history-part').classList.add('bg-arrow');

    const donatTab = document.getElementById('donation-part').classList.remove('bg-arrow');

});


