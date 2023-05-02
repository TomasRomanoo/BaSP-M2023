var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var nameInput = document.querySelector("#name");
var lastNameInput = document.querySelector("#lastname");
var dniInput = document.querySelector("#dni");
var dateInput = document.querySelector("#date");
var phoneInput = document.querySelector("#number");
var addressInput = document.querySelector("#address");
var locationInput = document.querySelector("#location");
var zipCodeInput = document.querySelector("#zipCode");
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var rePasswordInput = document.querySelector("#rePassword");
var btnRegister = document.querySelector("#btnRegister");

replacePlaceHolder();

btnRegister.addEventListener('click', function(e){
    e.preventDefault(e);
    var errorsArr = [];
    var goodArr = [];
    var emptyArr = [];

    if(name1 == 'wrongInput'){errorsArr.push("name")}else if(name1 == '' || name1 == ' '){emptyArr.push("Name")}else{goodArr.push(name1)}
    if(lastname == 'wrongInput'){errorsArr.push("Last Name")}else if(lastname == '' || lastname == ' '){emptyArr.push("Last Name")}else{goodArr.push(lastname)}
    if(dni == 'wrongInput'){errorsArr.push("Dni")}else if(dni == '' || dni == ' ' ){emptyArr.push("Dni")}else{goodArr.push(dni)}
    if(date == 'wrongInput'){errorsArr.push("Date")}else if(date == '' || date == ' '){emptyArr.push("Date")}else{goodArr.push(date)}
    if(number1 == 'wrongInput'){errorsArr.push("Phone Number")}else if(number1 == '' || number1 == ' '){emptyArr.push("Phone Number")}else{goodArr.push(number1)}
    if(address == 'wrongInput'){errorsArr.push("address")}else if(address == '' || address == ' '){emptyArr.push("address")}else{goodArr.push(address)}
    if(location1 == 'wrongInput'){errorsArr.push("Location")}else if(location1 == '' || location1 == ' '){emptyArr.push("Location")}else{goodArr.push(location1)}
    if(zipCode == 'wrongInput'){errorsArr.push("Zip Code")}else if(zipCode == '' || zipCode == ' '){emptyArr.push("Zip Code")}else{goodArr.push(zipCode)}
    if(password == 'wrongInput'){errorsArr.push("Password")}else if(password == '' || password == ' '){emptyArr.push("Password")}else{goodArr.push(password)}
    if(rePassword == 'wrongInput'){errorsArr.push("Password Validate")}else if(rePassword == '' || rePassword == ' '){emptyArr.push("Password Validate")}else{goodArr.push(rePassword)}

    if(errorsArr.length > 0){
        alert("You have Errors in " + errorsArr);
    }else if(emptyArr.length > 0 ){
        alert("You have empty inputs in: " + emptyArr);
    }else{
        fetchGet("https://api-rest-server.vercel.app/signup?name="+nameInput.value+"&lastName="+lastNameInput.value+
        "&dni="+dniInput.value+"&dob="+date+"&phone="+phoneInput.value+"&address="+addressInput.value+
        "&city="+locationInput.value+"&zip="+zipCodeInput.value+"&email="+emailInput.value+"&password="+passwordInput.value);
        replacePlaceHolder();
    }
});


