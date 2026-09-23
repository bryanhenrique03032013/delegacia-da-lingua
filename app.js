const levelConfig = {
  facil: { label: 'Cadete', points: 10, questionsPerStation: 5 },
  medio: { label: 'Investigador', points: 15, questionsPerStation: 7 },
  dificil: { label: 'Agente Especial', points: 20, questionsPerStation: 9 }
};

const stations = [
  {
    name: 'Concordância',
    short: 'Concordância',
    crime: 'CRIME GRAMATICAL',
    questions: [
      { q: 'Qual frase está correta?', options: ['Haviam muitas pistas na sala.', 'Havia muitas pistas na sala.', 'Haviam muita pista na sala.'], answer: 1, explanation: 'Havia é impessoal quando indica existência e fica no singular.' },
      { q: 'Qual alternativa apresenta concordância correta?', options: ['Os detetives encontrou a pista.', 'O detetive encontraram as pistas.', 'Os detetives encontraram as pistas.'], answer: 2, explanation: 'O verbo concorda com o sujeito “os detetives”: encontraram.' },
      { q: 'Complete: “A maioria dos alunos ___ preparada.”', options: ['estão', 'está', 'estavam'], answer: 1, explanation: 'Como “maioria” é singular, o verbo fica no singular.' },
      { q: 'Encontre a frase correta.', options: ['Fazem dois anos que estudo.', 'Faz dois anos que estudo.', 'Fazem dois ano que estudo.'], answer: 1, explanation: 'O verbo “fazer” indica tempo e é impessoal, então fica no singular.' },
      { q: 'Qual frase tem concordância nominal correta?', options: ['As pista importante sumiu.', 'A pista importantes sumiu.', 'As pistas importantes sumiram.'], answer: 2, explanation: 'O adjetivo concorda com “pistas” no plural.' },
      { q: 'Escolha a forma adequada: “___ muitas razões para investigar.”', options: ['Existe', 'Existem', 'Existia'], answer: 1, explanation: 'O sujeito é plural: “muitas razões”.' },
      { q: 'A frase correta é:', options: ['Segue anexo as provas.', 'Seguem anexas as provas.', 'Seguem anexo as provas.'], answer: 1, explanation: 'As provas seguem anexas, pois o predicativo concorda com elas.' },
      { q: 'Qual opção está correta?', options: ['Nós vai investigar o caso.', 'Nós vamos investigar o caso.', 'Nós vamos investigará o caso.'], answer: 1, explanation: 'A forma correta é “nós vamos”.' },
      { q: 'Complete: “É proibido ___ sem autorização.”', options: ['entrada', 'entradas', 'entrar'], answer: 2, explanation: 'Com “é proibido” a forma correta é o verbo no infinitivo: entrar.' }
    ]
  },
  {
    name: 'Fake News',
    short: 'Fake news',
    crime: 'CRIME DE INTERPRETAÇÃO',
    questions: [
      { q: 'Notícia A e Notícia B. Qual é mais confiável?', options: ['A, porque têm autor e data.', 'B, porque é mais emocionante.', 'As duas são iguais.'], answer: 0, explanation: 'A notícia A traz autor, fonte e data, o que facilita a checagem.' },
      { q: 'Um texto usa “todo mundo sabe”, mas não cita pesquisa. O que fazer?', options: ['Compartilhar imediatamente.', 'Procurar a fonte original e comparar informações.', 'Acreditar porque parece convincente.'], answer: 1, explanation: 'Leitura crítica exige checar fontes e evidências.' },
      { q: 'Qual título é mais responsável?', options: ['INCRÍVEL! Cura milagrosa funciona para todos!', 'Pesquisa inicial aponta possível benefício, dizem cientistas.', 'Você não vai acreditar nesta descoberta!'], answer: 1, explanation: 'O segundo título é mais cauteloso e informa que a pesquisa é inicial.' },
      { q: 'Uma notícia tem uma foto real, mas legenda falsa. Isso significa que ela é confiável?', options: ['Sim, toda foto prova a legenda.', 'Não; a imagem precisa de contexto e verificação.', 'Sim, se várias pessoas curtiram.'], answer: 1, explanation: 'Uma imagem pode ser antiga ou usada fora do contexto.' },
      { q: 'Qual pista é sinal de desinformação?', options: ['Data e autor identificados.', 'Link para documento oficial.', 'Pedido urgente para compartilhar sem pensar.'], answer: 2, explanation: 'Urgência e pressão emocional são estratégias comuns de fake news.' },
      { q: 'Para confirmar uma informação, o melhor é:', options: ['Ler só o título.', 'Consultar fontes confiáveis e comparar versões.', 'Escolher o comentário mais curtido.'], answer: 1, explanation: 'Comparar fontes reduz o risco de cair em boatos.' },
      { q: 'Um argumento é mais forte quando:', options: ['Tem dados e explica de onde vieram.', 'Tem muitas letras maiúsculas.', 'Ataca quem discorda.'], answer: 0, explanation: 'Evidência e explicação fortalecem um argumento.' },
      { q: 'O que significa “opinião” em um texto?', options: ['Uma interpretação ou avaliação pessoal.', 'Um dado mensurável sempre.', 'Uma fonte oficial.'], answer: 0, explanation: 'Opinião é uma visão pessoal, não necessariamente um fato comprovado.' },
      { q: 'Antes de compartilhar uma notícia, a melhor pergunta é:', options: ['Quem publicou e quais evidências existem?', 'Quantas pessoas mandaram para mim?', 'O título me deixou assustado?'], answer: 0, explanation: 'Procedência e evidência são essenciais antes de compartilhar.' }
    ]
  },
  {
    name: 'Ortografia',
    short: 'Ortografia',
    crime: 'PALAVRAS ESCONDIDAS',
    questions: [
      { q: 'Complete: “___ fomos ao arquivo; ___ a investigação continua.”', options: ['Agente / mais', 'A gente / mas', 'A gente / mais'], answer: 1, explanation: '“A gente” significa “nós”; “mas” introduz oposição.' },
      { q: 'Qual frase está correta?', options: ['Ele não foi, mais avisou.', 'Ele não foi, mas avisou.', 'Ele não foi, más avisou.'], answer: 1, explanation: 'A conjunção de oposição correta é “mas”.' },
      { q: 'Escolha a grafia correta:', options: ['exceção', 'esceção', 'execessão'], answer: 0, explanation: 'A grafia correta é exceção.' },
      { q: 'Qual opção completa: “O ___ chegou ___ cedo.”', options: ['concerto / de mais', 'conserto / demais', 'conserto / de mais'], answer: 1, explanation: '“Conserto” é reparo e “demais” indica excesso.' },
      { q: 'Assinale a forma correta:', options: ['A análise revelou um problema.', 'A analize revelou um problema.', 'A análize revelou um problema.'], answer: 0, explanation: 'Análise é escrita com s.' },
      { q: 'Qual palavra está correta?', options: ['pesquiza', 'pesquisa', 'pesquissa'], answer: 1, explanation: 'A grafia correta é pesquisa.' },
      { q: 'Complete: “Ele ___ a pista, e nós ___ juntos.”', options: ['trás / vamos', 'traz / vamos', 'traz / vamus'], answer: 1, explanation: '“Traz” é a forma correta do verbo trazer; “vamos” é o verbo para “nós”.' },
      { q: 'A escrita correta é:', options: ['privilégio', 'previlégio', 'privilêgio'], answer: 0, explanation: 'A grafia correta é privilégio.' },
      { q: 'Qual frase não tem erro ortográfico?', options: ['A equipe agiu com discrição.', 'A equipe agiu com discrissão.', 'A equipe ajil com discrição.'], answer: 0, explanation: 'Discrição está escrita corretamente.' }
    ]
  },
  {
    name: 'Vocabulário',
    short: 'Vocabulário',
    crime: 'CRIME DO PLÁGIO',
    questions: [
      { q: 'Troque “O detetive viu a pista” por uma frase sem repetir a mesma palavra.', options: ['O investigador viu a pista.', 'O detetive viu o detetive.', 'O viu viu a pista.'], answer: 0, explanation: 'Investigator é sinônimo de detetive, evitando a repetição.' },
      { q: 'Qual palavra pode substituir “rápido”?', options: ['veloz', 'pesado', 'distante'], answer: 0, explanation: 'Veloz é sinônimo de rápido.' },
      { q: 'Em “a equipe iniciou a busca”, “começou” pode substituir:', options: ['iniciou', 'busca', 'equipe'], answer: 0, explanation: 'Começou é sinônimo de iniciou.' },
      { q: 'Qual alternativa evita repetição?', options: ['A testemunha falou. A testemunha saiu.', 'A testemunha falou. Ela saiu.', 'A testemunha falou. A testemunha testemunhou.'], answer: 1, explanation: 'O pronome “ela” evita repetição.' },
      { q: 'Sinônimo de “difícil” é:', options: ['complexo', 'simples', 'claro'], answer: 0, explanation: 'Complexo pode significar difícil.' },
      { q: 'Em um texto, variar palavras serve para:', options: ['deixar a escrita mais clara e interessante.', 'confundir o leitor.', 'eliminar todas as ideias.'], answer: 0, explanation: 'Variedade vocabular melhora leitura e clareza.' },
      { q: 'Qual substitui “importante”?', options: ['relevante', 'pequeno', 'invisível'], answer: 0, explanation: 'Relevante é sinônimo de importante.' },
      { q: 'Complete: “O inspetor ___ as provas e ___ uma conclusão.”', options: ['analisou / formulou', 'comeu / desenhou', 'perdeu / apagou'], answer: 0, explanation: 'O contexto pede ações de investigação.' },
      { q: 'Qual par tem palavras de sentido parecido?', options: ['feliz / contente', 'alto / baixo', 'entrar / sair'], answer: 0, explanation: 'Feliz e contente são sinônimos.' }
    ]
  },
  {
    name: 'Caso Final',
    short: 'Caso final',
    crime: 'DESAFIO ENEM',
    questions: [
      { q: 'Qual conectivo completa: “A equipe estudou as pistas; ___, resolveu o caso.”', options: ['portanto', 'porém', 'embora'], answer: 0, explanation: 'Portanto indica conclusão.' },
      { q: '“O texto não tem fonte. ___, não é possível confiar nele.”', options: ['Além disso', 'Por isso', 'Enquanto'], answer: 1, explanation: 'Por isso expressa consequência.' },
      { q: 'Qual frase tem melhor conexão?', options: ['Estudou. Passou.', 'Estudou bastante; por isso, passou.', 'Estudou, mas passou porque.'], answer: 1, explanation: 'A frase com “por isso” mostra relação causal clara.' },
      { q: 'Complete: “___ a notícia pareça verdadeira, devemos verificar a fonte.”', options: ['Embora', 'Portanto', 'Além disso'], answer: 0, explanation: 'Embora expressa concessão.' },
      { q: 'Qual conectivo adiciona uma informação?', options: ['Além disso', 'Entretanto', 'Logo'], answer: 0, explanation: 'Além disso soma ideias.' },
      { q: 'Organize: 1 estudar fontes / 2 compartilhar. Qual ligação correta?', options: ['Devemos compartilhar antes de estudar fontes.', 'Devemos estudar as fontes antes de compartilhar.', 'Devemos fontes compartilhar estudar.'], answer: 1, explanation: 'A ordem lógica é primeiro estudar e depois compartilhar.' },
      { q: 'Qual conclusão é mais adequada para uma redação?', options: ['Logo, a leitura crítica ajuda a combater a desinformação.', 'E aí acabou.', 'Mas porque sim.'], answer: 0, explanation: 'Um conectivo de conclusão deixa a redação mais formal.' },
      { q: '“Queria ajudar, ___ não tinha informações.”', options: ['mas', 'portanto', 'porque'], answer: 0, explanation: 'Mas introduz oposição.' },
      { q: 'Complete: “A linguagem é ferramenta de cidadania, ___ deve ser usada com responsabilidade.”', options: ['assim', 'porém', 'apesar'], answer: 0, explanation: 'Assim marca consequência ou conclusão.' }
    ]
  }
];

