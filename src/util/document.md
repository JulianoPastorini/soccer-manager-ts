# Football Manager 2026 — Rascunho de Evolução

## 1) Storytelling (Checkpoint 1 até agora)
- Começamos validando e explicando a classe `Economia`.
- Em seguida, implementamos o fluxo principal de campanha com menu funcional.
- Entrou o motor de partida por etapas e a lógica de resultado/rodada.
- Economia evoluiu: treino pré-jogo, renda por partida e bônus por resultado.
- Overalls passaram a variar com desempenho da partida.
- Implementamos salvar/carregar campanha em JSON.
- Corrigimos problema de input duplicado no terminal (instância única de `UIController`).
- Adicionamos comentários por seções nos `controllers`.
- Implementamos escalação pré-jogo (entre treino e partida):
  - usuário escolhe formação e titulares;
  - NPC escala automaticamente.

## 2) Estado atual do projeto
- Campanha jogável com rodada, tabela básica e avanço de temporada.
- Partida com 3 etapas, posse e eventos.
- Escalação por formação: `3-5-2`, `4-4-2`, `4-3-3`.
- Overalls de ataque/defesa definidos a partir dos titulares escalados.
- Save/Load operacional em `data/savegame.json`.

## 3) Próximos passos (planejados)
- Novos atributos para jogadores (ex.: físico, passe, finalização, resistência).
- Novas táticas por time (perfil ofensivo/reativo/equilibrado) para melhorar matchmaking.
- Nova aba de `Campeonato` no menu para exibir tabela/rodada/resultados com mais clareza.
- Melhorar visualização numérica:
  - overalls de jogadores;
  - economia do time;
  - métricas de partida e evolução.

## 4) Estrutura de diretórios (resumo rápido)

### `src/main.ts`
Ponto de entrada do jogo.

### `src/controllers/`
- `MenuController.ts`: menu principal e entrada da campanha.
- `CampaignController.ts`: loop da campanha, rodada, tabela, info do time, save/sair.
- `MatchController.ts`: simulação da partida, treino, economia pós-jogo e variação de overall.
- `LineupController.ts`: escolha de formação/titulares (usuário e NPC).
- `UIController.ts`: I/O do terminal (prompt, menu, pause, print).

### `src/models/`
- `Player.ts`: jogador, posição e overall.
- `Team.ts`: time, elenco, estádio, economia e overalls agregados.
- `Economia.ts`: saldo, crédito e débito.
- `Estadio.ts`: capacidade, status e renda.
- `Coach.ts`: base do técnico (estrutura de domínio).

### `src/data/`
- `teams.ts`: times iniciais do jogo.
- `players.ts`: geração de elencos por posição.
- `savegame.json`: snapshot da campanha salva.

### `src/services/`
- `CampaignSaveService.ts`: persistência e reidratação da campanha.

### `src/util/`
- `PlayerNames.ts`: suporte para geração de nomes/atributos base.
- `rascunho.md`: este documento de alinhamento rápido.
