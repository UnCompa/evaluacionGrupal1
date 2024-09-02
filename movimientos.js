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