const saveKey = 'dlp-pro-save';
const profileKey = 'dlp-pro-profile';

const state = {
  level: 'medio',
  stationIndex: 0,
  questionIndex: 0,
  score: 0,
  lives: 3,
  answered: false,
  userName: 'Detetive',
  email: '',
  stationQueue: [],
  completed: false
};

const $ = (id) => document.getElementById(id);

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.add('hidden'));
  $(name).classList.remove('hidden');
}

function loadProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
    if (profile.name) state.userName = profile.name;
    if (profile.email) state.email = profile.email;
    $('accountBtn').textContent = state.userName || 'Entrar';
  } catch (error) {
    // ignore
  }
}

function saveProfile() {
  localStorage.setItem(profileKey, JSON.stringify({ name: state.userName, email: state.email }));
  $('accountBtn').textContent = state.userName;
}

function buildStationQueue() {
  return stations.map((station) => {
    const pool = station.questions.map((_, index) => index);
    const selected = shuffle(pool).slice(0, Math.min(levelConfig[state.level].questionsPerStation, station.questions.length));
    return { stationIndex: station.name, questions: selected };
  });
}

function saveState() {
  localStorage.setItem(saveKey, JSON.stringify({ ...state, stationQueue: state.stationQueue }));
  $('saveStatus').textContent = '✓ salvo agora';
  setTimeout(() => {
    $('saveStatus').textContent = 'Progresso local';
  }, 1000);
}

