import { Player } from "../models/Player";
import { Position } from "../models/Player";
import { Util } from "../util/PlayerNames";

export function generateTeamRoster(teamName: string): Player[] {
  const roster: Player[] = [];

  // 3 Goalkeepers (GOL)
  for (let i = 0; i < 3; i++) {
    roster.push(new Player(Util.getNome(), "GOL", Util.getOverall()));
  }

  // 8 Defenders (DEF)
  for (let i = 0; i < 8; i++) {
    roster.push(new Player(Util.getNome(), "DEF", Util.getOverall()));
  }

  // 8 Midfielders (MEI)
  for (let i = 0; i < 8; i++) {
    roster.push(new Player(Util.getNome(), "MEI", Util.getOverall()));
  }

  // 4 Attackers (ATA)
  for (let i = 0; i < 4; i++) {
    roster.push(new Player(Util.getNome(), "ATA", Util.getOverall()));
  }

  return roster;
}
