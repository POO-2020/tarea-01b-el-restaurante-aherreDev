class Fecha extends Date {
  getAños = () => this.getFullYear();
  getMeses = () => this.getMonth();
  getSemanas = () => this.getDay();
  getDias = () => this.getDate();
  getFecha = () => this.getUTCDate();
  // TODO: Know what is getDiaFecha
  getDiaFecha = () => this.getFullYear();
}

export default Fecha;