function loadState() {
  try {
    const raw = localStorage.getItem(saveKey);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved) return false;
    Object.assign(state, saved);
    return true;
  } catch (error) {
    return false;
  }
}

function renderCaseList() {
  const html = stations.map((station, index) => {
    let status = '';
    if (index < state.stationIndex) status = 'done';
    if (index === state.stationIndex) status = 'active';
    return `<div class="case-item ${status}">${index + 1}. ${station.short}</div>`;
  }).join('');

  $('caseList').innerHTML = html;
}

function updateScore() {
  $('scoreValue').textContent = String(state.score);
}

function renderQuestion() {
  if (state.stationIndex >= stations.length) {
    endGame();
    return;
  }

  const station = stations[state.stationIndex];
  const queue = state.stationQueue[state.stationIndex]?.questions || [];
  const total = Math.min(levelConfig[state.level].questionsPerStation, station.questions.length);
  const questionId = queue[state.questionIndex];
  const question = station.questions[questionId];

  $('stationKicker').textContent = `ESTAÇÃO ${String(state.stationIndex + 1).padStart(2, '0')}`;
  $('stationTitle').textContent = station.name;
  $('crimeTag').textContent = station.crime;
  $('questionCounter').textContent = `Pista ${state.questionIndex + 1}/${total}`;
  $('questionText').textContent = question.q;

  $('options').innerHTML = '';
  shuffle(question.options.map((option, index) => ({ option, index }))).forEach(({ option, index }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    btn.textContent = option;
    btn.dataset.index = String(index);
    btn.addEventListener('click', () => answerQuestion(index, question));
    $('options').appendChild(btn);
  });

  $('feedbackBox').classList.add('hidden');
  $('feedbackBox').textContent = '';
  $('nextBtn').classList.add('hidden');

  const progress = ((state.stationIndex * total + state.questionIndex) / (stations.length * total)) * 100;
  $('progressBar').style.width = `${Math.min(progress, 100)}%`;

  updateScore();
}

