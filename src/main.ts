import { teams } from "./data/teams";
import * as readline from "readline";
//comentario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start() {
  rl.question("Digite seu nome (Técnico): ", (nome) => {

    console.log("\nEscolha um time:");

    teams.forEach((team, index) => {
      console.log(`${index + 1} - ${team.name}`);
    });

    rl.question("\nDigite o número do time: ", (opcao) => {
      const index = parseInt(opcao) - 1;

  
      if (isNaN(index) || index < 0 || index >= teams.length) {
        console.log("\n Opção inválida!");
        rl.close();
        return;
      }

      const selectedTeam = teams[index]!;

      console.log(`\n${selectedTeam.name}:`);

      selectedTeam.players.forEach(player => {
        console.log(`${player.name} - ${player.position} - ${player.overall}`);
      });

      console.log(`\nTécnico: ${nome}`);

      rl.close();
    });
  });
}

start();