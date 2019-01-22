let multiRusa = function(num1,num2){
    let divisible=true;
    let resultado=0;
    let i = 1;
    while(divisible){
        console.log('Iteracion '+i)
        console.log('Multiplicando: '+num1+' Multiplicador: '+num2)
        if(num1>1){
            if(num1%2!=0){
                resultado=resultado+num2;
            }
            num1=Math.floor(num1/2);
            num2=num2*2;
            console.log('Resultado: '+resultado)
        } else{
            resultado = resultado + num2;
            console.log('Resultado: '+resultado)
            divisible=false;
        }
        i++
    }
    return resultado;
}

let multiplicacion = multiRusa(23,15)
console.log('El resultado de multiplicar por el metodo russo es: '+multiplicacion)
