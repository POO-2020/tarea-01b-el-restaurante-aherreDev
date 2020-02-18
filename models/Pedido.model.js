// ? Models
import Fecha from "./Fecha.model";
import Tiempo from "./Tiempo.model";
import Cliente from "./Cliente.model";
import ElementoPedido from "./ElementoPedido.model";

class Pedido {
  fecha;
  hora;
  cliente;
  elementosPedidos;
  /**
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Cliente} cliente
   * @param {Array.<ElementoPedido>} elementosPedidos
   */
  constructor(fecha, hora, cliente, elementosPedidos) {
    this.fecha = fecha;
    this.hora = hora;
    this.cliente = cliente;
    this.elementosPedidos = elementosPedidos;
  }
  getResumen = () => null;
  getNumeroElementos = () => null;
  getNumeroProductos = () => null;
  getCostoTotal = () => null;
  agregarElemento = () => null;
  listarElemento = () => null;
}
export default Pedido;
