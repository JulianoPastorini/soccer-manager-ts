import { UIController } from "./UIController";
import { CampaignSaveService } from "../services/CampaignSaveService";

/**
 * Controller do menu principal do jogo.
 * Gerencia entrada do usuário para nova campanha, carga de save e instruções.
 */
export class MenuController {
  /** Interface única de I/O do terminal para toda a sessão. */
  private ui: UIController;

  /** Inicializa o menu principal e sua interface de entrada. */
  constructor() {
    this.ui = new UIController();
  }

  /**
   * Loop principal do menu inicial do jogo.
   */
  async start(): Promise<void> {
    this.ui.clear();
    this.ui.printTitle("🏆 FOOTBALL MANAGER 2026 🏆");
    this.ui.print("Bem-vindo ao melhor simulador de futebol!");
    this.ui.print("Gerencie seu time, compre/venda jogadores e vença a campanha!\n");

    let running = true;

    while (running) {
      const choice = await this.ui.menu(
        "MENU PRINCIPAL",
        [
          "Começar Nova Campanha",
          "Carregar Campanha",
          "Instruções do Jogo",
          "Sair"
        ]
      );

      switch (choice) {
        case 1:
          await this.newCampaign();
          break;
        case 2:
          await this.loadCampaign();
          break;
        case 3:
          await this.showInstructions();
          break;
        case 4:
          running = false;
          this.ui.print("\n👋 Obrigado por jogar! Até logo!\n");
          this.ui.close();
          break;
      }
    }
  }

  /**
   * Fluxo de criação de nova campanha.
   */
  private async newCampaign(): Promise<void> {
    this.ui.clear();
    this.ui.printTitle("NOVA CAMPANHA");

    const coachName = await this.ui.prompt("Digite o nome do seu técnico: ");

    if (!coachName) {
      this.ui.print("❌ Nome inválido!");
      await this.ui.pause();
      return;
    }

    const campaignModule = require("./CampaignController") as {
      CampaignController: new (name: string, ui: UIController) => { start: () => Promise<void> };
    };

    const campaign = new campaignModule.CampaignController(coachName, this.ui);
    await campaign.start();
  }

  /**
   * Fluxo de carregamento de campanha salva em disco.
   */
  private async loadCampaign(): Promise<void> {
    this.ui.clear();
    this.ui.printTitle("CARREGAR CAMPANHA");

    const savedCampaign = await CampaignSaveService.loadCampaign();

    if (!savedCampaign) {
      this.ui.print("❌ Nenhuma campanha salva encontrada.");
      await this.ui.pause();
      return;
    }

    this.ui.print(`Campanha encontrada! Técnico: ${savedCampaign.coachName}`);
    this.ui.print(`Temporada ${savedCampaign.season} | Rodada ${savedCampaign.round}`);

    const choice = await this.ui.menu("", ["Carregar campanha", "Cancelar"]);

    if (choice !== 1) {
      return;
    }

    const campaignModule = require("./CampaignController") as {
      CampaignController: new (name: string, ui: UIController) => {
        startFromSave: (savedCampaignData: Awaited<ReturnType<typeof CampaignSaveService.loadCampaign>>) => Promise<void>;
      };
    };

    const campaign = new campaignModule.CampaignController(savedCampaign.coachName, this.ui);
    await campaign.startFromSave(savedCampaign);
  }

  /**
   * Exibe o texto de instruções gerais do jogo.
   */
  private async showInstructions(): Promise<void> {
    this.ui.clear();
    this.ui.printTitle("INSTRUÇÕES DO JOGO");

    this.ui.print(`
📌 OBJETIVO:
Gerencie um time de futebol por uma temporada completa e tente
vencer o campeonato!

💰 ECONOMIA:
- Comece com saldo inicial para o seu time
- Ganhe dinheiro ao vencer jogos
- Gaste dinheiro comprando/vendendo jogadores
- Invista em melhorias do estádio

👥 ELENCO:
- Cada time tem 23 jogadores
- Posições: Goleiro, Defesa, Meio-campo, Ataque
- Cada jogador tem um valor (overall) que afeta o desempenho

⚽ PARTIDAS:
- Jogue contra os 7 times rivais
- Resultado depende da qualidade do seu elenco
- Ganhe pontos (vitória=3, empate=1, derrota=0)

🎯 MERCADO:
- Compre jogadores melhores se tiver saldo
- Venda jogadores para arrecadar fundos
- Negocie para montar o melhor elenco possível

Boa sorte, técnico!
    `);

    await this.ui.pause();
  }
}
