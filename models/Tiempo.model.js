class Tiempo {
  hora;
  minuto;
  periodo;
  constructor(hora, minuto, periodo) {
    this.hora = hora;
    this.minuto = minuto;
    this.periodo = periodo;
  }
  getFormato24Horas = () => {};
  getFormato12Horas = () => {};
}

export default Tiempo;
