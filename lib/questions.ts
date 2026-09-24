export type Question = {
  q: string
  options: string[]
  answer: number
  tip: string
}

export type Station = {
  key: string
  detective: string
  role: string
  crime: string
  brief: string
  clue: string // pista revelada ao concluir a estação (leva a Henrique)
  accent: string // cor tailwind arbitrária
  pool: Question[]
}

export type Difficulty = "facil" | "medio" | "dificil"

export const DIFFICULTY: Record<
  Difficulty,
  { label: string; rank: string; perStation: number; points: number; desc: string }
> = {
  facil: { label: "Cadete", rank: "Fácil", perStation: 3, points: 10, desc: "3 pistas por delegacia" },
  medio: { label: "Investigador", rank: "Médio", perStation: 4, points: 20, desc: "4 pistas por delegacia" },
  dificil: { label: "Agente Especial", rank: "Difícil", perStation: 5, points: 30, desc: "5 pistas por delegacia" },
}

export const STATIONS: Station[] = [
  {
    key: "concordancia",
    detective: "Anne",
    role: "Detetive da Concordância",
    crime: "Frases com erro de concordância e transitividade",
    brief:
      "Dez frases suspeitas foram fixadas na parede. Encontre a versão correta e prenda o erro com um X vermelho.",
    clue: "A biblioteca",
    accent: "#e11d2e",
    pool: [
      {
        q: "Uma frase está correta. Qual você libera?",
        options: [
          "Havia muitas pistas no local.",
          "Haviam muitas pistas no local.",
          "Haviam muita pista no local.",
          "Houveram muitas pistas no local.",
        ],
        answer: 0,
        tip: "O verbo 'haver' no sentido de 'existir' é impessoal: fica sempre no singular — 'Havia'.",
      },
      {
        q: "Prenda a frase CORRETA:",
        options: [
          "Fazem dois anos que Henrique sumiu.",
          "Faz dois anos que Henrique sumiu.",
          "Fazem dois ano que Henrique sumiu.",
          "Fazerem dois anos que Henrique sumiu.",
        ],
        answer: 1,
        tip: "'Fazer' indicando tempo é impessoal: sempre no singular — 'Faz dois anos'.",
      },
      {
        q: "Qual frase respeita a concordância?",
        options: [
          "Os detetive analisou as prova.",
          "Os detetives analisaram as provas.",
          "Os detetives analisou as provas.",
          "O detetives analisaram a provas.",
        ],
        answer: 1,
        tip: "Sujeito no plural ('os detetives') pede verbo no plural ('analisaram').",
      },
      {
        q: "Encontre a frase sem erro:",
        options: [
          "Fica claro as evidências.",
          "Ficam claras as evidências.",
          "Fica claras as evidência.",
          "Ficam claro as evidências.",
        ],
        answer: 1,
        tip: "'As evidências' é o sujeito no plural: 'Ficam claras'.",
      },
      {
        q: "Qual está correta quanto à transitividade?",
        options: [
          "Henrique assistiu o filme na delegacia.",
          "Henrique assistiu ao filme na delegacia.",
          "Henrique assistiu no filme na delegacia.",
          "Henrique assistiu do filme na delegacia.",
        ],
        answer: 1,
        tip: "'Assistir' (ver) é transitivo indireto: pede a preposição 'a' — 'assistir ao filme'.",
      },
      {
        q: "Prenda o erro escolhendo a CORRETA:",
        options: [
          "Menas pistas foram encontradas hoje.",
          "Menos pistas foram encontradas hoje.",
          "Menos pista foi encontrada hoje.",
          "Menas pista foi encontrado hoje.",
        ],
        answer: 1,
        tip: "'Menos' é invariável — 'menas' não existe.",
      },
      {
        q: "Qual frase está correta?",
        options: [
          "Existe muitas suspeitas no caso.",
          "Existem muitas suspeitas no caso.",
          "Existe muitas suspeita no caso.",
          "Existem muita suspeitas no caso.",
        ],
        answer: 1,
        tip: "'Existir' concorda com o sujeito: 'muitas suspeitas' (plural) → 'existem'.",
      },
      {
        q: "Escolha a frase correta:",
        options: [
          "A polícia prefere agir mais rápido do que devagar.",
          "A polícia prefere mais agir rápido do que devagar.",
          "A polícia prefere agir rápido do que devagar.",
          "A polícia prefere agir do que devagar rápido.",
        ],
        answer: 0,
        tip: "'Preferir' pede 'a' ou a estrutura 'mais... do que'. A opção clara e correta é a primeira.",
      },
      {
        q: "Qual respeita a regência do verbo 'obedecer'?",
        options: [
          "O suspeito obedeceu a lei.",
          "O suspeito obedeceu à lei.",
          "O suspeito obedeceu na lei.",
          "O suspeito obedeceu com a lei.",
        ],
        answer: 1,
        tip: "'Obedecer' é transitivo indireto e exige crase: 'obedeceu à lei'.",
      },
      {
        q: "Prenda a frase CORRETA:",
        options: [
          "Tratam-se de casos difíceis.",
          "Trata-se de casos difíceis.",
          "Tratam-se de caso difícil.",
          "Se trata de casos difícil.",
        ],
        answer: 1,
        tip: "'Tratar-se de' é impessoal: fica no singular — 'trata-se de'.",
      },
    ],
  },
  {
    key: "fakenews",
    detective: "Bryan",
    role: "Detetive do Fake News",
    crime: "Notícias falsas sem fonte confiável",
    brief:
      "Duas notícias, uma verdadeira e uma FAKE. Descubra a falsa pela falta de fonte, exagero ou ausência de argumento.",
    clue: "à noite",
    accent: "#f4c020",
    pool: [
      {
        q: "Qual destas notícias você carimba como FAKE?",
        options: [
          "\"URGENTE!!! Cientista SECRETO revela que ler faz o cérebro DOBRAR de tamanho em 1 dia! Compartilhe antes que apaguem!\"",
          "\"Segundo estudo publicado pela USP, a leitura frequente melhora o vocabulário ao longo dos anos.\"",
        ],
        answer: 0,
        tip: "Fake: letras maiúsculas, apelo emocional, 'fonte secreta' e pedido de compartilhar. Sem fonte verificável.",
      },
      {
        q: "Uma é falsa. Qual você prende?",
        options: [
          "\"Prefeitura anuncia reforma de escolas com verba aprovada em reunião pública, informa o Diário Oficial.\"",
          "\"MILAGRE! Prefeito some e reaparece com PODERES! Vizinha VIU tudo! Não vão te contar isso!\"",
        ],
        answer: 1,
        tip: "Fake: sensacionalismo, testemunha anônima ('vizinha'), sem documento ou fonte oficial.",
      },
      {
        q: "Identifique a notícia FALSA:",
        options: [
          "\"Compartilhe URGENTE: banana com casca cura tudo, dizem no grupo da família!\"",
          "\"Nutricionistas explicam que a banana é rica em potássio e faz parte de uma dieta equilibrada.\"",
        ],
        answer: 0,
        tip: "Fake: promessa de 'cura tudo' e fonte é 'grupo da família', não um especialista.",
      },
      {
        q: "Qual é a fake news?",
        options: [
          "\"Instituto de meteorologia prevê chuvas para a próxima semana na região.\"",
          "\"ATENÇÃO: vão PROIBIR a chuva no fim de semana! Governo escondendo! Repasse!\"",
        ],
        answer: 1,
        tip: "Fake: afirmação absurda, teoria da conspiração e pedido de repasse. Sem base lógica.",
      },
      {
        q: "Prenda a notícia sem fonte confiável:",
        options: [
          "\"Especialistas da universidade recomendam 8 horas de sono, segundo pesquisa revisada.\"",
          "\"Descobriram que dormir é PERDA DE TEMPO! Médico anônimo revelou! Ninguém fala disso!\"",
        ],
        answer: 1,
        tip: "Fake: 'médico anônimo' não é fonte; contradiz consenso e usa apelo do 'ninguém fala'.",
      },
      {
        q: "Qual manchete é FALSA?",
        options: [
          "\"Biblioteca municipal amplia horário após pedido dos moradores, confirma a secretaria.\"",
          "\"Bibliotecas VÃO SUMIR amanhã por ordem SECRETA! Salve os livros AGORA!\"",
        ],
        answer: 1,
        tip: "Fake: urgência falsa, 'ordem secreta' e nenhuma fonte oficial verificável.",
      },
      {
        q: "Aponte a notícia enganosa:",
        options: [
          "\"Água com limão emagrece 10kg numa noite, garante influenciador!\"",
          "\"Profissionais de saúde afirmam que a perda de peso saudável é gradual e acompanhada.\"",
        ],
        answer: 0,
        tip: "Fake: promessa impossível ('10kg numa noite') e fonte sem qualificação.",
      },
      {
        q: "Qual você denuncia como fake?",
        options: [
          "\"Estudo da Fiocruz orienta sobre a importância da vacinação, com dados oficiais.\"",
          "\"Vacinas contêm CHIP! Um tio no zap confirmou! A mídia esconde!\"",
        ],
        answer: 1,
        tip: "Fake: teoria da conspiração, fonte é 'um tio no zap', sem qualquer evidência.",
      },
    ],
  },
  {
    key: "ortografia",
    detective: "Bedin",
    role: "Detetive Ortográfico",
    crime: "Palavras escritas de forma errada no texto",
    brief:
      "Erros se escondem no meio das frases: 'agente/a gente', 'mais/mas', 'há/a'. Encontre a forma correta.",
    clue: "procure",
    accent: "#38bdf8",
    pool: [
      {
        q: "Complete: \"_____ vamos resolver este caso juntos.\"",
        options: ["A gente", "Agente", "Á gente", "A gente"],
        answer: 0,
        tip: "'A gente' (= nós) é escrito separado. 'Agente' é a pessoa que age (agente secreto).",
      },
      {
        q: "Complete: \"Procurei em tudo, _____ não achei nada.\"",
        options: ["mais", "mas", "más", "mais que"],
        answer: 1,
        tip: "'Mas' = porém (ideia de oposição). 'Mais' indica quantidade.",
      },
      {
        q: "Complete: \"Henrique sumiu _____ dois dias.\"",
        options: ["a", "há", "à", "ah"],
        answer: 1,
        tip: "'Há' (do verbo haver) indica tempo passado. 'A' seria tempo futuro/distância.",
      },
      {
        q: "Qual está escrita corretamente?",
        options: ["excessão", "exceção", "esceção", "excesão"],
        answer: 1,
        tip: "O correto é 'exceção'.",
      },
      {
        q: "Complete: \"Ele foi _____ delegacia depressa.\"",
        options: ["a", "à", "há", "ah"],
        answer: 1,
        tip: "Quem vai, vai A algum lugar; com palavra feminina há crase: 'à delegacia'.",
      },
      {
        q: "Qual palavra está correta?",
        options: ["previlégio", "privilégio", "priviléjio", "prevelégio"],
        answer: 1,
        tip: "O correto é 'privilégio'.",
      },
      {
        q: "Complete: \"Não sei o _____ ele fez isso.\" (motivo)",
        options: ["porque", "por que", "porquê", "por quê"],
        answer: 1,
        tip: "Pergunta ou 'a razão pela qual' → 'por que' separado. 'Porquê' (substantivo) leva artigo.",
      },
      {
        q: "Qual está certa?",
        options: ["concerteza", "com certeza", "concêrteza", "com serteza"],
        answer: 1,
        tip: "'Com certeza' é sempre escrito separado.",
      },
      {
        q: "Complete: \"O caso é _____ complicado do que parecia.\"",
        options: ["mas", "mais", "máis", "más"],
        answer: 1,
        tip: "'Mais' indica intensidade/quantidade; aqui compara — 'mais complicado'.",
      },
      {
        q: "Qual palavra está escrita corretamente?",
        options: ["asterisco", "asterístico", "esterisco", "asteristo"],
        answer: 0,
        tip: "O correto é 'asterisco' (sem o 'ti').",
      },
    ],
  },
  {
    key: "vocabulario",
    detective: "Gabriel.D",
    role: "Detetive do Plágio",
    crime: "Textos com repetição excessiva de palavras",
    brief:
      "O texto repete a mesma palavra sem parar. Escolha o melhor sinônimo para variar o vocabulário.",
    clue: "a caixa",
    accent: "#a78bfa",
    pool: [
      {
        q: "\"O detetive olhou. O detetive anotou. O detetive...\" Troque o segundo 'detetive' pelo melhor sinônimo:",
        options: ["investigador", "padeiro", "motorista", "jardineiro"],
        answer: 0,
        tip: "'Investigador' é sinônimo de detetive e evita a repetição.",
      },
      {
        q: "Substitua a palavra repetida 'casa' na frase: \"Ele voltou para casa; a casa estava escura.\"",
        options: ["residência", "cidade", "escola", "floresta"],
        answer: 0,
        tip: "'Residência' é sinônimo de casa.",
      },
      {
        q: "Evite a repetição de 'importante': \"É importante ler. É importante estudar.\" Melhor troca:",
        options: ["essencial", "cansativo", "barato", "colorido"],
        answer: 0,
        tip: "'Essencial' mantém o sentido de 'importante'.",
      },
      {
        q: "Troque o 'ver' repetido: \"Ele foi ver a pista e voltou a ver o mapa.\"",
        options: ["observar", "correr", "dormir", "comer"],
        answer: 0,
        tip: "'Observar' é sinônimo adequado de 'ver'.",
      },
      {
        q: "Substitua 'falar' repetido: \"Ela começou a falar e não parava de falar.\"",
        options: ["discursar", "pular", "escrever", "calar"],
        answer: 0,
        tip: "'Discursar' (ou 'conversar') substitui bem 'falar'. 'Calar' é o oposto.",
      },
      {
        q: "Melhor sinônimo para 'bonito' repetido: \"Um lugar bonito, com paisagem bonita.\"",
        options: ["deslumbrante", "feio", "distante", "barulhento"],
        answer: 0,
        tip: "'Deslumbrante' é sinônimo intenso de 'bonito'.",
      },
      {
        q: "Troque 'rápido' repetido: \"Correu rápido e agiu rápido.\"",
        options: ["ágil", "lento", "pesado", "quieto"],
        answer: 0,
        tip: "'Ágil' mantém a ideia de 'rápido'.",
      },
      {
        q: "Substitua 'problema' repetido: \"Tinha um problema, e esse problema crescia.\"",
        options: ["obstáculo", "presente", "sorriso", "descanso"],
        answer: 0,
        tip: "'Obstáculo' é sinônimo de 'problema'.",
      },
      {
        q: "Evite repetir 'disse': \"Ele disse que viria e disse que traria provas.\"",
        options: ["afirmou", "correu", "esqueceu", "silenciou"],
        answer: 0,
        tip: "'Afirmou' (ou 'garantiu') substitui 'disse'.",
      },
      {
        q: "Melhor sinônimo para 'muito' repetido: \"Estava muito cansado e muito confuso.\"",
        options: ["extremamente", "pouco", "às vezes", "quase"],
        answer: 0,
        tip: "'Extremamente' intensifica sem repetir 'muito'.",
      },
    ],
  },
  {
    key: "conectivos",
    detective: "Manuella",
    role: "Chefe da Delegacia",
    crime: "Redação sem conectivos — o Caso Final",
    brief:
      "Junte as pistas dos outros detetives. Escolha os conectivos certos para montar o parágrafo que revela onde está Henrique.",
    clue: "embaixo do carimbo",
    accent: "#22c55e",
    pool: [
      {
        q: "\"Henrique deixou pistas ___ queria ser encontrado.\" Melhor conectivo:",
        options: ["porque", "apesar de", "ou", "nem"],
        answer: 0,
        tip: "'Porque' introduz causa/explicação — o motivo das pistas.",
      },
      {
        q: "\"Procuramos o dia todo, ___ não desistimos.\" Complete:",
        options: ["portanto", "no entanto", "porque", "assim que"],
        answer: 1,
        tip: "'No entanto' marca oposição: procuramos muito, mesmo assim não desistimos.",
      },
      {
        q: "\"Reunimos todas as provas; ___, montamos o parágrafo final.\"",
        options: ["portanto", "porém", "embora", "caso"],
        answer: 0,
        tip: "'Portanto' indica conclusão a partir das provas reunidas.",
      },
      {
        q: "\"Ele foi à biblioteca ___ pegou o último livro.\" Ideia de adição:",
        options: ["e", "mas", "ou", "porque"],
        answer: 0,
        tip: "'E' adiciona ações em sequência.",
      },
      {
        q: "\"___ estivesse escuro, Henrique continuou lendo.\" Ideia de concessão:",
        options: ["Embora", "Porque", "Assim", "Logo"],
        answer: 0,
        tip: "'Embora' expressa concessão: apesar do escuro, ele continuou.",
      },
      {
        q: "\"Siga as pistas ___ encontrará o desaparecido.\" Ideia de consequência:",
        options: ["e assim", "porém", "embora", "ou seja não"],
        answer: 0,
        tip: "'E assim' liga a ação à consequência (encontrar).",
      },
      {
        q: "\"Ele avisaria a polícia ___ tivesse tempo.\" Ideia de condição:",
        options: ["caso", "portanto", "todavia", "logo"],
        answer: 0,
        tip: "'Caso' introduz condição (= se).",
      },
      {
        q: "\"Primeiro reunimos pistas; ___, escrevemos a conclusão.\" Ideia de tempo/ordem:",
        options: ["em seguida", "contudo", "porque", "apesar disso"],
        answer: 0,
        tip: "'Em seguida' organiza a ordem dos fatos.",
      },
      {
        q: "\"O caso era difícil, ___ resolvemos com trabalho em equipe.\"",
        options: ["contudo", "porque", "caso", "assim que"],
        answer: 0,
        tip: "'Contudo' marca oposição: era difícil, mesmo assim resolvemos.",
      },
      {
        q: "\"Encontramos Henrique ___ ele havia deixado um mapa.\" Causa:",
        options: ["porque", "embora", "ou", "todavia"],
        answer: 0,
        tip: "'Porque' explica a causa de o termos encontrado.",
      },
    ],
  },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export type RoundQuestion = Question & { stationKey: string; stationIndex: number }

// Monta uma rodada nova toda vez: embaralha perguntas e alternativas.
export function buildRound(difficulty: Difficulty): RoundQuestion[][] {
  const perStation = DIFFICULTY[difficulty].perStation
  return STATIONS.map((station, stationIndex) => {
    const picked = shuffle(station.pool).slice(0, perStation)
    return picked.map((question) => {
      const correctText = question.options[question.answer]
      const shuffledOptions = shuffle(question.options)
      return {
        ...question,
        options: shuffledOptions,
        answer: shuffledOptions.indexOf(correctText),
        stationKey: station.key,
        stationIndex,
      }
    })
  })
}
