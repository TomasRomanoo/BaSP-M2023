
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailInput = document.querySelector('input[name="email"]');
var passwordInput = document.querySelector('input[name="password"]');
var btnLogin = document.querySelector('#btnlogin');
replacePlaceHolder()

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
        fetchGet( "https://api-rest-server.vercel.app/login?email="+emailInput.value+"&password="+passwordInput.value);
        replacePlaceHolder();
    }
})
function replacePlaceHolder(){
    if(localStorage.getItem("Email") != null){document.getElementById("email").value = localStorage.getItem("Email")}
    if(localStorage.getItem("Password") != null){document.getElementById("pw").value = localStorage.getItem("Password")}
};

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

function fetchGet(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (resp) {
            if(!resp.success){
            throw new Error(JSON.stringify(resp))
            }
            alert("The request was successful:\n" + JSON.stringify(resp));
            alert("Email: " + emailInput.value + "\nPassword: " + passwordInput.value);
            localStorage.setItem("Email",emailInput.value);
            localStorage.setItem("Password", passwordInput.value);
        })
        .catch(function (err) {
            alert("The request could not be performed successfully:\n" + err);
        });
}


