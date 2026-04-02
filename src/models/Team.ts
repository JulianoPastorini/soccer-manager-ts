import { Player } from "./Player";

export class Team {
  name: string;
  players: Player[];

  constructor(name: string, players: Player[]) {
    this.name = name;
    this.players = players;
  }
  
}
class Player {
  constructor(
    public nome: string,
    public posicao: string,
    public overall: number
  ) {}
}
