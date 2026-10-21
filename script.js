/* Fischer | Visagismo e Código da Imagem */
(() => {
  'use strict';

  const questions = [
    { text: 'Em um ambiente novo, como você costuma agir?', options: [
      'Procuro conversar, criar conexões e deixar o ambiente mais descontraído.',
      'Identifico oportunidades e tomo a iniciativa quando necessário.',
      'Observo o ambiente e procuro compreender as pessoas antes de me envolver.',
      'Interajo tranquilamente, ouvindo os outros e respeitando meu próprio ritmo.'
    ]},
    { text: 'Quando surge uma mudança inesperada, qual costuma ser sua reação?', options: [
      'Vejo a mudança como uma oportunidade e me animo com as possibilidades.',
      'Tomo decisões rapidamente e reorganizo o que for necessário.',
      'Analiso as consequências antes de definir como agir.',
      'Procuro me adaptar com calma, avançando passo a passo.'
    ]},
    { text: 'Ao tomar uma decisão importante, o que mais pesa para você?', options: [
      'Conversar, trocar ideias e explorar possibilidades.',
      'Alcançar o objetivo e colocar o plano em prática.',
      'Reunir informações e avaliar cuidadosamente os prós e contras.',
      'Considerar o impacto sobre as pessoas e buscar uma solução equilibrada.'
    ]},
    { text: 'Em um trabalho em equipe, qual papel surge mais naturalmente?', options: [
      'Motivar as pessoas e aproximar os integrantes do grupo.',
      'Organizar as ações e direcionar o grupo para os resultados.',
      'Cuidar da qualidade, da coerência e dos detalhes.',
      'Cooperar, oferecer apoio e ajudar a manter um ambiente harmonioso.'
    ]},
    { text: 'Qual dessas características as pessoas mais costumam reconhecer em você?', options: [
      'Entusiasmo, espontaneidade e facilidade para se comunicar.',
      'Determinação, iniciativa e objetividade.',
      'Cuidado, profundidade e atenção aos detalhes.',
      'Tranquilidade, paciência e confiabilidade.'
    ]},
    { text: 'Quando algo não sai como você esperava, o que tende a fazer?', options: [
      'Converso sobre o ocorrido e procuro recuperar meu entusiasmo.',
      'Enfrento a situação diretamente e busco resolver o problema.',
      'Reflito sobre o que aconteceu para entender onde posso melhorar.',
      'Procuro manter a calma e encontrar uma maneira serena de seguir em frente.'
    ]},
    { text: 'Como você costuma organizar suas atividades?', options: [
      'Gosto de variedade e de manter liberdade para aproveitar oportunidades.',
      'Defino prioridades e foco no que precisa ser concluído.',
      'Planejo com cuidado e prefiro ter clareza sobre cada etapa.',
      'Organizo uma rotina estável, mantendo um ritmo constante.'
    ]},
    { text: 'Diante de um desafio novo, qual abordagem mais combina com você?', options: [
      'Animo-me com a novidade e gosto de compartilhar a experiência.',
      'Estabeleço um objetivo e começo a agir para alcançá-lo.',
      'Pesquiso, avalio os riscos e preparo um plano antes de começar.',
      'Avanço de forma gradual, buscando segurança em cada etapa.'
    ]},
    { text: 'Como você prefere receber uma orientação ou um feedback?', options: [
      'Em uma conversa aberta, dinâmica e positiva.',
      'De maneira direta, objetiva e focada no que pode ser feito.',
      'Com informações específicas e explicações detalhadas.',
      'Em um diálogo tranquilo, respeitoso e sem pressão desnecessária.'
    ]},
    { text: 'Quando precisa expressar uma ideia, o que costuma acontecer?', options: [
      'Falo com espontaneidade e desenvolvo o raciocínio durante a conversa.',
      'Vou diretamente ao ponto principal e procuro convencer pela objetividade.',
      'Organizo meus pensamentos antes de falar e escolho as palavras com cuidado.',
      'Expresso minhas ideias de forma ponderada, ouvindo também os outros.'
    ]},
    { text: 'O que mais traz satisfação em uma atividade?', options: [
      'A possibilidade de interagir, experimentar e viver experiências variadas.',
      'Perceber avanços concretos e alcançar os objetivos propostos.',
      'Realizar um trabalho consistente, bem pensado e de qualidade.',
      'Contribuir para um processo tranquilo, cooperativo e estável.'
    ]},
    { text: 'Quando está sob pressão, qual tendência mais se aproxima de você?', options: [
      'Busco conversar, trocar ideias e recuperar a energia para continuar.',
      'Assumo a iniciativa e concentro os esforços na solução.',
      'Reavalio informações e procuro reduzir as possibilidades de erro.',
      'Tento preservar o equilíbrio e resolver uma coisa de cada vez.'
    ]}
  ];

  const profiles = [
    {
      key: 'sanguineo', name: 'Sanguíneo', short: 'SANGUÍNEO', descriptor: 'EXPRESSÃO E SOCIABILIDADE',
      description: 'Suas respostas indicam uma tendência à espontaneidade, à comunicação e à busca por experiências dinâmicas. No contexto da imagem pessoal, vale explorar como sua expressividade, suas preferências estéticas e sua maneira de interagir podem participar da construção de uma identidade visual coerente com você.'
    },
    {
      key: 'colerico', name: 'Colérico', short: 'COLÉRICO', descriptor: 'INICIATIVA E OBJETIVIDADE',
      description: 'Suas respostas indicam uma tendência à iniciativa, à decisão e à orientação para objetivos. Na construção da imagem pessoal, vale refletir sobre como você deseja transmitir presença, direção e segurança, respeitando sua individualidade e os contextos em que circula.'
    },
    {
      key: 'melancolico', name: 'Melancólico', short: 'MELANCÓLICO', descriptor: 'REFLEXÃO E ATENÇÃO AOS DETALHES',
      description: 'Suas respostas indicam uma tendência à reflexão, ao cuidado e à análise criteriosa. No visagismo, essa reflexão pode ajudar a identificar preferências, detalhes e escolhas visuais que tenham significado pessoal e representem a maneira como você deseja se expressar.'
    },
    {
      key: 'fleumatico', name: 'Fleumático', short: 'FLEUMÁTICO', descriptor: 'EQUILÍBRIO E CONSTÂNCIA',
      description: 'Suas respostas indicam uma tendência à tranquilidade, à cooperação e à busca por equilíbrio. Ao refletir sobre sua imagem pessoal, vale considerar como conforto, coerência e autenticidade podem participar das escolhas que melhor combinam com sua rotina e seus objetivos.'
    }
  ];
  const letters = ['A', 'B', 'C', 'D'];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const startView = $('#quiz-start');
  const questionView = $('#quiz-question-view');
  const resultView = $('#quiz-result');
  const questionForm = $('#question-form');
  const questionText = $('#question-text');
  const answerOptions = $('#answer-options');
  const questionCount = $('#question-count');
  const answeredCount = $('#answered-count');
  const progressTrack = $('#progress-track');
  const progressBar = $('#progress-bar');
  const previousButton = $('#previous-question');
  const nextButton = $('#next-question');
  const finishButton = $('#finish-quiz');
  const answerHint = $('#answer-hint');
  let currentIndex = 0;
  let answers = Array(questions.length).fill(null);

  function completedCount() {
    return answers.filter((answer) => answer !== null).length;
  }

  function updateProgress() {
    const count = completedCount();
    answeredCount.textContent = `${count} de ${questions.length} respondidas`;
    progressBar.style.width = `${(count / questions.length) * 100}%`;
    progressTrack.setAttribute('aria-valuenow', String(count));
  }

  function renderQuestion() {
    const question = questions[currentIndex];
    questionCount.textContent = `PERGUNTA ${String(currentIndex + 1).padStart(2, '0')} DE ${questions.length}`;
    questionText.textContent = question.text;
    answerOptions.replaceChildren();

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      label.className = 'answer-option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question-${currentIndex + 1}`;
      input.value = String(optionIndex);
      input.checked = answers[currentIndex] === optionIndex;
      input.setAttribute('aria-label', `${letters[optionIndex]}. ${option}`);
      const letter = document.createElement('span');
      letter.className = 'answer-letter';
      letter.textContent = letters[optionIndex];
      letter.setAttribute('aria-hidden', 'true');
      const copy = document.createElement('span');
      copy.className = 'answer-copy';
      copy.textContent = option;
      input.addEventListener('change', () => {
        answers[currentIndex] = optionIndex;
        nextButton.disabled = false;
        finishButton.disabled = false;
        answerHint.textContent = 'Resposta selecionada. Você pode continuar.';
        updateProgress();
      });
      label.append(input, letter, copy);
      answerOptions.append(label);
    });

    previousButton.hidden = currentIndex === 0;
    const isLast = currentIndex === questions.length - 1;
    nextButton.hidden = isLast;
    finishButton.hidden = !isLast;
    nextButton.disabled = answers[currentIndex] === null;
    finishButton.disabled = answers[currentIndex] === null;
    answerHint.textContent = answers[currentIndex] === null ? 'Selecione uma alternativa para continuar.' : 'Resposta selecionada. Você pode continuar.';
    updateProgress();
  }

  function beginQuiz() {
    currentIndex = 0;
    answers = Array(questions.length).fill(null);
    startView.hidden = true;
    resultView.hidden = true;
    questionView.hidden = false;
    renderQuestion();
    window.setTimeout(() => questionText.focus?.(), 50);
    $('#quiz-panel').scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function calculateScores() {
    const scores = [0, 0, 0, 0];
    answers.forEach((answer) => {
      if (Number.isInteger(answer) && answer >= 0 && answer <= 3) scores[answer] += 1;
    });
    return scores;
  }

  function renderResult() {
    const scores = calculateScores();
    const highest = Math.max(...scores);
    const winners = profiles.filter((_, index) => scores[index] === highest);
    const isTie = winners.length > 1;
    const resultLabel = $('#result-label');
    const resultTitle = $('#result-title');
    const resultDescription = $('#result-description');
    resultLabel.textContent = isTie ? 'RESULTADO COMBINADO' : winners[0].descriptor;
    resultTitle.textContent = isTie ? `Combinação: ${winners.map((profile) => profile.name).join(' + ')}` : winners[0].name;
    resultDescription.textContent = isTie
      ? 'Suas respostas apontam uma combinação de tendências entre dois ou mais perfis. Em vez de definir sua personalidade por uma única categoria, este resultado convida você a observar diferentes características que podem aparecer conforme o contexto, as experiências e suas preferências pessoais.'
      : winners[0].description;

    const scoreList = $('#score-list');
    scoreList.replaceChildren();
    profiles.forEach((profile, index) => {
      const row = document.createElement('div');
      row.className = 'score-row';
      const name = document.createElement('span');
      name.className = 'score-name';
      name.textContent = profile.name;
      const track = document.createElement('div');
      track.className = 'score-track';
      track.setAttribute('role', 'img');
      track.setAttribute('aria-label', `${profile.name}: ${scores[index]} de ${questions.length} respostas`);
      const fill = document.createElement('div');
      fill.className = 'score-fill';
      fill.style.width = `${(scores[index] / questions.length) * 100}%`;
      track.append(fill);
      const count = document.createElement('span');
      count.className = 'score-count';
      count.textContent = `${scores[index]} ${scores[index] === 1 ? 'resposta' : 'respostas'}`;
      row.append(name, track, count);
      scoreList.append(row);
    });

    questionView.hidden = true;
    resultView.hidden = false;
    resultView.focus?.();
    $('#quiz-panel').scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  $('#start-quiz').addEventListener('click', beginQuiz);
  previousButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
      const selected = $('input:checked', answerOptions);
      (selected || $('input', answerOptions))?.focus();
    }
  });
  nextButton.addEventListener('click', () => {
    if (answers[currentIndex] === null) return;
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
      questionText.focus?.();
    }
  });
  questionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (answers.some((answer) => answer === null)) {
      const missing = answers.findIndex((answer) => answer === null);
      currentIndex = missing;
      renderQuestion();
      answerHint.textContent = 'Responda a esta pergunta para ver seu resultado.';
      return;
    }
    renderResult();
  });
  $('#reset-quiz').addEventListener('click', beginQuiz);

  // Mobile navigation
  const menuToggle = $('.menu-toggle');
  const mainNav = $('#main-nav');
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav.classList.toggle('is-open', !isOpen);
  });
  $$('#main-nav a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    mainNav.classList.remove('is-open');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      mainNav.classList.remove('is-open');
      menuToggle.focus();
    }
  });

  // FAQ: keep one answer open at a time for a focused reading experience.
  $$('.faq-item').forEach((item) => item.addEventListener('toggle', () => {
    if (item.open) $$('.faq-item').filter((other) => other !== item).forEach((other) => { other.open = false; });
  }));

  // Privacy dialog.
  const privacyDialog = $('#privacy-dialog');
  function showDialog(dialog) {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.body.classList.add('dialog-open');
  }
  function hideDialog(dialog) {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (!privacyDialog.open) document.body.classList.remove('dialog-open');
  }
  $('#open-privacy').addEventListener('click', () => showDialog(privacyDialog));
  $('#close-privacy').addEventListener('click', () => hideDialog(privacyDialog));
  $('#privacy-ok').addEventListener('click', () => hideDialog(privacyDialog));
  privacyDialog.addEventListener('close', () => {
    if (!privacyDialog.open) document.body.classList.remove('dialog-open');
  });

  $('#current-year').textContent = String(new Date().getFullYear());
  updateProgress();
})();