function answerQuestion(selectedIndex, question) {
  if (state.answered) return;
  state.answered = true;

  const buttons = document.querySelectorAll('.option');
  buttons.forEach((button) => {
    const idx = Number(button.dataset.index);
    button.disabled = true;

    if (idx === question.answer) button.classList.add('correct');
    if (idx === selectedIndex && idx !== question.answer) button.classList.add('wrong');
  });

  const correct = selectedIndex === question.answer;

  if (correct) {
    state.score += levelConfig[state.level].points;
  } else {
    state.lives -= 1;
  }

  const feedback = $('feedbackBox');
  feedback.classList.remove('hidden');
  feedback.innerHTML = correct
    ? `✅ <strong>Pista confirmada!</strong> ${question.explanation}`
    : `❌ <strong>Quase!</strong> A resposta correta era “${question.options[question.answer]}”. ${question.explanation}`;

  if (state.lives <= 0) {
    feedback.innerHTML += '<br><br>Suas vidas acabaram. A investigação foi interrompida.';
    setTimeout(() => endGame(), 1200);
    updateScore();
    saveState();
    return;
  }

  $('nextBtn').classList.remove('hidden');
  $('nextBtn').textContent = state.questionIndex >= (state.stationQueue[state.stationIndex]?.questions.length || 0) - 1 && state.stationIndex >= stations.length - 1
    ? 'Encerrar investigação'
    : 'Próxima pista →';

  updateScore();
  saveState();
}

