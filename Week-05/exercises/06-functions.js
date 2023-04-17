//      A - Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
//   guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

    function suma(num1,num2){
        result = (num1+num2);
        return result;
    }
    
    console.log("El resultado del ej 06-A = " + suma(2,2));
    

//      B - Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es
//   un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el 
//   valor NaN como resultado.

    function suma2(num1,num2){
        if(isNaN(num1) || isNaN(num2)){
            alert("Eror en ejercicio 6B! uno de los parametros no es un numero!")
            return NaN;
        }else{
            result2 = (num1+num2);
            return result2;
        }
    }
    console.log("El resultado del ej 06-B = " + suma2("abc",2) );

    
//      C - Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un 
//   número entero.

    function validateInteger(num){
        if(num % 1 === 0){
            return true;
        }else{
            return false;
        }
    }

    console.log("El resultado del ej 06-C = " + validateInteger(2.4));

//      D - Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
//   y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el
//   número convertido a entero (redondeado).



    function suma3(num1,num2){
        if(validateInteger(num1) == false || validateInteger(num2) == false){
            alert("Error en ejercicio 6D! estas usando decimales!");
                var int1 = Math.random(num1);
                var int2 = Math.random(num2);
                    return("tus numeros fueron redondeados a " + int1 + " y " + int2);
            }else{
                var result = num1 + num2;
                    return result;
            }
        }
        

        console.log("El resultado del ej 06-D = " + suma3(2.8 , 7.3));

//      E - Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función 
//   probando que todo siga funcionando igual que en el apartado anterior.

    function validateDecimal(num) {
        return num % 1 !== 0;
    }
    
    function suma4(num1, num2) {
        if (validateDecimal(num1) || validateDecimal(num2)) {
        alert("Error en ejercicio 6E! Estás usando decimales!");
        var int1 = Math.random(num1);
        var int2 = Math.random(num2);
        return "Tus números fueron redondeados a " + int1 + " y " + int2;
        } else {
        var result2 = num1 + num2;
        return result2;
        }
    }
        console.log("El resultado del ej 06-E = " + suma4(5.5,9.8));
