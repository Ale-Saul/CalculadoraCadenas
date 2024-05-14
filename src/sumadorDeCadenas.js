function sumarCadena(cadena) {
    if(cadena === "") 
        return 0;
    if(cadena.startsWith("//"))
        return sumarPersonalizado(cadena);
    if(cadena.includes(",") || cadena.includes("-"))
        return sumar(cadena);

    
    return Number.parseInt(cadena);

    function sumar(cadena){
        const numeros = cadena.split(/,|-/);
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            const numero = Number.parseInt(numeros[i]);
            if(numero < 1000)
                suma += Number.parseInt(numeros[i]);
        }
        return suma;
    }

    function sumarPersonalizado(cadena){
        const delimitador = cadena.substring(3, 4);
        const numeros = cadena.substring(6).split(new RegExp(`,|-|${delimitador}`));
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            const numero = Number.parseInt(numeros[i]);
            if(numero < 1000)
                suma += Number.parseInt(numeros[i]);
        }
        return suma;
    }
}

export default sumarCadena;
