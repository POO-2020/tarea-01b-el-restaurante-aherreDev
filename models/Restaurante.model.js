// ? Models
import Producto from "./Producto.model";
import Direccion from "./Direccion.model";

class Restaurante {
  nombre;
  telefono;
  direccion;
  productos;
  pedidos;
  /**
   * @param {string} nombre
   * @param {string} telefono
   * @param {Direccion} direccion
   * @param {Array.<Producto>} productos
   * @param {string} pedidos
   */
  constructor(nombre, telefono, direccion, productos, pedidos) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.productos = productos;
    this.pedidos = pedidos;
  }
}
export default Restaurante;
