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
      { q: 'Qual frase está correta?', options: ['Haviam muitas pistas na sala.', 'Havia muitas pistas na sala.', 'Haviam muita pista na sala.'], answer: 1, explanation: 'Havia é impessoal quando indica existência, então permanece no singular.' },
      { q: 'Qual alternativa apresenta concordância correta?', options: ['Os detetives encontrou a pista.', 'O detetive encontraram as pistas.', 'Os detetives encontraram as pistas.'], answer: 2, explanation: 'O verbo concorda com o sujeito “os detetives”: encontraram.' },
      { q: 'Complete: “A maioria dos alunos ___ preparada.”', options: ['estão', 'está', 'estavam'], answer: 1, explanation: 'A maioria é singular, então o verbo deve ficar no singular.' },
      { q: 'Encontre a frase correta.', options: ['Fazem dois anos que estudo.', 'Faz dois anos que estudo.', 'Fazem dois ano que estudo.'], answer: 1, explanation: 'O verbo “fazer” indica tempo e é impessoal, então fica no singular.' },
      { q: 'Qual frase tem concordância nominal correta?', options: ['As pista importante sumiu.', 'A pista importantes sumiu.', 'As pistas importantes sumiram.'], answer: 2, explanation: 'O adjetivo “importantes” concorda com “pistas” no plural.' },
      { q: 'Escolha a forma adequada: “___ muitas razões para investigar.”', options: ['Existe', 'Existem', 'Existia'], answer: 1, explanation: 'O verbo concorda com o sujeito plural “muitas razões”: existem.' },
      { q: 'A frase correta é:', options: ['Segue anexo as provas.', 'Seguem anexas as provas.', 'Seguem anexo as provas.'], answer: 1, explanation: 'Podemos dizer “as provas seguem anexas”, porque o predicativo concorda com “provas”.' },
      { q: 'Qual opção está correta?', options: ['Nós vai investigar o caso.', 'Nós vamos investigar o caso.', 'Nós vamos investigará o caso.'], answer: 1, explanation: 'A forma correta é “nós vamos” porque o verbo está concordando com “nós”.' },
      { q: 'Complete: “É proibido ___ sem autorização.”', options: ['entrada', 'entradas', 'entrar'], answer: 2, explanation: 'Com “é proibido” deve aparecer o verbo no infinitivo: entrar.' }
    ]
  },
  {
    name: 'Fake News',
    short: 'Fake news',
    crime: 'CRIME DE INTERPRETAÇÃO',
    questions: [
      { q: 'Notícia A: “Estudo da Universidade Federal revela melhora na leitura. O link apresenta autores e data.” Notícia B: “Especialistas dizem que ler dá superpoderes. Compartilhe já!” Qual é mais confiável?', options: ['A, porque apresenta fonte verificável.', 'B, porque é mais emocionante.', 'As duas são igualmente confiáveis.'], answer: 0, explanation: 'A notícia A tem autor, fonte e data, elementos importantes para checagem.' },
      { q: 'Um texto usa “todo mundo sabe”, mas não cita pesquisa. O que fazer?', options: ['Compartilhar imediatamente.', 'Procurar a fonte original e comparar informações.', 'Acreditar porque parece verdadeiro.'], answer: 1, explanation: 'A leitura crítica exige verificar a origem e as evidências.' },
      { q: 'Qual título é mais responsável?', options: ['INCRÍVEL! Cura milagrosa funciona para todos!', 'Pesquisa inicial aponta possível benefício, dizem cientistas.', 'Você não vai acreditar nesta descoberta!'], answer: 1, explanation: 'O segundo título indica cautela e evita exageros.' },
      { q: 'Uma notícia tem uma foto real, mas legenda falsa. Isso significa que ela é confiável?', options: ['Sim, toda foto prova a legenda.', 'Não; imagem também precisa de contexto e verificação.', 'Sim, se muitas pessoas curtiram.'], answer: 1, explanation: 'A imagem pode ser antiga, usada fora de contexto ou com legenda incorreta.' },
      { q: 'Qual pista é sinal de desinformação?', options: ['Data e autor identificados.', 'Link para documento oficial.', 'Pedido urgente para compartilhar sem pensar.'], answer: 2, explanation: 'Urgência emocional e pressão para compartilhar sem checar são sinais de desinformação.' },
      { q: 'Para confirmar uma informação, você deve:', options: ['Ler apenas o título.', 'Consultar fontes confiáveis e comparar versões.', 'Escolher o comentário mais curtido.'], answer: 1, explanation: 'Comparar fontes e evidências ajuda a distinguir fato de rumor.' },
      { q: 'Um argumento é mais forte quando:', options: ['Apresenta dados e explica de onde vieram.', 'Usa muitas letras maiúsculas.', 'Ataca quem discorda.'], answer: 0, explanation: 'Argumentos sólidos têm evidência e explicação.' },
      { q: 'O que significa “opinião” em um texto?', options: ['Uma interpretação ou avaliação pessoal.', 'Um dado que sempre pode ser medido.', 'Uma fonte oficial.'], answer: 0, explanation: 'Opinião expressa ideia pessoal, não necessariamente um fato verificado.' },
      { q: 'Antes de compartilhar uma notícia, a melhor pergunta é:', options: ['Quem publicou e quais evidências existem?', 'Quantas pessoas mandaram para mim?', 'O título me deixou assustado?'], answer: 0, explanation: 'A procedência e os dados são fundamentais antes de compartilhar.' }
    ]
  },
  {
    name: 'Ortografia',
    short: 'Ortografia',
    crime: 'PALAVRAS ESCONDIDAS',
    questions: [
      { q: 'Complete: “___ fomos ao arquivo; ___ a investigação continua.”', options: ['Agente / mais', 'A gente / mas', 'A gente / mais'], answer: 1, explanation: '“A gente” significa “nós”; “mas” conecta ideias opostas.' },
      { q: 'Qual frase está correta?', options: ['Ele não foi, mais avisou.', 'Ele não foi, mas avisou.', 'Ele não foi, más avisou.'], answer: 1, explanation: '“Mas” é a conjunção adequada para oposição.' },
      { q: 'Escolha a grafia correta:', options: ['exceção', 'esceção', 'execessão'], answer: 0, explanation: 'A grafia correta é exceção.' },
      { q: 'Qual opção completa: “O ___ chegou ___ cedo.”', options: ['concerto / de mais', 'conserto / demais', 'conserto / de mais'], answer: 1, explanation: 'Conserto é reparo; “demais” indica excesso.' },
      { q: 'Assinale a forma correta:', options: ['A análise revelou um problema.', 'A analize revelou um problema.', 'A análize revelou um problema.'], answer: 0, explanation: 'Análise é escrita com s.' },
      { q: 'Qual palavra está correta?', options: ['pesquiza', 'pesquisa', 'pesquissa'], answer: 1, explanation: 'A grafia correta é pesquisa.' },
      { q: 'Complete: “Ele ___ a pista, e nós ___ juntos.”', options: ['trás / vamos', 'traz / vamos', 'traz / vamus'], answer: 1, explanation: '“Traz” vem do verbo trazer; “vamos” é a forma correta para “nós”.' },
      { q: 'A escrita correta é:', options: ['privilégio', 'previlégio', 'privilêgio'], answer: 0, explanation: 'A grafia correta é privilégio.' },
      { q: 'Qual frase não tem erro ortográfico?', options: ['A equipe agiu com discrição.', 'A equipe agiu com discrissão.', 'A equipe ajil com discrição.'], answer: 0, explanation: 'Discrição está grafada corretamente.' }
    ]
  },
  {
    name: 'Vocabulário',
    short: 'Vocabulário',
    crime: 'CRIME DO PLÁGIO',
    questions: [
      { q: 'Troque “O detetive viu a pista” por uma frase sem repetir a mesma palavra.', options: ['O investigador viu a pista.', 'O detetive viu o detetive.', 'O viu viu a pista.'], answer: 0, explanation: 'Investigator é sinônimo de detetive e evita a repetição.' },
      { q: 'Qual palavra pode substituir “rápido”?', options: ['veloz', 'pesado', 'distante'], answer: 0, explanation: 'Veloz significa rápido.' },
      { q: 'Em “a equipe iniciou a busca”, “começou” pode substituir:', options: ['iniciou', 'busca', 'equipe'], answer: 0, explanation: 'Começou é sinônimo de iniciou.' },
      { q: 'Qual alternativa evita repetição?', options: ['A testemunha falou. A testemunha saiu.', 'A testemunha falou. Ela saiu.', 'A testemunha falou. A testemunha testemunhou.'], answer: 1, explanation: 'O pronome “ela” evita repetição sem perder clareza.' },
      { q: 'Sinônimo de “difícil” é:', options: ['complexo', 'simples', 'claro'], answer: 0, explanation: 'Complexo pode ser usado como sinônimo de difícil em certos contextos.' },
      { q: 'Em um texto, variar palavras serve para:', options: ['deixar a escrita mais clara e interessante.', 'confundir sempre o leitor.', 'eliminar todas as ideias.'], answer: 0, explanation: 'A variedade evita repetição desnecessária e melhora a leitura.' },
      { q: 'Qual substitui “importante”?', options: ['relevante', 'pequeno', 'invisível'], answer: 0, explanation: 'Relevante é sinônimo de importante.' },
      { q: 'Complete: “O inspetor ___ as provas e ___ uma conclusão.”', options: ['analisou / formulou', 'comeu / desenhou', 'perdeu / apagou'], answer: 0, explanation: 'A combinação faz sentido no contexto de investigação.' },
      { q: 'Qual par tem palavras de sentido parecido?', options: ['feliz / contente', 'alto / baixo', 'entrar / sair'], answer: 0, explanation: 'Feliz e contente são sinônimos.' }
    ]
  },
  {
    name: 'Caso Final',
    short: 'Caso final',
    crime: 'DESAFIO ENEM',
    questions: [
      { q: 'Qual conectivo completa: “A equipe estudou as pistas; ___, resolveu o caso.”', options: ['portanto', 'porém', 'embora'], answer: 0, explanation: '“Portanto” introduz conclusão.' },
      { q: '“O texto não tem fonte. ___, não é possível confiar nele.”', options: ['Além disso', 'Por isso', 'Enquanto'], answer: 1, explanation: '“Por isso” indica consequência.' },
      { q: 'Qual frase tem melhor conexão?', options: ['Estudou. Passou.', 'Estudou bastante; por isso, passou.', 'Estudou, mas passou porque.'], answer: 1, explanation: 'A frase com “por isso” mostra relação causal clara.' },
      { q: 'Complete: “___ a notícia pareça verdadeira, devemos verificar a fonte.”', options: ['Embora', 'Portanto', 'Além disso'], answer: 0, explanation: '“Embora” introduz concessão.' },
      { q: 'Qual conectivo adiciona uma informação?', options: ['Além disso', 'Entretanto', 'Logo'], answer: 0, explanation: '“Além disso” soma ideias.' },
      { q: 'Organize: 1 estudar fontes / 2 compartilhar. Qual ligação correta?', options: ['Devemos compartilhar antes de estudar fontes.', 'Devemos estudar as fontes antes de compartilhar.', 'Devemos fontes compartilhar estudar.'], answer: 1, explanation: 'A ordem lógica é estudar primeiro e só depois compartilhar.' },
      { q: 'Qual conclusão é mais adequada para uma redação?', options: ['Logo, a leitura crítica ajuda a combater a desinformação.', 'E aí acabou.', 'Mas porque sim.'], answer: 0, explanation: 'A conclusão com “logo” é formal e coerente.' },
      { q: '“Queria ajudar, ___ não tinha informações.”', options: ['mas', 'portanto', 'porque'], answer: 0, explanation: '“Mas” estabelece oposição entre as ideias.' },
      { q: 'Complete: “A linguagem é ferramenta de cidadania, ___ deve ser usada com responsabilidade.”', options: ['assim', 'porém', 'apesar'], answer: 0, explanation: '“Assim” marca conclusão ou consequência no contexto.' }
    ]
  }
];

