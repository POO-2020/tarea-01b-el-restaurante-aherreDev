import Producto from "./Producto.model";

class ElementoPedido {
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
  getDescripcion = () => null;
}
export default ElementoPedido;
