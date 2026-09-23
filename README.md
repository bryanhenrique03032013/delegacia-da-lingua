# D.L.P. — Delegacia da Língua Portuguesa

Jogo educativo de RPG para a feira escolar, responsivo para computadores, tablets e celulares.

## Funcionalidades

- Cinco estações: concordância, fake news, ortografia, vocabulário e caso final do ENEM.
- Três níveis de dificuldade.
- Perguntas e alternativas embaralhadas a cada investigação.
- Pontuação, vidas, progresso e certificado final.
- Perfil com nome e e-mail e salvamento automático no `localStorage` do navegador.
- Sem dependências ou processo de build: basta abrir `index.html` ou publicar no GitHub Pages.

## Publicar no GitHub Pages

No repositório, abra **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`. O endereço do jogo será exibido pelo GitHub.

## Observação sobre contas

A versão atual salva o perfil e o progresso localmente no dispositivo, ideal para uma versão simples e sem servidor. Para sincronizar o mesmo progresso entre aparelhos, substitua o armazenamento local por Firebase Authentication e Firestore.
