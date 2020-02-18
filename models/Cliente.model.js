// ? Models
import Direccion from "./Direccion.model";

class Cliente {
  nombre;
  direccion;
  telefono;
  /**
   * @param {string} nombre
   * @param {Direccion} direccion
   * @param {string} telefono
   */
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  getPerfil = () => {};
}

export default Cliente;
