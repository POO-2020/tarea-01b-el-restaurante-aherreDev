// ? Models
import Fecha from "./Fecha.model";
import Tiempo from "./Tiempo.model";
import Cliente from "./Cliente.model";
import ElementoPedido from "./ElementoPedido.model";
import Precio from "./Precio.model";

class Pedido {
  fecha;
  hora;
  cliente;
  elementosPedidos;
  fullTotal;
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
  getResumen = () => {
    let { getFecha } = this.fecha;
    let { getFormato24Horas } = this.hora;
    let total = 0,
      cantidad = 0;
    this.elementosPedidos.forEach(elemento => {
      total += elemento.getTotal();
      cantidad += elemento.getCantidad();
    });
    this.fullTotal = new Precio(total);
    return `${getFecha()} ${getFormato24Horas()} ${
      this.elementosPedidos.length
    } con ${cantidad} productos -total ${this.fullTotal.getPrecio()}`;
    // elementosPedidos[x],getCantidad();
  };
  getNumeroElementos = () => this.elementosPedidos.length;
  getNumeroProductos = () => {
    let cantidad = 0;
    this.elementosPedidos.forEach(elemento => {
      cantidad += elemento.getCantidad();
    });
    return cantidad;
  };
  getCostoTotal = () => {
    if (this.fullTotal) {
      return this.fullTotal.getPrecio();
    } else {
      let total = 0;
      this.elementosPedidos.forEach(elemento => {
        total += elemento.getTotal();
      });
      this.fullTotal = new Precio(total);
      return this.fullTotal.getPrecio();
    }
  };
  agregarElemento = elemento => {
    this.elementosPedidos.push(elemento);
  };
  listarElemento = () => {
    this.elementosPedidos.forEach(elemento => {
      console.log(elemento.getDescripcion());
    });
  };
}
export default Pedido;
