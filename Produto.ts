export class Mesa {
  numero: number | null;
  cliente: string | null;

  constructor() {
    this.numero = null;
    this.cliente = null;
  }

  reservar(nome: string) {
    this.cliente = nome;
  }

  cancelar() {
    this.numero = null;
    this.cliente = null;
  }

  verReserva() {
    if (this.cliente) {
      return { numero: this.numero, cliente: this.cliente };
    } else {
      return { mensagem: "Nenhuma reserva" };
    }
  }
}declare const process: {
  exit(code?: number): never;
};