cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas=function(){
    cmpTabla = document.getElementById("tablaCuentas");
  let tabla = mostrarComponente("tablaCuentas");
  tabla =
    "<table><tr>" +
    "<th>NUMERO CUENTA</th>" +
    "<th>NOMBRE</th>" +
    "<th>SUELDO</th>" +
    "</tr>";
  let cuentaPersona;
  for (i = 0; i < cuentas.length; i++) {
    cuentaPersona = cuentas[i];
    tabla +=
      "<tr><td>" +
      cuentaPersona.numeroCuenta +
      "</td><td>" +
      cuentaPersona.nombre +
      " "+cuentaPersona.apellido +
      "</td><td>" +
      cuentaPersona.saldo +
      "</td>" +
      "</tr>";
  }
  tabla += "</table>";
  cmpTabla.innerHTML = tabla;
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    for(i=0;i<cuentas.length;i++){
        let cliente=cuentas[i];
        if(cliente.numeroCuenta==numeroCuenta){
            return  cliente;
        }
    }
    return null;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
   if(cuenta==null){
    alert ("CUENTA AGREGADA");
    return true;
   }else{
    alert ("CUENTA EXISTENTE");
    return false;
   }
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){

    let cedulas=recuperarTexto("txtCedula");
    let nombres=recuperarTexto("txtNombre");
    let apellidos=recuperarTexto("txtApellido");
    let numeroCuentas=recuperarTexto("txtNumeroCuenta");

    let cuenta={};
    cuenta.numeroCuenta=numeroCuentas;
    cuenta.cedula=cedulas;
    cuenta.nombre=nombres;
    cuenta.apellido=apellidos;
    cuenta.saldo=0.0;
    let cuentaEncontrada=buscarCuenta(cuenta.numeroCuenta);

    let cuentaAgregada=agregarCuenta(cuentaEncontrada);
    if(cuentaAgregada==true){
        cuentas.push(cuenta);
    }
    mostrarCuentas();
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
}
