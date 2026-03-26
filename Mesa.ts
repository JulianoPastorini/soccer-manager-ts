import prompt from "prompt-sync";
import { Mesa } from "./Produto";




const teclado = prompt();

// Lista para armazenar todas as mesas reservadas
const mesas: Mesa[] = [];

let escolha = 99;

while (escolha != 0) {
  console.log("\n===== SISTEMA DE RESERVA =====");
  console.log("1. Reservar mesa");
  console.log("2. Ver reservas");
  console.log("3. Cancelar reserva");
  console.log("0. Sair");

  escolha = Number(teclado("Digite a opção: "));

  switch (escolha) {
    case 1:
      const numero = Number(teclado("Número da mesa: "));
      const nome = teclado("Nome do cliente: ");

      const existente = mesas.find((m) => m.numero === numero);
      if (existente) {
        console.log("Mesa já reservada!");
      } else {
        const mesa = new Mesa();
        mesa.numero = numero;
        mesa.reservar(nome);
        mesas.push(mesa);
        console.log("Mesa reservada!");
      }
      break;

    case 2:
      if (mesas.length === 0) {
        console.log("Nenhuma reserva registrada.");
      } else {
        console.table(
          mesas.map((m) => ({ Numero: m.numero, Cliente: m.cliente }))
        );
      }
      break;

    case 3:
      const numeroCancelar = Number(
        teclado("Número da mesa que deseja cancelar: ")
      );
      const index = mesas.findIndex((m) => m.numero === numeroCancelar);
      if (index !== -1) {
        mesas.splice(index, 1);
        console.log("Reserva cancelada!");
      } else {
        console.log("Mesa não encontrada ou não reservada.");
      }
      break;

    case 0:
      console.log("Saindo...");
    
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
}