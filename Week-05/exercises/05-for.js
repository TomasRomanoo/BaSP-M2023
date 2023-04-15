//      A - Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para 
//   mostrar una alerta utilizando cada una de las palabras.

    var arr = ["monday","tuesday","wednesday","thursday","friday"];
    console.log("El resultado del ej 05-A = " + arr);

    for (var i=0; i<arr.length; i++){
        alert(arr[i]);
    }

//      B - Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada 
//   palabra modificada.

    console.log("El resultado del ej 05-B sale solo por alert");

    for (var i=0; i<arr.length; i++){
        var word = arr[i].charAt(0).toLocaleUpperCase() + arr[i].slice(1);
        alert(word);
    }

//      C - Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
//   con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta
//   con la cadena completa.

    var sentence = " ";

    for (var i=0; i<arr.length; i++){
        sentence += arr[i] + ", ";
    }
    alert(sentence)

    console.log("El resultado del ej 05-C = " + sentence);

//      D - Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
//   es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
//   hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

    var arr2 = [];
    
    for (var i=0; i<10; i++){
        arr2.push(i);
    }

    console.log("El resultado del ej 05-D = " + arr2);

    // Este console.log es para darle mas legibilidad a la consola
    console.log(" ");