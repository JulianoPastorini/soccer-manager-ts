import { Player, Position } from "../models/Player";
import { Team } from "../models/Team";
import { UIController } from "./UIController";

export type Formation = "3-5-2" | "4-4-2" | "4-3-3";

export interface MatchLineup {
  team: Team;
  formation: Formation;
  starters: Player[];
  attackOverall: number;
  defenseOverall: number;
}

interface FormationRequirements {
  GOL: number;
  DEF: number;
  MEI: number;
  ATA: number;
}

const FORMATION_REQUIREMENTS: Record<Formation, FormationRequirements> = {
  "3-5-2": { GOL: 1, DEF: 3, MEI: 5, ATA: 2 },
  "4-4-2": { GOL: 1, DEF: 4, MEI: 4, ATA: 2 },
  "4-3-3": { GOL: 1, DEF: 4, MEI: 3, ATA: 3 }
};

const FORMATIONS: Formation[] = ["3-5-2", "4-4-2", "4-3-3"];

export class LineupController {
  async chooseUserLineup(ui: UIController, team: Team): Promise<MatchLineup> {
    ui.printTitle("ESCALAÇÃO PRÉ-JOGO");
    const formation = await this.chooseFormation(ui);

    ui.print(`\nFormação escolhida: ${formation}`);
    ui.print("Agora selecione os 11 titulares.\n");

    const requirements = FORMATION_REQUIREMENTS[formation];
    const selectedPlayers: Player[] = [];

    selectedPlayers.push(...await this.selectPlayersByPosition(ui, team, Position.GOL, requirements.GOL, selectedPlayers));
    selectedPlayers.push(...await this.selectPlayersByPosition(ui, team, Position.DEF, requirements.DEF, selectedPlayers));
    selectedPlayers.push(...await this.selectPlayersByPosition(ui, team, Position.MEI, requirements.MEI, selectedPlayers));
    selectedPlayers.push(...await this.selectPlayersByPosition(ui, team, Position.ATA, requirements.ATA, selectedPlayers));

    return this.buildLineup(team, formation, selectedPlayers);
  }

  chooseNpcLineup(team: Team): MatchLineup {
    const formation = FORMATIONS[Math.floor(Math.random() * FORMATIONS.length)]!;
    const requirements = FORMATION_REQUIREMENTS[formation];
    const selectedPlayers: Player[] = [];

    selectedPlayers.push(...this.selectTopPlayersByPosition(team, Position.GOL, requirements.GOL, selectedPlayers));
    selectedPlayers.push(...this.selectTopPlayersByPosition(team, Position.DEF, requirements.DEF, selectedPlayers));
    selectedPlayers.push(...this.selectTopPlayersByPosition(team, Position.MEI, requirements.MEI, selectedPlayers));
    selectedPlayers.push(...this.selectTopPlayersByPosition(team, Position.ATA, requirements.ATA, selectedPlayers));

    return this.buildLineup(team, formation, selectedPlayers);
  }

  private async chooseFormation(ui: UIController): Promise<Formation> {
    const choice = await ui.menu("ESCOLHA A FORMAÇÃO", ["3-5-2", "4-4-2", "4-3-3"]);
    return FORMATIONS[choice - 1]!;
  }

  private async selectPlayersByPosition(
    ui: UIController,
    team: Team,
    position: Position,
    requiredCount: number,
    alreadySelected: Player[]
  ): Promise<Player[]> {
    const selected: Player[] = [];

    for (let i = 0; i < requiredCount; i++) {
      while (true) {
        const availablePlayers = team.players
          .filter((player) => player.position === position)
          .filter((player) => !alreadySelected.includes(player) && !selected.includes(player))
          .sort((a, b) => b.overall - a.overall);

        if (availablePlayers.length === 0) {
          throw new Error(`Sem jogadores suficientes para posição ${position}.`);
        }

        ui.print(`\n${position} (${i + 1}/${requiredCount}):`);
        availablePlayers.forEach((player, index) => {
          ui.print(`${index + 1}. ${player.name} (Overall: ${player.overall})`);
        });

        const answer = await ui.prompt("Escolha o número do jogador: ");
        const index = parseInt(answer, 10) - 1;

        if (isNaN(index) || index < 0 || index >= availablePlayers.length) {
          ui.print("❌ Opção inválida. Tente novamente.");
          continue;
        }

        selected.push(availablePlayers[index]!);
        break;
      }
    }

    return selected;
  }

  private selectTopPlayersByPosition(
    team: Team,
    position: Position,
    requiredCount: number,
    alreadySelected: Player[]
  ): Player[] {
    const availablePlayers = team.players
      .filter((player) => player.position === position)
      .filter((player) => !alreadySelected.includes(player))
      .sort((a, b) => b.overall - a.overall);

    return availablePlayers.slice(0, requiredCount);
  }

  private buildLineup(team: Team, formation: Formation, starters: Player[]): MatchLineup {
    const attackOverall = starters
      .filter((player) => player.position === Position.ATA || player.position === Position.MEI)
      .reduce((sum, player) => sum + player.overall, 0);

    const defenseOverall = starters
      .filter((player) => player.position === Position.DEF || player.position === Position.GOL)
      .reduce((sum, player) => sum + player.overall, 0);

    return {
      team,
      formation,
      starters,
      attackOverall,
      defenseOverall
    };
  }
}