var name1 = '';
var lastname= '';
var dni= '';
var date= '';
var number1= '';
var address= '';
var location1= '';
var zipCode= '';
var email= '';
var password= '';
var rePassword= '';

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
            localStorage.setItem("Name",nameInput.value);
            localStorage.setItem("LastName",lastNameInput.value);
            localStorage.setItem("Dni",dniInput.value);
            localStorage.setItem("Birthday",dateInput.value);
            localStorage.setItem("Phone",phoneInput.value);
            localStorage.setItem("address",addressInput.value);
            localStorage.setItem("Location",locationInput.value);
            localStorage.setItem("ZipCode",zipCodeInput.value);
            localStorage.setItem("Email",emailInput.value);
            localStorage.setItem("Password", passwordInput.value);
            localStorage.setItem("ConfirmPassword", rePasswordInput.value);
        })
        .catch(function (err) {
            alert("The request could not be performed successfully:\n" + err);
        });
}
function replacePlaceHolder(){
    if(localStorage.getItem("Name") != null){document.getElementById("name").value = localStorage.getItem("Name")}
    if(localStorage.getItem("LastName") != null){document.getElementById("lastname").value = localStorage.getItem("LastName")}
    if(localStorage.getItem("Dni") != null){document.getElementById("dni").value = localStorage.getItem("Dni")}
    if(localStorage.getItem("Birthday") != null){document.getElementById("date").value = localStorage.getItem("Birthday")}
    if(localStorage.getItem("Phone") != null){document.getElementById("number").value = localStorage.getItem("Phone")}
    if(localStorage.getItem("address") != null){document.getElementById("address").value = localStorage.getItem("address")}
    if(localStorage.getItem("Location") != null){document.getElementById("location").value = localStorage.getItem("Location")}
    if(localStorage.getItem("ZipCode") != null){document.getElementById("zipCode").value = localStorage.getItem("ZipCode")}
    if(localStorage.getItem("Email") != null){document.getElementById("email").value = localStorage.getItem("Email")}
    if(localStorage.getItem("Password") != null){document.getElementById("password").value = localStorage.getItem("Password")}
    if(localStorage.getItem("ConfirmPassword") != null){document.getElementById("rePassword").value = localStorage.getItem("Password")}
};

nameInput.addEventListener('blur', function(event){
    var name = event.target.value;
    var element = document.querySelector('.nameError');
    if(name == ''){name = ' '}
    for(var i = 0; i < name.length; i++) {
        var character = name[i];
        if(typeof character !== 'string' || !isNaN(parseInt(character)) || name.length <= 3){
            element.classList.remove('messageError');
            element.classList.add('showError');
            name1 = 'wrongInput';
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
    if(name == ''){name = ' '}
    for(var i = 0; i < name.length; i++) {
        var character = name[i];
        if(typeof character !== 'string' || !isNaN(parseInt(character)) || name.length <= 3){
            element.classList.remove('messageError');
            element.classList.add('showError');
            lastname= 'wrongInput';
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
    if(number == ''){number = ' '}
    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i]) || number.length <=7){
            element.classList.remove('messageError');
            element.classList.add('showError');
            dni = 'wrongInput';
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
    if(number == ''){number = ' '}
    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i]) || (number.length !== 10)){
            element.classList.remove('messageError');
            element.classList.add('showError');
            number1 = 'wrongInput';
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
        date = 'wrongInput';
    }else{
        date = event.target.value
        element.classList.remove('showError');
        element.classList.add('messageError');
        date = changeDataFormat(event.target.value);
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
        location1 = 'wrongInput';
    }else{location1 = event.target.value;}
});

locationInput.addEventListener('focus', function(){
    var element = document.querySelector('.locationError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

addressInput.addEventListener('blur', function(event){
    var element = document.querySelector('.addressError');
    if(!hasNumbersAndChar(event.target.value) || (event.target.value.length < 5) || 
        hasSpace(event.target.value)){
        element.classList.remove('messageError');
        element.classList.add('showError');
        address = 'wrongInput';
    }else{address = event.target.value;}
});

addressInput.addEventListener('focus', function(){
    var element = document.querySelector('.addressError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

zipCodeInput.addEventListener('blur', function(event){
    var element = document.querySelector('.zipError');
    var number = event.target.value;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if(number == ''){number = ' '}
    for(var i = 0; i < number.length; i++){
        if(!numbers.includes(number[i]) || number.length !== 5 && number.length !== 4 ){
            element.classList.remove('messageError');
            element.classList.add('showError');
            zipCode = 'wrongInput';
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
        email = 'wrongInput';
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
        password = 'wrongInput';
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
        rePassword = 'wrongInput';
    }else{rePassword = event.target.value;}
});

rePasswordInput.addEventListener('focus', function(){
    var element = document.querySelector('.rePasswordError');
    element.classList.remove('showError');
    element.classList.add('messageError');
})

function changeDataFormat(date){
    var dateComplete = date.split('-');
    var year = dateComplete[0];
    var month = dateComplete[1];
    var day = dateComplete[2];
    var newDate = month + '/' + day + '/' + year;
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