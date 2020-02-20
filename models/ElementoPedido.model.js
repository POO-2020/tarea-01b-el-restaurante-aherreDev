import Producto from "./Producto.model";
class ElementoPedido {
  /**
   * @property {Producto} producto
   * @prop {number} cantidad
   */
  producto;
  cantidad;
  _total;
  /**
   * @param {Producto} producto
   * @param {number} cantidad
   */
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
  getCantidad = () => this.cantidad;
  getDescripcion = () => {
    let { getDescription } = this.producto;
    return `${this.cantidad} x ${getDescription()}`;
  };
  getTotal = () => this.producto.getPrecio() * this.cantidad;
}
export default ElementoPedido;
