//      A - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//   "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

    var arr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    console.log("El resultado del ej 03-A = " + arr[4],arr[10]);

//      B - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

    arr.sort();

    console.log("El resultado del ej 03-B = " + arr);

//      C - Agregar un elemento al principio y al final del array (utilizar unshift y push).

    arr.unshift("Enerisimo");
    arr.push("Mayisimo");

    console.log("El resultado del ej 03-C = " + arr);

//      D - Quitar un elemento del principio y del final del array (utilizar shift y pop).

    arr.shift();
    arr.pop();

    console.log("El resultado del ej 03-D = " + arr);

//      E - Invertir el orden del array (utilizar reverse).

    arr.reverse();

    console.log("El resultado del ej 03-E = " + arr);

//      F - Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar
//   join).

    concat = arr.join("-");

    console.log("El resultado del ej 03-F = " + concat);

//      G - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

    var miniArr = arr.slice("Mayo","Noviembre");
    
    console.log("El resultado del ej 03-G = " + miniArr);

    //Pendiente de revision 03-G

    // Este console.log es para darle mas legibilidad a la consola
    console.log(" ");
