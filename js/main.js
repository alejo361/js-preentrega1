function ingresarNumero(ambiente, dimension){
    let invalido = true;
    do{
        
        numero  = parseFloat(prompt(`Ingrese el ${dimension} en metros de ${ambiente}`))
        if(isNaN(numero)){  
            alert("No se ingreso un numero válido.");
        }else if(numero == 0){
            alert("Cero (0) no es una longitud válida. Reintente.");
        }else{
            invalido = false;
        }
    }while(invalido)
    return numero;
}

function frigoriasPorM3(largo, ancho, alto){
    return largo * ancho * alto * 50;
}

function ingresarM3(ambiente){
    return frigoriasPorM3(ingresarNumero(ambiente, 'largo'),ingresarNumero(ambiente, 'ancho'),ingresarNumero(ambiente, 'alto'))
}

alert("Bienvenido usuario, esta aplicación calcula la cantidad de frigorias sugeridas en base a los metros cubicos para cada ambiente del domicilio.");
let mensajeFrigorias = '';
let parar = false;

do{
    let ambiente = prompt('Ingrese el nombre del ambiente o 0 para termninar').trim();
    (ambiente == 0 || ambiente === null) ? parar = true : mensajeFrigorias = mensajeFrigorias + `Para ${ambiente} se necesita un AACC de ${ingresarM3(ambiente)} frigorias/hr. \n`;
}while(!parar)

(mensajeFrigorias) ? alert(mensajeFrigorias) : alert("No se ingresaron datos. Para reingresar presione la tecla F5");