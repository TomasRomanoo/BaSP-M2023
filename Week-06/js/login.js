
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailInput = document.querySelector('input[name="email"]');
var passwordInput = document.querySelector('input[name="password"]');
var btnLogin = document.querySelector('#btnlogin');

emailInput.addEventListener('blur',function(event){
    var element = document.querySelector('.emailError');
    if(!emailExpression.test(event.target.value)){
        element.classList.remove('messageError');
        element.classList.add('showError');
    }
})

emailInput.addEventListener('focus',function(){
    var element = document.querySelector('.emailError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

passwordInput.addEventListener('blur',function(event){
    var element = document.querySelector('.passwordError');
    if(!hasNumbersAndChar(event.target.value)){
        element.classList.remove('messageError');
        element.classList.add('showError');
    }else{return event.target.value}
})

passwordInput.addEventListener('focus',function(){
    var element = document.querySelector('.passwordError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    if(hasNumbersAndChar(passwordInput.value) && emailExpression.test(emailInput.value)){
        alert("WELCOME!!\n Your email is: " + emailInput.value + "\n Your password is: " + passwordInput.value);
    }else if((!hasNumbersAndChar(passwordInput.value) && !emailExpression.test(emailInput.value))){
        alert("ERROR!!\n Wrong Email and Wrong Password  ")
    }else if(hasNumbersAndChar(passwordInput.value)){
        alert("ERROR!!\n Your email must respect this format: abc@abc.com")
    }else if(!emailExpression.test(emailInput)){
        alert("ERROR!!\n Your password must have letters and numbers ")
    }
})

function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
    if (numbers.includes(myString[x])) {
        return true;
        }
    }
    return false;
}

function hasNumbersAndChar(myString) {
    var num = 0;
    var char = 0;

    for (var x = 0; x < myString.length; x++) {
        if (hasNumbers(myString[x])) {
            num++;
        } else {
            char++;
        }
        if (num > 0 && char > 0) {
            return true;
        }
    }
    return false;
}