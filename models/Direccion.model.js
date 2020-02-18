class Direccion {
  calle;
  numInt;
  numExt;
  col;
  cp;
  ciudad;
  municipio;
  /**
   * @param {string} calle
   * @param {number} numInt
   * @param {numExt} numExt
   * @param {string} col
   * @param {string} cp
   * @param {string} ciudad
   * @param {string} municipio
   */
  constructor(calle, numInt, numExt, col, cp, ciudad, municipio) {
    this.calle = calle;
    this.numInt = numInt;
    this.numExt = numExt;
    this.col = col;
    this.cp = cp;
    this.ciudad = ciudad;
    this.municipio = municipio;
  }
  getFormatoCorto = () => null;
  getFormatoLargo = () => null;
}

export default Direccion;
