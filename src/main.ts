import { MenuController } from "./controllers/MenuController";

async function main() {
  const menuController = new MenuController();
  await menuController.start();
}

main().catch(console.error);
