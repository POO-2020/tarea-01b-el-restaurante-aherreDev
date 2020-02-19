class Precio {
  precio;
  /**
   * @param {numbre} precio
   */
  constructor(precio) {
    if (precio !== null || precio !== undefined) this.precio = precio;
  }
  getPrecio = () => this.precio;
}

export default Precio;
