export class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  set montoBrutoAnual(nuevo_MontoBrutoAnual) {
    if (typeof nuevo_MontoBrutoAnual === "number") {
      this._montoBrutoAnual = nuevo_MontoBrutoAnual;
    } else {
      console.log("Dato no es número");
    }
    
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nuevo_Deducciones) {
    if (typeof nuevo_Deducciones === "number") {
      this._deducciones = nuevo_Deducciones;
    } else {
      console.log("Dato no es número");
    }
  }
}


