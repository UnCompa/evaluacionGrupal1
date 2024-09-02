cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("lblDepositar");
    deshabilitarComponente("lblRetirar");
    deshabilitarComponente("lblMonto");
    mostrarTransacciones();
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let cuenta=null;
    let elementoCliente;
    for(let i=0;i<cuentas.length;i++){
        elementoCliente=cuentas[i];
        if(elementoCliente.numeroCuenta==numeroCuenta){
            cuenta=elementoCliente;
        }
    }
    if(cuenta!=null){
        return cuenta;
    }else{
        return cuenta;
    }

}

ejecutarBusqueda=function(){
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
    let numeroDeCuenta=recuperarTexto("lblNumeroCuenta");
    let cuentaEncontrado=buscarCuenta(numeroDeCuenta);
    if(cuentaEncontrado!=null){
        mostrarTransacciones(numeroDeCuenta);
        habilitarComponente("lblMonto");
        habilitarComponente("lblDepositar");
        habilitarComponente("lblRetirar");
    }else{
        alert("CUENTA INEXISTENTE");
    }
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
    cuentaAfectada=buscarCuenta(numeroCuenta);
    cuentaAfectada.saldo=cuentaAfectada.saldo+monto
    return cuentaAfectada;
}

ejecutarDeposito=function(){
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
    let numeroDeCuenta=recuperarTexto("lblNumeroCuenta");
    let monto=recuperarInt("lblMonto");
    let depositadoMonto=depositar(numeroDeCuenta,monto);
    alert("TRANSACCION EXITOSA")
    mostrarTransacciones(depositadoMonto.numeroCuenta);
}


retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}

//Para mostrar en pantalla los datos
mostrarTransacciones=function(numeroCuenta){
    let cmpTabla=document.getElementById("lblTabla");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRES COMPLETOS</th>"+
    "<th>SALDO </th>"+
    "</tr>"
    let elementoCuenta;
    for(let i=0;i<cuentas.length;i++){
        elementoCuenta=cuentas[i]
        if(elementoCuenta.numeroCuenta==numeroCuenta){
            contenidoTabla+=
            "<tr><td>"+elementoCuenta.cedula+"</td>"+
            "<td>"+elementoCuenta.nombre+" "+elementoCuenta.apellido+"</td>"+
            "<td>"+elementoCuenta.saldo+"</td></tr>"
        }
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}