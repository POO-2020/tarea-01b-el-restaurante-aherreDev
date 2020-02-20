// ? Models
import Precio from "./Precio.model";

class Producto {
  precio;
  nombre;
  constructor(precio, nombre) {
    /**
     * @param {Precio} precio
     */
    this.precio = precio;
    this.nombre = nombre;
  }
  getDescription = () => {
    let { getPrecio } = this.precio;
    return `${this.nombre} ${getPrecio()}`;
  };
  getPrecio = () => this.precio.getRealPrecio();
}
export default Producto;
