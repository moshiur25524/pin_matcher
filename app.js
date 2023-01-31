function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin
    }
    else {
        return getPin()
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const generateField = document.getElementById('generate-pin-field');
    generateField.value = getPin()
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const pinField = document.getElementById('input-pin-field')
    const previousNumber = pinField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            pinField.value = ''
        }
        else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop()
            const joinNum = digits.join('')
            pinField.value = joinNum
        }
    }
    else {

        const currentNumber = previousNumber + number;
        pinField.value = currentNumber
    }
})

document.getElementById('verifyPin').addEventListener('click', function () {
    const pinGenerate = document.getElementById('generate-pin-field');
    const generatedNumber = pinGenerate.value;

    const inputField = document.getElementById('input-pin-field');
    const typedNumber = inputField.value

    const successMessage = document.getElementById('success-message')
    const failMessage = document.getElementById('fail-message');

    if (typedNumber === generatedNumber) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none'
    }
    else {

        failMessage.style.display = 'block'
        successMessage.style.display = 'none';
    }

})
