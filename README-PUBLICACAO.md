# Landing Page Darcísio Fischer | GitHub Pages

**Domínio:** `https://darcisiofischer.com.br`  
**Repositório:** `https://github.com/souupgrowth/darcisio-fischer`

## Como publicar
1. Extraia o ZIP no computador.
2. Acesse o repositório no GitHub, branch `main`, botão **Add file → Upload files**.
3. Substitua `index.html`, `styles.css`, `script.js`, `privacidade.html`, `CNAME` e toda a pasta `assets/`. Preserve `.nojekyll`.
4. Confirme em **Commit changes**. No GitHub Pages, continue em `main` + `/(root)`.
5. Não altere os DNS nem a configuração de domínio personalizado/HTTPS que já estão funcionando.
6. Após a publicação, atualize o site com `Ctrl+F5` (ou abra em janela anônima).

## O que está funcional
- Layout one-page responsivo com preto e dourado em degradê; fotos e logotipos enviados pela cliente.
- Navegação do menu por âncoras até cada seção.
- Carrossel de visagismo (4 tópicos).
- Carrossel do Método Código da Imagem (3 cards visíveis em desktop, avança **um card por clique**; 1 card em celular).
- FAQ expansível.
- Teste com 44 perguntas do PDF enviado, 4 graus de concordância, retorno às perguntas e progresso.
- Pontuação exploratória: Sanguíneo (1–11), Melancólico (12–22), Colérico (23–33), Fleumático (34–44); escala 0–3; ordenação por pontuação e interpretação dos dois primeiros perfis.
- Resultado na tela (sem botão de download, salvar ou copiar), com CTA para WhatsApp.
- WhatsApp confirmado: **(47) 99845-4663**, link `https://wa.me/5547998454663`.

## Atenção: sem integração de formulários
Conforme solicitado, **não existe envio automático de cadastros nem resultados**. Os dados digitados e as respostas são usados na sessão do navegador e descartados ao fechar/recarregar a página. O e-mail `darcisiofischer@gmail.com` não recebe resultados ainda. O site usa GitHub Pages sem backend e não guarda leads.

A configuração de envio automático poderá ser adicionada depois, preferencialmente por endpoint seguro de formulários, com consentimento e aviso de privacidade atualizado. Não basta inserir o endereço de e-mail em HTML/JS.

## Pendências de conteúdo
- **Instagram/TikTok**: URLs oficiais não fornecidas. Campos `instagramUrl` e `tiktokUrl` em `script.js` ficam vazios; links de rede aguardam configuração.
- **Antes/depois**: foram usados recortes da composição ilustrativa aprovada, **não fotografias documentadas de clientes**. Eles são rotulados como ilustrativos. Trocar por fotografias originais autorizadas para divulgar resultados reais.
- **Teste**: classificação dos quatro temperamentos não é uma avaliação psicológica validada. Não comunicar resultados como diagnóstico.

## Arquivos
- `index.html`: estrutura da landing e formulário do teste.
- `styles.css`: design responsivo.
- `script.js`: animações, carrosséis, lógica do questionário e links.
- `privacidade.html`: aviso de privacidade desta versão sem integração.
- `assets/`: fotos, logotipos, imagens e favicon.
- `CNAME`: mantém `darcisiofischer.com.br`.
- `.nojekyll`: evita interferência na publicação estática.
