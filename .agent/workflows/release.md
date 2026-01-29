---
description: Automatizar o processo de release (versão, changelog e tag)
---

Este workflow ajuda a criar novas versões do projeto seguindo o SemVer e mantendo o Changelog atualizado.

### Passos para Release

1.  **Analisar Mudanças**: O Antigravity deve analisar os commits e alterações desde a última tag/versão.
2.  **Determinar Próxima Versão**: Sugerir o próximo número de versão baseado nas mudanças (Major, Minor ou Patch).
3.  **Atualizar Arquivos**:
    -   Atualizar `"version"` em `apps/web/package.json`.
    -   Adicionar nova entrada no `CHANGELOG.md` descrevendo as novidades.
4.  **Criar Tag e Commitar**:
    -   Commitar as mudanças de versão com a mensagem `chore(release): vX.Y.Z`.
    -   Criar uma tag git `vX.Y.Z`.

// turbo
5.  **Comando Sugerido**:
    `git add . && git commit -m "chore(release): 1.0.0" && git tag v1.0.0`

> [!TIP]
> Use este comando sempre que quiser consolidar o estado atual do projeto em uma nova versão oficial.
