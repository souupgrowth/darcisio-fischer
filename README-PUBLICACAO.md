# Landing Page Darcísio Fischer — publicação no GitHub Pages

## Arquivos deste pacote

- `index.html` — página principal
- `styles.css` — estilos responsivos
- `script.js` — carrosséis, teste e lógica do resultado
- `privacidade.html` — aviso de privacidade inicial
- `assets/` — imagens e ícone
- `.nojekyll` — publica os arquivos estáticos diretamente

Este pacote foi preparado especialmente para o repositório público `souupgrowth/darcisio-fischer`. **Não precisa de Cloudflare, Resend, banco de dados ou servidor próprio.**

## Antes de enviar

1. Abra `script.js` e atualize os dados no começo do arquivo, dentro do bloco `const cfg`: `whatsappNumber`, `whatsappDisplay`, `instagramUrl`, `tiktokUrl`. Os exemplos não incluem um número de WhatsApp verificado.
2. Substitua `assets/demo-1.webp`, `demo-2.webp` e `demo-3.webp` por fotos verdadeiras e autorizadas de *antes e depois*. As imagens atuais são **ilustrativas, geradas por IA**, e estão rotuladas como tal.
3. Quando tiver originais, substitua as imagens de referência do profissional e da capa, que atualmente são recortes da arte.
4. Revise o texto em `privacidade.html`.

## Como subir para o GitHub

1. Abra o repositório **https://github.com/souupgrowth/darcisio-fischer**.
2. Clique em **Add file → Upload files**.
3. Extraia este ZIP no computador. Envie **o conteúdo** da pasta (arquivos e pasta `assets`), e não o arquivo ZIP sozinho.
4. Confirme em **Commit changes**. O `index.html`, `styles.css` e `script.js` existentes serão substituídos.
5. Entre em **Settings → Pages**. Em `Build and deployment`, selecione **Deploy from a branch**, branch **main**, folder **/(root)** e clique em **Save**.
6. Quando a publicação terminar, visite **https://souupgrowth.github.io/darcisio-fischer/**.

## Funcionalidades

- Página responsiva com visagismo, história, teste, método, resultados, contato e FAQ.
- Carrossel de visagismo: 4 tópicos. Carrossel do método: 6 tópicos.
- Teste de temperamento: 32 perguntas originais, quatro alternativas por pergunta, quatro perfis, resultado imediatamente na tela.
- Campo de nome/telefone/e-mail antes do teste (processado localmente).
- Botão “Copiar meu resultado”; se um número de WhatsApp for configurado, botão opcional de compartilhamento por WhatsApp.

## Limitação importante do GitHub Pages

GitHub Pages hospeda **sites estáticos**. Não executa backend, não salva cadastros em banco e **não consegue enviar e-mails automaticamente por conta própria**. Nesta versão, nenhum cadastro é transmitido automaticamente e os resultados não são enviados por e-mail. Para realmente armazenar os contatos ou fazer envios automáticos seria necessário um serviço externo ou backend, que **não foi incluído neste pacote**, conforme solicitado.

O questionário é uma ferramenta informal de reflexão, sem validação clínica.
