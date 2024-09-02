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
    cuentaAfectada=buscarCuenta(numeroCuenta);
    cuentaAfectada.saldo=cuentaAfectada.saldo+monto
    return cuentaAfectada;
}

ejecutarDeposito=function(){
    let numeroDeCuenta=recuperarTexto("lblNumeroCuenta");
    let monto=recuperarInt("lblMonto");
    let depositadoMonto=depositar(numeroDeCuenta,monto);
    alert("TRANSACCION EXITOSA")
    mostrarTransacciones(depositadoMonto.numeroCuenta);
}


retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    cuentaAfectada=buscarCuenta(numeroCuenta);
    if(cuentaAfectada.saldo>monto){
        cuentaAfectada.saldo=cuentaAfectada.saldo-monto
        alert("TRANSACCION EXITOSA")
        return cuentaAfectada;
    }else{
        alert("SALDO INSUFICIENTE")
    }
}
ejecutarRetiro=function(){
    let numeroDeCuenta=recuperarTexto("lblNumeroCuenta");
    let monto=recuperarInt("lblMonto");
    let retiroMonto=retirar(numeroDeCuenta,monto);
    mostrarTransacciones(retiroMonto.numeroCuenta);
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