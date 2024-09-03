cuentas = [
  {
    numeroCuenta: "02234567",
    cedula: "1714616123",
    nombre: "Juan",
    apellido: "Perez",
    saldo: 0.0,
  },
  {
    numeroCuenta: "02345211",
    cedula: "1281238233",
    nombre: "Felipe",
    apellido: "Caicedo",
    saldo: 0.0,
  },
];
cargarCuentas = function () {
  mostrarComponente("divCuentas");
  ocultarComponente("divMovimientos");
  ocultarComponente("divTransacciones");
};
cargarTransacciones = function () {
  mostrarComponente("divTransacciones");
  ocultarComponente("divCuentas");
  ocultarComponente("divMovimientos");
  deshabilitarComponente("lblDepositar");
  deshabilitarComponente("lblRetirar");
  deshabilitarComponente("lblMonto");
  mostrarTransacciones();
};
cargarMovimientos = function () {
  mostrarComponente("divMovimientos");
  ocultarComponente("divCuentas");
  ocultarComponente("divTransacciones");
};
movimientos = [
  { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
  { numeroCuenta: "02345211", monto: 45.9, tipo: "D" },
  { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
  { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
  { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
];

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/
mostrarCuentas = function () {
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
      " " +
      cuentaPersona.apellido +
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
};

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
  let cuenta = null;
  let elementoCliente;
  for (let i = 0; i < cuentas.length; i++) {
    elementoCliente = cuentas[i];
    if (elementoCliente.numeroCuenta == numeroCuenta) {
      cuenta = elementoCliente;
    }
  }
  if (cuenta != null) {
    return cuenta;
  } else {
    return cuenta;
  }
};
/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
  if (cuenta == null) {
    alert("CUENTA AGREGADA");
    return true;
  } else {
    alert("CUENTA EXISTENTE");
    return false;
  }
  //Si ya existe mostrar un alert CUENTA EXISTENTE
  //Si se agrega, mostrar un alert CUENTA AGREGADA
};

agregar = function () {
  let cedulas = recuperarTexto("txtCedula");
  let nombres = recuperarTexto("txtNombre");
  let apellidos = recuperarTexto("txtApellido");
  let numeroCuentas = recuperarTexto("txtNumeroCuenta");

  let cuenta = {};
  cuenta.numeroCuenta = numeroCuentas;
  cuenta.cedula = cedulas;
  cuenta.nombre = nombres;
  cuenta.apellido = apellidos;
  cuenta.saldo = 0.0;
  let cuentaEncontrada = buscarCuenta(cuenta.numeroCuenta);

  let cuentaAgregada = agregarCuenta(cuentaEncontrada);
  if (cuentaAgregada == true) {
    cuentas.push(cuenta);
  }
  mostrarCuentas();
  //Toma los valores de las cajas de texto, sin validaciones
  //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
  //Invoca a agregarCuenta
  //Invoca a mostrarCuentas
};

ejecutarBusqueda = function () {
  let numeroDeCuenta = recuperarTexto("lblNumeroCuenta");
  let cuentaEncontrado = buscarCuenta(numeroDeCuenta);
  if (cuentaEncontrado != null) {
    mostrarTransacciones(numeroDeCuenta);
    habilitarComponente("lblMonto");
    habilitarComponente("lblDepositar");
    habilitarComponente("lblRetirar");
  } else {
    alert("CUENTA INEXISTENTE");
  }
};

depositar = function (numeroCuenta, monto) {
  let cuentaAfectada;
  cuentaAfectada = buscarCuenta(numeroCuenta);
  cuentaAfectada.saldo = cuentaAfectada.saldo + monto;
  return cuentaAfectada;
};

ejecutarDeposito = function () {
  let numeroDeCuenta = recuperarTexto("lblNumeroCuenta");
  let monto = recuperarInt("lblMonto");
  let depositadoMonto = depositar(numeroDeCuenta, monto);
  alert("TRANSACCION EXITOSA");
  mostrarTransacciones(depositadoMonto.numeroCuenta);
};

retirar = function (numeroCuenta, monto) {
  let cuentaAfectada;
  cuentaAfectada = buscarCuenta(numeroCuenta);
  if (cuentaAfectada.saldo > monto) {
    cuentaAfectada.saldo = cuentaAfectada.saldo - monto;
    alert("TRANSACCION EXITOSA");
    return cuentaAfectada;
  } else {
    alert("SALDO INSUFICIENTE");
  }
};
ejecutarRetiro = function () {
  let numeroDeCuenta = recuperarTexto("lblNumeroCuenta");
  let monto = recuperarInt("lblMonto");
  let retiroMonto = retirar(numeroDeCuenta, monto);
  mostrarTransacciones(retiroMonto.numeroCuenta);
};

//Para mostrar en pantalla los datos
mostrarTransacciones = function (numeroCuenta) {
  let cmpTabla = document.getElementById("lblTabla");
  let contenidoTabla =
    '<table id="contenidoTabla"><tr>' +
    "<th>CEDULA</th>" +
    "<th>NOMBRES COMPLETOS</th>" +
    "<th>SALDO </th>" +
    "</tr>";
  let elementoCuenta;
  for (let i = 0; i < cuentas.length; i++) {
    elementoCuenta = cuentas[i];
    if (elementoCuenta.numeroCuenta == numeroCuenta) {
      contenidoTabla +=
        "<tr><td>" +
        elementoCuenta.cedula +
        "</td>" +
        "<td>" +
        elementoCuenta.nombre +
        " " +
        elementoCuenta.apellido +
        "</td>" +
        "<td>" +
        elementoCuenta.saldo +
        "</td></tr>";
    }
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};
const buscarMovimientos = () => {
  let numeroCuenta = recuperarTexto("txtNumCuenta");

  filtrarMovimientos(numeroCuenta);
};
filtrarMovimientos = function (numeroCuenta) {
  let movimientosCuenta = [];

  for (let i = 0; i < movimientos.length; i++) {
    const movimiento = movimientos[i];
    if (movimiento.numeroCuenta == numeroCuenta) {
      movimientosCuenta.push(movimiento);
    }
  }
  mostrarMovimientos(movimientosCuenta);
};

let mostrarMovimientos = function (misMovimientos) {
  let tabla = document.getElementById("tablaMovimientos");
  let contenido = `
      <table>
      <tr>
          <th>Numero cuenta</th>
          <th>Monto</th>
          <th>Tipo</th>
      </tr>
      `;
  for (let i = 0; i < misMovimientos.length; i++) {
    const movimiento = misMovimientos[i];
    contenido += `
      <tr>
          <td>${movimiento.numeroCuenta}</td>
          <td>${
            movimiento.tipo === "D" ? movimiento.monto * -1 : movimiento.monto
          }</td>
          <td>${movimiento.tipo}</td>
      </tr>
          `;
  }
  contenido += `</table>`;
  tabla.innerHTML = contenido;
};

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte

//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos
