import Producto from "./Producto.model";
class ElementoPedido {
  /**
   * @property {Producto} producto
   * @prop {number} cantidad
   */
  producto;
  cantidad;
  /**
   * @param {Producto} producto
   * @param {number} cantidad
   */
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
  getDescripcion = () => {
    let { getDescription } = this.producto;
    return `${this.cantidad} x ${getDescription()}`;
  };
}
export default ElementoPedido;
