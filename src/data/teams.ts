// Este altera os dados e cria os Times 

import { Player } from "../models/Player";
import { Team } from "../models/Team";

const goleiros: Player[] = [
  new Player("Marchesín", "GOL", 85),
  new Player("Gabriel Grando", "GOL", 78),
  new Player("Rochet", "GOL", 86),
  new Player("Keiller", "GOL", 80),
  new Player("Rossi", "GOL", 84),
  new Player("Matheus Cunha", "GOL", 78),
  new Player("Weverton", "GOL", 88),
  new Player("Marcelo Lomba", "GOL", 80),
  new Player("Cássio", "GOL", 87),
  new Player("Carlos Miguel", "GOL", 80),
  new Player("João Carlos", "GOL", 85),
  new Player("Gabriel Grando", "GOL", 78),
  new Player("Rochet", "GOL", 86),
  new Player("Keiller", "GOL", 80),
  new Player("Rossi", "GOL", 84),
  new Player("Matheus Cunha", "GOL", 78),
  new Player("Weverton", "GOL", 88),
  new Player("Marcelo Lomba", "GOL", 80),
  new Player("Cássio", "GOL", 87),
  new Player("Carlos Miguel", "GOL", 80)
];

 const defensores: Player[] = [
  new Player("Geromel", "DEF", 82),
  new Player("Kannemann", "DEF", 84),
  new Player("Vitão", "DEF", 84),
  new Player("Fabrício Bruno", "DEF", 85),
  new Player("Gustavo Gómez", "DEF", 89),
  new Player("Fagner", "DEF", 84)
];

