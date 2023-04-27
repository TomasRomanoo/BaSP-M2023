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

btnRegister.addEventListener('click', function(e){
    e.preventDefault(e);
    var errors = [];
    var good = [];

    if(name1 == 'bad'){errors.push("name")}else{good.push(name1)}
    if(lastname == 'bad'){errors.push("lastname")}else{good.push(lastname)}
    if(dni == 'bad'){errors.push("dni")}else{good.push(dni)}
    if(date == 'bad'){errors.push("date")}else{good.push(date)}
    if(number1 == 'bad'){errors.push("phone number")}else{good.push(number1)}
    if(adress == 'bad'){errors.push("adress")}else{good.push(adress)}
    if(location1 == 'bad'){errors.push("location")}else{good.push(location1)}
    if(zipCode == 'bad'){errors.push("zip code")}else{good.push(zipCode)}
    if(password == 'bad'){errors.push("password")}else{good.push(password)}
    if(rePassword == 'bad'){errors.push("password validate")}else{good.push(rePassword)}

    if(errors.length > 0){
        alert("You have errors in " + errors)
    }else if(good.length > 0){
        alert("Empty inputs")
    }else(alert("Your dates are: " + good))
})

var name1 = '';
var lastname= '';
var dni= '';
var date= '';
var number1= '';
var adress= '';
var location1= '';
var zipCode= '';
var email= '';
var password= '';
var rePassword= '';

nameInput.addEventListener('blur', function(event){
    var name = event.target.value;
    var element = document.querySelector('.nameError');

    for(let i = 0; i < name.length; i++) {
        var character = name[i];
        if(typeof character !== 'string' || !isNaN(parseInt(character)) || (name.length <= 3) ) {
            element.classList.remove('messageError');
            element.classList.add('showError');
            name1 = 'bad';
        }else{name1 = event.target.value};
    };
});


nameInput.addEventListener('focus',function(){
    var element = document.querySelector('.nameError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

lastNameInput.addEventListener('blur', function(event){
    var name = event.target.value;
    var element = document.querySelector('.lastnameError');

    for(var i = 0; i < name.length; i++) {
        var character = name[i];
        if(typeof character !== 'string' || !isNaN(parseInt(character)) || name.length <= 3){
            element.classList.remove('messageError');
            element.classList.add('showError');
            lastname= 'bad';
        }else{lastname = event.target.value};
    }
});

lastNameInput.addEventListener('focus', function(){
    var element = document.querySelector('.lastnameError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

dniInput.addEventListener('blur', function(event){
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var element = document.querySelector('.dniError');

    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i]) || number.length <=7){
            element.classList.remove('messageError');
            element.classList.add('showError');
            dni = 'bad';
        }else{dni = event.target.value;}
    }
});

dniInput.addEventListener('focus', function(){
    var element = document.querySelector('.dniError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

phoneInput.addEventListener('blur', function(event){
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var element = document.querySelector('.numberError');

    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i]) || (number.length !== 10)){
            element.classList.remove('messageError');
            element.classList.add('showError');
            number1 = 'bad';
        }else{number1 = event.target.value;}
    };
});

phoneInput.addEventListener('focus', function(){
    var element = document.querySelector('.numberError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

dateInput.addEventListener('blur', function(event){
    var element = document.querySelector('.dateError');
    if(event.target.value == ''){
        element.classList.remove('messageError');
        element.classList.add('showError');
        date = 'bad';
    }else{
        changeDataFormat(event.target.value)
        element.classList.remove('showError');
        element.classList.add('messageError');
        date = event.target.value;
    }
})

dateInput.addEventListener('focus', function(){
    var element = document.querySelector('.dateError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

locationInput.addEventListener('blur', function(event){
    var element = document.querySelector('.locationError');

    if( !hasNumbersAndChar(event.target.value) ||
        event.target.value.length <= 3){
        element.classList.remove('messageError');
        element.classList.add('showError');
        location1 = 'bad';
    }else{location1 = event.target.value;}
});

locationInput.addEventListener('focus', function(){
    var element = document.querySelector('.locationError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

adressInput.addEventListener('blur', function(event){
    var element = document.querySelector('.adressError');
    if(!hasNumbersAndChar(event.target.value) || (event.target.value.length < 5) || 
        hasSpace(event.target.value)){
        element.classList.remove('messageError');
        element.classList.add('showError');
        adress = 'bad';
    }else{adress = event.target.value;}
});

adressInput.addEventListener('focus', function(){
    var element = document.querySelector('.adressError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

zipCodeInput.addEventListener('blur', function(event){
    var element = document.querySelector('.zipError');
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i]) || number.length !== 5 && number.length !== 4 ){
            element.classList.remove('messageError');
            element.classList.add('showError');
            zipCode = 'bad';
        }else{zipCode = event.target.value;}
    }
});

zipCodeInput.addEventListener('focus', function(){
    var element = document.querySelector('.zipError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

emailInput.addEventListener('blur', function(event){
    var element = document.querySelector('.emailError');
    if(!emailExpression.test(event.target.value)){
        element.classList.remove('messageError');
        element.classList.add('showError');
        email = 'bad';
    }else{email = event.target.value;}
});

emailInput.addEventListener('focus', function(){
    var element = document.querySelector('.emailError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

passwordInput.addEventListener('blur', function(event){
    var element = document.querySelector('.passwordError');
    if(!hasNumbersAndChar(event.target.value) || event.target.value.length < 8){
        element.classList.remove('messageError');
        element.classList.add('showError');
        password = 'bad';
    }else{password = event.target.value;}
    
});

passwordInput.addEventListener('focus', function(){
    var element = document.querySelector('.passwordError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

rePasswordInput.addEventListener('blur', function(event){
    var element = document.querySelector('.rePasswordError');
    if(!hasNumbersAndChar(event.target.value) || event.target.value.length < 8 || 
        event.target.value !== password){
        element.classList.remove('messageError');
        element.classList.add('showError');
        rePassword = 'bad';
    }else{rePassword = event.target.value;}
});

rePasswordInput.addEventListener('focus', function(){
    var element = document.querySelector('.rePasswordError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

function changeDataFormat(date){
    var dateComplete = date.split ('-');
    var day = dateComplete[0];
    var month = dateComplete[1];
    var year = dateComplete[2];
    var newDate = year + '-' + month + '-' + day;
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
        }
    }   
}