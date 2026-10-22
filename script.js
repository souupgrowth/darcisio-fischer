(() => {
  'use strict';
  const $ = (sel) => document.querySelector(sel);
  // CONTATOS DO PROFISSIONAL — PREENCHA AQUI ANTES DE PUBLICAR.
  // WhatsApp deve ter DDI+DDD+número (apenas algarismos), ex: 5547999999999.
  const cfg = {
    whatsappNumber: '', // CONFIRMAR o número antes de habilitar o botão
    whatsappDisplay: '', // Número que deve aparecer no site
    instagramUrl: '',   // Ex.: https://www.instagram.com/seu_perfil/
    tiktokUrl: ''       // Ex.: https://www.tiktok.com/@seu_perfil
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
  let methodPage=0;
  const countVisible=()=>window.matchMedia('(max-width: 770px)').matches?1:3;
  function drawMethod(){
    const per=countVisible(),total=Math.ceil(methodItems.length/per);methodPage%=total;
    $('#methodCards').innerHTML='';
    methodItems.slice(methodPage*per,methodPage*per+per).forEach(it=>{
      const el=document.createElement('article');el.className='method-card';
      el.innerHTML=`<div class="card-icon">${icon(it.icon)}</div><h3></h3><p></p>`;
      el.querySelector('h3').textContent=it.title;el.querySelector('p').textContent=it.text;$('#methodCards').append(el);
    });
    $('#methodDots').innerHTML='';
    Array.from({length:total},(_,i)=>{
      const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Página ${i+1} do método`);b.classList.toggle('active',i===methodPage);b.onclick=()=>{methodPage=i;drawMethod()};$('#methodDots').append(b);
    });
  }
  $('#methodPrev').onclick=()=>{methodPage=(methodPage-1+Math.ceil(methodItems.length/countVisible()))%Math.ceil(methodItems.length/countVisible());drawMethod()};
  $('#methodNext').onclick=()=>{methodPage=(methodPage+1)%Math.ceil(methodItems.length/countVisible());drawMethod()};
  let previousMobile=countVisible();window.addEventListener('resize',()=>{const current=countVisible();if(current!==previousMobile){methodPage=0;previousMobile=current;drawMethod()}});
  drawMethod();
  function addSwipe(container, prev, next){let start=null;container.addEventListener('touchstart', e=>{start=e.touches[0].clientX},{passive:true});container.addEventListener('touchend',e=>{if(start===null)return;const diff=e.changedTouches[0].clientX-start;if(Math.abs(diff)>45)(diff>0?prev:next)();start=null},{passive:true})}
  addSwipe($('.mini-carousel'),()=>$('#visPrev').click(),()=>$('#visNext').click());
  addSwipe($('.method-carousel'),()=>$('#methodPrev').click(),()=>$('#methodNext').click());

  // 32 original assertions inspired by the FOUR-TEMPERAMENT FORMAT, not a copy of the external questionnaire.
  // Each temperament has 8 items (0-3 points each). This is an informal reflection tool, not a clinical instrument.
  const questions = [
    ['Quando estou em um grupo novo, costumo iniciar conversas com facilidade.','sanguineo'],
    ['Gosto de estabelecer uma meta e partir para a ação sem muita demora.','colerico'],
    ['Prefiro avaliar os detalhes antes de assumir um compromisso.','melancolico'],
    ['Sinto-me mais à vontade em ambientes tranquilos e previsíveis.','fleumatico'],
    ['Conto histórias com entusiasmo e gosto de compartilhar experiências.','sanguineo'],
    ['Em uma situação difícil, tomo a iniciativa para resolver o problema.','colerico'],
    ['Costumo pensar em diferentes possibilidades antes de decidir.','melancolico'],
    ['Procuro ouvir as pessoas antes de expressar minha opinião.','fleumatico'],
    ['Fico animado quando surge a chance de conhecer pessoas diferentes.','sanguineo'],
    ['Sinto-me motivado por desafios e metas ambiciosas.','colerico'],
    ['Valorizo a organização e me incomodo com tarefas mal-acabadas.','melancolico'],
    ['Tenho facilidade para manter a calma quando há divergências.','fleumatico'],
    ['Expresso minhas emoções de maneira espontânea.','sanguineo'],
    ['Prefiro assumir a liderança quando um grupo precisa de direção.','colerico'],
    ['Gosto de reservar um tempo para refletir sobre o que sinto.','melancolico'],
    ['Evito conflitos desnecessários e procuro acordos equilibrados.','fleumatico'],
    ['Novidades costumam despertar rapidamente minha curiosidade.','sanguineo'],
    ['Quando algo não funciona, procuro uma solução objetiva.','colerico'],
    ['Presto atenção aos pequenos detalhes da minha apresentação pessoal.','melancolico'],
    ['As pessoas costumam me procurar para conversar com tranquilidade.','fleumatico'],
    ['Gosto de ambientes movimentados e de interagir com várias pessoas.','sanguineo'],
    ['Sinto satisfação ao transformar planos em resultados concretos.','colerico'],
    ['Prefiro me preparar bem antes de mostrar um trabalho aos outros.','melancolico'],
    ['Adapto-me ao ritmo do grupo sem precisar disputar espaço.','fleumatico'],
    ['Demonstro facilmente minha empolgação quando algo me agrada.','sanguineo'],
    ['Defendo meu ponto de vista com segurança quando acredito nele.','colerico'],
    ['Tenho gosto por atividades que exigem observação e profundidade.','melancolico'],
    ['Valorizo relações estáveis e uma rotina sem grandes tensões.','fleumatico'],
    ['Gosto de improvisar e de deixar espaço para o inesperado.','sanguineo'],
    ['Prefiro agir e ajustar o caminho durante o processo.','colerico'],
    ['Fico mais confortável quando sei exatamente o que é esperado.','melancolico'],
    ['Consigo ter paciência mesmo quando os outros precisam de mais tempo.','fleumatico']
  ];
  const answersLabels=['Discordo totalmente','Discordo parcialmente','Concordo parcialmente','Concordo totalmente'];
  const profiles={
    sanguineo:{name:'Sanguíneo',desc:'Você tende a se expressar com espontaneidade, sociabilidade e entusiasmo. Sua imagem pode valorizar leveza, acolhimento e uma comunicação viva.'},
    colerico:{name:'Colérico',desc:'Você tende a valorizar iniciativa, direção e objetividade. Uma imagem intencional pode ajudar a transmitir firmeza, clareza e presença.'},
    melancolico:{name:'Melancólico',desc:'Você tende a observar detalhes, refletir e valorizar coerência. Sua imagem pode expressar sensibilidade, refinamento e atenção às escolhas.'},
    fleumatico:{name:'Fleumático',desc:'Você tende a favorecer serenidade, estabilidade e escuta. Sua imagem pode comunicar proximidade, equilíbrio e confiança.'}
  };
  const dialog=$('#quizDialog');let person=null,answers=Array(questions.length).fill(null),step=0,startedAt=0;
  function showPanel(id){['quizRegistration','quizQuestions','quizResult'].forEach(p=>$('#'+p).hidden=(id!==p))}
  const openQuiz=()=>{dialog.showModal();showPanel('quizRegistration');$('#leadName').focus()};
  $('#openQuiz').onclick=openQuiz;
  $('#closeQuiz').onclick=()=>dialog.close();$('#endQuiz').onclick=()=>dialog.close();
  dialog.addEventListener('click', e=>{if(e.target===dialog)dialog.close()});
  $('#restartQuiz').onclick=()=>{answers=Array(questions.length).fill(null);step=0;startedAt=Date.now();showPanel('quizQuestions');drawQuestion()};
  $('#leadForm').addEventListener('submit',e=>{
    e.preventDefault();
    if(!e.target.reportValidity())return;
    const name=$('#leadName').value.trim(),email=$('#leadEmail').value.trim(),phone=$('#leadPhone').value.replace(/\D/g,'');
    if(name.length<2){alert('Informe seu nome.');return}
    if(phone.length<10 || phone.length>13){alert('Informe um telefone com DDD válido.');return}
    if(!$('#consentService').checked){alert('Precisamos de sua autorização para enviar o resultado.');return}
    person={name,email,phone,website:$('#honeypot').value};
    answers=Array(questions.length).fill(null);step=0;startedAt=Date.now();showPanel('quizQuestions');drawQuestion();
  });
  function drawQuestion(){
    $('#quizCount').textContent=`Pergunta ${step+1} de ${questions.length}`;
    $('#quizPercent').textContent=`${Math.round((step/questions.length)*100)}%`;
    $('#quizProgressFill').style.width=`${step/questions.length*100}%`;
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
    const scores={sanguineo:0,colerico:0,melancolico:0,fleumatico:0};
    questions.forEach((q,i)=>{scores[q[1]]+=answers[i]});
    const maxScore=8*3,total=Object.values(scores).reduce((a,b)=>a+b,0);
    const ranked=Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
    const primary=ranked[0],secondary=ranked[1];
    $('#resultTitle').textContent=total===0?'Seu perfil precisa de mais informações':`Predominância: ${profiles[primary].name}`;
    $('#resultSummary').textContent=total===0?'Suas respostas não indicaram uma tendência predominante. Você pode refazer o teste com base em situações do seu dia a dia.':`${person.name.split(/\s+/)[0]}, ${profiles[primary].desc} ${scores[primary]===scores[secondary]?'Há equilíbrio entre os perfis mais pontuados.':`Como tendência secundária, aparece o perfil ${profiles[secondary].name.toLowerCase()}.`}`;
    $('#resultBars').innerHTML='';
    for(const type of ranked){
      const line=document.createElement('div');line.className='result-bar';
      const numerator=total?Math.round(scores[type]/total*100):0;
      const title=document.createElement('div');title.className='result-bar-line';
      const label=document.createElement('span'),percent=document.createElement('span');label.textContent=profiles[type].name;percent.textContent=`${numerator}%`;
      title.append(label,percent);const meter=document.createElement('div');meter.className='result-meter';const bar=document.createElement('span');bar.style.width=`${scores[type]/maxScore*100}%`;meter.append(bar);line.append(title,meter);$('#resultBars').append(line);
    }
    showPanel('quizResult');
    $('#emailStatus').textContent = 'Seu resultado está disponível acima. Nesta versão, não há envio automático de dados nem de e-mail.';
    const summary = [`Teste de Temperamento — Darcísio Fischer`, `Nome: ${person.name}`, `Perfil: ${profiles[primary].name}`, `Perfil secundário: ${profiles[secondary].name}`, '', ...ranked.map(type => `${profiles[type].name}: ${total ? Math.round(scores[type]/total*100) : 0}%`), '', $('#resultSummary').textContent].join('\n');
    $('#copyResult').onclick = async () => {
      try {
        if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(summary);
        else {const t=document.createElement('textarea');t.value=summary;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();}
        $('#emailStatus').textContent = 'Resultado copiado! Você pode colar em um e-mail ou mensagem.';
      } catch (err) { $('#emailStatus').textContent = 'Não foi possível copiar automaticamente. Faça uma captura de tela do resultado.'; }
    };
    const share = $('#shareWhatsapp');
    if (/^\d{12,13}$/.test(cfg.whatsappNumber || '')) {
      share.hidden = false;
      share.onclick = () => {
        const message = `Olá, Darcísio! Quero compartilhar meu teste de temperamento.\nNome: ${person.name}\nTelefone: ${person.phone}\nE-mail: ${person.email}\n\n${summary}`;
        window.open(`https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      };
    } else share.hidden = true;
  }
})();
