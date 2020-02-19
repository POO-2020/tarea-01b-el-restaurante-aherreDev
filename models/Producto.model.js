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
    {
      this.nombre, this.precio;
    }
  };
}
export default Producto;
