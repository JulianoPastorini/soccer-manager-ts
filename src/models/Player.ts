import { Util } from "../util/PlayerNames";

export enum Position {
  GOL = "GOL",
  DEF = "DEF",
  MEI = "MEI",
  ATA = "ATA"
}

export class Player {
  name: string;
  position: Position;
  overall: number;

  constructor();
  constructor(name: string, position: Position, overall: number);
  constructor(name: string, position: string, overall: number);
  constructor(name?: string, position?: Position | string, overall?: number) {
    if (name === undefined && position === undefined && overall === undefined) {
      this.name = Util.getNome();
      this.position = (Util.getPosition()) as Position;
      this.overall = Util.getOverall();
      return;
    }

    if (name === undefined || position === undefined || overall === undefined) {
      throw new Error("Player constructor requires either 0 or 3 arguments.");
    }

    this.name = name;
    this.position = (position) as Position;
    this.overall = overall;
  }

  normalizePosition(position: Position | string): Position {
    if (typeof position !== "string") {
      return position;
    }

    switch (position) {
      case Position.GOL:
      case Position.DEF:
      case Position.MEI:
      case Position.ATA:
        return position;
      default:
        throw new Error(`Invalid player position: ${position}`);
    }
  }

  get transfer(): number {
    return this.overall * 100;
  }
}