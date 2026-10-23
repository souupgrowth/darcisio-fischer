(() => {
  'use strict';
  const $ = (sel) => document.querySelector(sel);
  // WhatsApp confirmado. Perfis de Instagram e TikTok aguardam URLs oficiais.
  // WhatsApp deve ter DDI+DDD+número (apenas algarismos), ex: 5547999999999.
  const cfg = {
    whatsappNumber: '5547998454663', // WhatsApp confirmado: +55 47 99845-4663
    whatsappDisplay: '(47) 99845-4663',
    instagramUrl: '',   // Ex.: https://www.instagram.com/seu_perfil/
    tiktokUrl: '',       // Informar perfil oficial quando confirmado
    submissionEndpoint: '' // DESATIVADO: sem envio de formulário nesta versão
  };
  const icon = (type) => {
    const svg = {
      brain:'<path d="M12 5a4 4 0 0 0-7 3 4 4 0 0 0-1 7 4 4 0 0 0 4 5 4 4 0 0 0 4-2V5Zm0 0a4 4 0 0 1 7 3 4 4 0 0 1 1 7 4 4 0 0 1-4 5 4 4 0 0 1-4-2V5Z"/><path d="M8 8v8m8-8v8M5 13h4m6 0h4"/>',
      profile:'<path d="M11 3a8 8 0 0 0-1 16c-1 0-2 2-2 2h11l-3-5a7 7 0 0 0 2-5c0-4-3-8-7-8Z"/><path d="M11 5v12M7 10h5"/>',
      target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
      arrow:'<circle cx="10" cy="14" r="8"/><circle cx="10" cy="14" r="4"/><path d="m13 11 8-8m-5 0h5v5"/>',
      bulb:'<path d="M9 18h6m-5 3h4m-6-6c-1-2-4-3-4-7a8 8 0 1 1 16 0c0 4-3 5-4 7l-1 2H9l-1-2Z"/><path d="M12 1v2M2 9H1m22 0h-1M4 3l2 2m14-2-2 2"/>',
      frame:'<rect x="4" y="4" width="16" height="16" rx="1"/>',
      diamond:'<path d="M3 8 7 3h10l4 5-9 13L3 8Z"/><path d="M3 8h18M7 3l5 18L17 3"/>',
      growth:'<path d="M3 20V15h4v5m3 0v-9h4v9m3 0V8h4v12M4 10l7-6 4 3 6-5"/>',
      dna:'<path d="M6 3c13 7-1 11 12 18M18 3C5 10 19 14 6 21M7 7h10M6 12h12M7 17h10"/>',
      infinity:'<path d="M12 12C8 6 3 6 3 12s5 6 9 0c4-6 9-6 9 0s-5 6-9 0Z"/>'
    };
    return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">${svg[type] || svg.target}</svg>`;
  };

  // Personalize links no bloco cfg acima. Do not guess handles that were not provided.
  const whatsapp = /^\d{12,13}$/.test(cfg.whatsappNumber || '') ? `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria de visagismo.')}` : '#contato';
  $('#whatsappCta').href = whatsapp;
  $('#faqWhatsapp').href = whatsapp;
  if(!/^\d{12,13}$/.test(cfg.whatsappNumber || '')){
    $('#whatsappCta').href='mailto:darcisiofischer@gmail.com?subject=Consultoria%20de%20Imagem';
    $('#whatsappCta').textContent='ENVIAR E-MAIL →';
    $('#faqWhatsapp').href='mailto:darcisiofischer@gmail.com?subject=Consultoria%20de%20Imagem';
    $('#faqWhatsapp').textContent='Envie um e-mail ao Darcísio';
  }
  $('#publicPhone').textContent = cfg.whatsappDisplay || 'Contato pelo WhatsApp';
  $('#instagramResults').href = cfg.instagramUrl || '#resultados';
  $('#instagramFooter').href = cfg.instagramUrl || '#resultados';
  $('#tiktokFooter').href = cfg.tiktokUrl || '#contato';
  if (!cfg.instagramUrl) { $('#instagramResults').title = 'Configure o Instagram em script.js'; $('#instagramResults').removeAttribute('target'); $('#instagramFooter').title = 'Configure o Instagram em script.js'; $('#instagramFooter').removeAttribute('target'); }
  if (!cfg.tiktokUrl) { $('#tiktokFooter').title = 'Configure o TikTok em script.js'; $('#tiktokFooter').removeAttribute('target'); }
  if (!/^\d{12,13}$/.test(cfg.whatsappNumber || '')) { $('#whatsappCta').removeAttribute('target'); $('#faqWhatsapp').removeAttribute('target'); }
  $('#currentYear').textContent = new Date().getFullYear();
  $('#menuToggle').addEventListener('click', () => {
    const open = $('#nav').classList.toggle('open');
    $('#menuToggle').setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
    $('#nav').classList.remove('open');
    $('#menuToggle').setAttribute('aria-expanded','false');
  }));

  const visagismo = [
    {title:'Identidade',subtitle:'O que torna você único.',icon:'brain'},
    {title:'Personalidade',subtitle:'Seus traços, preferências e sua forma de se expressar.',icon:'profile'},
    {title:'Harmonia visual',subtitle:'Equilíbrio entre formas, estilo e comunicação.',icon:'target'},
    {title:'Objetivos',subtitle:'Uma imagem alinhada ao que você deseja transmitir.',icon:'arrow'}
  ];
  let visIndex = 0;
  function drawVis(){
    const item = visagismo[visIndex];
    $('#visIcon').innerHTML=icon(item.icon);
    $('#visName').textContent=item.title;
    $('#visText').textContent=item.subtitle;
    $('#visDots').innerHTML='';
    visagismo.forEach((it,i)=>{
      const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Ver ${it.title}`);b.setAttribute('aria-current',String(i===visIndex));b.classList.toggle('active',i===visIndex);b.onclick=()=>{visIndex=i;drawVis()};$('#visDots').append(b);
    });
  }
  $('#visPrev').onclick=()=>{visIndex=(visIndex-1+visagismo.length)%visagismo.length;drawVis()};
  $('#visNext').onclick=()=>{visIndex=(visIndex+1)%visagismo.length;drawVis()};
  drawVis();

  const methodItems = [
    {title:'Descoberta da Essência',text:'Revelando sua identidade interna antes de tocar no cabelo.',icon:'bulb'},
    {title:'Análise da Moldura',text:'O rosto como um mapa único de expressão e personalidade.',icon:'frame'},
    {title:'Revelação da Imagem',text:'A fusão de comportamento, energia e imagem externa.',icon:'diamond'},
    {title:'Experiência de Excelência',text:'Um atendimento pensado para valorizar cada pessoa.',icon:'growth'},
    {title:'Metodologia Autoral',text:'Técnica estruturada com precisão e singularidade.',icon:'dna'},
    {title:'Conexão com sua Essência',text:'Uma imagem com a qual você se reconhece plenamente.',icon:'infinity'}
  ];
  let methodIndex=0;
  const countVisible=()=>window.matchMedia('(max-width: 770px)').matches?1:3;
  function drawMethod(){
    const per=countVisible();
    $('#methodCards').innerHTML='';
    for(let d=0;d<per;d++){
      const it=methodItems[(methodIndex+d)%methodItems.length];
      const el=document.createElement('article');el.className='method-card';
      el.innerHTML=`<div class="card-icon">${icon(it.icon)}</div><h3></h3><p></p>`;
      el.querySelector('h3').textContent=it.title;el.querySelector('p').textContent=it.text;$('#methodCards').append(el);
    }
    $('#methodDots').innerHTML='';
    methodItems.forEach((it,i)=>{
      const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Iniciar pelo tópico ${it.title}`);b.classList.toggle('active',i===methodIndex);b.onclick=()=>{methodIndex=i;drawMethod()};$('#methodDots').append(b);
    });
  }
  $('#methodPrev').onclick=()=>{methodIndex=(methodIndex-1+methodItems.length)%methodItems.length;drawMethod()};
  $('#methodNext').onclick=()=>{methodIndex=(methodIndex+1)%methodItems.length;drawMethod()};
  window.addEventListener('resize',drawMethod);
  drawMethod();
  function addSwipe(container, prev, next){let start=null;container.addEventListener('touchstart', e=>{start=e.touches[0].clientX},{passive:true});container.addEventListener('touchend',e=>{if(start===null)return;const diff=e.changedTouches[0].clientX-start;if(Math.abs(diff)>45)(diff>0?prev:next)();start=null},{passive:true})}
  addSwipe($('.mini-carousel'),()=>$('#visPrev').click(),()=>$('#visNext').click());
  addSwipe($('.method-carousel'),()=>$('#methodPrev').click(),()=>$('#methodNext').click());

  // 44 afirmações fornecidas pela cliente; 11 por tipo de temperamento.
  // Instrumento exploratório, NÃO validado clinicamente.
  const assertions=["Frequentemente falo antes de pensar e depois me arrependo.", "Apesar de me irritar com as pessoas, não sou de guardar rancores.", "Me empolgo facilmente com novidades e coisas ao meu redor.", "Quando me tratam mal posso fazer piadas com o fato e até inverter a situação. Gosto de encarar a vida com bom humor e não levo essas coisas muito a sério.", "Procuro animar as pessoas.", "Gosto de mudanças e novidades em minha vida e participo com entusiasmo de novos planos.", "Sou desorganizado.", "Não sofro muito pelo futuro, gosto de viver o presente.", "Tenho dificuldade para me concentrar em leitura ou tarefas que exijam atenção.", "Facilmente puxo assunto com estranhos e faço amizades.", "Procuro não esquentar a cabeça com problemas, apenas curto o momento.", "Quando me tratam mal fico magoado. Posso relevar o comportamento da pessoa mas me fecho.", "Gosto de tarefas criativas como ler romances, escrever, desenhar ou pintar.", "Se alguém é injusto comigo, na hora fico sem reação e extremamente magoado. Demoro a esquecer.", "Me perco em meus próprios pensamentos, sonhando acordado.", "Frequentemente me sinto culpado.", "Periodicamente fico deprimido, mesmo sem motivo aparente.", "As pessoas me veem como alguém sensível.", "Tenho a capacidade de prever problemas.", "Quando alguém é agressivo comigo, costumo pensar que a pessoa pode estar magoada por algo que eu possa ter feito e fico inseguro.", "Normalmente percebo quando alguém está triste.", "Costumo temer problemas e calculo tudo o que pode dar errado nas situações.", "Quando me tratam mal eu sou firme e coloco os limites necessários. Não vejo sentido em me submeter aos caprichos alheios.", "As pessoas nunca me intimidam a calar minha opinião.", "Não me abalo facilmente com críticas.", "No trabalho administro as minhas tarefas de forma prática, objetiva e com foco em resultados.", "As pessoas me veem como alguém de personalidade forte e me respeitam.", "Tenho total certeza de que sou uma pessoa capaz para gerenciar o trabalho de outras pessoas.", "Gosto de desafios, jogos de competição e sou competitivo, me esforço para ganhar pelo meu time.", "Encontro soluções práticas com agilidade.", "No trabalho tenho uma visão ampla dos cenários.", "Tenho facilidade de tomar decisões.", "Sinto-me pleno resolvendo meus problemas e ajudando os outros a resolver os seus.", "Quando me tratam mal posso nem perceber e, se percebo, não dou nenhuma importância.", "Frequentemente me desligo completamente do mundo ao focar total atenção em minhas atividades.", "Costumo cumprir obrigações e horários.", "Acho mais fácil fazer o que me pedem do que me alongar em discussões.", "Consigo trabalhar bem mesmo sob pressão.", "Sou uma pessoa calada e não faço questão de emitir uma opinião caso não seja pedida.", "Quando não estou com vontade de fazer algo, sou mais lento que o habitual.", "Raramente grito ou dou gargalhadas, minhas emoções são contidas.", "Tenho preguiça de brigar com as pessoas.", "Sou cético e tenho dificuldades para acreditar, busco dados lógicos.", "Costumo esquecer dos problemas e espero que acabem por se resolver no futuro."];
  const kinds=['sanguineo','melancolico','colerico','fleumatico'];
  const questions=assertions.map((text,i)=>[text,kinds[Math.floor(i/11)]]);
  const answersLabels=['Discordo totalmente','Discordo parcialmente','Concordo parcialmente','Concordo totalmente'];
  const profiles={
    sanguineo:{name:'Sanguíneo',desc:'Tendência a entusiasmo, espontaneidade, sociabilidade e expressão aberta.',strength:'Facilidade de conexão, criatividade e entusiasmo.',care:'Equilibrar a impulsividade e manter a atenção aos compromissos.',image:'Uma imagem que acolha sua expressividade e dê intenção à sua comunicação.'},
    colerico:{name:'Colérico',desc:'Tendência à decisão, iniciativa, praticidade e liderança.',strength:'Direção, coragem, foco em resultados e autonomia.',care:'Equilibrar a firmeza com escuta e flexibilidade.',image:'Uma presença que comunique segurança sem perder proximidade.'},
    melancolico:{name:'Melancólico',desc:'Tendência à sensibilidade, reflexão, observação e atenção aos detalhes.',strength:'Profundidade, percepção e cuidado com a qualidade.',care:'Evitar a autocrítica excessiva e o perfeccionismo paralisante.',image:'Uma composição que valorize refinamento, coerência e individualidade.'},
    fleumatico:{name:'Fleumático',desc:'Tendência à serenidade, ponderação, estabilidade e escuta.',strength:'Calma, lealdade, paciência e capacidade de conciliação.',care:'Cuidar para que a reserva não esconda ideias ou necessidades.',image:'Uma imagem que expresse confiança, naturalidade e equilíbrio.'}
  };
  const dialog=$('#quizDialog');let person=null,answers=Array(questions.length).fill(null),step=0;
  function showPanel(id){['quizRegistration','quizQuestions','quizResult'].forEach(p=>$('#'+p).hidden=(id!==p));$('.quiz-shell').scrollTop=0;}
  const openQuiz=()=>{dialog.showModal();showPanel('quizRegistration');$('#leadName').focus()};
  $('#openQuiz').onclick=openQuiz;
  $('#closeQuiz').onclick=()=>dialog.close();$('#endQuiz').onclick=()=>dialog.close();
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  $('#restartQuiz').onclick=()=>{answers=Array(questions.length).fill(null);step=0;showPanel('quizQuestions');drawQuestion()};
  $('#leadForm').addEventListener('submit',e=>{
    e.preventDefault();if(!e.target.reportValidity())return;
    const name=$('#leadName').value.trim(),email=$('#leadEmail').value.trim(),phone=$('#leadPhone').value.replace(/\D/g,'');
    if(name.length<2){alert('Informe seu nome.');return}
    if(phone.length<10||phone.length>13){alert('Informe um WhatsApp com DDD válido.');return}
    if(!$('#consentService').checked){alert('Confirme a leitura do aviso de privacidade.');return}
    if($('#honeypot').value)return;
    person={name,email,phone};answers=Array(questions.length).fill(null);step=0;showPanel('quizQuestions');drawQuestion();
  });
  function drawQuestion(){
    $('#quizCount').textContent=`Pergunta ${step+1} de ${questions.length}`;
    $('#quizPercent').textContent=`${Math.round(((step+1)/questions.length)*100)}%`;
    $('#quizProgressFill').style.width=`${(step+1)/questions.length*100}%`;
    $('#questionText').textContent=questions[step][0];
    $('#answerOptions').innerHTML='';
    answersLabels.forEach((label,value)=>{
      const item=document.createElement('label'),radio=document.createElement('input'),txt=document.createElement('span');
      radio.type='radio';radio.name='quizAnswer';radio.value=String(value);radio.checked=answers[step]===value;
      radio.addEventListener('change',()=>{answers[step]=value;$('#nextQuestion').disabled=false});
      txt.textContent=label;item.append(radio,txt);$('#answerOptions').append(item);
    });
    $('#nextQuestion').disabled=answers[step]===null;
    $('#nextQuestion').textContent=step===questions.length-1?'VER RESULTADO →':'PRÓXIMA →';
    $('#previousQuestion').disabled=step===0;
  }
  $('#previousQuestion').onclick=()=>{if(step>0){step--;drawQuestion()}};
  $('#nextQuestion').onclick=()=>{if(answers[step]===null)return;if(step<questions.length-1){step++;drawQuestion()}else finishQuiz()};
  function finishQuiz(){
    const scores={sanguineo:0,melancolico:0,colerico:0,fleumatico:0};
    questions.forEach((q,i)=>{scores[q[1]]+=answers[i]});
    const maxScore=33,total=Object.values(scores).reduce((a,b)=>a+b,0);
    const ranked=Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
    const primary=ranked[0],secondary=ranked[1];
    const tied=scores[primary]===scores[secondary];
    const multipleTop=ranked.filter(t=>scores[t]===scores[primary]).length>2;
    const noSignal=scores[primary]===0;
    const title=(multipleTop||noSignal)?'Sem temperamento predominante definido':tied?`Perfil equilibrado: ${profiles[primary].name} e ${profiles[secondary].name}`:`${profiles[primary].name} ${profiles[secondary].name}`;
    $('#resultTitle').textContent=person.name.split(/\s+/)[0]+', este é o seu perfil';
    $('#resultSummary').textContent='Sua classificação apresenta tendências de temperamento, não rótulos permanentes. Observe quais características fazem sentido para sua história e experiências.';
    $('#rankingRows').innerHTML='';
    ['Primário','Secundário','Terciário','Menor predominância'].forEach((label,i)=>{
      const row=document.createElement('tr'),a=document.createElement('td'),b=document.createElement('td');
      a.textContent=(multipleTop||noSignal)?(scores[ranked[i]]===scores[primary]?'Empate na maior pontuação':`Posição ${i+1}`):tied&&i<2?'Empate em 1º':label;
      b.textContent=profiles[ranked[i]].name;row.append(a,b);$('#rankingRows').append(row);
    });
    $('#combinationTitle').textContent=title;
    $('#combinationDescription').textContent=(multipleTop||noSignal)?'As respostas não indicam uma predominância clara entre os quatro perfis. Isso não é um problema: você pode ter características de diferentes temperamentos. Uma conversa personalizada considera sua história e objetivos além deste questionário.':`Seu resultado reúne ${profiles[primary].desc.toLowerCase()} ${tied?'O segundo perfil apresenta a mesma pontuação:':'Como segunda tendência, aparece'} ${profiles[secondary].desc.toLowerCase()}`;
    $('#imageInsight').textContent=`${profiles[primary].image} ${profiles[secondary].image} Uma consultoria individualizada pode considerar seus objetivos, preferências e características faciais, sem depender apenas de um questionário.`;
    $('#strengthsInsight').textContent=`Potenciais forças: ${profiles[primary].strength} ${profiles[secondary].strength} Pontos de atenção: ${profiles[primary].care} ${profiles[secondary].care}`;
    $('#resultBars').innerHTML='';
    ranked.forEach(type=>{
      const line=document.createElement('div');line.className='result-bar';
      const pct=total?Math.round(scores[type]/total*100):0;
      const title=document.createElement('div');title.className='result-bar-line';
      const label=document.createElement('span'),percent=document.createElement('span');label.textContent=profiles[type].name;percent.textContent=`${pct}% de pontos acumulados`;
      title.append(label,percent);const meter=document.createElement('div');meter.className='result-meter';const bar=document.createElement('span');bar.style.width=`${scores[type]/maxScore*100}%`;meter.append(bar);line.append(title,meter);$('#resultBars').append(line);
    });
    showPanel('quizResult');
    const actionMessage=`Olá, Darcísio! Realizei o Teste de Temperamento e gostaria de agendar uma consultoria de imagem. Meu nome é ${person.name}.`;
    if(/^\d{12,13}$/.test(cfg.whatsappNumber || '')){
      $('#resultWhatsapp').href=`https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(actionMessage)}`;
    }else{
      $('#resultWhatsapp').href='mailto:darcisiofischer@gmail.com?subject=Consultoria%20de%20Imagem&body='+encodeURIComponent(actionMessage);
      $('#resultWhatsapp').textContent='SOLICITAR CONSULTORIA POR E-MAIL →';
    }
    $('#emailStatus').textContent='Seu resultado aparece apenas nesta página. Nesta versão, seus dados e respostas não são enviados ao Darcísio nem armazenados pelo site.';
    // MODO SEM INTEGRAÇÃO: não envia nome, e-mail, telefone, respostas ou resultados para nenhum serviço.
    // Para ativar envio futuramente, adicionar integração autenticada do lado do servidor com aviso de privacidade revisto.
  }
})();
