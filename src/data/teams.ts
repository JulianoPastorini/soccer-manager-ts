import { Economia } from "../models/Economia";
import { Estadio } from "../models/Estadio";
import { Player } from "../models/Player";
import { Team } from "../models/Team";
import { generateTeamRoster } from "./players";

const gremioPlayers: Player[] = generateTeamRoster("Gremio");
const interPlayers: Player[] = generateTeamRoster("Internacional");
const flamengoPlayers: Player[] = generateTeamRoster("Flamengo");
const palmeirasPlayers: Player[] = generateTeamRoster("Palmeiras");
const corinthiansPlayers: Player[] = generateTeamRoster("Corinthians");
const botafogoPlayers: Player[] = generateTeamRoster("Botafogo");
const vascoPlayers: Player[] = generateTeamRoster("Vasco");
const sãoPauloPlayers: Player[] = generateTeamRoster("São Paulo");

export const teams: Team[] = [
  new Team(
    "Gremio",
    gremioPlayers,
    new Estadio("Arena do Gremio", 55000, 1800000),
    new Economia(120000000)
  ),
  new Team(
    "Internacional",
    interPlayers,
    new Estadio("Beira-Rio", 50842, 1700000),
    new Economia(115000000)
  ),
  new Team(
    "Flamengo",
    flamengoPlayers,
    new Estadio("Maracana", 78838, 2500000),
    new Economia(220000000)
  ),
  new Team(
    "Palmeiras",
    palmeirasPlayers,
    new Estadio("Allianz Parque", 43713, 2100000),
    new Economia(200000000)
  ),
  new Team(
    "Corinthians",
    corinthiansPlayers,
    new Estadio("Neo Quimica Arena", 49205, 1900000),
    new Economia(170000000)
  ),
  new Team(
    "Botafogo",
    botafogoPlayers,
    new Estadio("General Severiano", 27913, 1200000),
    new Economia(95000000)
  ),
  new Team(
    "Vasco",
    vascoPlayers,
    new Estadio("São Januário", 24902, 1400000),
    new Economia(110000000)
  ),
  new Team(
    "São Paulo",
    sãoPauloPlayers,
    new Estadio("Morumbi", 72788, 2300000),
    new Economia(190000000)
  )
];
