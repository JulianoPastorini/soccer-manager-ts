export class Economia {
  saldo: number;

  constructor(saldo: number) {
    if (saldo < 0) {
      throw new Error("Saldo inicial nao pode ser negativo.");
    }

    this.saldo = saldo;
  }

  creditar(valor: number): void {
    if (valor < 0) {
      throw new Error("Valor de credito nao pode ser negativo.");
    }

    this.saldo += valor;
  }

  debitar(valor: number): boolean {
    if (valor < 0) {
      throw new Error("Valor de debito nao pode ser negativo.");
    }

    if (valor > this.saldo) {
      return false;
    }

    this.saldo -= valor;
    return true;
  }
}