const saveKey = 'dlp-save-v2';
const profileKey = 'dlp-profile-v2';

let state = {
  level: 'medio',
  stationIndex: 0,
  questionIndex: 0,
  score: 0,
  lives: 3,
  answered: false,
  completed: false,
  userName: 'Detetive',
  email: '',
  stationQueue: []
};

const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.add('hidden'));
  const target = $(id);
  if (target) target.classList.remove('hidden');
}

function loadProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
    if (profile.name) state.userName = profile.name;
    if (profile.email) state.email = profile.email;
    $('accountBtn').textContent = profile.name || 'Entrar';
  } catch (error) {
    // ignore
  }
}

function saveProfile() {
  localStorage.setItem(profileKey, JSON.stringify({ name: state.userName, email: state.email }));
  $('accountBtn').textContent = state.userName;
}

function buildStationQueue() {
  return stations.map((station, index) => {
    const base = station.questions.map((_, i) => i);
    const selected = shuffle(base).slice(0, Math.min(levelConfig[state.level].questionsPerStation, station.questions.length));
    return { stationIndex: index, questions: selected };
  });
}

function saveState() {
  const payload = {
    ...state,
    stationQueue: state.stationQueue || []
  };
  localStorage.setItem(saveKey, JSON.stringify(payload));
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

function updateScore() {
  $('scoreValue').textContent = String(state.score);
}

function renderCaseList() {
  const items = stations.map((station, index) => {
    const status = index < state.stationIndex ? 'done' : index === state.stationIndex ? 'active' : '';
    return `<div class="case-item ${status}">${index + 1}. ${station.short}</div>`;
  }).join('');
  $('caseList').innerHTML = items;
}

function renderQuestion() {
  if (state.stationIndex >= stations.length) {
    endGame();
    return;
  }

  const station = stations[state.stationIndex];
  const queue = state.stationQueue[state.stationIndex]?.questions || [];
  const total = Math.min(levelConfig[state.level].questionsPerStation, station.questions.length);
  const currentQuestionIndex = queue[state.questionIndex];
  const currentQuestion = station.questions[currentQuestionIndex];

  $('stationKicker').textContent = `ESTAÇÃO ${String(state.stationIndex + 1).padStart(2, '0')}`;
  $('stationTitle').textContent = station.name;
  $('crimeTag').textContent = station.crime;
  $('questionCounter').textContent = `Pista ${state.questionIndex + 1}/${total}`;
  $('questionText').textContent = currentQuestion.q;

  $('options').innerHTML = '';
  const orderedOptions = shuffle(currentQuestion.options.map((option, index) => ({ option, index })));
  orderedOptions.forEach(({ option, index }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.textContent = option;
    button.dataset.optionIndex = String(index);
    button.addEventListener('click', () => answerQuestion(index, currentQuestion));
    $('options').appendChild(button);
  });

  $('feedbackBox').classList.add('hidden');
  $('feedbackBox').textContent = '';
  $('nextBtn').classList.add('hidden');
  $('progressBar').style.width = `${((state.stationIndex * total + state.questionIndex) / (stations.length * total)) * 100}%`;
  updateScore();
}

function answerQuestion(selectedIndex, currentQuestion) {
  if (state.answered) return;
  state.answered = true;

  const buttons = document.querySelectorAll('.option');
  buttons.forEach((button) => {
    const buttonIndex = Number(button.dataset.optionIndex);
    button.disabled = true;

    if (buttonIndex === currentQuestion.answer) {
      button.classList.add('correct');
    }

    if (buttonIndex === selectedIndex && buttonIndex !== currentQuestion.answer) {
      button.classList.add('wrong');
    }
  });

  const correct = selectedIndex === currentQuestion.answer;

  if (correct) {
    state.score += levelConfig[state.level].points;
  } else {
    state.lives -= 1;
  }

  const feedback = $('feedbackBox');
  feedback.classList.remove('hidden');
  feedback.innerHTML = correct
    ? `✅ <strong>Pista confirmada!</strong> ${currentQuestion.explanation}`
    : `❌ <strong>Quase!</strong> A resposta correta era “${currentQuestion.options[currentQuestion.answer]}”. ${currentQuestion.explanation}`;

  if (state.lives <= 0) {
    feedback.innerHTML += '<br><br>Suas vidas terminaram. A investigação foi interrompida.';
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

function moveToNextQuestion() {
  const stationQueue = state.stationQueue[state.stationIndex]?.questions || [];
  if (state.questionIndex < stationQueue.length - 1) {
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
  const pass = state.score >= 160 && state.lives > 0;
  $('resultTitle').textContent = pass ? 'Caso encerrado com sucesso!' : 'A investigação foi interrompida';
  $('resultText').textContent = pass
    ? `Excelente, ${state.userName}! Você resolveu os crimes da língua portuguesa e ganhou o certificado.`
    : 'Não desista, detetive. A próxima investigação vai revelar todas as pistas.';
  $('certificateName').textContent = state.userName;
  $('certificateScore').textContent = state.score >= 160 ? '1000' : String(Math.min(999, state.score));
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
  $('nextBtn').addEventListener('click', () => moveToNextQuestion());
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

  const saved = loadState();
  if (saved && state.stationQueue && state.stationQueue.length) {
    $('continueBtn').style.display = 'inline-block';
  } else {
    $('continueBtn').style.display = 'inline-block';
  }

  updateScore();
  renderCaseList();
  showScreen('startScreen');
}

init();
