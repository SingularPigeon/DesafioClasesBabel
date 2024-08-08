export class Cliente {
  constructor(nombre,impuesto){
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_Nombre) {
    this._nombre = nuevo_Nombre;
  }

  calcularImpuesto() {
    return ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21);
  }
}

