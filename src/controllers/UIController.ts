import * as readline from "readline";

/**
 * Controller utilitário de interface no terminal.
 * Centraliza leitura de entrada e impressão formatada.
 */
export class UIController {
  /** Instância de leitura/escrita do terminal. */
  private rl: readline.Interface;

  /** Inicializa a interface readline. */
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  /**
   * Exibe uma pergunta e retorna a resposta do usuário
   */
  async prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  /**
   * Exibe um menu com opções e retorna a escolha
   */
  async menu(title: string, options: string[]): Promise<number> {
    console.log(`\n${"=".repeat(50)}`);
    console.log(title);
    console.log(`${"=".repeat(50)}`);

    options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    while (true) {
      const answer = await this.prompt("\nDigite sua escolha: ");
      const choice = parseInt(answer);

      if (isNaN(choice) || choice < 1 || choice > options.length) {
        console.log("❌ Opção inválida! Tente novamente.");
        continue;
      }

      return choice;
    }
  }

  /**
   * Exibe um texto simples
   */
  print(message: string): void {
    console.log(message);
  }

  /**
   * Exibe um texto com formatação de título
   */
  printTitle(title: string): void {
    console.log(`\n${"=".repeat(50)}`);
    console.log(title);
    console.log(`${"=".repeat(50)}`);
  }

  /**
   * Pausa e aguarda Enter
   */
  async pause(): Promise<void> {
    await this.prompt("\nPressione Enter para continuar...");
  }

  /**
   * Limpa a tela (aproximado)
   */
  clear(): void {
    console.clear();
  }

  /**
   * Fecha a interface readline
   */
  close(): void {
    this.rl.close();
  }
}
