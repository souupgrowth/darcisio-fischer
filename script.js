/** Navegação da versão parcial (Início + Sobre). Ao acrescentar futuras seções
 * com IDs visagismo, teste, resultados e faq, os links serão ativados automaticamente. */
const navToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const dialog = document.querySelector('#future-section-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogMessage = document.querySelector('#dialog-message');

navToggle?.addEventListener('click', () => {
  const opened = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!opened));
  navToggle.setAttribute('aria-label', opened ? 'Abrir menu' : 'Fechar menu');
  mobileMenu.hidden = opened;
});

for (const link of document.querySelectorAll('a[data-pending]')) {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) {
      event.preventDefault();
      const section = link.dataset.pending || 'Essa seção';
      dialogTitle.textContent = section;
      dialogMessage.textContent = 'Estamos montando essa parte da landing page por seções. Ela estará disponível depois de integrar as próximas etapas.';
      dialog.showModal();
    }
    mobileMenu.hidden = true;
    navToggle?.setAttribute('aria-expanded', 'false');
  });
}
for (const link of document.querySelectorAll('.mobile-menu a:not([data-pending])')) {
  link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    navToggle?.setAttribute('aria-expanded', 'false');
  });
}
const closeDialog = () => dialog.close();
document.querySelector('#dialog-close')?.addEventListener('click', closeDialog);
document.querySelector('#dialog-ok')?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
