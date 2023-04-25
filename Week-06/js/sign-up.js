var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var nameInput = document.querySelector("#name");
var lastNameInput = document.querySelector("#lastname");
var dniInput = document.querySelector("#dni");
var dateInput = document.querySelector("#date");
var phoneInput = document.querySelector("#number");
var adressInput =document.querySelector("#adress");
var locationInput = document.querySelector("#location");
var zipCodeInput = document.querySelector("#zipCode");
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var rePasswordInput = document.querySelector("#rePassword");
var btnRegister = document.querySelector("#btnRegister");



nameInput.addEventListener('blur', function(event){
    const name = event.target.value;

    for(let i = 0; i < name.length; i++) {
    const character = name[i];

    if(typeof character !== 'string' || !isNaN(parseInt(character))) {
        // alert('El nombre solo puede contener letras y debe tener más de 3 caracteres.');
    }
    }
    if(name.length <= 3) {
    // alert('El nombre debe tener más de 3 caracteres.');
    }
});

lastNameInput.addEventListener('blur', function(event){
    var name = event.target.value;

    for(var i = 0; i < name.length; i++) {
        var character = name[i];

        if(typeof character !== 'string' || !isNaN(parseInt(character))) {
            return alert('El nombre solo puede contener letras y debe tener más de 3 caracteres.');
        }
        }
        if(name.length <= 3) {
            return alert('El nombre debe tener más de 3 caracteres.');
    }
});

dniInput.addEventListener('blur', function(event){
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i])){
            return alert("debe ingresar solo numeros")
        }
        if(number.length <=7){
            return alert("ingresa mas de 7 numeros!")
        }
    }
});

phoneInput.addEventListener('blur', function(event){
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i])){
            return alert("debe ingresar solo numeros")
        }
        if(number.length !== 10){
            return alert("ingresa 10 numeros")
        }
    }
});

dateInput.addEventListener('blur', function(event){
    console.log(event.target.value)
    if(event.target.value == ''){
        console.log("error")
    }else{
        changeDataFormat(event.target.value)
    }
})

locationInput.addEventListener('blur', function(event){
    if(!hasNumbersAndChar(event.target.value) && event.target.value.length <= 3){
        return alert("localidad corta")
    }
});

adressInput.addEventListener('blur', function(event){
    if(!hasNumbersAndChar(event.target.value) || (event.target.value.length < 5) || !hasSpace(event.target.value)){
        console.log("algo fallo")
    }
});

zipCodeInput.addEventListener('blur', function(event){
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i])){
            return alert("debe ingresar solo numeros")
        }
        if( number.length !== 5 && number.length !== 4){
            return alert("ingresa 4 o 5 numeros")
        }
    }
});

emailInput.addEventListener('blur', function(event){
    !emailExpression.test(event.target.value)
});

var pw
passwordInput.addEventListener('blur', function(event){
    if(!hasNumbersAndChar(event.target.value) || event.target.value.length < 8){
        console.log(event.target.value.length)
    }
    pw = event.target.value
});

rePasswordInput.addEventListener('blur', function(event){
    if(!hasNumbersAndChar(event.target.value) || event.target.value.length < 8){
        alert("contraseña incorrecta")
    }
    if(event.target.value !== pw){
        alert("disparidad")
    }
});

function changeDataFormat(date){
    var dateComplete = date.split ('-');
    var day = dateComplete[0];
    var month = dateComplete[1];
    var year = dateComplete[2];
    var newDate = year + '-' + month + '-' + day;
    console.log(newDate)
    return newDate;
}

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
            return true
        }
    }
    return false;
}

function hasSpace(myString){
    var space = 0;
    for (var x = 0; x < myString.length; x++) {
        if(myString[x] === ' '){
            space++
        }
        if(space > 0){
            console.log("conte 1")
            return true
        }
    }   
    console.log("conte 0")
    return false
}