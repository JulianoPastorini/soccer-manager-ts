import { Team } from "../models/Team";
import { MatchLineup } from "./LineupController";

/** Resultado da partida para o time mandante. */
export type MatchOutcome = "WIN" | "DRAW" | "LOSS";

/** Evento de cada etapa da simulação. */
export interface TurnEvent {
  turn: number;
  attacker: string;
  defender: string;
  attackingForce: number;
  defendingForce: number;
  message: string;
}

/** Estrutura final retornada pela simulação da partida. */
export interface MatchResult {
  homeTeam: Team;
  awayTeam: Team;
  homeLineup: MatchLineup;
  awayLineup: MatchLineup;
  homeGoals: number;
  awayGoals: number;
  turnEvents: TurnEvent[];
  homeOutcome: MatchOutcome;
}

/**
 * Motor de partidas.
 * Encapsula simulação de jogo, treino pré-jogo e efeitos pós-jogo.
 */
export class MatchController {
  /**
   * Simula uma partida em 3 etapas.
   * Regra principal: ataque (ATA+MEI) versus defesa (DEF+GOL).
   * Posse alterna a cada etapa, exceto quando o atacante sofre gol,
   * situação em que a posse permanece com o mesmo atacante na etapa seguinte.
   */
  simulateMatch(homeLineup: MatchLineup, awayLineup: MatchLineup, homeStartsAttacking: boolean = true): MatchResult {
    let homeGoals = 0;
    let awayGoals = 0;
    const turnEvents: TurnEvent[] = [];
    let attackerIsHome = homeStartsAttacking;

    for (let turn = 1; turn <= 3; turn++) {
      const attacker = attackerIsHome ? homeLineup : awayLineup;
      const defender = attackerIsHome ? awayLineup : homeLineup;

      const attackingForce = attacker.attackOverall;
      const defendingForce = defender.defenseOverall;

      if (attackingForce > defendingForce) {
        if (attackerIsHome) {
          homeGoals += 1;
        } else {
          awayGoals += 1;
        }

        turnEvents.push({
          turn,
          attacker: attacker.team.name,
          defender: defender.team.name,
          attackingForce,
          defendingForce,
          message: `⚽ Gol do ${attacker.team.name}!`
        });

        attackerIsHome = !attackerIsHome;
        continue;
      }

      if (attackingForce === defendingForce) {
        turnEvents.push({
          turn,
          attacker: attacker.team.name,
          defender: defender.team.name,
          attackingForce,
          defendingForce,
          message: `🛡️ ${defender.team.name} segurou o ataque. Sem gol.`
        });

        attackerIsHome = !attackerIsHome;
        continue;
      }

      if (attackerIsHome) {
        awayGoals += 1;
      } else {
        homeGoals += 1;
      }

      turnEvents.push({
        turn,
        attacker: attacker.team.name,
        defender: defender.team.name,
        attackingForce,
        defendingForce,
        message: `⚠️ Contra-ataque! ${defender.team.name} marca no erro do ${attacker.team.name}.`
      });
    }

    let homeOutcome: MatchOutcome = "DRAW";

    if (homeGoals > awayGoals) {
      homeOutcome = "WIN";
    } else if (homeGoals < awayGoals) {
      homeOutcome = "LOSS";
    }

    return {
      homeTeam: homeLineup.team,
      awayTeam: awayLineup.team,
      homeLineup,
      awayLineup,
      homeGoals,
      awayGoals,
      turnEvents,
      homeOutcome
    };
  }

  /** Define o bônus financeiro conforme resultado do mandante. */
  getResultBonus(outcome: MatchOutcome): number {
    if (outcome === "WIN") {
      return 1_200_000;
    }

    if (outcome === "DRAW") {
      return 500_000;
    }

    return 200_000;
  }

  /** Calcula custo de treino pré-partida com base na renda fixa do estádio. */
  getTrainingCost(team: Team): number {
    return Math.round(team.estadio.rendaFixaPartida * 0.12);
  }

  /**
   * Aplica treino no elenco inteiro:
   * cada jogador recebe aumento randômico entre 0% e 3%.
   */
  applyTraining(team: Team): { invested: number; averageIncreasePercent: number } {
    const cost = this.getTrainingCost(team);
    const paid = team.economia.debitar(cost);

    if (!paid) {
      return {
        invested: 0,
        averageIncreasePercent: 0
      };
    }

    let totalIncreasePercent = 0;

    for (const player of team.players) {
      const increasePercent = Math.random() * 0.03;
      totalIncreasePercent += increasePercent;
      const updatedOverall = Math.round(player.overall * (1 + increasePercent));
      player.overall = Math.max(1, updatedOverall);
    }

    team.recalculateOveralls();

    return {
      invested: cost,
      averageIncreasePercent: (totalIncreasePercent / team.players.length) * 100
    };
  }

  /** Aplica receita da partida para o mandante: renda fixa + bônus por resultado. */
  applyPostMatchEconomy(homeTeam: Team, outcome: MatchOutcome): number {
    const fixedIncome = homeTeam.estadio.rendaFixaPartida;
    const bonus = this.getResultBonus(outcome);
    const totalIncome = fixedIncome + bonus;

    homeTeam.economia.creditar(totalIncome);
    return totalIncome;
  }

  /**
   * Ajusta overall de todos os jogadores pelo resultado da partida:
   * vitória +5%, empate 0%, derrota -5%.
   */
  applyOverallVariationByOutcome(team: Team, outcome: MatchOutcome): number {
    let multiplier = 1;

    if (outcome === "WIN") {
      multiplier = 1.05;
    }

    if (outcome === "LOSS") {
      multiplier = 0.95;
    }

    for (const player of team.players) {
      const adjusted = Math.round(player.overall * multiplier);
      player.overall = Math.max(1, adjusted);
    }

    team.recalculateOveralls();
    return (multiplier - 1) * 100;
  }
}
