//      A - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//   (utilizar toUpperCase);

    var word = 'daltonismo';
    var result = word.toUpperCase();

    console.log("El resultado del ej 02-A = " + result);

//      B - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
//   5 caracteres guardando el resultado en una nueva variable (utilizar substring);

    var wordB = 'daltonicos';
    var resultB= wordB.substring(0,5);

    console.log("El resultado del ej 02-B = " + resultB);

//      C - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
//   3 caracteres guardando el resultado en una nueva variable (utilizar substring);

    var wordC = 'chipacitos';
    var resultC = wordC.substring(7,10);

    console.log("El resultado del ej 02-C = " + resultC);

//      D - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
//   letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, 
//   toUpperCase, toLowerCase y el operador +);

    var wordD = 'aborigenes';
    var resultD = wordD.substring(0,1).toUpperCase() + wordD.substring(1,10).toLocaleLowerCase();

    console.log("El resultado del ej 02-D = " + resultD);

//      E - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
//   posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf);

    var wordE = 'altruistas argentinos';
    var resultE = wordE.indexOf(' ');

    console.log("El resultado del ej 02-E = " + resultE);

//      F - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre 
//   medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera 
//   letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
//   toLowerCase y el operador +);

    var wordD = 'asistentes automaticos';
    var resultD =  wordD.substring(0,1).toUpperCase() + wordD.substring(1,10).toLocaleLowerCase() + ' ' + 
    wordD.substring(wordD.indexOf(' ')+1,wordE.indexOf(' ')+2).toUpperCase() + wordD.substring(wordE.indexOf(' ')+2).toLocaleLowerCase();
    // use el indexOf porque lo pide la consigna, pero no lo veo necesario si conozco la variable wordD.

    console.log("El resultado del ej 02-D = " + resultD);

    // Este console.log es para darle mas legibilidad a la consola
    console.log(" ");

