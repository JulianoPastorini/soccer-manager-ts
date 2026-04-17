import { Player } from "./Player";
import { Estadio } from "./Estadio";
import { Economia } from "./Economia";
import { Position } from "./Player";

export class Team {
  name: string;
  players: Player[];
  estadio: Estadio;
  economia: Economia;
  attackOverall: number;
  defenseOverall: number;

  constructor(name: string, players: Player[], estadio: Estadio, economia: Economia) {
    this.name = name;
    this.players = players;
    this.estadio = estadio;
    this.economia = economia;
    this.attackOverall = 0;
    this.defenseOverall = 0;
    this.recalculateOveralls();
  }

  recalculateOveralls(): void {
    const attackSector = this.players
      .filter((player) => player.position === Position.ATA || player.position === Position.MEI)
      .reduce((total, player) => total + player.overall, 0);

    const defenseSector = this.players
      .filter((player) => player.position === Position.DEF || player.position === Position.GOL)
      .reduce((total, player) => total + player.overall, 0);

    this.attackOverall = Math.round(attackSector);
    this.defenseOverall = Math.round(defenseSector);
  }
  
}
class Player {
  constructor(
    public nome: string,
    public posicao: string,
    public overall: number
  ) {}
}
