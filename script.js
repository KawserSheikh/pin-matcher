const pinGenerateBtn = document.getElementById('generateBtn');
const pinInputField = document.getElementById('randomValue');

pinGenerateBtn.addEventListener('click', function(){
    const randomValue = Math.floor(Math.random() * 9000 + 1000);
    pinInputField.value = randomValue;
})


const keypadBtn = document.querySelector('.calc-body');
const keypadInputField = document.getElementById('keypadInputValue');

keypadBtn.addEventListener('click', function(['']){
    const btn = ['']
})
