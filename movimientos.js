let movimientos = [
  { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
  { numeroCuenta: "02345211", monto: 45.9, tipo: "D" },
  { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
  { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
  { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
];
let misMovimientos = [];
cargar = function () {
  mostrarComponente("divMovimientos");
  ocultarComponente("divCuentas");
  ocultarComponente("divTransacciones");
};
const buscarMovimientos = () => {
  let numeroCuenta = recuperarTexto("txtNumCuenta");

  filtrarMovimientos(numeroCuenta);
};
filtrarMovimientos = function (numeroCuenta) {
  let movimientosCuenta = [];
  console.log(numeroCuenta);

  for (let i = 0; i < movimientos.length; i++) {
    const movimiento = movimientos[i];
    if (movimiento.numeroCuenta == numeroCuenta) {
      movimientosCuenta.push(movimiento);
    }
  }
  mostrarMovimientos(movimientosCuenta);
  //Se barre el arreglo de movimientos
  //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
  //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
  //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
};

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
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
        <td>${movimiento.monto}</td>
        <td>${movimiento.tipo}</td>
    </tr>
        `;
    }
    tabla.innerHTML = contenido;
  //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
  //Columnas: NUMERO CUENTA, MONTO, TIPO
  //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
  //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
  //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
};
