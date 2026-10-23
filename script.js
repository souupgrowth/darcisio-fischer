'use strict';
/** Site estático: não há integração de formulário, envio de dados ou banco de dados. */
const CONFIG = {
  instagramUrl: '', // inserir a URL oficial completa quando informada
  tiktokUrl: '', // inserir a URL oficial completa quando informada
  whatsapp: '5547998454663'
};
const ICONS = {
  brain: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8C15 2 8 8 9 16c-8 4-7 15 1 17 0 7 8 11 14 6V8Zm0 0c9-6 16 0 15 8 8 4 7 15-1 17 0 7-8 11-14 6V8Z"/><path d="M14 14c5 0 7 3 7 7m-11 3c5-2 8 1 8 6m6-9h-5m15-7c-5 0-7 3-7 7m11 3c-5-2-8 1-8 6m-6-9h5"/></svg>`,
  heart: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40 6 22C-2 11 14 1 24 13 34 1 50 11 42 22Z"/><path d="M17 18c4-4 10-4 14 0"/></svg>`,
  eye: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M3 24s8-13 21-13 21 13 21 13-8 13-21 13S3 24 3 24Z"/><circle cx="24" cy="24" r="7"/></svg>`,
  target: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="27" r="16"/><circle cx="21" cy="27" r="8"/><path d="m21 27 20-20m-10 0h10v10"/></svg>`,
  bulb: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 32c-1-6-7-7-7-16a16 16 0 0 1 32 0c0 9-6 10-7 16ZM16 35h16M18 40h12M20 44h8M24 1v4M3 16h4M41 16h4M7 4l4 4M41 4l-4 4"/></svg>`,
  square: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="6" width="36" height="36" rx="1"/></svg>`,
  diamond: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 7h28l8 13-22 24L2 20 10 7Zm-8 13h44M10 7l8 13 6 24 6-24 8-13"/></svg>`,
  growth: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 44V31h8v13M18 44V24h8v20M32 44V16h8v28M5 23l14-8 10 4 13-14M32 5h10v10"/></svg>`,
  dna: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 4c25 11 0 29 24 40M36 4C11 15 36 33 12 44M14 9h20M16 17h16M16 31h16M14 39h20"/></svg>`,
  seal: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><circle cx="24" cy="24" r="14"/><path d="m16 25 5 5 11-12"/></svg>`
};
const carouselData = {
  visagismo: [
    ['brain','IDENTIDADE','O que torna você único.'],
    ['heart','PERSONALIDADE','Seus traços e preferências.'],
    ['eye','HARMONIA VISUAL','Equilíbrio entre forma e estilo.'],
    ['target','OBJETIVOS','A imagem que aproxima você do que deseja.']
  ],
  metodo: [
    ['bulb','DESCOBERTA<br>DA ESSÊNCIA','Revelando sua identidade interna antes de tocar no cabelo.'],
    ['square','ANÁLISE<br>DA MOLDURA','O rosto como um mapa único de expressão e personalidade.'],
    ['diamond','REVELAÇÃO<br>DA IMAGEM','A fusão de comportamento, energia e imagem externa.'],
    ['growth','EXCELÊNCIA<br>NO ATENDIMENTO','Serviços que valorizam a experiência e a singularidade.'],
    ['dna','METODOLOGIA<br>AUTORAL','Estruturada com precisão, cuidado e singularidade.'],
    ['seal','CONEXÃO<br>PESSOAL','Uma imagem em que cada pessoa se reconhece plenamente.']
  ]
};
function renderCarousel(root){
  const kind = root.dataset.carousel;
  const data = carouselData[kind];
  if(!data)return;
  root.innerHTML = `<div class="carousel-shell"><button class="carousel-arrow" type="button" aria-label="Anterior">‹</button><div class="carousel-viewport"><div class="carousel-track">${data.map(([icon,title,desc])=>`<article class="carousel-card">${ICONS[icon]}<h3>${title}</h3><p>${desc}</p></article>`).join('')}</div></div><button class="carousel-arrow" type="button" aria-label="Próximo">›</button></div><div class="carousel-dots" aria-label="Posição do carrossel"></div>`;
  const track = root.querySelector('.carousel-track');
  const dots = root.querySelector('.carousel-dots');
  let position=0;
  const visible = () => kind==='metodo' && root.closest('.desktop-page') ? 3:1;
  function update(){
    const max=Math.max(0,data.length-visible());position=Math.max(0,Math.min(max,position));
    const first=track.firstElementChild;
    const gap=parseFloat(getComputedStyle(track).gap)||0;
    track.style.transform=`translate3d(-${(first.getBoundingClientRect().width+gap)*position}px,0,0)`;
    const total=max+1;
    dots.innerHTML=Array.from({length:total},(_,i)=>`<button class="carousel-dot ${i===position?'is-active':''}" aria-label="Ir para posição ${i+1}" aria-current="${i===position?'true':'false'}" data-index="${i}" type="button"></button>`).join('');
  }
  const arrows=root.querySelectorAll('.carousel-arrow');
  arrows[0].addEventListener('click',()=>{position=position<=0?data.length-visible():position-1;update()});
  arrows[1].addEventListener('click',()=>{position=position>=data.length-visible()?0:position+1;update()});
  dots.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b){position=Number(b.dataset.index);update()}});
  addEventListener('resize',update,{passive:true});
  // Recalcula após a carga das fontes, que podem alterar dimensões.
  document.fonts?.ready.then(update);
  update();
}
document.querySelectorAll('.carousel-root').forEach(renderCarousel);
const menuBtn=document.querySelector('.menu-toggle');const mobileNav=document.querySelector('#mobile-nav');
menuBtn?.addEventListener('click',()=>{const v=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!v));mobileNav.hidden=v;menuBtn.textContent=v?'☰':'×'});
mobileNav?.addEventListener('click',e=>{if(e.target.closest('a')){mobileNav.hidden=true;menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}});
for(const el of document.querySelectorAll('[data-instagram],[data-tiktok]')){
 el.addEventListener('click',()=>{
  const u=el.hasAttribute('data-instagram')?CONFIG.instagramUrl:CONFIG.tiktokUrl;
  if(u && /^https:\/\//.test(u)){window.open(u,'_blank','noopener,noreferrer')}else{document.querySelector('#notice-dialog').showModal()}
 });
}
const noticeDialog=document.querySelector('#notice-dialog');
document.querySelectorAll('[data-close-notice]').forEach(b=>b.addEventListener('click',()=>noticeDialog.close()));
const methodDialog=document.querySelector('#method-dialog');
document.querySelectorAll('[data-open-method]').forEach(b=>b.addEventListener('click',()=>methodDialog.showModal()));
document.querySelectorAll('[data-close-method]').forEach(b=>b.addEventListener('click',()=>methodDialog.close()));
for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

/* Questionário original fornecido no projeto (44 afirmações).
 * Cada grupo tem 11 perguntas, na ordem: Sanguíneo, Melancólico, Colérico, Fleumático.
 * Escores exploratórios de 0 a 3, NÃO um diagnóstico ou instrumento psicológico validado. */
const QUESTIONS=["Frequentemente falo antes de pensar e depois me arrependo.", "Apesar de me irritar com as pessoas, não sou de guardar rancores", "Me empolgo facilmente com novidades e coisas ao meu redor", "Quando me tratam mal posso fazer piadas com o fato e até inverter a situação. Gosto de encarar a vida com bom humor e não levo essas coisas muito a sério.", "Procuro animar as pessoas", "Gosto de mudanças e novidades em minha vida e participo com entusiasmo de novos planos", "Sou desorganizado", "Não sofro muito pelo futuro, gosto de viver o presente", "Tenho dificuldade para me concentrar em leitura ou tarefas que exijam atenção", "Facilmente puxo assunto com estranhos e faço amizades", "Procuro não esquentar a cabeça com problemas, apenas curto o momento", "Quando me tratam mal fico magoado. Posso relevar o comportamento da pessoa mas me fecho.", "Gosto de tarefas criativas como ler romances, escrever, desenhar ou pintar.", "Se alguém é injusto comigo, na hora fico sem reação e extremamente magoado. Demoro a esquecer.", "Me perco em meus próprios pensamentos, sonhando acordado.", "Frequentemente me sinto culpado.", "Periodicamente fico deprimido, mesmo sem motivo aparente.", "As pessoas me veem como alguém sensível", "Tenho a capacidade de prever problemas.", "Quando alguém é agressivo comigo, costumo pensar que a pessoa poder estar magoada por algo que eu possa ter feito e fico inseguro.", "Normalmente percebo quando alguém está triste.", "Costumo temer problemas e calculo tudo o que pode dar errado nas situações", "Quando me tratam mal eu sou firme e coloco os limites necessários. Não vejo sentido em me submeter aos caprichos alheios.", "As pessoas nunca me intimidam a calar minha opinião.", "Não me abalo facilmente com críticas", "No trabalho administro as minhas tarefas de forma prática, objetiva e com foco em resultados.", "As pessoas me veem como alguém de personalidade forte e me respeitam.", "Tenho total certeza de que sou uma pessoa capaz para gerenciar o trabalho de outras pessoas.", "Gosto de desafios, jogos de competição e sou competitivo, me esforço para ganhar pelo meu time.", "Encontro soluções práticas com agilidade", "No trabalho tenho uma visão ampla dos cenários", "Tenho facilidade de tomar decisões", "Me sinto pleno resolvendo meus problemas e ajudando os outros a resolver os seus.", "Quando me tratam mal posso nem perceber e, se percebo, não dou nenhuma importância.", "Frequentemente me desligo completamente do mundo ao focar total atenção em minhas atividades.", "Costumo cumprir obrigações e horários.", "Acho mais fácil fazer o que me pedem do que me alongar em discussões", "Consigo trabalhar bem mesmo sob pressão.", "Sou uma pessoa calada e não faço questão de emitir uma opinião caso não seja pedida", "Quando não estou com vontade de fazer algo, sou mais lento que o habitual", "Raramente grito ou dou gargalhadas, minhas emoções são contidas", "Tenho preguiça de brigar com as pessoas", "Sou cético e tenho dificuldades para acreditar, busco dados lógicos", "Costumo esquecer dos problemas e espero que acabem por se resolver no futuro"];
const TYPES=['Sanguíneo','Melancólico','Colérico','Fleumático'];
const TYPE_DETAILS={
 'Sanguíneo':{strength:'Espontaneidade, sociabilidade e facilidade para criar conexões.',care:'Evitar que impulsividade ou dispersão atrapalhem decisões importantes.',image:'Uma imagem que expresse abertura, dinamismo e autenticidade.'},
 'Melancólico':{strength:'Sensibilidade, criatividade, profundidade e atenção aos detalhes.',care:'Perceber quando a autocobrança ou a preocupação pesam demais.',image:'Uma imagem que valorize sensibilidade, refinamento e intenção.'},
 'Colérico':{strength:'Iniciativa, determinação, objetividade e capacidade de decidir.',care:'Equilibrar firmeza com escuta e flexibilidade.',image:'Uma imagem que comunique presença e segurança sem perder acolhimento.'},
 'Fleumático':{strength:'Calma, constância, diplomacia e capacidade de observar.',care:'Dar espaço à iniciativa pessoal e à expressão de preferências.',image:'Uma imagem que comunique serenidade, confiança e identidade.'}
};
const testDialog=document.querySelector('#test-dialog');
const testApp=document.querySelector('#test-app');
let testState=null;
const escapeHTML=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function intro(){
 testApp.innerHTML=`<p class="eyebrow">TESTE DE TEMPERAMENTO</p><h2>Conheça seu perfil</h2><p class="quiz-muted">Para descobrir o seu temperamento, basta responder às perguntas abaixo. Responda com sinceridade e volte a cada pergunta sempre que achar necessário.</p><p class="quiz-note">⏱ Tempo estimado: cerca de 5 minutos.</p><h3 style="font-family:'Bodoni Moda',serif;font-size:24px;margin:20px 0 12px">Antes de começar</h3><p class="quiz-muted">Informe seus dados para personalizar o resultado exibido nesta página. Nesta versão, não há envio de dados, e-mail nem armazenamento no site.</p><form id="test-intro" style="margin-top:16px"><label>Nome completo<input name="nome" autocomplete="name" maxlength="100" required></label><label>WhatsApp com DDD<input name="telefone" type="tel" autocomplete="tel" placeholder="(47) 99999-9999" maxlength="18" required></label><label>E-mail<input name="email" type="email" autocomplete="email" maxlength="180" required></label><p class="quiz-note">Seus dados só serão usados temporariamente neste navegador enquanto você realiza o teste.</p><button class="cta-gold" type="submit" style="width:100%">INICIAR O TESTE →</button></form>`;
 testApp.querySelector('form').addEventListener('submit',e=>{
  e.preventDefault();const fd=new FormData(e.target);const digits=String(fd.get('telefone')).replace(/\D/g,'');
  if(digits.length<10||digits.length>11){alert('Informe um número de WhatsApp com DDD (10 ou 11 dígitos).');return}
  testState={name:String(fd.get('nome')).trim(),phone:digits,email:String(fd.get('email')),answers:Array(44).fill(null),index:0};
  renderQuestion();
 });
}
function renderQuestion(){
 const st=testState;const i=st.index;const selected=st.answers[i];
 const options=['Discordo totalmente','Discordo parcialmente','Concordo parcialmente','Concordo totalmente'];
 testApp.innerHTML=`<p class="eyebrow">TESTE DE TEMPERAMENTO</p><h2>Questão ${i+1} de 44</h2><div class="quiz-progress" aria-hidden="true"><i style="width:${Math.round(100*(i)/44)}%"></i></div><p class="quiz-muted">Responda pensando em como você costuma agir, não em como gostaria de agir.</p><h3 style="font:600 clamp(22px,3vw,29px)/1.25 'Bodoni Moda',serif;margin:24px 0">${escapeHTML(QUESTIONS[i])}</h3><div class="quiz-choices">${options.map((option,k)=>`<button type="button" class="quiz-choice" data-answer="${k}" aria-pressed="${selected===k}">${option}</button>`).join('')}</div><div class="quiz-actions"><button type="button" data-quiz-back ${i===0?'disabled':''}>← Anterior</button><button type="button" data-quiz-next class="cta-gold" ${selected===null?'disabled':''}>${i===43?'VER RESULTADO →':'PRÓXIMA →'}</button></div><p class="quiz-note">Seu progresso é mantido somente enquanto esta janela estiver aberta.</p>`;
 testApp.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{st.answers[i]=Number(b.dataset.answer);renderQuestion()}));
 testApp.querySelector('[data-quiz-back]').addEventListener('click',()=>{if(st.index>0){st.index--;renderQuestion()}});
 testApp.querySelector('[data-quiz-next]').addEventListener('click',()=>{if(st.answers[i]===null)return;if(st.index<43){st.index++;renderQuestion()}else{renderResult()}});
}
function renderResult(){
 const sums=[0,0,0,0];testState.answers.forEach((score,i)=>{sums[Math.floor(i/11)]+=score??0});
 const order=[0,1,2,3].sort((a,b)=>sums[b]-sums[a]||a-b);
 const primary=TYPES[order[0]], secondary=TYPES[order[1]];
 const tied=sums[order[0]]===sums[order[1]];
 const descriptions=TYPE_DETAILS[primary];
 const scoreRows=order.map((k,i)=>`<div><strong>${['Primário','Secundário','Terciário','Menor pontuação'][i]}</strong>${TYPES[k]} · ${sums[k]}/33 pontos</div>`).join('');
 const message=`Olá, Darcísio! Fiz o teste de temperamento no seu site. Meu perfil indicado foi ${primary} / ${secondary}. Quero saber mais sobre a consultoria completa de imagem.`;
 const url=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
 testApp.innerHTML=`<p class="eyebrow">SEU RESULTADO</p><h2>${escapeHTML(testState.name.split(' ')[0])}, conheça seu perfil</h2><p class="quiz-muted">Esta é uma leitura exploratória de tendências comportamentais com base nas respostas informadas.</p><h3 style="font:600 clamp(27px,4.3vw,42px)/1.15 'Bodoni Moda',serif;color:#f0d37a;margin-top:19px">${primary} + ${secondary}</h3><div class="quiz-result-grid">${scoreRows}</div>${tied?'<p class="quiz-note">Houve empate entre os temperamentos mais pontuados; por isso, não é possível afirmar predominância clara.</p>':''}<div class="result-detail"><h3>Como esse perfil costuma se expressar</h3><p>O perfil ${primary.toLowerCase()} foi o mais pontuado, seguido pelo ${secondary.toLowerCase()}. Essa combinação sugere tendências que podem aparecer de formas diferentes conforme a situação, a experiência e o contexto.</p><h3>Pontos fortes</h3><p>${descriptions.strength}</p><h3>Pontos de atenção</h3><p>${descriptions.care}</p><h3>O que isso pode representar na sua imagem</h3><p>${descriptions.image} A consultoria considera também características individuais, desejos, rotina e objetivos — muito além de um resultado de questionário.</p></div><div class="quiz-result-cta"><h3>Seu temperamento é apenas o começo. Sua imagem pode comunicar quem você é.</h3><p>Conheça a consultoria completa do Método Código da Imagem e descubra como unir sua essência, sua personalidade e seus objetivos em uma presença autêntica.</p><a class="cta-gold" href="${url}" target="_blank" rel="noopener noreferrer">QUERO MINHA CONSULTORIA →</a></div><p class="quiz-note">Resultado informativo, sem finalidade de diagnóstico psicológico. Não é salvo nem enviado ao Darcísio nesta versão.</p>`;
 testApp.scrollIntoView({block:'start'});
}
document.querySelectorAll('[data-open-test]').forEach(b=>b.addEventListener('click',()=>{testState=null;intro();testDialog.showModal()}));
document.querySelector('[data-close-test]').addEventListener('click',()=>testDialog.close());
testDialog.addEventListener('close',()=>{testState=null;testApp.replaceChildren()});
