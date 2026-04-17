export class Estadio {
  nome: string;
  capacidade: number;
  rendaPorJogo: number;
  status: number;

  constructor(nome: string, capacidade: number, rendaPorJogo: number, status: number = 1) {
    if (nome.trim().length === 0) {
      throw new Error("Nome do estadio nao pode ser vazio.");
    }

    if (capacidade < 0) {
      throw new Error("Capacidade do estadio nao pode ser negativa.");
    }

    if (rendaPorJogo < 0) {
      throw new Error("Renda por jogo nao pode ser negativa.");
    }

    if (status < 1 || status > 5) {
      throw new Error("Status do estadio deve estar entre 1 e 5.");
    }

    this.nome = nome;
    this.capacidade = capacidade;
    this.rendaPorJogo = rendaPorJogo;
    this.status = status;
  }

  get rendaFixaPartida(): number {
    const multiplicadorStatus = 1 + (this.status - 1) * 0.15;
    return Math.round(this.rendaPorJogo * multiplicadorStatus);
  }
}