const meias: Player[] = [
  new Player("Villasanti", "MEI", 86),
  new Player("Alan Patrick", "MEI", 87),
  new Player("Arrascaeta", "MEI", 89),
  new Player("Raphael Veiga", "MEI", 88),
  new Player("Rodrigo Garro", "MEI", 87)
];
const atacantes: Player[] = [
  new Player("Soteldo", "ATA", 87),
  new Player("Enner Valencia", "ATA", 86),
  new Player("Pedro", "ATA", 88),
  new Player("Dudu", "ATA", 87),
  new Player("Yuri Alberto", "ATA", 85)
];

          // // Time Teste 1

          // const gremioPlayers: Player[] = [
            

          //   new Player("João Pedro", "DEF", 80),
          //   new Player("Geromel", "DEF", 82),
          //   new Player("Kannemann", "DEF", 84),
          //   new Player("Reinaldo", "DEF", 81),

          //   new Player("Villasanti", "MEI", 86),
          //   new Player("Pepê", "MEI", 83),
          //   new Player("Cristaldo", "MEI", 85), 

          //   new Player("Soteldo", "ATA", 87),
          //   new Player("Diego Costa", "ATA", 84),
          //   new Player("Nathan Fernandes", "ATA", 80),

          //   // Reservas
          //   new Player("Gabriel Grando", "GOL", 78),

          //   new Player("Fábio", "DEF", 79),
          //   new Player("Bruno Uvini", "DEF", 78),
          //   new Player("Rodrigo Ely", "DEF", 80),

          //   new Player("Dodi", "MEI", 79),
          //   new Player("Du Queiroz", "MEI", 80),
          //   new Player("Galdino", "MEI", 78),

          //   new Player("Everton Galdino", "ATA", 79),
          //   new Player("Ferreira", "ATA", 83),
          //   new Player("André Henrique", "ATA", 80),
          //   new Player("JP Galvão", "ATA", 78),
          //   new Player("Luan Candido", "DEF", 79)
          // ];

          // const gremio= new Team("Grêmio", gremioPlayers);

          // // Time Teste 2

          // const interPlayers: Player[] = [
          //   new Player("Rochet", "GOL", 86),

          //   new Player("Bustos", "DEF", 82),
          //   new Player("Vitão", "DEF", 84),
          //   new Player("Mercado", "DEF", 83),
          //   new Player("Renê", "DEF", 81),

          //   new Player("Aránguiz", "MEI", 85),
          //   new Player("Bruno Henrique", "MEI", 83),
          //   new Player("Alan Patrick", "MEI", 87),

          //   new Player("Wanderson", "ATA", 84),
          //   new Player("Enner Valencia", "ATA", 86),
          //   new Player("Pedro Henrique", "ATA", 82),

          //   // Reservas
          //   new Player("Keiller", "GOL", 80),

          //   new Player("Igor Gomes", "DEF", 79),
          //   new Player("Robert Renan", "DEF", 81),
          //   new Player("Thauan Lara", "DEF", 78),

          //   new Player("Maurício", "MEI", 84),
          //   new Player("Johnny", "MEI", 82),
          //   new Player("Gustavo Campanharo", "MEI", 80),

          //   new Player("Lucca", "ATA", 79),
          //   new Player("Gabriel Barros", "ATA", 78),
          //   new Player("Lucas Ramos", "ATA", 77),
          //   new Player("Matheus Dias", "MEI", 78),
          //   new Player("Hugo Mallo", "DEF", 81)
          // ];

          // const inter = new Team("Internacional", interPlayers);


          // // Time Teste 3

          // const flamengoPlayers: Player[] = [
          //   new Player("Rossi", "GOL", 84),

          //   new Player("Varela", "DEF", 81),
          //   new Player("Léo Pereira", "DEF", 84),
          //   new Player("Fabrício Bruno", "DEF", 85),
          //   new Player("Ayrton Lucas", "DEF", 86),

          //   new Player("Pulgar", "MEI", 84),
          //   new Player("De La Cruz", "MEI", 88),
          //   new Player("Arrascaeta", "MEI", 89),

          //   new Player("Luiz Araújo", "ATA", 84),
          //   new Player("Pedro", "ATA", 88),
          //   new Player("Everton Cebolinha", "ATA", 85),

          //   // reservas
          //   new Player("Matheus Cunha", "GOL", 78),
          //   new Player("Wesley", "DEF", 79),
          //   new Player("David Luiz", "DEF", 82),
          //   new Player("Viña", "DEF", 83),
          //   new Player("Allan", "MEI", 82),
          //   new Player("Gerson", "MEI", 86),
          //   new Player("Victor Hugo", "MEI", 80),
          //   new Player("Gabigol", "ATA", 87),
          //   new Player("Bruno Henrique", "ATA", 86),
          //   new Player("Matheus Gonçalves", "ATA", 79),
          //   new Player("Lorran", "MEI", 78),
          //   new Player("Cleiton", "DEF", 77)
          // ];

          // const flamengo = new Team("Flamengo", flamengoPlayers);

          // // Time teste 4 

          // const palmeirasPlayers: Player[] = [
          //   new Player("Weverton", "GOL", 88),

          //   new Player("Mayke", "DEF", 83),
          //   new Player("Gustavo Gómez", "DEF", 89),
          //   new Player("Murilo", "DEF", 86),
          //   new Player("Piquerez", "DEF", 85),

          //   new Player("Zé Rafael", "MEI", 87),
          //   new Player("Richard Ríos", "MEI", 84),
          //   new Player("Raphael Veiga", "MEI", 88),

          //   new Player("Rony", "ATA", 85),
          //   new Player("Endrick", "ATA", 86),
          //   new Player("Dudu", "ATA", 87),

          //   // reservas
          //   new Player("Marcelo Lomba", "GOL", 80),
          //   new Player("Marcos Rocha", "DEF", 82),
          //   new Player("Naves", "DEF", 79),
          //   new Player("Vanderlan", "DEF", 80),
          //   new Player("Aníbal Moreno", "MEI", 85),
          //   new Player("Fabinho", "MEI", 78),
          //   new Player("Jhon Jhon", "MEI", 79),
          //   new Player("Flaco López", "ATA", 83),
          //   new Player("Bruno Rodrigues", "ATA", 82),
          //   new Player("Kevin", "ATA", 80),
          //   new Player("Luis Guilherme", "MEI", 81),
          //   new Player("Garcia", "DEF", 78)
          // ];

          // const palmeiras = new Team("Palmeiras", palmeirasPlayers);


          // // Time teste 5

          // const corinthiansPlayers: Player[] = [
          //   new Player("Cássio", "GOL", 87),

          //   new Player("Fagner", "DEF", 84),
          //   new Player("Félix Torres", "DEF", 83),
          //   new Player("Gustavo Henrique", "DEF", 82),
          //   new Player("Hugo", "DEF", 80),

          //   new Player("Raniele", "MEI", 83),
          //   new Player("Maycon", "MEI", 84),
          //   new Player("Rodrigo Garro", "MEI", 87),

          //   new Player("Yuri Alberto", "ATA", 85),
          //   new Player("Romero", "ATA", 83),
          //   new Player("Wesley", "ATA", 82),

          //   // reservas
          //   new Player("Carlos Miguel", "GOL", 80),
          //   new Player("Matheuzinho", "DEF", 79),
          //   new Player("Caetano", "DEF", 78),
          //   new Player("Bidu", "DEF", 79),
          //   new Player("Fausto Vera", "MEI", 83),
          //   new Player("Paulinho", "MEI", 85),
          //   new Player("Giuliano", "MEI", 82),
          //   new Player("Pedro Raul", "ATA", 81),
          //   new Player("Moscardo", "MEI", 84),
          //   new Player("Kayke", "ATA", 78),
          //   new Player("Biro", "MEI", 79),
          //   new Player("Léo Maná", "DEF", 77)
          // ];

          // const corinthians = new Team("Corinthians", corinthiansPlayers);

          // export const teams: Team[] = [
          //   gremio,
          //   inter,
          //   flamengo,
          //   palmeiras,
          //   corinthians
          // ]; 


//