function moveNext() {
  const currentQueue = state.stationQueue[state.stationIndex]?.questions || [];

  if (state.questionIndex < currentQueue.length - 1) {
    state.questionIndex += 1;
    state.answered = false;
    renderQuestion();
    saveState();
    return;
  }

  if (state.stationIndex < stations.length - 1) {
    state.stationIndex += 1;
    state.questionIndex = 0;
    state.answered = false;
    renderCaseList();
    renderQuestion();
    saveState();
    return;
  }

  endGame();
}

function endGame() {
  showScreen('resultScreen');
  $('finalScore').textContent = String(state.score);
  const passed = state.score >= 160 && state.lives > 0;
  $('resultTitle').textContent = passed ? 'Caso encerrado com sucesso!' : 'A investigação foi interrompida';
  $('resultText').textContent = passed
    ? `Excelente, ${state.userName}! Você resolveu os crimes da língua portuguesa e ganhou o certificado.`
    : 'Não desista, detetive. A próxima investigação vai revelar todas as pistas.';

  $('certificateName').textContent = state.userName;
  $('certificateScore').textContent = passed ? '1000' : String(Math.min(999, state.score));
  state.completed = true;
  saveState();
}

function startNewGame() {
  state.level = document.querySelector('.level-card.selected')?.dataset.level || 'medio';
  state.stationIndex = 0;
  state.questionIndex = 0;
  state.score = 0;
  state.lives = 3;
  state.answered = false;
  state.completed = false;
  state.stationQueue = buildStationQueue();
  renderCaseList();
  showScreen('gameScreen');
  renderQuestion();
  saveState();
}

function continueGame() {
  const loaded = loadState();
  if (!loaded) {
    return startNewGame();
  }

  if (!state.stationQueue || state.stationQueue.length === 0) {
    state.stationQueue = buildStationQueue();
  }

  renderCaseList();
  showScreen('gameScreen');
  renderQuestion();
}

function bindEvents() {
  $('startBtn').addEventListener('click', () => showScreen('levelScreen'));
  $('continueBtn').addEventListener('click', () => continueGame());
  $('briefingBtn').addEventListener('click', () => showScreen('briefingScreen'));
  $('missionBtn').addEventListener('click', () => startNewGame());
  $('restartBtn').addEventListener('click', () => showScreen('levelScreen'));
  $('nextBtn').addEventListener('click', () => moveNext());
  $('certificateBtn').addEventListener('click', () => $('certificateModal').classList.remove('hidden'));
  $('closeCertificate').addEventListener('click', () => $('certificateModal').classList.add('hidden'));

  $('accountBtn').addEventListener('click', () => {
    const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
    $('nameInput').value = profile.name || state.userName;
    $('emailInput').value = profile.email || state.email;
    $('accountModal').classList.remove('hidden');
  });

  $('closeModal').addEventListener('click', () => $('accountModal').classList.add('hidden'));

  $('saveAccount').addEventListener('click', () => {
    const name = $('nameInput').value.trim() || 'Detetive';
    const email = $('emailInput').value.trim();

    if (!email || !email.includes('@')) {
      alert('Digite um e-mail válido para salvar seu perfil.');
      return;
    }

    state.userName = name;
    state.email = email;
    saveProfile();
    saveState();
    $('accountModal').classList.add('hidden');
  });

  document.querySelectorAll('.level-card').forEach((card) => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.level-card').forEach((item) => item.classList.remove('selected'));
      card.classList.add('selected');
      state.level = card.dataset.level;
    });
  });
}

function init() {
  bindEvents();
  loadProfile();
  renderCaseList();
  updateScore();
  showScreen('startScreen');
}

init();
