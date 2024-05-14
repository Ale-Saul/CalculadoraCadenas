function sumarCadena(cadena) {
    if(cadena === "") 
        return 0;
    if(cadena.includes(","))
        return sumar(cadena);
    
    return Number.parseInt(cadena);

    function sumar(cadena){
        const numeros = cadena.split(",");
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
          console.log(numeros[i]);  
          suma += Number.parseInt(numeros[i]);
        }
        return suma;
    }
}

export default sumarCadena;
